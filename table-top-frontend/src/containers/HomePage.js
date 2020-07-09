import React, { Component } from 'react'
import { connect } from 'react-redux'
import { attemptLogin } from '../actions/userActions.js'
import LoginInput from '../components/homePage/LoginInput.js'

class HomePage extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: "World!",
        }
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