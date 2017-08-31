import React, { Component } from 'react';

import Clock from './Clock.js';

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
      />
    ));

    return (
      <div>
        {/* <button onClick={this._updateTimes}>update!</button> */}
        {/* <Clock name="Atlanta!!!!!!" time={} /> */}
        {myClocks}
      </div>
    );
  }

  _updateTimes = () => {
      this.setState({
        timepiece: new Date()
      });
  }

}

export default WorldClock;
