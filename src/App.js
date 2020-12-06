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
  const [apiResponse, setApiResponse] = useState (Object);
  const url = 'https://yeww6vusz1.execute-api.us-east-1.amazonaws.com/node_graph';
  const payload = {
    //"searchTerm": props.search,
    //"nodeType": "none"
    "nodeId": searchValue
    //"nodeId": "to-1"
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
  }, [searchValue]);

  //console.log(apiResponse)

  return (
    <div className="app">
    {/* Header */}
    <TopBar updateSearch={setValue}/>
     <Router>
        <Switch>
        {/* Default path "/" MUST be at bottom of Route list*/}
          <Route path="/option2">
            {/* Textual Panel Left */}
            <Textual2 />

            {/* Visual Panel Right */}
            {/*<Visual />*/}
          </Route>
          <Route path="/">
            {/* Textual Panel Left */}
            {/*<Textual search={searchValue}/> */}
            <Textual apiResponse={apiResponse}/>
            {/* Visual Panel Right */}
            <Visual nodeGraph={apiResponse}/>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;