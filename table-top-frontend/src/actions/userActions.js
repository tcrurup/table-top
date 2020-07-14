import { loginUrl } from '../services/backendRouting.js'


export function attemptLogin(loginData){
    console.log('ACTION: ATTEMPT_LOGIN')
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
        console.log(data)

        fetch(loginUrl(), data)
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
        })
    }
}
