import './App.css';

import React, { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import Deck from 'react-poker';
import { db } from './firebase';
import logo from './logo.svg';

function App() {
  const [displayText, setDisplayText] = useState('no data yet');
  axios.get('/helloWorld')
    .then((response: AxiosResponse<string>) => setDisplayText(response.data))
    .catch((error: AxiosError<string>)  => console.log(`this is my error: ${error}`))

  db.collection('rooms').doc('1').set({
    users: ['1', '2'],
    pot: "100",
    board: ['Ks', 'As', '4c'],
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Deck/>

        <p>
        {displayText}
        </p>
      </header>
    </div>
  );
}

export default App;
