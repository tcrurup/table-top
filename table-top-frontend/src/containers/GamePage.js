import React, { Component }from 'react'
import ChatBox from '../components/GamePage/ChatBox.js'
import { connect } from 'react-redux'
import './GamePage.css'

class GamePage extends Component{

    renderChatBox = () => {
       
            return < ChatBox 
                game={this.props.game}
            /> 
        
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