
export default function gameReducer ( state = {}, action){
    switch(action.type){

        case "LOAD_GAME":
            return {...action.payload}
        case "UNLOAD_GAME":
            return {}
        default:
            return state
    }
}