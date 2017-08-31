import React, { Component } from 'react';

import './App.css';

// import ZeInput from './ZeInput.js';
// import ZeOutput from './ZeOutput.js';

import utils from './utils.js';
// import WorldClock from "./WorldClock.js";
import Clock from "./Clock.js";

const cityName = {
      cities: {
        Atlanta: {
          tz: 'America/New_York'
        },
        'New York': {
          tz: 'America/New_York'
        },
        Tokyo: {
          tz: 'Asia/Tokyo'
        },
        Manila: {
          tz: 'Asia/Manila'
        },
        'Mexico City': {
          tz: 'America/Mexico_City'
        },
        'Berlin': {
          tz: 'Europe/Berlin'
        },
      }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: 'magic form things',
      timepiece: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this._updateTimes();
    }, 1000);
  }
  

  render() {

    const options = Object.keys(cityName.cities).map((cityName, idx) => (
      <div key={idx}>
        <label>
          <input 
            type="checkbox" 
            onChange={this._changeTheTransformer} 
          />
          {cityName}
        </label>
      </div>
    ));

    const myClocks = Object.keys(cityName.cities).map( (city, idx) => (
      <Clock
        name={city}
        time={this.state.timepiece}
        timeZone={cityName.cities[city].tz}
        key={idx}
      />
    ));
    
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
    this.setState({
      transformer: utils[event.target.value]
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


// const App = (props) => (
//   <div className="App">
//     <input type="text" />
//     <div>This will show a thing</div>
//   </div>
// );


// import WorldClock from './WorldClock';

// const firstClocks = {
//     cities: {
//       Atlanta: {
//         tz: 'America/New_York'
//       },
//       'New York': {
//         tz: 'America/New_York'
//       },
//       Tokyo: {
//         tz: 'Asia/Tokyo'
//       },
//   }
// };

// const secondClocks = {
//     cities: {
//       Manila: {
//         tz: 'Asia/Manila'
//       },
//       'Mexico City': {
//         tz: 'America/Mexico_City'
//       },
//       'Berlin': {
//         tz: 'Europe/Berlin'
//       },
//     }
// };
