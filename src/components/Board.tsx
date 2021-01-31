//Board component
import React, { useState, useEffect } from 'react';
import { Card, Cardback, Hand } from 'react-deck-o-cards';
import { defHandStyle } from '../constants';

const Board = (props) => {
    const { boardCards, dealCard } = props;
    return(
        <div>
            <Hand cards={boardCards} hidden={false} style={defHandStyle} />
            <button onClick={dealCard}>DEAL</button>
        </div>
    )
}

export default Board;