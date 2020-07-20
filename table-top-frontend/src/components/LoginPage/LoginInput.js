import React, { Component } from 'react'
import { createInputWithLabel } from '../FormCreator/FormCreator.js'
import { serializeLoginAttempt } from '../../services/serializers'
import SpinningLoader from '../SpinningLoader/SpinningLoader.js'




/********PROPS********\

    errors - hash containing any errors that were received from the server
    submit - calls the dispatch action to submit details to backend

\********PROPS********/
const loginInputDefault = {
    username: '',
    password: '',
    passwordConfirm: '',
    formError: false,
    email: '',
    type: 'LOGIN',
}

class LoginInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            ...loginInputDefault
        }
    }

    render = () => <>
        <div id='login-form'>
            <h3>Welcome To Table Top!</h3> 
            <span class='error'>{this.state.backendErrors}</span>
            <span className='error'> {this.state.formError} </span>
            {this.displayForm()}
        </div>
    </>
      
    /***************************************/

    displayForm = () => { 
        if(this.props.requesting){
            return < SpinningLoader backgroundColor='gray' spinnerColor='blue' />
        } else {
            return <>
                <form onSubmit={this.handleSubmit}>
                    {createInputWithLabel('text', 'username', 'Username: ', this.state.username, this.handleChange)  /*Imported function*/}  
                    {createInputWithLabel('password', 'password', 'Password: ', this.state.password, this.handleChange) /*Imported function*/}
                    {this.conditionalSignUpFields()}
                    <input type='submit' id='button' value="SUBMIT" />
                    <h5>{this.formFooter()}</h5>
                </form>
            </>
        }        
    }

    handleSubmit = event => {

        const verified = () => {
            let verified = true
        if(this.state.type === 'SIGNUP'){
            if(this.state.password !== this.state.passwordConfirm){ 
                this.setState({ formError: 'Passwords need to match' })
                verified = false
            }
        }
        return verified
        }

        event.preventDefault()
        if(verified()){  
            this.props.submit(serializeLoginAttempt(this.state) /*Imported function*/)
            this.setState({...loginInputDefault})//Reset form state and fields
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.id]: event.target.value })
    }

    conditionalSignUpFields = () => {
        if(this.state.type === 'SIGNUP'){
            return <>
                <div className='form-input'>
                    <label htmlFor={'passwordConfirm'}>{'Confirm: '}</label>
                    <input
                        className={this.state.password === this.state.passwordConfirm ? 'match' : 'no-match' } 
                        type='password' 
                        id='passwordConfirm' 
                        value={this.state.passwordConfirm} 
                        onChange={this.handleChange}
                    />
                </div>
                <span className='password-confirm-subtext'>
                    {this.state.password === this.state.passwordConfirm ? null : 'passwords do not match' }
                </span>
                {createInputWithLabel('email', 'email', 'Email: ', this.state.email, this.handleChange) /*Imported function*/}
            </>
        } else {return null}
    }    

    formFooter = () => {
         
        const toggleFormType = event => {
            event.preventDefault()
            this.state.type === 'LOGIN' ? this.setState({ type: "SIGNUP" }) : this.setState({ type: "LOGIN" })
        }

        return <>
            {this.state.type === 'SIGNUP' ? 'Already signed up?  ' : 'Not signed up yet?  '} 
            <button 
                type='button' 
                className='link' 
                onClick={toggleFormType} 
            > {this.state.type === 'SIGNUP' ? 'Log in' : 'Sign Up'} 
            </button> 
        </>
    }

    

    
    
    

    

      
}

export default LoginInput