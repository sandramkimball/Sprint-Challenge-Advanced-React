import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlayerCards from './playercard';
import styled from 'styled-components';
import Chart from './Chart';

const CardContainer = styled.section`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;


export default function Players(){
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/players`)
        .then(res=>{
            console.log(res)
            setPlayers(res.data)
        })
        .catch(err=>{
            console.log(`WRONG!`, err)
        })
    }, [])

    return (
        <div>
           {players.country && (
           <Chart countries={players.country}/>
           )}
            <CardContainer>
                {players.map(player=>(
                    <PlayerCards
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                ))}
            </CardContainer>
        </div>
    )
}