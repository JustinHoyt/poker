//Constants for initial useState, including typical 52 card deck
const deck52 = [
    { rank: 1, suit: 0 },
    { rank: 2, suit: 0 },
    { rank: 3, suit: 0 },
    { rank: 4, suit: 0 },
    { rank: 5, suit: 0 },
    { rank: 6, suit: 0 },
    { rank: 7, suit: 0 },
    { rank: 8, suit: 0 },
    { rank: 9, suit: 0 },
    { rank: 10, suit: 0 },
    { rank: 11, suit: 0 },
    { rank: 12, suit: 0 },
    { rank: 13, suit: 0 },
    { rank: 1, suit: 1 },
    { rank: 2, suit: 1 },
    { rank: 3, suit: 1 },
    { rank: 4, suit: 1 },
    { rank: 5, suit: 1 },
    { rank: 6, suit: 1 },
    { rank: 7, suit: 1 },
    { rank: 8, suit: 1 },
    { rank: 9, suit: 1 },
    { rank: 10, suit: 1 },
    { rank: 11, suit: 1 },
    { rank: 12, suit: 1 },
    { rank: 13, suit: 1 },    
    { rank: 1, suit: 2 },
    { rank: 2, suit: 2 },
    { rank: 3, suit: 2 },
    { rank: 4, suit: 2 },
    { rank: 5, suit: 2 },
    { rank: 6, suit: 2 },
    { rank: 7, suit: 2 },
    { rank: 8, suit: 2 },
    { rank: 9, suit: 2 },
    { rank: 10, suit: 2 },
    { rank: 11, suit: 2 },
    { rank: 12, suit: 2 },
    { rank: 13, suit: 2 },
    { rank: 1, suit: 3 },
    { rank: 2, suit: 3 },
    { rank: 3, suit: 3 },
    { rank: 4, suit: 3 },
    { rank: 5, suit: 3 },
    { rank: 6, suit: 3 },
    { rank: 7, suit: 3 },
    { rank: 8, suit: 3 },
    { rank: 9, suit: 3 },
    { rank: 10, suit: 3 },
    { rank: 11, suit: 3 },
    { rank: 12, suit: 3 },
    { rank: 13, suit: 3 }
];

const defHandStyle = {
    maxHeight:'20vh',
    padding: 0,
  };

const dummyState = { 
  users: {
    0: {
      id: '1214142414',
      name: 'nick',
      stack: 100,
      action: '30',
      cards: [{rank: 2, suit: 0},{rank: 7, suit: 3}],
      seat: 1,
    },
    1: {
      id: '1248794817',
      name: 'justin',
      stack: 50,
      action: 'fold',
      cards: [{rank: 12, suit: 3}, {rank: 12, suit: 1}],
      seat: 0,
    }
  },
  pot: "100",
  board: [{rank: 13, suit: 3}, {rank: 1, suit: 2}, {rank: 7, suit: 2}],
  button: 0,
  blindSize: .02,
  buyIn: 10,
  actor: 0,
  deck: deck52
};


export { deck52, defHandStyle, dummyState };