import { userDefault } from '../constants/reducerDefaults.js'

export default function userReducer( state = userDefault, action){

    console.log(action)
    const userData = action.userData
    
    switch(action.type){

        
        case "ATTEMPT_LOGIN": return { ...state, requesting: true }
        case "LOGOUT_USER": return userDefault
        case "APP_REDIRECT": return{...state, view: { route: action.route }}

        case "LOGIN_SUCCESS":
            return {
                ...state,
                ...userData,
                requesting: false,
                game_rooms: userData.game_rooms.map(room => { return {...room, focus: false} }),
           }

        case "LOGIN_FAILURE":
        console.log(action)   
        return{
               ...state,
               errors: action.errors, 
               requesting: false
           }
        
        case "FOCUS_CARD":
            let newGames = state.game_rooms.map( game => {
                if(game.id === action.payload){
                    game.focus = true;
                } else {
                    game.focus = false;
                }
                return game
            })
            return{
                ...state,
                game_rooms: newGames
            }

        case "UPDATE_GAMES": 
            console.log("ACTION: UPDATE_GAMES")
            console.log(action.payload)
            return{ 
                ...state, 
                game_rooms: action.payload.map( game => {
                    return {...game, focus: false}
                }), 
                requesting: false 
            }
        case "START_USER_REQUEST": return {...state, requesting: true}

        case "FLIP_TO_FRONT":
            return{
                ...state,
                game_rooms: state.game_rooms.map( game => {
                    if(game.id === action.payload){
                        return {...game, focus: false}
                    } else { return game }
                })
            }

        default:
            return state
    }
}