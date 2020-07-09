
export default function userReducer( state = {}, action){

    switch(action.type){
        case "ATTEMPT_LOGIN":
            return {...state, user: action.credentials.username}

        default:
            return state
    }
}