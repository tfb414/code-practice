import React, { Component } from 'react';
import logo from './logo.svg';
import Keypad from './keypad.js';
import Display from './display.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        display: 0
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I miss hot reload, I'll show you sunny!</h2>
        </div>
        <div className = "calc">
          <Display display = {this.state.display}/>
          <Keypad clickHandler = {this._updateDisplay} returnHandler = {this._returnAnswer}/>
        </div>
        
      </div>
    );
  }
  _updateDisplay = (val) => {
    // console.log(this.state.display[0] === "0");
    let newVal = this.state.display.toString() + val.toString();
    if (this.state.display[0] === "0"){
      newVal = newVal.slice(1);
    }
    // newVal = eval(newVal);
    
    // let finalVal = parseInt(newVal, 10);
    this.setState({
      display: newVal
    })
    console.log(this.state.display)
  }

  _returnAnswer = () => {
    let finalVal = eval(this.state.display);
    console.log(finalVal);
    this.setState({
      display: finalVal
    })
  }
}

export default App;
