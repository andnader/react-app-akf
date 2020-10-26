import React from 'react'
import './App.css';
import VisReact from "./Visreact.js";

function Visual(props){
  //console.log(props.nodeGraph)
    return (
    <div className="app__visual">
    <VisReact nodeGraph={props.nodeGraph}/>
  </div>
  );
}

export default Visual