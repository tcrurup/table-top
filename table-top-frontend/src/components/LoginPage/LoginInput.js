import React, { Component } from 'react'
import FormCreator from '../FormCreator/FormCreator.js'
import CreateFormSchema from '../FormCreator/CreateFormSchema.js'
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
            email: '',
            type: 'LOGIN',
        }
    }

    render = () => <div id='login-form'>
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
                <h3>Welcome To Table Top!</h3>
                <h5>{this.props.errors}</h5>
                {this.createForm()}
                <h5>{this.subtext()}</h5>
            </> 
        }
    }
    
    createForm(){  
        let schema = new CreateFormSchema(this.handleSubmit, this.handleChange)
        .addFieldToSchema('text', 'username', this.state.username, 'Username:  ')
        .addFieldToSchema('password', 'password', this.state.password, 'Password:  ')
        if(this.state.type === 'SIGNUP'){ 
            schema.addFieldToSchema('email', 'email', this.state.email, "Email:  ")
        }
        return <FormCreator formSchema={schema} />
    }

    clearFields = () => this.setState({ username: '', password: '', email: ''})

    subtext = () => <>
        {this.state.type === 'SIGNUP' ? 'Already signed up?  ' : 'Not signed up yet?  '} 
        <button 
            type='button' 
            className='link' 
            onClick={this.toggleFormType} 
        > {this.state.type === 'SIGNUP ? ' ? 'Log in' : 'Sign Up'} 
        </button> 
    </>
    
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