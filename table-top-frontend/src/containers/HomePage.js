import React, { Component } from 'react'
import GameRoomList from '../components/HomePage/GameRoomList.js'
import NavBar from './NavBar.js'
import FriendsList from '../components/FriendsList/FriendsList.js'
import { connect } from 'react-redux'
import { loadGame, createGame, deleteGame, focusCard, flipCardToFront } from '../actions/gameActions.js'
import { logout, deleteUser } from '../actions/userActions.js'
import '../styling/GameRoomList.css'
import '../styling/AppStyling.css'

class HomePage extends Component{
    
    navBarOptions = () => {
        return {
            'Log Out': this.props.logOutUser,
            'Delete Account' : () => this.props.deleteUser(this.props.user.id)
        }
    }
    
    render(){
        return<>
            <NavBar 
                options={this.navBarOptions()}
            />
            <div class='column left'></div>
            <div class='column middle'>
                <h1>Hello {this.props.user.username} welcome to Table Top</h1>
                < GameRoomList
                    user={this.props.user} 
                    gameRooms={this.props.user.game_rooms}
                    gamesWithCharacters={this.props.user.games_user_part_of} 
                    loadGame = {this.props.loadGame}
                    createGame = {this.props.createGame}
                    deleteGame = {this.props.deleteGame}
                    focusCard = {this.props.focusCard}
                    flipCardToFront = {this.props.flipCardToFront}    
                />
            </div>
            <div class="column right">
                < FriendsList user={this.props.user}/>
            </div>
        </> 
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadGame: payload => dispatch(loadGame(payload)),
        createGame: payload => dispatch(createGame(payload)),
        deleteGame: payload => dispatch(deleteGame(payload)),
        focusCard: payload => dispatch(focusCard(payload)),
        flipCardToFront: payload => dispatch(flipCardToFront(payload)),
        deleteUser: userId => dispatch(deleteUser(userId)),
        logOutUser: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)