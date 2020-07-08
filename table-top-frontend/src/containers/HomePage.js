import React, { Component } from 'react'

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

        fetch('http://localhost:3001/users/login', config)
        .then( response => response.json() )
        .then( object => console.log(object))
    }

    render(){
        return(
            <div>
                {`Hello ${this.state.user}`}
            </div>
        )
    }
}

export default HomePage