import { loginUrl } from '../backendRouting.js'


export function attemptLogin(loginData){
    return (dispatch) => {
        
        const data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        
        dispatch({ type:"ATTEMPT_LOGIN"})
        
        fetch(loginUrl(), data)
        .then(response => response.json())
        .then(object => dispatch({ type:"LOGIN_SUCCESS", credentials: object }))
    }
}