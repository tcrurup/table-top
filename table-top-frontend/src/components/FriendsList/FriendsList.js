import React, { Component } from 'react'
import FetchRequest from "../../services/FetchRequest"
import FriendBox from "./FriendBox.js"

class FriendsList extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: "",
            friends: []
        }
    }

    get userId(){ return this.props.user.id }
    get searchInput(){ return this.state.searchInput }

    componentDidMount(){
        this.getFriends()
    }

    getFriends(){ 
        const fetch = FetchRequest.create('http://localhost:3001/friends/friends_of_user', { user_id: this.userId });
        fetch.onSuccess( response=> this.setState({ friends: response })) 
        fetch.startFetch()
    }

    searchForUser(){
        const fetch = FetchRequest.create('http://localhost:3001/friends/search', { user_id: this.userId, search_input: this.searchInput })
        fetch.startFetch()
    }

    handleChange = event => { event.preventDefault(); this.setState({ searchInput: event.target.value }); }
    handleSubmit = event => { 
        event.preventDefault();
        this.searchForUser()
    }

    render(){
        return(
            <div class="friends-list-container">
                <div class="friends-list-header">Your friends</div>
                <div class="friends-list">
                    { this.state.friends.map(friend => {
                        return <FriendBox key={friend.id} friend={friend}/>
                    })}
                </div>
                <div class="friends-list-search-box-container">
                    <input class="friends-list-search-box" type="text" onInput={this.handleChange} value={this.searchInput}/>
                    <button class="friends-list-search-submit" onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
    )}
}

export default FriendsList
