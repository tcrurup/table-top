import React, { Component }from 'react'
import ChatConnection from '../services/ChatConnection.js'
import ChatBox from '../components/GamePage/ChatBox.js'
import { connect } from 'react-redux'
import './GamePage.css'

class GamePage extends Component{

    constructor(){
        super()  
    }
    
    renderChatBox = () => {
        if(this.props.game.id !==""){
            let connection = new ChatConnection(1,3).openNewRoom(this.props.game.id)
            return < ChatBox connection ={connection} /> 
        } 
    }
    
    
    render = () => <div id='game-page'>
        {this.props.game.name}
        {this.renderChatBox()}
    </div>
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GamePage)