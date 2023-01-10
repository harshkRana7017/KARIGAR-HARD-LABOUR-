import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import ENV_CONFIG from 'constant/env.config';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './App';

if (ENV_CONFIG.APP_ENV !== 'development') {
  console.log = () => {};
}

const root = createRoot(document.querySelector('#root')!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
