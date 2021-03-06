import React, { Component }from 'react'
import ChatBox from '../components/GamePage/ChatBox.js'
import NavBar from './NavBar.js'
import { connect } from 'react-redux'
import { unloadGame } from '../actions/gameActions.js'
import '../styling/GamePage.css'

class GamePage extends Component{

    renderChatBox = () => < ChatBox 
        userId = {this.props.userId}
        game={this.props.game}
    />    
    
    render = () => <>
        <NavBar options={{ "Homepage": this.props.unloadGame }} />
        <div id='game-page'>
            {this.props.game.name}
            {this.renderChatBox()}
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        userId: state.user.id,
        game: state.game
    }
}


const mapDispatchToProps = dispatch => {
    return {
        unloadGame: () => dispatch(unloadGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)