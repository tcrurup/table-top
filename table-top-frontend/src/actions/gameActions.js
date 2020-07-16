import FetchRequest from '../services/FetchRequest.js'
import { serializeGame } from '../services/serializers.js'

export function deleteGame(gameData){
    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        new FetchRequest('http://localhost:3001/games/delete', gameData)
        .onSuccess(object => dispatch({type: "UPDATE_GAMES", payload: object}))
        .onFailure(() => {console.log('failure')})
        .startFetch()
    }    
}

export function createGame(gameData){
    return (dispatch) => {
        new FetchRequest('http://localhost:3001/games/create', gameData)
        .onSuccess(object => dispatch({type: "UPDATE_GAMES", payload: object}))
        .onFailure(() => {console.log('failure')})
        .startFetch()
    }
}

export function loadGame(gameData){
    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        new FetchRequest('http://localhost:3001/games/load', serializeGame(gameData))
        .onSuccess(() => {console.log('success')})
        .onFailure(() => {console.log('failure')})
        .startFetch()   
    }
}


export function focusCard(data){ return { type:'FOCUS_CARD', payload: data}}
export function flipCardToFront(gameId){ return { type:'FLIP_TO_FRONT', payload: gameId}}