import React from 'react'
import './App.css';
import VisReact from "./Visreact.js";
import VisReact_test from './Visreact_test';

function Visual(props){
  //console.log(props.nodeGraph)
    return (
    <div className="app__visual">
    <VisReact_test nodeGraph={props.nodeGraph}/>
  </div>
  );
}

export default Visual