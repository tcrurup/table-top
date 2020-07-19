import React from 'react'
import GameRoomCard from './GameRoomCard.js'
import ListRow from './GameRoomList/ListRow.js'


const GameRoomList = props => {
    
    const createGameCard = () => {
        return props.gameRooms.map( game_room => {
            console.log(game_room)
            return <GameRoomCard 
                game_room={game_room}
                user={props.user} 
                focusCard={props.focusCard}
                loadGame={props.loadGame}
                createGame={props.createGame}
                deleteGame={props.deleteGame}
                flipToFront={props.flipCardToFront}    
            />
        })
    }

    const createGamesWithCharactersList = () => {
        return props.gamesWithCharacters.map( game => {
            return < ListRow game={game} loadGame={() => props.loadGame(game)}/>
        })
    }
    
    return <div className='game-rooms-container'>
        <h2>Your Games</h2>
        <div className = 'save-slots-container'>
            {createGameCard()}
        </div>
        <div className = 'games-with-characters_list' >
            <h2>Games You Are Playing</h2>
            {createGamesWithCharactersList()}
        </div>
    </div> 

}



export default GameRoomList