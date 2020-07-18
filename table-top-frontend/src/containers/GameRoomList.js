import React from 'react'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'


const GameRoomList = props => {
    
    const createGameCard = () => {
        return props.gameRooms.map( game =>
            <GameRoomCard 
                game={game}
                user={props.user} 
                focusCard={props.focusCard}
                loadGame={props.loadGame}
                createGame={props.createGame}
                deleteGame={props.deleteGame}
                flipToFront={props.flipCardToFront}    
            />
        )
    }
    
    return <div className='game-rooms-container'>
        <h2>Your Games</h2>
        <div className = 'save-slots-container'>
            {createGameCard()}
        </div>
    </div> 

}



export default GameRoomList