import React from 'react'

const GameRoomCardFront = props => {
    
    const gameDetails = () => <span>{props.game.game.name}</span> 

    if(props.game.has_game){
        return gameDetails()
    } else { 
        return <span>-CREATE NEW-</span>
    }
    
}

export default GameRoomCardFront
