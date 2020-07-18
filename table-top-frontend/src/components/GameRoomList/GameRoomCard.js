import React, { Component } from 'react'
import GameRoomCardBack from './GameRoomCard/GameRoomCardBack'
import GameRoomCardFront from './GameRoomCard/GameRoomCardFront'
import './GameRoomList.css'
/********PROPS********\

game - Hash with game data from redux store
user - Hash with user data drom Redux Store
loadGame - function that loads game into redux state
createGame - function that create database on backend 
focusCard - function that will enlarge the card with passed game id and minimize others

\********PROPS********/

class GameRoomCard extends Component{

    render = () => <div 
        className={this.className()} 
        onClick={this.focusCard}
    >

    <div className='flip-card'>
        <div className="flip-card-front">
            <GameRoomCardFront game={this.props.game} />
        </div>
        <div className="flip-card-back">
            <button class='minimize' onClick={() => this.props.flipToFront(this.props.game.id)}>-</button>
            < GameRoomCardBack 
                game={this.props.game}
                user={this.props.user}
                deleteGame = {this.props.deleteGame} 
                loadGame ={this.props.loadGame}
                createGame ={ this.props.createGame}
            />
        </div>
    </div>
    </div>

    className = () => `game-rooms-container-card-empty ${this.props.game.focus ? 'flipped' : ''}`
    
    focusCard = () => {
        if(this.props.game.focus == false){
            return this.props.focusCard(this.props.game.id)
        }
    }
        
}
export default GameRoomCard