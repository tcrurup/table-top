import React, { Component } from 'react'

class HomePage extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: "World!"
        }
    }

    render(){
        return(
        <div>{`Hello ${this.state.user}`}</div>
        )
    }
}

export default HomePage