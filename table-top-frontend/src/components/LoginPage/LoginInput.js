import React, { Component } from 'react'

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
                <form onSubmit={this.handleSubmit}>
                    {this.inputWithLabel('text', 'username', 'Username: ', this.state.username)}
                    {this.inputWithLabel('password', 'password', 'Password: ', this.state.password)}
                    {this.emailField()} 
                    <input type='submit' value={this.state.type} />
                </form>

                <h5>{this.subtext()}</h5>
            </div>
        )
    }

    clearFields = () => this.setState({ username: '', password: '', email: ''})

    inputWithLabel(type, id, label, value){  
        return(
            <>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={value} onChange={this.handleChange}/>
            </>
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
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.submit({ user: {...this.state} })
        this.clearFields()
    }

    toggleFormType = event => {
        event.preventDefault()
        this.state.type === 'LOGIN' ? this.setState({ type: "SIGNUP" }) : this.setState({ type: "LOGIN" })
    }    
}

export default LoginInput