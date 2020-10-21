import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';

const columns = [
  //{ field: 'id', headerName: 'id', width: 60 },
  { field: 'nodeType', headerName: 'Node Type', width: 120 },
  { field: 'display_name', headerName: 'Label', width: 200 },
  { field: 'display_description', headerName: 'Description', width: 200 }

];

/*
const rows = [
  { id: "p-1", nodeType: "person", name: 'Drew Dresser', title: 'Solutions Architect'},
  { id: "p-2", nodeType: "person", name: 'Andrew Nader', title: 'Solutions Architect'},
];
*/

function setRows(rows, len, apiResponse){

  for (var i = 0; i < len; i++){
    //console.log(apiResponse[i])
    //let properties = apiResponse[i].properties.json()
    rows.push({nodeType: apiResponse[i].node_type, display_name: apiResponse[i].display_name, display_description: apiResponse[i].display_description});
  }
}

export default function Textual(props) {
  console.log(props.search)

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
