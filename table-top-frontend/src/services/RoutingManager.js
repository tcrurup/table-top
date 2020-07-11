import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class RoutingManager extends Component{
    render(){
        console.log(`rendering route ${this.props.route}`)
        if(this.props.route){ return <Redirect to= {this.props.route} /> }
    }
}

const mapStateToProps = state => { return {route: state.user.view.route} }

export default connect(mapStateToProps)(RoutingManager)