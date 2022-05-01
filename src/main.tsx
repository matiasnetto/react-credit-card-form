import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setViewportWidth from './Helpers/setViewportWidth';

setViewportWidth();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
