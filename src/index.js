import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {applyMiddleware,createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Layout from './components/Layout';
import createLogger from 'redux-logger';


const logger = createLogger();
const store = createStore(allReducers,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
