import { serializePostData, serializeUserGames } from '../services/serializers.js'
import FetchRequest from '../services/FetchRequest'

export function loadGame(gameData){
    
    const success = () => {
        console.log('success')
    }

    const failure = () => {
        console.log('success')
    }
    
    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        new FetchRequest('http://localhost:3001/games/load', gameData)
        .onSuccess(success)
        .onFailure(failure)
        .send()   
    }
}

export function deleteGame(gameData){
    console.log("ACTION: DELETE_GAME")
    const serialize = body => {
        return({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    
    return (dispatch) => {
        console.log(gameData)
        dispatch({type: "START_USER_REQUEST"})
        fetch('http://localhost:3001/games/delete', serialize(gameData))
        .then(response => response.json())
        .then(object =>{ 
            console.log(object)
            return dispatch({type: "UPDATE_GAMES", payload: object}
        )})
        
    } 
}

export function createGame(gameData){

    const serialize = body => {
        return({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }    

    return (dispatch) => {

        dispatch({type: "START_USER_REQUEST"})
        fetch('http://localhost:3001/games/create', serialize(gameData))
        .then(response => response.json())
        .then(object => dispatch({type: "UPDATE_GAMES", payload: object}))
        
    }
}

export function focusCard(data){
    console.log('ACTION: FOCUS_CARD')
    return { type:'FOCUS_CARD', payload: data}
}

export function flipCardToFront(gameId){
    return { type:'FLIP_TO_FRONT', payload: gameId}
}