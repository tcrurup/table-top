import { LOGIN_PATH, USER_PATH, USER_DELETE_PATH } from '../constants/backendRoutes.js'
import { serializeUserGames } from '../services/serializers'
import FetchRequest from '../services/FetchRequest.js'


export function attemptLogin(loginData){
    
    return (dispatch) => {
        
        const success = data => {
            dispatch({ type: "LOGIN_SUCCESS", userData: data })
            dispatch({ type: "APP_REDIRECT", route: '/homepage' })
        }
        const failure = error_message => {
            console.log(error_message)
            dispatch({ type:"LOGIN_FAILURE", ...error_message})
        }
        
        dispatch({ type:"ATTEMPT_LOGIN"})

        new FetchRequest(LOGIN_PATH, loginData, "POST")
        .onSuccess(success)
        .onFailure(failure)
        .startFetch()
    }
}

export function logout(){
    return (dispatch) => {
        dispatch({ type: "LOGOUT_USER" })
        dispatch({ type: "APP_REDIRECT", route:'/login'})
    }
}

export function deleteUser(userId){
    return (dispatch) => {

        const success = data => {
            dispatch({ type:"LOGOUT_USER"})
        }
        const failure = data =>{
            console.log(data)
        }
        new FetchRequest(USER_DELETE_PATH, {user: {id: userId}}, "POST")
        .onSuccess(success)
        .onFailure(failure)
        .startFetch()
    
    }
}

