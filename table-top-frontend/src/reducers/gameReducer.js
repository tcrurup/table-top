
export default function gameReducer ( state = {}, action){

    switch(action.type){

        case "LOAD_GAME":

            const data = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            }
            console.log(data)
            fetch('http://localhost:3001/games/load', data)
            .then(response => response.json())
            .then(object => console.log(object))
            
            return state

      
            
        
        default:
            return state
    }
}