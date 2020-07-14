import React, { Component } from 'react'
import FormCreator, { createFormField } from '../services/FormCreator.js'
/********PROPS********\
onSubmit - function that create database on backend 
\********PROPS********/

class GameRoomInput extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    render(){
        
        const formSchema = {
            onSubmit: this.handleSubmit,
            onChange: this.handleChange,
            fields: {
                ...createFormField('name', { value: this.state.name} )
            }
        }

        return <FormCreator formSchema={formSchema} />
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event =>{
        console.log(this.props)
        event.preventDefault()
        const data = {
            game: {
                ...this.state, 
                userId: this.props.userId,
                id: this.props.gameId
            }
        }
        console.log(data)
        this.props.onSubmit(data)
    }
}

export default GameRoomInput