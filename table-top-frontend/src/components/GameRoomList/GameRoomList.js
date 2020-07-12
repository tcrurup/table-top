import React from 'react'
import GameRoom from './GameRoom.js'
import './GameRoomList.css'

const GameRoomList = props => (
    <div className='game-rooms-container'>
        <h2>Games You're Running</h2>
        {props.gameRooms.map( room => {
            return <GameRoom name={room.name} /> 
        })}
    </div>

)

export default GameRoomList