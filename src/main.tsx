import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json';
import { store } from './store';
import 'flowbite';
import './assets/styles/index.css';
import './assets/styles/main.css';
import App from './App';

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
