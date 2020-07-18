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

    render = () => this.html(this.props.game)
    
    
    focusCard = () => this.props.focusCard(this.props.game.id)
    
     

    
    

    html = game => 
        <div 
            className={`game-rooms-container-card-empty ${game.focus ? 'flipped' : ''}`} 
            onClick={() => {
                if(game.focus == false){this.focusCard(game.id)}
            }}
        >

            <div className='flip-card'>
 
                <div className="flip-card-front">
                    <GameRoomCardFront game={game} />
                </div>
                <div className="flip-card-back">
                    <button class='minimize' onClick={() => this.props.flipToFront(this.props.game.id)}>-</button>
                    < GameRoomCardBack 
                        game={game}
                        user={this.props.user}
                        deleteGame = {this.props.deleteGame} 
                        loadGame ={this.props.loadGame}
                        createGame ={ this.props.createGame}
                    />
                </div>
            </div>

        </div>
}
export default GameRoomCard