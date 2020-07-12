


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
            return {
               ...state,
               username: userData.username,
               id: userData.id, 
               requesting: false,
               games: userData.games
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
            
        default:
            return state
    }
}