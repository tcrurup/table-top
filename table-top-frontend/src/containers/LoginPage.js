import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attemptLogin } from '../actions/userActions.js'
import LoginInput from '../components/LoginPage/LoginInput.js'
import D6Dice from '../components/Dice/D6Dice.js'
import '../styling/LoginPage.css'

class LoginPage extends Component{

    render= () => <div>
        <LoginInput 
            submit={this.props.attemptLogin}
            backendErrors={this.props.errors}
            requesting={this.props.requesting}
        />
        <D6Dice />
    </div>      
}

const mapStateToProps = state => {
    return{
        errors: state.user.errors,
        requesting: state.user.requesting
    }
}

const mapDispatchToProps = dispatch => {
    return{
        attemptLogin: userCredentials => dispatch(attemptLogin(userCredentials)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)