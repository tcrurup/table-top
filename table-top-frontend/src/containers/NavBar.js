import '../styling/NavBar.css'
import Bar from '../components/NavBar/Bar.js'

import React, { Component } from 'react'

class NavBar extends Component{
    
    render(){
        return <Bar options={this.props.options} />
    }
}

export default NavBar