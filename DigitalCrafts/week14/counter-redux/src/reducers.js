import { combineReducers } from 'redux';
import actions from './actions';

const counter = (state=[0], action)=>{
    
    let newState;
    switch (action.type) {
        case actions.INCREMENT:
            newState = state.slice(0);
            newState[0] += 1;
            return newState;

        case actions.DECREMENT:
            newState = state.slice(0);
            newState[0] -= 1;
            return newState;
            
        default:
            return state;
    }
    
}

export default combineReducers({
    counter,
})