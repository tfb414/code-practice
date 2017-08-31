import React from 'react';

const ZeOutput = ({text, transformText}) => (
  <div>
    {transformText(text)}
  </div>
);

export default ZeOutput;