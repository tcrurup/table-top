import { loginUrl } from '../services/backendRouting.js'
import { serializeUserGames } from '../services/serializers'
import FetchRequest from '../services/FetchRequest.js'


export function attemptLogin(loginData){
    
    return (dispatch) => {
        
        const success = data => {
            console.log(data)
            dispatch({ type: "LOGIN_SUCCESS", userData: data })
            dispatch({ type: "APP_REDIRECT", route: '/homepage' })
        }
        const failure = data => {
            dispatch({ type:"LOGIN_FAILURE", errors: data.errors})
        }
        
        dispatch({ type:"ATTEMPT_LOGIN"})
        
        new FetchRequest(loginUrl(), loginData)
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

