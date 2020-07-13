import React, { Component } from 'react'
import GameRoomList from '../components/GameRoomList/GameRoomList.js'
import { loadGame, createGame } from '../actions/gameActions.js'
import { connect } from 'react-redux'

class HomePage extends Component{
    
    render(){
        return(
            <>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                <GameRoomList 
                    gameRooms={this.props.user.games} 
                    createGame={this.props.createGame}
                    loadGame={this.props.loadGame}
                />
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: payload => dispatch(loadGame(payload)),
        createGame: payload => dispatch(createGame(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)