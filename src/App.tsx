import './App.css';

import { Card, CardBack, Hand } from 'react-deck-o-cards';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { db } from './firebase';
import { uuid as uuidv4 } from 'uuid';

function App() {
  const [displayText, setDisplayText] = useState('no data yet');
  axios.get('/helloWorld')
    .then((response: AxiosResponse<string>) => setDisplayText(response.data))
    .catch((error: AxiosError<string>)  => console.log(`this is my error: ${error}`))

  db.collection('rooms').doc('1').set({
    users: {
      0: {
        id: '1214142414',
        name: 'nick',
        stack: 100,
        action: '30',
        cards: ['10s', '8d'],
        seat: 1,
      },
      1: {
        id: '1248794817',
        name: 'justin',
        stack: 50,
        action: 'fold',
        cards: ['Ks', 'Qd'],
        seat: 0,
      }
    },
    pot: "100",
    board: ['Ks', 'As', '4c'],
    button: 0,
    blindSize: .02,
    buyIn: 10,
    actor: 0,
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });


  const defHandStyle = {
    maxHeight:'20vh',
    padding: 0,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Hand cards={[
          { rank: 1, suit: 0 },
          { rank: 11, suit: 2 },
          ]} hidden={false} style={defHandStyle}
        />
        <p>
        {displayText}
        </p>
      </header>
    </div>
  );
}

export default App;
