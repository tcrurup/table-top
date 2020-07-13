import React, { Component } from 'react'
import GameRoomList from '../components/GameRoomList/GameRoomList.js'
import { loadGame, createGame } from '../actions/gameActions.js'
import { connect } from 'react-redux'

class HomePage extends Component{

    createOrLoadGame = gameDetails => {

        let payload = {
            game: {
                ...gameDetails,
                userId: this.props.user.id
            },            
        }

        if(gameDetails.has_game === true){
            this.props.loadGame(payload)
        } else {
            this.props.createGame(payload)
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
        loadGame: payload => dispatch(loadGame(payload)),
        createGame: payload => dispatch(createGame(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)