import React from 'react';

import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';

const Clock = ({ name, time, timeZone, clickHandler }) => (
  <div className="clock">
    <PlaceName name={name} />
    <TimeDisplay time={time} timeZone={timeZone} />
    <button onClick={() => {
      clickHandler(name);
    }}>X</button>
    <br />
    <br />

  </div>
);


export default Clock;