//Seat component to display position & cards on board

import { defHandStyle } from "../constants";
import { Card, CardBack, Hand } from 'react-deck-o-cards';

const Seat = (props) => {

    const { hand, dealCard } = props;

    return(
        <div>
            <Hand cards={hand} hidden={false} style={defHandStyle} />
            <button onClick={dealCard}>DEAL</button>
        </div>
    )
};

export default Seat;