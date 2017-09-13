import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './actions'

import crewMembers from './reducers';

import {createStore} from 'redux';

const store = createStore(crewMembers);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
//put this in here to be able to play with this in the console

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
