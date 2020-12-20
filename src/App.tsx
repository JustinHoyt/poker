import './App.css';

import React, { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import logo from './logo.svg';

function App() {
  const [displayText, setDisplayText] = useState('no data yet'); 
  axios.get('/helloWorld')
    .then((response: AxiosResponse<string>) => {
      console.log(response);
      setDisplayText(response.data)
    })
    .catch((error: AxiosError<string>)  => console.log(error))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {displayText}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
