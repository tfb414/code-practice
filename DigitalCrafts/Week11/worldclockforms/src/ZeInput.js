import React from 'react';

const ZeInput = ({text, changeHandler}) => (
  <input
    type="text"
    value={text}
    onChange={changeHandler}
  />
);

export default ZeInput;