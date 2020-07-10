


export default function userReducer( state = {}, action){

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
               id: userData.id, 
               requesting: false
           }
            
        default:
            return state
    }
}