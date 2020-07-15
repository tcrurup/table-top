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
        
        const data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        
        dispatch({ type:"ATTEMPT_LOGIN"})
        new FetchRequest(loginUrl(), data)
        .onSuccess(success)
        .onFailure(failure)
        .send()
        
        
        /*fetch(loginUrl(), data)
        .then(response => response.json())
        .then(object => {
            console.log(object)
            const errors = object.errors
            if(errors){
                dispatch({ type:"LOGIN_FAILURE", errors})
            } else {
                console.log(object)
                dispatch({ type:"LOGIN_SUCCESS", credentials: object })
                dispatch({ type: "APP_REDIRECT", route: '/homepage' })
            }
        })*/
    }
}

