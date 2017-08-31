import React, { Component } from 'react';

import Clock from './Clock.js';
import ClockForm from './ClockForm.js';

class WorldClock extends Component {

  // Must include this if you want to hold `state`
  constructor(props) {
    super(props);

    this.state = props.clocks;
    this.state.timepiece = new Date();
    // debugger;
  }

  componentDidMount() {
    setInterval(() => {
      this._updateTimes();
    }, 1000);
  }

  render() {
    const myClocks = Object.keys(this.state.cities).map( (city, idx) => (
      <Clock
        name={city}
        time={this.state.timepiece}
        timeZone={this.state.cities[city].tz}
        key={idx}
        clickHandler={this._deleteClock}
      />
    ));
  }

  // _getStuffFromForm = (stuff) => {
  //   console.log(stuff);
  // }

  _updateTimes = () => {
      this.setState({
        timepiece: new Date()
      });
  }

  _deleteClock = (cityName) => {
    let newCities = {};
    for (let c in this.state.cities) {
      if (c !== cityName) {
        newCities[c] = this.state.cities[c]
      }
    }
    this.setState({
      cities: newCities
    });

  }

}

export default WorldClock;
