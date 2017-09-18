/*
    [#]
*/


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';

const incrementUp = () =>(
    {
    type: INCREMENT
    }
);

const decrementDown = () =>(
    {
    type: DECREMENT
    }
);

export default {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER,
  incrementUp
}