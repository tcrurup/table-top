import React, { Component } from 'react'
import ChatConnection from '../../services/ChatConnection.js'


class ChatBox extends Component{    
    
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    componentDidMount(){
        if(this.props.game.id !==""){
            this.connection = new ChatConnection(1, () => {}).openNewRoom(this.props.game.id)
        }
    }    

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.connection)
        this.connection.chat(this.state.message, this.props.game.id)
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            message: event.target.value
        })
    }
    
    render = () => <div id='chat-box'>
        <form onSubmit = {this.handleSubmit}>
            <input type='textarea' onChange={this.handleChange}></input>
            <input type='submit' className='submitButton' /> 
        </form>
    </div>
}

export default ChatBox