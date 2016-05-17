import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import getRoutes from './config/routes';
import configureStore from './store/configureStore';

// sets the initialState if necessary
const initialState = {
  initialState: true
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(hashHistory)}
  </Provider>,
  document.getElementById('app')
)

