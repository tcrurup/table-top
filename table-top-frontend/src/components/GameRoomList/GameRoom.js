import React from 'react'



const GameRoom = props => (
    <div className='game-rooms-container-item' onClick={props.onRoomClick}>
        {props.name}
    </div>
)

export default GameRoom