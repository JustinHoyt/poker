import './App.css';

import { Card, CardBack, Hand } from 'react-deck-o-cards';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { db } from './firebase';
import { uuid as uuidv4 } from 'uuid';

import { deck52 } from './constants';
import Board from './components/Board';
import Seat from './components/Seat';
import userEvent from '@testing-library/user-event';
import { createReadStream } from 'fs';
import styled from 'styled-components';

const PlayArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 2px solid green;
  justify-content: space-evenly;
  margin: 20px;
`;

function App() {
  const [displayText, setDisplayText] = useState('no data yet');
  const [room, setRoom] = useState({users: {0: {name: 'nick', cards:[{}]}, 1: {name: 'justin', cards: [{}]}, 2:{name: 'zack', cards:[{}]} }, pot: 0, board:[{}], deck: deck52})

//   useEffect( () => {
//   axios.get('/helloWorld')
//     .then((response: AxiosResponse<string>) => setDisplayText(response.data))
//     .catch((error: AxiosError<string>)  => console.log(`this is my error: ${error}`)) 
//   })
//   useEffect( () => {
//   db.collection('rooms').doc('1').set({
//     users: {
//       0: {
//         id: '1214142414',
//         name: 'nick',
//         stack: 100,
//         action: '30',
//         cards: [{rank: 2, suit: 0},{rank: 7, suit: 3}],
//         seat: 1,
//       },
//       1: {
//         id: '1248794817',
//         name: 'justin',
//         stack: 50,
//         action: 'fold',
//         cards: [{rank: 12, suit: 3}, {rank: 12, suit: 1}],
//         seat: 0,
//       }
//     },
//     pot: "100",
//     board: [{rank: 13, suit: 3}, {rank: 1, suit: 2}, {rank: 7, suit: 2}],
//     button: 0,
//     blindSize: .02,
//     buyIn: 10,
//     actor: 0,
//     deck: deck52
//   })
//   .then(function() {
//     console.log("Document successfully written!")
//   })
//   .catch(function(error) {
//       console.error("Error writing document: ", error);
//   });
// })


  const defHandStyle = {
    maxHeight:'10vh',
    padding: 0,
  };

  const dealCard = (position) => {
    if (position === 'board') {
      setRoom({...room, board: [...room.board, room.deck[0]], deck: [...room.deck].slice(1)});
    } else {
      setRoom({
        ...room, 
        users:{...room.users, [position]: {...room.users[position], cards: [...room.users[position].cards, room.deck[0]]}},
        deck: [...room.deck].slice(1)
      })
    }
  };

  return (
    <div className="App">
      <Board boardCards={room.board} dealCard={() => dealCard('board')}/>
      <PlayArea>
        {Object.keys(room.users).map(key => <Seat hand={room.users[key].cards} dealCard={() => dealCard(key)} />)}
      </PlayArea>
    </div>
  );
}

export default App;
