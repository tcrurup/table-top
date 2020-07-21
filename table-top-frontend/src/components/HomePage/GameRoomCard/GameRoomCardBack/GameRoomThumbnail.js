import React from 'react'

const GameRoomThumbnail = props => <>
    {props.game.name}
    
    <button type='button' onClick={() => props.loadGame(props.game)}>Launch Game</button>
    <button type='button' onClick={() => props.deleteGame({...props.game, user_id: props.userId})}>Delete Game</button>
</>


export default GameRoomThumbnail