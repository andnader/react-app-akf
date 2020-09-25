import React from 'react';
import './App.css';
import TopBar from './TopBar.js';
import Textual from './Textual.js';
import Visual from './Visual.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
    {/* Header */}
    <TopBar />
     <Router>
        <Switch>
        {/* Default path "/" MUST be at bottom of Route list*/}
          <Route path="/">
            {/* Textual Panel Left */}
            <Textual />
            {/* Visual Panel Right */}
            <Visual />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;