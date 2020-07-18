import React from 'react'
import GameRoomThumbnail from '../GameRoomThumbnail.js'
import GameRoomInput from '../GameRoomInput.js'

const GameRoomCardBack = props => {
    if(props.game.has_game){
        return <GameRoomThumbnail 
            game={props.game} 
            loadGame={props.loadGame}
            deleteGame={props.deleteGame}    
        /> 
    } else {
        return <GameRoomInput 
            userId={props.user.id} 
            gameId={props.game.id} 
            onSubmit={props.createGame}
        />
    }
}

export default GameRoomCardBack
