import React from 'react'

const GameRoomThumbnail = props => <>
    {props.game.game.name}
    
    <button type='button' onClick={() => props.loadGame(props.game.game)}>Launch Game</button>
    <button type='button' onClick={() => props.deleteGame(props.game)}>Delete Game</button>
</>


export default GameRoomThumbnail