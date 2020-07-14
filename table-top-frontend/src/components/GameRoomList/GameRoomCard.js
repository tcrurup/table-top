import React, { Component } from 'react'
import GameRoomInput from './GameRoomInput.js'
import GameRoom from './GameRoom.js'
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
            flipped: false
        }
    }

    render = () => this.html(this.props.game)

    focusCard = () => this.props.focusCard(this.props.game.id)
    cardBack = game => game.has_game ? <GameRoom game={game} loadGame={this.props.loadGame}/> : <GameRoomInput userId={this.props.user.id} gameId={this.props.game.id} onSubmit={this.props.createGame}/>
    cardFront = () => (this.props.game.has_game ?  this.gameDetails() : <span>-CREATE NEW-</span>)
    gameDetails = () => <span>{this.props.game.name}</span>
    html = game => 
        <div 
            className={`game-rooms-container-card-empty ${game.focus ? 'flipped' : ''}`} 
            onClick={() => this.focusCard(game.id)}
        >

            <div className='flip-card'> 
                <div className="flip-card-front">
                    {this.cardFront()}
                </div>
                <div className="flip-card-back">
                    {this.cardBack(game)}
                </div>
            </div>

        </div>
}
export default GameRoomCard