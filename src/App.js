import React, {useState} from 'react';
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
            <Textual search={searchValue}/>

            {/* Visual Panel Right */}
            <Visual />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;