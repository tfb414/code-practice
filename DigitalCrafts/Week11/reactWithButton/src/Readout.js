import React, { Component } from 'react';
const formatUnits = units => units.toUpperCase();

const Readout = ({temperature, unit}) => (
  <div>
    <span>
      { temperature } { formatUnits(unit) }
    </span>
  </div>
);

export default Readout;