import React, { Component } from 'react'
import GameRoomList from '../components/GameRoomList/GameRoomList.js'
import { loadGame, createGame } from '../actions/gameActions.js'
import { connect } from 'react-redux'

class HomePage extends Component{

    createOrLoadGame = gameDetails => {
        if(gameDetails.has_game === true){
            this.props.loadGame(gameDetails)
        } else {
            this.props.createGame(gameDetails)
        }
    }
    
    render(){
        return(
            <>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                <GameRoomList 
                    gameRooms={this.props.user.games} 
                    onRoomClick={ this.createOrLoadGame }
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
        loadGame: gameRequest => dispatch(loadGame(gameRequest)),
        createGame: payload => dispatch(createGame(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)