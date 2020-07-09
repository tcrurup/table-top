
import { loginUrl } from '../backendRouting.js'

export default function userReducer( state = {}, action){

    switch(action.type){
        case "ATTEMPT_LOGIN":

        console.log(`attempting log in as ${action.credentials.username}`)
        console.log(`Fetching data from ${loginUrl()}`)
        const data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.credentials)
        }
        console.log(data)

        fetch(loginUrl(), data)
            return {...state, user: action.credentials.username}

        default:
            return state
    }
}