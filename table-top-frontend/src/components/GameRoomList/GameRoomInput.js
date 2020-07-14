import React, { Component } from 'react'
import FormCreator, { createFormField } from '../services/FormCreator.js'

class GameRoomInput extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    render(){
        
        const formSchema = {
            fields: {
                ...createFormField('name', { value: this.state.name} )
            }
        }
        
        return(
            <FormCreator formSchema={formSchema} />
        )
    }
}

export default GameRoomInput