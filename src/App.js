import React, {useState, useEffect} from 'react';
import './App.css';
import TopBar from './TopBar.js';
import Textual2 from './Textual2.js';
import Textual from './Textual.js';
import Visual from './Visual.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [searchValue, setValue] = useState("");
  const [nodeID, setNodeID] = useState("");
  //const [finalGraph, setFinalGraph] = useState(Object);
  const [apiResponse, setApiResponse] = useState (Object);
  const [nodegraphApiResponse, setnodegraphApiResponse] = useState (Object);
  
  //API Call to search endpoint
  const searchurl = 'https://yeww6vusz1.execute-api.us-east-1.amazonaws.com/search';
  const searchpayload = {
    "searchTerm": searchValue
  };

  const searchoptions = {
    method: 'POST',
    body: JSON.stringify(searchpayload)
  };

  useEffect (() => {
    fetch(searchurl, searchoptions)
    .then(searchres => searchres.json())
    .then(searchres => setApiResponse(searchres))
    .catch(error => console.log(error));
  }, [searchValue]);

  //
  //
  //
  //API Call for node_graph endpoint
  const nodegraphurl = 'https://yeww6vusz1.execute-api.us-east-1.amazonaws.com/node_graph';
  const nodegraphpayload = {
    "nodeId": nodeID
  };

  const nodegraphoptions = {
    method: 'POST',
    body: JSON.stringify(nodegraphpayload)
  };

  useEffect (() => {
    fetch(nodegraphurl, nodegraphoptions)
    .then(nodegraphres => nodegraphres.json())
    .then(nodegraphres => setnodegraphApiResponse(nodegraphres))
    .catch(error => console.log(error));
  }, [nodeID]);

  //console.log(nodegraphApiResponse)

  return (
    <div className="app">
    {/* Header */}
    <TopBar updateSearch={setValue}/>
     <Router>
        <Switch>
        {/* Default path "/" MUST be at bottom of Route list*/}
          <Route path="/">
            {/* Textual Panel Left */}
            {/*<Textual search={searchValue}/> */}
            <Textual apiResponse={apiResponse} setNodeID={setNodeID}/>
            {/* Visual Panel Right */}
            <Visual nodeGraph={nodegraphApiResponse} /*finalGraph={finalGraph} setFinalGraph={setFinalGraph}*//>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;