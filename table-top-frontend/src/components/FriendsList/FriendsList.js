import React, { Component } from 'react'

class FriendsList extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: ""
        }
    }

    componentDidMount(){
        this.getFriends()
    }

    getFriends(){ console.log(this.props.user.username) }

    handleChange = event => { event.preventDefault(); this.setState({ searchInput: event.target.value }); }
    handleSubmit = event => { event.preventDefault(); console.log(this.state.searchInput) }

    render(){
        return(
            <div class="friends-list-container">
                <div class="friends-list-header">Your friends</div>
                <div class="friends-list">

                </div>
                <div class="friends-list-search-box-container">
                    <input class="friends-list-search-box" type="text" onInput={this.handleChange} value={this.searchInput}/>
                    <button class="friends-list-search-submit" onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
    )}
}

export default FriendsList