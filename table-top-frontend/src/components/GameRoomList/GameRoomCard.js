import React, { Component } from 'react'
import GameRoomInput from './GameRoomInput.js'
import GameRoom from './GameRoom.js'
import './GameRoomList.css'
/********PROPS********\

game - Hash with game data from redux store
user - Hash with user data drom Redux Store
loadGame - function that loads game into redux state
createGame - function that create database on backend 
focusCard - function that will enlarge the card with passed game id and minimize others

\********PROPS********/

class GameRoomCard extends Component{

    render = () => this.html(this.props.game)
    
    
    focusCard = () => this.props.focusCard(this.props.game.id)
    
    gameDetails = () => <span>{this.props.game.game.name}</span>  

    
    cardFront = game => {
        if(game.has_game){
            return this.gameDetails()
        } else { 
            return <span>-CREATE NEW-</span>
        }
    }
    
    cardBack = game => {
        if(game.has_game){
            return <GameRoom 
                game={game} 
                loadGame={this.props.loadGame}
                deleteGame={this.props.deleteGame}    
            /> 
        } else {
            return <GameRoomInput 
                userId={this.props.user.id} 
                gameId={this.props.game.id} 
                onSubmit={this.props.createGame}
            />
        }
    }
    html = game => 
        <div 
            className={`game-rooms-container-card-empty ${game.focus ? 'flipped' : ''}`} 
            onClick={() => {
                if(game.focus == false){this.focusCard(game.id)}
            }}
        >

            <div className='flip-card'>
 
                <div className="flip-card-front">
                    {this.cardFront(game)}
                </div>
                <div className="flip-card-back">
                    <button class='minimize' onClick={() => this.props.flipToFront(this.props.game.id)}>-</button>
                    {this.cardBack(game)}
                </div>
            </div>

        </div>
}
export default GameRoomCard