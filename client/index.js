import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import getRoutes from './config/routes';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(hashHistory)}
  </Provider>,
  document.getElementById('app')
)

