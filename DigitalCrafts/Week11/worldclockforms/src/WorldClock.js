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

    return (
      <div>
        <ClockForm formHandler={this._getStuffFromForm} />
        {/* <button onClick={this._updateTimes}>update!</button> */}
        {/* <Clock name="Atlanta!!!!!!" time={} /> */}
        {myClocks}
      </div>
    );
  }

  _getStuffFromForm = (stuff) => {
    console.log(stuff);
  }

  _updateTimes = () => {
      this.setState({
        timepiece: new Date()
      });
  }

  _deleteClock = (cityName) => {

    // Option #1: do not do it this way.
    /*
    // DO NOT EVER DO THIS.
    // NO REALLY, TIM.
    // DON.T DO IT.
    let copyOfCitites = this.state.cities; // DO NOT EVER DO THIS.
    delete copyOfCitites[cityName]; // DO NOT EVER DO THIS.
    // DO NOT EVER DO THIS.
    // NO REALLY, TIM.
    // DON.T DO IT.
    */

    // Option #2: Create new object, iterate over keys in object with for..in
    let newCities = {};
    for (let c in this.state.cities) {
      if (c !== cityName) {
        newCities[c] = this.state.cities[c]
      }
    }

    // Option #3: Create new object, iterate over Object.keys with for..of
    // let newCities = {};
    // for (let c of Object.keys(this.state.cities)) {
    //   if (c !== cityName) {
    //     newCities[c] = this.state.cities[c]
    //   }
    // }

    // Option #4:
    // let newCities = Object.keys(this.state.cities).reduce((tally, c) => {
    //   if (c !== cityName) {
    //     tally[c] = this.state.cities[c];
    //   }
    //   return tally;
    //  }, {});



    // =====================================
    // Always do this: call this.setState

    this.setState({
      cities: newCities
    });

  }

}

export default WorldClock;
