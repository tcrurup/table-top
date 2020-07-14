import React from 'react'



const GameRoom = props => (
    <>
        {props.game.name}
        <button type='button' onClick={props.start}>Launch Game</button>
    </>
)

export default GameRoom