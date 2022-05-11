import React from 'react';
import ReactDOM from 'react-dom';
import "../src/theme/main.scss";
import  App from './App';
import "./App.scss"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
