import React from 'react'



const GameRoom = props => (
    <>
        {props.game.name}
        <button type='button' onClick={() => props.loadGame(props.game)}>Launch Game</button>
    </>
)

export default GameRoom