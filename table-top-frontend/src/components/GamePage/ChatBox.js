import React, { Component } from 'react'
import ChatConnection from '../../services/ChatConnection.js'
import ChatResponse from '../GamePage/ChatResponse.js'


class ChatBox extends Component{    
    
    constructor(){
        super()
        this.state = {
            message: '',
            responses: []        
        }
    }

    componentDidMount(){
        if(this.props.game.id !==""){
            this.connection = new ChatConnection(
                this.props.userId, 
                this.handleResponse
            )
            .openNewRoom(this.props.game.id)
        }
    }    

    handleSubmit = event => {
        event.preventDefault()
        this.connection.chat(this.state.message, this.props.game.id)
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            message: event.target.value
        })
    }

    handleResponse = response => {
        console.log(this.state)
        this.setState((prevState, props) => { 
            return {
                responses:[...prevState.responses, response] 
            }
        })
    }

    renderResponses = () => {
        return this.state.responses.map(response => <ChatResponse response={response}/>)
    }
    
    render = () => <div id='chat-box'>
         
         {this.renderResponses()}
        
        <form onSubmit = {this.handleSubmit}>    
            <input type='textarea' onChange={this.handleChange}></input>
            <input type='submit' className='submitButton' /> 
        </form>
    </div>
}

export default ChatBox