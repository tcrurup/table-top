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
        
        dispatch({ type:"START_ATTEMPT_LOGIN"})
        
        fetch(loginUrl(), data)
        .then(response => response.json())
        .then(object => console.log(object))
    }
    console.log(`dispatching ATTEMPT_LOGIN for ${loginData.user.username}` )
    return { type: 'ATTEMPT_LOGIN', credentials: loginData }
}