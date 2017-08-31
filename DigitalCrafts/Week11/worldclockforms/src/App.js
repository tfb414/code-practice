import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldClock from './WorldClock';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: "chris is a big fat dummy",
      label: "derp derpin derp derp"
    };
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.label}</h1>
        <input type="text" value={this.state.text}/>
        <div>{this.state.text}</div>
      </div>
    );
  }

  _updateText = () => {
    
  }

}

export default App;