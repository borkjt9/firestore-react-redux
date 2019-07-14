import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

/**
 * render- controls the contents of the container node you pass in.
 * Any existing DOM elements inside are replaced when first called.
 * Later calls use React’s DOM diffing algorithm for efficient updates.
 * https://reactjs.org/docs/react-dom.html#render
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
