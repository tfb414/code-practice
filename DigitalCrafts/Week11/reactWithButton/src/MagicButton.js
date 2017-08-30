import React, { Component } from 'react';

const MagicButton = ({
  title,
  handleClick
}) => (
  <button onClick={handleClick}>{title}</button>
);

// const logIt = (e) => {
//   e.preventDefault();
//   console.log(`The button got pressed`);
// };

export default MagicButton;