import React, { Component } from 'react'
import GameRoomList from './GameRoomList.js'
import GamesUserIsPlayer from './GamesUserIsPlayer.js'
import { connect } from 'react-redux'

class HomePage extends Component{
    
    render(){
        return(
            <>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                < GameRoomList gameRooms={this.props.user.games} />
                < GamesUserIsPlayer />
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HomePage)