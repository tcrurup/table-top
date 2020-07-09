import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attemptLogin } from '../actions/userActions.js'
import LoginInput from '../components/homePage/LoginInput.js'
import { loginUrl } from '../backendRouting.js'

class HomePage extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: "World!",
        }
    }

    componentDidMount(){

        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        fetch(loginUrl(), config)
        .then( response => response.json() )
        .then( object => console.log(object))
    }

    render(){
        return(
            <div>
                {`Hello ${this.state.user}`}
                < LoginInput submit={this.props.attemptLogin}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        attemptLogin: userCredentials => dispatch(attemptLogin(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(HomePage)