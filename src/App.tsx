import './App.css';

import React, { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { db } from './firebase';

function App() {
  const [displayText, setDisplayText] = useState('no data yet');
  axios.get('/helloWorld')
    .then((response: AxiosResponse<string>) => setDisplayText(response.data))
    .catch((error: AxiosError<string>)  => console.log(`this is my error: ${error}`))

  db.collection('rooms').doc('1').set({
    users: [{
      name: 'nick',
      stack: 100,
      action: '30',
      cards: ['10s', '8d'],
      seat: 1,
    }, {
      name: 'justin',
      stack: 50,
      action: 'fold',
      cards: ['Ks', 'Qd'],
      seat: 0,
    }],
    pot: "100",
    board: ['Ks', 'As', '4c'],
    button: 0,
    blindSize: .02,
    buyIn: 10
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
        <p>
        {displayText}
        </p>
      </header>
    </div>
  );
}

export default App;
