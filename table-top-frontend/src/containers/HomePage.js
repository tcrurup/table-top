import React, { Component } from 'react'
import GameRoomList from './GameRoomList.js'
import GamesUserIsPlayer from './GamesUserIsPlayer.js'
import { connect } from 'react-redux'

import { loadGame, createGame, deleteGame, focusCard, flipCardToFront } from '../actions/gameActions.js'


class HomePage extends Component{
    
    render(){
        return<>
            <h1>Hello {this.props.user.username} welcome to Table Top</h1>
            < GameRoomList
                user={this.props.user} 
                gameRooms={this.props.user.games} 
                loadGame = {this.props.loadGame}
                createGame = {this.props.createGame}
                deleteGame = {this.props.deleteGame}
                focusCard = {this.props.focusCard}
                flipCardToFront = {this.props.flipCardToFront}    
            />
            
            < GamesUserIsPlayer gameRooms ={this.props.user.games_a_part_of}/>
        </>
        
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: payload => dispatch(loadGame(payload)),
        createGame: payload => dispatch(createGame(payload)),
        deleteGame: payload => dispatch(deleteGame(payload)),
        focusCard: payload => dispatch(focusCard(payload)),
        flipCardToFront: payload => dispatch(flipCardToFront(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)