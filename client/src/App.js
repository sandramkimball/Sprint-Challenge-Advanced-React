import React from 'react';
import './App.css';
import Players from './components/players';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Years Top Players</h1>
        <ToggleButton/>
      </header>
      <body>
        <Players/>
      </body>
    </div>
  );
}

export default App;
