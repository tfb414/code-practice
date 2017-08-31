import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldClock from './WorldClock';

const firstClocks = {
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
  }
};

const secondClocks = {
    cities: {
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
};

const App = (props) => (
  <div className="App">
    <WorldClock clocks={firstClocks} />
    <br />
    <p>these are other clocks down below</p>
    <WorldClock clocks={secondClocks} />
  </div>
);

export default App;