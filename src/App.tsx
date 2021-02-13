import './App.css';
import firebase from 'firebase';

import { Card, CardBack, Hand } from 'react-deck-o-cards';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { db } from './firebase';
import { uuid as uuidv4 } from 'uuid';

import { deck52, dummyState } from './constants';
import Board from './components/Board';
import Seat from './components/Seat';
import userEvent from '@testing-library/user-event';
import { createReadStream } from 'fs';
import styled from 'styled-components';
import EmptySeat from './components/EmptySeat';

const PlayArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 2px solid green;
  justify-content: space-evenly;
  margin: 20px;
`;
const docRef = db.collection('rooms').doc('1')

function App() {
  const [displayText, setDisplayText] = useState('no data yet');
  const [room, setRoom] = useState(dummyState)

//   useEffect( () => {
//   axios.get('/helloWorld')
//     .then((response: AxiosResponse<string>) => setDisplayText(response.data))
//     .catch((error: AxiosError<string>)  => console.log(`this is my error: ${error}`)) 
//   })
useEffect( () => {
  docRef.onSnapshot((doc) => {
    if(doc.exists) {
      console.log('Firebase data:', doc.data());
      let data = doc.data();
      if(data) {setRoom({
        deck: data.deck,
        board: data.board,
        button: data.button,
        blindSize: data.blindSize,
        users: data.users,
        pot: data.pot,
        buyIn: data.buyIn,
        actor: data.actor
      })};
    } else {
      console.log('No such document!');
    }
  })
}, []);


  const dealCard = (position) => {
    if (position === 'board') {
      //setRoom({...room, board: [...room.board, room.deck[0]], deck: [...room.deck].slice(1)});
      return docRef.update({
        board: firebase.firestore.FieldValue.arrayUnion(room.deck[0]),
        deck: firebase.firestore.FieldValue.arrayRemove(room.deck[0])
      })
      .then(() => console.log('board updated'))
      .catch((err) => console.log(err));
    } else {
      let playerHand = `users.${position}.cards`
      return docRef.update({
        [playerHand]: firebase.firestore.FieldValue.arrayUnion(room.deck[0]),
        deck: firebase.firestore.FieldValue.arrayRemove(room.deck[0])
      })
      .then(() => console.log('player updated:', room.users[0]))
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <Board boardCards={room.board} dealCard={() => dealCard('board')} pot={room.pot} />
      <PlayArea>
        {Object.keys(room.users).map(key => <Seat hand={room.users[key].cards} dealCard={() => dealCard(key)} player={room.users[key]} />)}
        {[...Array(9 - Object.keys(room.users).length)].map( () => <EmptySeat />)}
      </PlayArea>
    </div>
  );
}

export default App;
