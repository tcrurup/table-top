
export function loadGame(gameData){
    console.log(`Loading Game with ${Object.keys(gameData)}`)
    return { type:'LOAD_GAME', payload: gameData }
}

export function createGame(gameData){
    return { type:'CREATE_GAME', payload: gameData }
}