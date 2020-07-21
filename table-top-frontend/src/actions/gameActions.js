import FetchRequest from '../services/FetchRequest.js'
import { serializeGame } from '../services/serializers.js'

export function deleteGame(gameData){
    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        console.log(gameData)
        new FetchRequest('http://localhost:3001/games/delete', gameData)
        .onSuccess(object => dispatch({type: "UPDATE_GAMES", payload: object}))
        .onFailure(() => {console.log('failure')})
        .startFetch()
    }    
}

export function createGame(gameData){
    console.log(gameData)
    return (dispatch) => {
        new FetchRequest('http://localhost:3001/games/create', serializeGame(gameData))
        .onSuccess(object => {
            dispatch({type: "UPDATE_GAMES", payload: object})
        })
        .onFailure(() => {console.log('failure')})
        .startFetch()
    }
}

export function loadGame(gameData){
    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        console.log(gameData)
        new FetchRequest('http://localhost:3001/games/load', serializeGame(gameData))
        .onSuccess( object => {
            dispatch({type: "LOAD_GAME", payload: object})
            dispatch({type: "APP_REDIRECT", route: '/game'})
        })
        .onFailure(() => {console.log('failure')})
        .startFetch()   
    }
}

export function unloadGame(){
    return (dispatch) => { 
        dispatch({type: 'UNLOAD_GAME', payload: {} })
        dispatch({type: 'APP_REDIRECT', route: '/homepage' })
    }
}

export function focusCard(data){ return { type:'FOCUS_CARD', payload: data}}
export function flipCardToFront(gameId){ return { type:'FLIP_TO_FRONT', payload: gameId}}