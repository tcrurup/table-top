
export function loadGame(gameData){
    console.log(`Loading Game with ${Object.keys(gameData)}`)
    return { type:'LOAD_GAME', payload: gameData }
}