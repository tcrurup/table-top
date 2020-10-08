import React from 'react'

const GameRoomThumbnail = props => <>
    <div class="game-name">{props.game.name}</div>
    
    <div class='button-container'>
        <button type='button' onClick={() => props.loadGame(props.game)}>Launch</button>
        <button type='button' onClick={() => props.deleteGame({...props.game, user_id: props.userId})}>Delete</button>
    </div>
</>


export default GameRoomThumbnail