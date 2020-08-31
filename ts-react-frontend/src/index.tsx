import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

// eslint-disable-next-line
import Router from './Routes_old';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
