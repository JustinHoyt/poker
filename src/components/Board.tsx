//Board component
import React, { useState, useEffect } from 'react';
import { Card, Cardback, Hand } from 'react-deck-o-cards';
import { defHandStyle } from '../constants';

const Board = (props) => {
    const { boardCards, dealCard, pot, clearCards } = props;
    return(
        <div>
            <Hand cards={boardCards} hidden={false} style={defHandStyle} />
            <p>Pot: {pot}</p>
            <button onClick={dealCard}>DEAL</button>
            <button onClick={clearCards}>CLEAR TABLE</button>
        </div>
    )
}

export default Board;