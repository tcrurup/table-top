import React, { Component } from 'react'
import GameRoomList from '../components/GameRoomList/GameRoomList.js'
import { loadGame } from '../actions/gameActions.js'
import { connect } from 'react-redux'

class HomePage extends Component{


    
    render(){
        return(
            <>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                <GameRoomList 
                    gameRooms={this.props.user.games} 
                    onRoomClick={ gameRequest => this.props.loadGame(gameRequest) }/>
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
        loadGame: gameRequest => dispatch(loadGame(gameRequest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)