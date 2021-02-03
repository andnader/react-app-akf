import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';


const columns = [
  { field: 'nodeType', headerName: 'Node Type', width: 120 },
  { field: 'display_name', headerName: 'Label', width: 200 },
  { field: 'display_description', headerName: 'Description', width: 200 },
  //{ field: 'weight', headerName: 'Weight', width: 100}
];

/*
const rows = [
  { id: "p-1", nodeType: "person", name: 'Drew Dresser', title: 'Solutions Architect'},
  { id: "p-2", nodeType: "person", name: 'Andrew Nader', title: 'Solutions Architect'},
];
*/


/*
function setRows(rows, apiRes){
  
  if(apiRes.relation && apiRes.relation.root_kt_node && apiRes.relation.leading_to_links){
  let relation = apiRes.relation;
  let rootNode = relation.root_kt_node[0];
  let leadingNodes = relation.leading_to_links;

  let len = leadingNodes.length;

  rows.push({nodeType: rootNode.type, display_name: rootNode.source, display_description: rootNode.seo_subject_name})

  //loop for connecting nodes
  for (var i = 0; i < len; i++){
    rows.push({nodeType: leadingNodes[i].type, display_name: leadingNodes[i].target, display_description: leadingNodes[i].seo_subject_name, weight: leadingNodes[i].weight});
  }
}
}
*/

function setRows(rows, apiRes){
  //console.log(apiRes)

  let len = apiRes.length; 

  for (var i = 0; i < len; i++)
  {
    rows.push({id: apiRes[i].id, nodeType: apiRes[i].node_type, display_name: apiRes[i].display_name, display_description: apiRes[i].display_description});
  }
}

export default function Textual(props) {

//display response code
let rows = [];
let apiRes = props.apiResponse;

setRows(rows, apiRes)

  return (
    <div className="app__textual">
      <DataGrid 
      rows={rows} 
      columns={columns} 
      pageSize={10}
      onSelectionChange={(newSelection) => {
        props.setNodeID(newSelection.rowIds[0]);
      }}
      />
    </div>
  );
}
