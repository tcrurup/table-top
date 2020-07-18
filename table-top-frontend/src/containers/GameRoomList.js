import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadGame, createGame, deleteGame, focusCard, flipCardToFront } from '../actions/gameActions.js'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'


class GameRoomList extends Component{
    
    html = () => 
        <div className='game-rooms-container'>
            <h2>Your Games</h2>
            <div className = 'save-slots-container'>
                {this._createGameCard()}
            </div>
        </div> 
    
    
    render(){return this.html()}
    
    //********PRIVATE METHODS********\\
    
    _createGameCard(){
        return this.props.gameRooms.map( game =>
            <GameRoomCard 
                game={game}
                user={this.props.user} 
                focusCard={this.props.focusCard}
                loadGame={this.props.loadGame}
                createGame={this.props.createGame}
                deleteGame={this.props.deleteGame}
                flipToFront={this.props.flipCardToFront}    
            />
        )
    }   
}



export default GameRoomList