import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'https://us-central1-simplepoker.cloudfunctions.net';
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
  <React.StrictMode>
    <script src="/__/firebase/8.2.1/firebase-app.js"></script>
    <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>
    <script src="/__/firebase/8.2.1/firebase-firestore.js"></script>
    <script src="/__/firebase/init.js"></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
