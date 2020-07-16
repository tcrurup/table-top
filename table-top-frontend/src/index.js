import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index.js'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'



const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
