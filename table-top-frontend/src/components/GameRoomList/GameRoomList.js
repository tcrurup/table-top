import React from 'react'
import GameRoomCard from './GameRoomCard.js'
import './GameRoomList.css'

const GameRoomList = props => (
    <div className='game-rooms-container'>
        <h2>Games You're Running</h2>
        {props.gameRooms.map( room => <GameRoomCard room={room} />)}
    </div>

)

export default GameRoomList