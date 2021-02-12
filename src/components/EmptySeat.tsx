import React from 'react';
import styled from 'styled-components';

const Empty = styled.div`
    background-color: lightgray;
    color: gray;
    border: dashed 2px gray;
    width: 200px;
    height: 230px;
    margin: 10px;
`;

const EmptySeat = (props) => {

    return(
        <Empty>
            Empty Seat
        </Empty>
    )
};

export default EmptySeat;