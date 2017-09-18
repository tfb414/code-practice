import React from 'react';
import counterApp from './reducers.js'

const CounterDisplay = ({number, onUpClick}) =>(
    <div>
        <p>{number}</p>
        <button onClick={onUpClick}>derp</button>
    </div>
)

export default CounterDisplay;