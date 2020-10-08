import React, { Component } from 'react'
import NavOption from './NavOption.js'

class Bar extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isHidden: true
        }
    }

    get className(){ return `navbar scrolled-${this.state.isHidden ? "up" : "down"}` }

    render(){ 
     return( 
     <div className='navbar container'
        onMouseEnter={() => this.setState({ isHidden: false })}
        onMouseLeave={() => this.setState({ isHidden: true })}   
    >
        <div id='navbar' className={this.className}>
        {
            Object.keys(this.props.options).map( key => {
                return <NavOption name={key} onClick={this.props.options[key]} />
            })
        }
        </div>
    </div>
    )}

} 

export default Bar
