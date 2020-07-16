import { loginUrl } from '../services/backendRouting.js'
import FetchRequest from '../services/FetchRequest.js'


export function attemptLogin(loginData){
    
    return (dispatch) => {
        
        const success = data => {
            dispatch({ type: "LOGIN_SUCCESS", credentials: data })
            dispatch({ type: "APP_REDIRECT", route: '/homepage' })
        }
        const failure = data => {
            dispatch({ type:"LOGIN_FAILURE", errors: data.errors})
        }
        
        
        dispatch({ type:"ATTEMPT_LOGIN"})
        
        new FetchRequest(loginUrl(), loginData)
        .onSuccess(success)
        .onFailure(failure)
        .send()
    }
}

