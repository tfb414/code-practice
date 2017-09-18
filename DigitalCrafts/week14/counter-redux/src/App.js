import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterDisplay from './CounterDisplay.js'
  

const App = ({counterNumber, onUpClick}) =>{
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        
      </div>
      <CounterDisplay number={counterNumber} onUpClick={onUpClick}/>
      {/* <CounterDisplay counter={state}/> */}
    </div>
  );
}
    

export default App;
