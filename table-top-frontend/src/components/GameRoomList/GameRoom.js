import React from 'react'



const GameRoom = props => (
    <>
        {props.game.name}
        <button type='button' onClick={() => props.loadGame(props.game)}>Launch Game</button>
        <button type='button' onClick={() => props.deleteGame(props.game)}>Delete Game</button>
    </>
)

export default GameRoom