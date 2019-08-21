import '@babel/polyfill';
import 'es6-promise';
import 'fetch-ie8';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import configureStore, { sagaMiddleware } from './configureStore';
import rootSaga from './saga/saga';
import './styles/global.scss';

const initialState = { abc: 'sdkjsdkjh' };
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE
);
