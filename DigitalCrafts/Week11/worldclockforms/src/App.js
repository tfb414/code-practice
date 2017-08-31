import React, { Component } from 'react';

import './App.css';

// import ZeInput from './ZeInput.js';
// import ZeOutput from './ZeOutput.js';

import utils from './utils.js';
// import WorldClock from "./WorldClock.js";
import Clock from "./Clock.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: 'Magic Clocks with no styling',
      timepiece: new Date(),
      cities: {
        Atlanta: {
          tz: 'America/New_York',
          active: false
        },
        'New York': {
          tz: 'America/New_York',
          active: false
        },
        Tokyo: {
          tz: 'Asia/Tokyo',
          active: false
        },
        Manila: {
          tz: 'Asia/Manila',
          active: false
        },
        'Mexico City': {
          tz: 'America/Mexico_City',
          active: false
        },
        'Berlin': {
          tz: 'Europe/Berlin',
          active: false
        },
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      this._updateTimes();
    }, 1000);
  }
  

  render() {

    const options = Object.keys(this.state.cities).map((cityName, idx) => (
      <div key={idx}>
        <label>
          <input 
            type="checkbox" 
            onChange={this._changeActiveCities}
            value={cityName}
          />
          {cityName}
        </label>
      </div>
    ));

    //put this into another file

    const myClocks = Object.keys(this.state.cities).map( (city, idx) => {
      if(this.state.cities[city].active === true){
        return <Clock
          name={city}
          time={this.state.timepiece}
          timeZone={this.state.cities[city].tz}
          key={idx}
        />
      }
      
    });

    //put this into another file
    
    return (
      <div className="App">
        <h1>{this.state.label}</h1>
         <div>
         {options}
         </div>
         {myClocks}
      </div>
    );
  }

  _changeTheTransformer = (event) => {
    console.log(event)
    // this.setState({
    //   transformer: utils[event.target.value]
    // })
  }

  _changeActiveCities = (event) => {
    let newCities = Object.assign({},this.state.cities);
    newCities[event.target.value].active = !newCities[event.target.value].active;
    this.setState({
      cities: newCities
    })
  }

  _updateText = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  _updateTimes = () => {
    this.setState({
      timepiece: new Date()
    });
  }

}


export default App;

