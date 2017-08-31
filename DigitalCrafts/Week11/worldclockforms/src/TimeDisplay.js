import React from 'react';


const TimeDisplay  = ({time, timeZone}) => (
  <p>
    {time.toLocaleTimeString('en-US', {
      timeZone: timeZone
    })}
  </p>
);

export default TimeDisplay;