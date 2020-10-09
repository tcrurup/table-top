import React, { Component } from 'react'

class FriendsList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="friends-list-container">
                <div class="friends-list-header">Your friends</div>
                <div class="friends-list">

                </div>
                <div class="friends-list-search-box-container">
                    <input class="friends-list-search-box" type="text"/>
                    <button class="friends-list-search-submit">Search</button>
                </div>
            </div>
    )}
}

export default FriendsList