import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadGame, createGame, focusCard } from '../actions/gameActions.js'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'
import './GameRoomList.css'

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
            <GameRoomCard game={game} focusCard={this.props.focusCard}/>
        )
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: payload => dispatch(loadGame(payload)),
        createGame: payload => dispatch(createGame(payload)),
        focusCard: payload => dispatch(focusCard(payload))
    }
}

export default connect(null, mapDispatchToProps)(GameRoomList)