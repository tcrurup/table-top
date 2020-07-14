
export function loadGame(gameData){
    console.log('ACTION: LOAD_GAME')
    return { type:'LOAD_GAME', payload: gameData }
}

export function createGame(gameData){
    console.log('ACTION: CREATE_GAME')
    return { type:'CREATE_GAME', payload: gameData }
}

export function focusCard(data){
    console.log('ACTION: FOCUS_CARD')
    return { type:'FOCUS_CARD', payload: data}

}