


export default function userReducer( state = {}, action){

    switch(action.type){
        case "START_ATTEMPT_LOGIN":
            return {
                ...state,
                requesting: true
            }
        case "LOGIN_SUCCESS":
           
            return state
            
        default:
            return state
    }
}