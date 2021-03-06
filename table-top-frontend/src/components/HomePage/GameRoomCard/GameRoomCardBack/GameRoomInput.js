import React, { Component } from 'react'
import FormCreator, { createInputWithLabel } from '../../../FormCreator/FormCreator.js'
import CreateFormSchema from '../../../FormCreator/CreateFormSchema.js'


/********PROPS********\
onSubmit - function that create database on backend
gameId - the games id given from the server
userId - the user id given from the server
flipToFront(gameId) - function that flips the game card with the corresponding id to
    the front
\********PROPS********/

class GameRoomInput extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }
    
    render = () => <>
        <form>
            {createInputWithLabel('text', 'name', 'Name:', this.state.name, this.handleChange)}
            
            <div class='button-container'>
                <button type='button' onClick={this.handleSubmit}>SUBMIT</button>            
            </div>
            
        </form>
    </>
    

    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event =>{
        event.preventDefault()
        const data = {
            ...this.state, 
            user_id: this.props.userId,
            id: this.props.gameId
        }
        this.props.onSubmit(data)
    }
}

export default GameRoomInput