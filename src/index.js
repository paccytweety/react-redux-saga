import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducer/counter';
import authReducer from './store/reducer/auth';
import { watchStoreResult } from './store/sagas'

const allReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware();

const composeEnhances = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
const store = createStore(allReducer, composeEnhances(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(watchStoreResult)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
