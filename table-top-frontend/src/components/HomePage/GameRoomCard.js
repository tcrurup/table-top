import React, { Component } from 'react'
import GameRoomCardBack from './GameRoomCard/GameRoomCardBack'
import GameRoomCardFront from './GameRoomCard/GameRoomCardFront'

/********PROPS********\

game - Hash with game data from redux store
user - Hash with user data drom Redux Store
loadGame - function that loads game into redux state
createGame - function that create database on backend 
focusCard - function that will enlarge the card with passed game id and minimize others

\********PROPS********/

class GameRoomCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            rating: 0,
            userRated: false
        }
    }
    
    className = () => `game-rooms-container-card-empty ${this.props.game_room.focus ? 'flipped' : ''}`
    
    focusCard = () => {
        if(this.props.game_room.focus == false){
            return this.props.focusCard(this.props.game_room.id)
        }
    }

    render(){
        return <div className={this.className()} onClick={this.focusCard}>
            <div className='flip-card'>
                <div className="flip-card-front">
                    <GameRoomCardFront game={this.props.game_room.game} />
                </div>
                <div className="flip-card-back">
                    <button class='minimize' onClick={() => this.props.flipToFront(this.props.game_room.id)}>-</button>
                    < GameRoomCardBack 
                        game_room={this.props.game_room}
                        user={this.props.user}
                        deleteGame = {this.props.deleteGame} 
                        loadGame ={this.props.loadGame}
                        createGame ={this.props.createGame}
                    />
                </div>
            </div>
        </div>
    }

    
        
}
export default GameRoomCard