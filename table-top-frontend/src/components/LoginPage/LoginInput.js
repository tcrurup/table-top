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

    clearFields = () => this.setState({ username: '', password: '', email: ''})

    createEmailField = () => {
        if(this.state.type === 'SIGNUP'){
            return (
                <>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' onChange={this.handleChange} value={this.state.email}/>
                </>
            )
        }
    }

    createSubtext = () => {
        if(this.state.type === 'SIGNUP'){
            return <h5>Already a member? <a href='' onClick={this.toggleFormType}>Log in</a> </h5>
        } else {
            return <h5>Not a member? <a href='' onClick={this.toggleFormType}>Sign up</a> </h5>
        }    
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = {...this.state}
        console.log(`submitting login attempt with > username: ${formData.username} | password: ${formData.password}`)
        this.props.submit({ user: formData })
        this.clearFields()
    }

    toggleFormType = event => {
        event.preventDefault()
        let newType
        this.state.type === 'LOGIN' ? newType = 'SIGNUP' : newType = 'LOGIN'
        console.log(`setting form type to ${newType}`)
        this.setState({ type: newType })
    }

    render(){
        return (
            <div id='login-form'>
                <h3>Welcome To Table Top!</h3>
                <h5>{this.props.errors}</h5>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' onChange={this.handleChange} value={this.state.username}/>
                    <p/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' onChange={this.handleChange} value={this.state.password}/>
                    <p/>
                    <p> {this.createEmailField()} </p>
                    <input type='submit' value={this.state.type} />
                </form>

                {this.createSubtext()}
            </div>
        )
    }
}

export default LoginInput