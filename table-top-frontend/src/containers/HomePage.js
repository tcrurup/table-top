import React, { Component } from 'react'
import GameRoomList from '../components/HomePage/GameRoomList.js'
import NavBar from './NavBar.js'
import { connect } from 'react-redux'
import { loadGame, createGame, deleteGame, focusCard, flipCardToFront } from '../actions/gameActions.js'
import { logout, deleteUser } from '../actions/userActions.js'
import '../styling/GameRoomList.css'

class HomePage extends Component{
    
    navBarOptions = () => {
        return {
            'Log Out': this.props.logOutUser,
            'Delete Account' : () => this.props.deleteUser(this.props.user.id)
        }
    }
    
    render(){
        console.log(this.navBarOptions())
        return<>
            <NavBar 
                options={this.navBarOptions()}
            />
            <h1>Hello {this.props.user.username} welcome to Table Top</h1>
            < GameRoomList
                user={this.props.user} 
                gameRooms={this.props.user.game_rooms}
                gamesWithCharacters={this.props.user.games_a_part_of} 
                loadGame = {this.props.loadGame}
                createGame = {this.props.createGame}
                deleteGame = {this.props.deleteGame}
                focusCard = {this.props.focusCard}
                flipCardToFront = {this.props.flipCardToFront}    
            />
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