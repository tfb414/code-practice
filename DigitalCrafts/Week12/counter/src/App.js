import React, { Component } from 'react';
import Counter from './counter.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfCounters: 0
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this._addCounter}>Add Counter</button>
        {this._displayCounters()}
      </div>
    );
  }
  _addCounter = () => {
    let newCounterCount = this.state.numberOfCounters + 1
    this.setState({
      numberOfCounters: newCounterCount
    })
  }

  _displayCounters = ()=>{
    let arrayOfCounters = []
    for (var i = 0; i < this.state.numberOfCounters; i++){
      arrayOfCounters.push(
        <div>
          <Counter />
        </div>
      );
    }
    return arrayOfCounters;
  }

  

}

export default App;