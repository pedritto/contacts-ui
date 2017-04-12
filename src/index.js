import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import configureStore from './configure-store';
import DevTools from './dev-tools';
import App from './app';

import { loadContacts } from './actions';

const store = configureStore();

store.dispatch(loadContacts());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
