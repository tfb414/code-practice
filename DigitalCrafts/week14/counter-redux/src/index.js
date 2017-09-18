import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import AppContainer from './AppContainer';

import actions from './actions';
import counterApp from './reducers';



import { createStore } from 'redux';

const store = createStore(counterApp);

window.store = store;

window.INCREMENT = actions.INCREMENT;
window.DECREMENT = actions.DECREMENT;
window.incrementUp = actions.incrementUp;



ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

