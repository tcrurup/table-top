import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadGame, createGame, focusCard } from '../actions/gameActions.js'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'
import './GameRoomList.css'

class GameRoomList extends Component{
    
    gameCard(){
        return this.props.gameRooms.map( game =>{
            return <GameRoomCard 
                game={game} 
                focusCard={this.props.focusCard} 
            />
        })
    }
    
    render(){
        return(
            <div className='game-rooms-container'>
                {console.log(this.props)}
                <h2>Games You're Running</h2>
                {this.gameCard()}
            </div>
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