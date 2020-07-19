import React from 'react'
import GameRoomCardBack from './GameRoomCard/GameRoomCardBack'
import GameRoomCardFront from './GameRoomCard/GameRoomCardFront'

/********PROPS********\

game - Hash with game data from redux store
user - Hash with user data drom Redux Store
loadGame - function that loads game into redux state
createGame - function that create database on backend 
focusCard - function that will enlarge the card with passed game id and minimize others

\********PROPS********/

const GameRoomCard = props =>{

    const className = () => `game-rooms-container-card-empty ${props.game_room.focus ? 'flipped' : ''}`
    
    const focusCard = () => {
        console.log(props)
        if(props.game_room.focus == false){
            return props.focusCard(props.game_room.id)
        }
    }
    
    return <>
        <div className={className()} onClick={focusCard}>
            <div className='flip-card'>
                <div className="flip-card-front">
                    <GameRoomCardFront game={props.game_room.game} />
                </div>
                <div className="flip-card-back">
                    <button class='minimize' onClick={() => props.flipToFront(props.game_room.id)}>-</button>
                    < GameRoomCardBack 
                        game_room={props.game_room}
                        user={props.user}
                        deleteGame = {props.deleteGame} 
                        loadGame ={props.loadGame}
                        createGame ={props.createGame}
                    />
                </div>
            </div>
        </div>
    </>

    
        
}
export default GameRoomCard