


export default function userReducer( state = { 
    username: '', 
    id: null, 
    errors: null, 
    requesting: false,
    games: [],
    view: {
        route: '/login'
    }

}, action){

    switch(action.type){

        case "ATTEMPT_LOGIN":
            return {
                ...state,
                requesting: true
            }

        case "LOGIN_SUCCESS":
            const userData = action.credentials
            let slot = 0; 
            return {
                ...state,
                username: userData.username,
                id: userData.id, 
                requesting: false,
                games: userData.game_rooms.map( room => {
                    slot++
                    return Object.assign({}, room, {focus: false} )
               })
           }

        case "LOGIN_FAILURE":
           return{
               ...state,
               errors: action.errors, 
               requesting: false
           }

        case "APP_REDIRECT":
            return{
                ...state,
                view: { route: action.route }
            }

        case "FOCUS_CARD":
            
            let newGames = state.games.map( game => {
                console.log(action)
                console.log(game.id === action.payload)
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
                games: newGames
            }

        case "UPDATE_GAMES": return{ ...state, games: action.payload, requesting: false }
        case "START_USER_REQUEST": return {...state, requesting: true}

        default:
            return state
    }
}