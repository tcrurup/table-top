
export default function gameReducer ( state = {}, action){

    const serialize = body => {
        return({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }        
    
    switch(action.type){

        case "LOAD_GAME":
            return {...action.payload}
        default:
            return state
    }
}