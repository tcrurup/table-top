
export default function gameReducer ( state = {}, action){
    console.log(action.payload)
    switch(action.type){

        
        case "LOAD_GAME":
            return {...action.payload}
        case "UNLOAD_GAME":
            return {}
        default:
            return state
    }
}