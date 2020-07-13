import React from 'react'

const GameRoomSlot = props => (
    <div 
        className='game-rooms-container-item' 
        onClick={props.onClick}
    >
        -Create Game-
    </div>
)

export default GameRoomSlot