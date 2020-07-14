import React from 'react'
import GameRoomCard from './GameRoomCard.js'
import './GameRoomList.css'

const GameRoomList = props => (
    <div className='game-rooms-container'>
        {console.log(props)}
        <h2>Games You're Running</h2>
        {props.gameRooms.map( game => <GameRoomCard game={game} /> )}
    </div>
)

export default GameRoomList