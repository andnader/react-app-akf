import React, { Component, Fragment, useEffect, useState } from "react";
import Graph from "vis-react";
import './App.css';
import initialGraph from "./Data.json";
import { v4 as uuidv4 } from "uuid";

const graph = {
	nodes: [
		{ id: 1, label: 'Node 1' },
		{ id: 2, label: 'Node 2' },
		{ id: 3, label: 'Node 3' },
		{ id: 4, label: 'Node 4' },
		{ id: 5, label: 'Node 5' }
	],
	edges: [
		{ from: 1, to: 2, arrows: "from" },
		{ from: 1, to: 3, arrows: "from" },
		{ from: 2, to: 4, arrows: "from" },
		{ from: 2, to: 5, arrows: "from" }
	]
};


var options = {
    layout: {
      randomSeed: 2
    },
    nodes: {
      fixed: {
        x: false,
        y: false
      },
      shape: "dot",
      size: 13,
      borderWidth: 1.5,
      borderWidthSelected: 2,
      font: {
        size: 15,
        align: "center",
        bold: {
          color: "#bbbdc0",
          size: 15,
          vadjust: 0,
          mod: "bold"
        }
      }
    },
    edges: {
      width: 0.01,
      color: {
        color: "#D3D3D3",
        highlight: "#797979",
        hover: "#797979",
        opacity: 1.0
      },
      arrows: {
        to: { enabled: true, scaleFactor: 1, type: "arrow" },
        middle: { enabled: false, scaleFactor: 1, type: "arrow" },
        from: { enabled: true, scaleFactor: 1, type: "arrow" }
      },
      smooth: {
        type: "continuous",
        roundness: 0
      }
    },
    groups: {
      Person: {
        color: {
          background: "#ffffff",
          border: "#acdbae",
          highlight: {
            border: "#acdbae",
            background: "#ffffff"
          },
          hover: {
            border: "#acdbae",
            background: "#ffffff"
          }
        }
      },
      Technology: {
        color: {
          background: "#ffffff",
          border: "#f3bd86",
          highlight: {
            border: "#f3bd86",
            background: "#ffffff"
          },
          hover: {
            border: "#f3bd86",
            background: "#ffffff"
          }
        }
      },
      Topic: {
        color: {
          background: "#ffffff",
          border: "#c89dc8",
          highlight: {
            border: "#c89dc8",
            background: "#ffffff"
          },
          hover: {
            border: "#c89dc8",
            background: "#ffffff"
          }
        }
      },
      Experience: {
        color: {
          background: "#ffffff",
          border: "#c2b59b",
          highlight: {
            border: "#c2b59b",
            background: "#ffffff"
          },
          hover: {
            border: "#c2b59b",
            background: "#ffffff"
          }
        }
      }
    },
    /* physics: {
       forceAtlas2Based: {
          gravitationalConstant: -200,
          centralGravity: 0.05,
          springLength: 230,
          springConstant: 0.08,
          avoidOverlap:9
      },
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: {enabled:true,iterations: 10}
     }, */
    physics: {
      barnesHut: {
        gravitationalConstant: -30000,
        centralGravity: 1,
        springLength: 70,
        avoidOverlap: 1
      },
      stabilization: { iterations: 2500 }
    },
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      hoverEdges: true,
      selectable: false,
      selectConnectedEdges: false,
      zoomView: false,
      dragView: false
    }
  };

let style = {
    width: "100%", 
    height: "100%"
};

function setGraph(nodes, edges, jsonData){
  if(jsonData[0].relation && jsonData[0].relation.root_kt_node && jsonData[0].relation.leading_to_links) {
    if (jsonData && jsonData.length > 0) {
      for (let i = 0; i < jsonData[0].relation.root_kt_node.length; i++) {
        jsonData[0].relation.root_kt_node[i].color = undefined;
        jsonData[0].relation.root_kt_node[i].label =
          jsonData[0].relation.root_kt_node[i].source;
        jsonData[0].relation.root_kt_node[i].id =
          jsonData[0].relation.root_kt_node[i].from;
        jsonData[0].relation.root_kt_node[i].group =
          jsonData[0].relation.root_kt_node[i].type;
        nodes.push(jsonData[0].relation.root_kt_node[i]);
      }
      for (let j = 0; j < jsonData[0].relation.leading_to_links.length; j++) {
        if (
          jsonData[0].relation.leading_to_links[j].target.length > 20 &&
          jsonData[0].relation.leading_to_links[j].target.indexOf("\n") === -1
        ) {
          jsonData[0].relation.leading_to_links[
            j
          ].target = jsonData[0].relation.leading_to_links[j].target
            .split(" ")
            .reduce((a, e, i) => a + e + (i % 20 === 3 ? "\n" : " "), " ");
        }
        jsonData[0].relation.leading_to_links[j].color = undefined;
        jsonData[0].relation.leading_to_links[j].label =
          jsonData[0].relation.leading_to_links[j].target;
        jsonData[0].relation.leading_to_links[j].id =
          jsonData[0].relation.leading_to_links[j].to;
        jsonData[0].relation.leading_to_links[j].group =
          jsonData[0].relation.leading_to_links[j].type;
        nodes.push(jsonData[0].relation.leading_to_links[j]);
      }
     /* for (let k = 0; k < jsonData[0].relation.derived_from_links.length; k++) {
        if (
          jsonData[0].relation.derived_from_links[k].source.length > 20 &&
          jsonData[0].relation.derived_from_links[k].source.indexOf("\n") === -1
        ) {
          jsonData[0].relation.derived_from_links[
            k
          ].source = jsonData[0].relation.derived_from_links[k].source
            .split(" ")
            .reduce((a, e, i) => a + e + (i % 20 === 3 ? "\n" : " "), " ");
        }
        jsonData[0].relation.derived_from_links[k].color = undefined;
        jsonData[0].relation.derived_from_links[k].label =
          jsonData[0].relation.derived_from_links[k].source;
        jsonData[0].relation.derived_from_links[k].id =
          jsonData[0].relation.derived_from_links[k].from;
        jsonData[0].relation.derived_from_links[k].group =
          jsonData[0].relation.derived_from_links[k].type;
        nodes.push(jsonData[0].relation.derived_from_links[k]);
      } */
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].target !== "" && nodes[i].to !== "") {
          let edgeDir = {};
          edgeDir.from = nodes[i].from;
          edgeDir.to = nodes[i].to;
          edgeDir.arrows = "to";
          edges.push(edgeDir);
        }
      }
    }
  }
}

function clearGraph(finalGraph){
  finalGraph.length = 0;
}


export default function VisReact_test(props){

//const [newGraph, setNewGraph] = useState({nodes: [], edges: []});
//const [finalGraph, setFinalGraph] = useState(Object);
//const [nodes, setNodes] = useState([]);
//const [edges, setEdges] = useState([]);

//clearGraph()

let finalGraph = {};

/*
var events = {
	select: function(event) {
		var { nodes, edges } = event;
    },
    hoverNode: function(event) {
        //this.neighbourhoodHighlight(event, this.props.searchData);
    },
    blurNode: function(event) {
        //this.neighbourhoodHighlightHide(event);
    },
    click: function(event) {
        //this.redirectToLearn(event, this.props.searchData);
    }
};
*/

let jsonData = [props.nodeGraph];
console.log(jsonData)
//let nodes = [];
//let edges = [];


//setGraph(nodes, edges, jsonData)

//let newGraph = {nodes: [], edges: []};
//newGraph.nodes.push(nodes);
//newGraph.edges.push(edges);

//setNewGraph({nodes: nodes, edges: edges})
//props.setFinalGraph(newGraph);

/*
nodes = [];
edges = [];
newGraph = {};
*/

/*
useEffect (() => {
 if (!props)
setNewGraph({nodes: nodes, edges: edges});
setFinalGraph({graph: newGraph, style: { width: "100%", height: "100%" }, network: null});
}, [jsonData]);

*/

return(
    <div className="app__visual_graph">
    <Fragment>
      <Graph
        //key={uuidv4}
        //graph={finalGraph}
        //options={options}
        //events={events}
        //style={finalGraph.style}
        //getNetwork={props.getNetwork}
        //getEdges={props.getEdges}
        //getNodes={props.getNodes}
        //vis={vis => (this.vis = vis)}
      />
    </Fragment>
    </div>
);

}

