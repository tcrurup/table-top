import React, { Component } from 'react'
import GameRoomCard from '../components/GameRoomList/GameRoomCard.js'
import { loadGame, flipCardToFront } from '../actions/gameActions.js'
import { connect } from 'react-redux'

class GamesUserIsPlayer extends Component{

    renderGameCards(){
        return this.props.gameRooms.map( game =>
            <div onClick={() => this.props.loadGame(game)}>{game.name}</div>
        )
    }
    
    render(){
        return <div>
            {this.renderGameCards()}
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: payload => dispatch(loadGame(payload)),
        flipCardToFront: payload => dispatch(flipCardToFront(payload))
    }
}

export default connect(null, mapDispatchToProps)(GamesUserIsPlayer)