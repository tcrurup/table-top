import React from 'react'

const GameRoomCardFront = props => {
    
    const gameDetails = () => <span>{console.log(props.game.name)}</span> 
    console.log(props)
    if(props.game){
        return gameDetails()
    } else { 
        return <span>-CREATE NEW-</span>
    }
    
}

export default GameRoomCardFront
