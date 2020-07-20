import React, { Component } from 'react'
import { createInputWithLabel } from '../FormCreator/FormCreator.js'
import SpinningLoader from '../SpinningLoader/SpinningLoader.js'




/********PROPS********\

    errors - hash containing any errors that were received from the server
    submit - calls the dispatch action to submit details to backend

\********PROPS********/

class LoginInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            formError: false,
            email: '',
            type: 'LOGIN',
        }
    }

    render = () => <div id='login-form'>
        <h3>Welcome To Table Top!</h3>
        {this.props.errors.map(error => <span class='error'>{error}</span>)}
        {this.displayErrors()}
        {this.display()}
    </div>
    

    display(){
        if(this.props.requesting){
            return < SpinningLoader 
                backgroundColor='gray'
                spinnerColor='blue'
            />
        } else {
            return <> 
                {this.createForm()}
                <h5>{this.subtext()}</h5>
            </> 
        }
    }
    
    createForm(){  
        return <form onSubmit={this.handleSubmit}>
            {createInputWithLabel('text', 'username', 'Username: ', this.state.username, this.handleChange)}
            {createInputWithLabel('password', 'password', 'Password: ', this.state.password, this.handleChange)}
            {this.state.type === 'SIGNUP' ? this.additionSignUpFields() : null}
            <input type='submit' id='button' value="SUBMIT" />
        </form>
    }

    clearFields = () => this.setState({ username: '', password: '', passwordConfirm:'', email: ''})
    confirmPasswords = () => this.state.password === this.state.passwordConfirm
    
    displayErrors = () => {
        if(this.state.formError){
            return <span className='error'>
                {this.state.formError}    
            </span>
        }
    }

    additionSignUpFields = () => <>
        {this.passwordConfirmField()}
        {createInputWithLabel('email', 'email', 'Email: ', this.state.email, this.handleChange)}
    </>

    passwordConfirmField = () => <>
        <div className='form-input'>
            <label htmlFor={'passwordConfirm'}>{'Confirm: '}</label>
            <input
                className={this.confirmPasswords() ? 'match' : 'no-match' } 
                type='password' 
                id='passwordConfirm' 
                value={this.state.passwordConfirm} 
                onChange={this.handleChange}
            />
            
        </div>
        <span className='password-confirm-subtext'>
            {!this.confirmPasswords() ? 'passwords do not match' : null }
        </span>
    </>

    subtext = () => <>
        {this.state.type === 'SIGNUP' ? 'Already signed up?  ' : 'Not signed up yet?  '} 
        <button 
            type='button' 
            className='link' 
            onClick={this.toggleFormType} 
        > {this.state.type === 'SIGNUP ? ' ? 'Log in' : 'Sign Up'} 
        </button> 
    </>

    formIsVerified = () =>{
        let verified = true

        if(this.state.type === 'SIGNUP'){
            if(this.state.password !== this.state.passwordConfirm){ 
                this.setFormError('Passwords need to match')
                verified = false
            }
        }

        return verified
    }

    setFormError = message => this.setState({ formError: message })
    clearErrors = () => this.setState({ formError: [] })
    
    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.clearErrors()
        if(this.formIsVerified()){  
            this.props.submit({ user: {...this.state} })
            this.clearFields()
        }
    }

    toggleFormType = event => {
        event.preventDefault()
        this.state.type === 'LOGIN' ? this.setState({ type: "SIGNUP" }) : this.setState({ type: "LOGIN" })
    }    
}

export default LoginInput