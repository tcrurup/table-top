import React, { Component } from 'react'
import './LoginPage.css'
import FormCreator, { createField } from '../services/FormCreator.js'

class LoginInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            type: 'LOGIN',
        }
    }


    render(){
        return (
            <div id='login-form'>
                <h3>Welcome To Table Top!</h3>
                <h5>{this.props.errors}</h5>
                {this.createForm()}
                <h5>{this.subtext()}</h5>
            </div>
        )
    }

    createForm(){  
        let formSchema = {
            fields: {
                ...createField('username'),
                ...createField('password')
            },
            onSubmit: this.handleSubmit,
            onChange: this.handleChange                       
        }

        if(this.state.type === 'SIGNUP'){ 
            formSchema.fields = {...formSchema.fields, ...createField('password')}
        }

        return <FormCreator formSchema={formSchema} />
    }

    clearFields = () => this.setState({ username: '', password: '', email: ''})

    subtext = () => {
        let text, buttonText
        if(this.state.type === 'SIGNUP'){
            text = 'Already signed up?  '
            buttonText = 'Log in'
        } else {
            text = 'Not signed up yet?  '
            buttonText = 'Sign Up'
        }
        return(
            <>
                {text} 
                <button 
                    type='button' 
                    className='link' 
                    onClick={this.toggleFormType} 
                > {buttonText} </button> 
            </>
        )  
    }

    handleChange = event => {
        event.preventDefault()
        console.log(`EVENT: handleChange : ${event.target.value}`)
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.submit({ user: {...this.state} })
        this.clearFields()
    }

    toggleFormType = event => {
        event.preventDefault()
        console.log(`Toggling form type from ${this.state.type}`)
        this.state.type === 'LOGIN' ? this.setState({ type: "SIGNUP" }) : this.setState({ type: "LOGIN" })
    }    
}

export default LoginInput