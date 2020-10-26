import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';
import initialGraph from "./Data.json";

const columns = [
  { field: 'nodeType', headerName: 'Node Type', width: 120 },
  { field: 'display_name', headerName: 'Label', width: 200 },
  { field: 'display_description', headerName: 'Description', width: 200 },
  { field: 'weight', headerName: 'Weight', width: 100}
];

/*
const rows = [
  { id: "p-1", nodeType: "person", name: 'Drew Dresser', title: 'Solutions Architect'},
  { id: "p-2", nodeType: "person", name: 'Andrew Nader', title: 'Solutions Architect'},
];
*/


function setRows(rows, apiRes){
  //let len = apiRes.length;
  //let len = jsonData[0].releation.leading_to_links[0]
  //let relation = apiRes[0].relation;
  //let rootNode = apiRes[0].relation.root_kt_note[0].source

  //let nodeArray = [];
  //nodeArray.push(relation)
  //let rootNode = nodeArray[0]['root_kt_node'];
  //let rootNode = relation.root_kt_node
  //let rootNode = relation[root_kt_node]
  //console.log(apiRes)
  //console.log(jsonData)
  //console.log(relation)
  //console.log(nodeArray)
  //console.log(rootNode)

  let jsonData = initialGraph;

  let relation = jsonData[0].relation;
  let rootNode = relation.root_kt_node[0];
  let leadingNodes = relation.leading_to_links;
  let len = leadingNodes.length;
 
  console.log(len)

  rows.push({nodeType: rootNode.type, display_name: rootNode.source, display_description: rootNode.seo_subject_name})

  //loop for connecting nodes
  for (var i = 0; i < len; i++){
    rows.push({nodeType: leadingNodes[i].type, display_name: leadingNodes[i].target, display_description: leadingNodes[i].seo_subject_name, weight: leadingNodes[i].weight});
  }
}


export default function Textual(props) {
  //console.log(props.search)

//display response code
let rows = [];
let apiRes = props.apiResponse

setRows(rows, apiRes)

  return (
    <div className="app__textual">
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
