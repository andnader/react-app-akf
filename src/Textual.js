import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';

const columns = [
  { field: 'id', headerName: 'id', width: 60 },
  { field: 'nodeType', headerName: 'Node Type', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'title', headerName: 'Title', width: 200 }

];

/*
const rows = [
  { id: "p-1", nodeType: "person", name: 'Drew Dresser', title: 'Solutions Architect'},
  { id: "p-2", nodeType: "person", name: 'Andrew Nader', title: 'Solutions Architect'},
];
*/

function setRows(rows, len, apiResponse){

  for (var i = 0; i < len; i++){
    console.log(apiResponse[i])
    rows.push({id: apiResponse[i].id, nodeType: apiResponse[i].node_type, name: apiResponse[i].properties});
  }
}

export default function Textual(props) {
  //console.log(props.search)

  /* API CALL*/

  const [apiResponse, setApiResponse] = useState ([""]);
  const url = 'https://yeww6vusz1.execute-api.us-east-1.amazonaws.com/search';
  const payload = {
    "searchTerm": props.search,
    "nodeType": "none"
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(payload)
  };

  useEffect (() => {
    fetch(url, options)
    .then(res => res.json())
    .then(res => setApiResponse(res))
    .catch(error => console.log(error));
  }, [props.search]);


//display response code
let rows = [];
let len = apiResponse.length;

setRows(rows, len, apiResponse)

  return (
    <div className="app__textual">
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
