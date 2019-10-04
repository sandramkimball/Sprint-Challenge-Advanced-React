import React from 'react';
import styled from 'styled-components';

const StatCard = styled.div`
    height: 8%;
    width: 40%;
    max-width: 600px;
    padding: 0px 10px;
    background: linear-gradient(175deg, gray, #000);
    color: #fff;
    margin: 10px 0;
    text-align: left;`
;

const H2 = styled.h2`
font-size: 1.25rem;`;

const Stats = styled.div`
font-size: 1rem;
display: flex;
margin-top: -10px;
`;

const P = styled.p`
width: 50%;
`;


const PlayerCards = props => {
   return (
    <StatCard>
        <H2>{props.name}</H2>
        <Stats>
            <P>Country: {props.country}</P>
            <P>Searches: {props.searches}</P>
        </Stats>
    </StatCard>
)}

export default PlayerCards;