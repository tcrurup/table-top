import React, { Component } from 'react'
import './LoginPage.css'
import FormCreator from '../services/FormCreator.js'

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
            onSubmit: this.handleSubmit,
            fields: {
                Username: { type:'text', id:'username', value: this.state.username},
                Password: { type: 'password', id:'password', value: this.state.password},
            },
            onChange: this.handleChange
        }
        if(this.state.type === 'SIGNUP'){
            formSchema = {
                ...formSchema,
                fields: {
                    ...formSchema.fields,
                    Email: { type:'email', id:'email', value: this.state.email}
                }   
            }
        }
        console.log(formSchema)
        return <FormCreator formSchema={formSchema} />
    }

    clearFields = () => this.setState({ username: '', password: '', email: ''})

    inputWithLabel(type, id, label, value){  
        return(
            <div className='form-input'>
                <label htmlFor={id}>{label}</label>
                <span className='whitespace' />
                <input 
                    type={type} 
                    id={id} 
                    value={value} 
                    onChange={this.handleChange}
                />
            </div>
        )
    }

    emailField = () => {
        if(this.state.type === 'SIGNUP'){
            return this.inputWithLabel('email', 'email', 'Email: ', this.state.email, this.handleChange)    
        }
    }

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
        console.log(`EVENT: handleChange : ${event.target}`)
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