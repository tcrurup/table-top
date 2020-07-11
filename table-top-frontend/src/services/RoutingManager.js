import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class RoutingManager extends Component{

    constructor(props){
        super(props)
        this.state={
            route: '/login'
        }
    }

    render(){
        if(this.state.route){
            return <Redirect to= {this.state.route} />
        }
    }
   
}

export default RoutingManager