import React from 'react';
import './App.css';
import TopBar from './TopBar.js';
import Textual from './Textual.js';
import Visual from './Visual.js';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <TopBar />
      {/* Textual Panel Left */}
      <Textual />
      {/* Visual Panel Right */}
      <Visual />
    </div>
  );
}

export default App;
