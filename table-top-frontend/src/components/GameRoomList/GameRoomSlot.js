import React from 'react'

const GameRoomSlot = props => (
    <div 
        className='game-rooms-container-item' 
        onClick={props.onRoomClick}
    >
        {props.name}
    </div>
)

export default GameRoomSlot