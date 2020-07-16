import React, { Component }from 'react'
import ChatConnection from '../services/ChatConnection.js'
import { connect } from 'react-redux'

class GamePage extends Component{

    constructor(){
        super()
        new ChatConnection(1, '')   
    }
    
    render = () => <div>{
        this.props.game.name 
    }</div>
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GamePage)