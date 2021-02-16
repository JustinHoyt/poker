//Seat component to display position & cards on board

import { defHandStyle } from "../constants";
import { Card, CardBack, Hand } from 'react-deck-o-cards';
import styled from 'styled-components';

const Chair = styled.div`
    border: 10px solid black;
    width: 200px;
    margin: 10px;
`;

const Seat = (props) => {

    const { hand, dealCard, player, clearHand } = props;

    return(
        <Chair>
            <Hand cards={hand} hidden={false} style={defHandStyle} />
            <p>{player.name}</p>
            <p>Stack: {player.stack}</p>
            <button onClick={dealCard}>DEAL</button>
            <button onClick={clearHand}>Clear</button>
        </Chair>
    )
};

export default Seat;