import React from 'react'
import GameRoom from './GameRoom.js'
import GameRoomSlot from './GameRoomSlot.js'
import './GameRoomList.css'

const GameRoomList = props => (
    <div className='game-rooms-container'>
        <h2>Games You're Running</h2>
        {props.gameRooms.map( room => {
            if(room.has_game){
                return <GameRoom 
                    room={room} 
                    onRoomClick={() => {props.loadGame(room)}}
                />
                

            } else {
                return <GameRoomSlot 
                        name={room.name} 
                        onRoomClick={() => {props.createGame(room)}} 
                    /> 
            }
        })}
    </div>

)

export default GameRoomList