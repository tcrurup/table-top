import React from 'react'

const GameRoomThumbnail = props => <>
    {props.game.name}
    
    <div class='button-container'>
        <button type='button' onClick={() => props.loadGame(props.game)}>Launch</button>
        <button type='button' onClick={() => props.deleteGame({...props.game, user_id: props.userId})}>Delete</button>
    </div>
</>


export default GameRoomThumbnail