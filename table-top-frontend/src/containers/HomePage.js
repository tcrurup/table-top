import React, { Component } from 'react'
import GameRoomSelector from '../components/GameRoomSelector/GameRoomSelector.js'
import { connect } from 'react-redux'

class HomePage extends Component{

    render(){
        return(
            <>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                <GameRoomSelector gameRooms='testing'/>
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