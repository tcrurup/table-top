import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadGame, createGame, focusCard } from '../actions/gameActions.js'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'
import './GameRoomList.css'

class GameRoomList extends Component{


    
    render(){
        return(
            <div className='game-rooms-container'>
                {console.log(this.props)}
                <h2>Games You're Running</h2>
                {this.props.gameRooms.map( game => <GameRoomCard game={game} focus={this.props.focusCard}/> )}
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