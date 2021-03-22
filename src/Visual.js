import React from 'react'
import './App.css';
import VisReact from "./Visreact.js";
import VisReact_test from './Visreact_test.js';

function Visual(props){
  //console.log(props.nodeGraph)
    return (
    <div className="app__visual">
    <VisReact nodeGraph={props.nodeGraph} /*finalGraph={props.finalGraph} setFinalGraph={props.setFinalGraph}*//>
  </div>
  );
}

export default Visual