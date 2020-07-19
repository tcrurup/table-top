import { userDefault } from '../constants/reducerDefaults.js'

export default function userReducer( state = userDefault, action){

    switch(action.type){

        case "ATTEMPT_LOGIN":
            return { ...state, requesting: true }

        case "LOGIN_SUCCESS":
            const userData = action.userData
            console.log(userData)
            let slot = 0; 
            return {
                ...state,
                username: userData.username,
                id: userData.id, 
                requesting: false,
                game_rooms: userData.game_rooms.map(room => { return {...room, focus: false} }),
                games_a_part_of: [...userData.games_user_part_of]
           }

        case "LOGIN_FAILURE":
           return{
               ...state,
               errors: action.errors, 
               requesting: false
           }

        case "LOGOUT_USER": return userDefault

        case "APP_REDIRECT":
            return{
                ...state,
                view: { route: action.route }
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
            console.log(action)
            return{
                ...state,
                game_rooms: newGames
            }

        case "UPDATE_GAMES": 
            console.log("ACTION: UPDATE_GAMES")
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