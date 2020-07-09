
export default function userReducer( state = {}, action){

    switch(action.type){
        case "ATTEMPT_LOGIN":

        fetch('localhost:3000')
            return {...state, user: action.credentials.username}

        default:
            return state
    }
}