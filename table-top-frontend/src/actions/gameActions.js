export function loadGame(gameData){

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

    return (dispatch) => {
        dispatch({type: "START_USER_REQUEST"})
        fetch('http://localhost:3001/games/load', serialize(gameData))
        .then(response => response.json())
        .then(object => dispatch({type: "FINISH_USER_REQUEST"}))        
    }
}

export function createGame(gameData){

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

    return (dispatch) => {

        dispatch({type: "START_USER_REQUEST"})
        fetch('http://localhost:3001/games/create', serialize(gameData))
        .then(response => response.json())
        .then(object => dispatch({type: "CREATE_GAME", payload: object}))
        
    }
}

export function focusCard(data){
    console.log('ACTION: FOCUS_CARD')
    return { type:'FOCUS_CARD', payload: data}
}