import React, { Component } from 'react'


class ChatBox extends Component{

    handleSubmit = event => {
        event.preventDefault()
    }
    
    render = () => <div id='chat-box'>
        <form onSubmit = {this.handleSubmit}>
            <input type='textarea'></input>
            <input type='submit' className='submitButton' /> 
        </form>
    </div>
}

export default ChatBox