import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attemptLogin } from '../actions/userActions.js'
import LoginInput from '../components/LoginPage/LoginInput.js'
import NavBar from './NavBar.js'
import '../styling/LoginPage.css'

class LoginPage extends Component{

    render= () => <div>
        <NavBar options={{}} />
        <LoginInput 
            submit={this.props.attemptLogin}
            errors={this.props.errors}
            requesting={this.props.requesting}
        />
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