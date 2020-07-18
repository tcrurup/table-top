import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attemptLogin } from '../actions/userActions.js'
import LoginInput from '../components/LoginPage/LoginInput.js'
import NavBar from './NavBar.js'
import './LoginPage.css'

class LoginPage extends Component{

    render= () => <div>
        <NavBar options={{}} />
        <LoginInput 
            submit={this.props.attemptLogin}
            errors={this.props.errors}
        />
    </div>      
}

const mapStateToProps = state => {
    return{
        errors: state.user.errors
    }
}

const mapDispatchToProps = dispatch => {
    return{
        attemptLogin: userCredentials => dispatch(attemptLogin(userCredentials)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)