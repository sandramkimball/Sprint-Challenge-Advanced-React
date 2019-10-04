import React from 'react';
import './App.css';
import Players from './components/players';
import ToggleButton from './components/ToggleButton';
// import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Year's Top Players</h1>
        <ToggleButton/>
      </header>
      <div className = 'body'>
        <Players/>
      </div>
    </div>
  );
}

export default App;
