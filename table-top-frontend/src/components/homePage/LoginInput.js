import React, { Component } from 'react'

class LoginInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        console.log(`setting ${event.target.id} state to ${event.target.value}`)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = {...this.state}
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return (
            <div id='login-form'>
                <h3>Welcome To Table Top!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' onChange={this.handleChange} value={this.state.username}/>
                    <p/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' onChange={this.handleChange} value={this.state.password}/>
                    <p/>
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default LoginInput