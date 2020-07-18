import React from 'react'
import GameRoom from '../GameRoom.js'
import GameRoomInput from '../GameRoomInput.js'

const GameRoomCardBack = props => {
    if(props.game.has_game){
        return <GameRoom 
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
