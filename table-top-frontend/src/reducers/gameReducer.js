
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

            console.log("ACTION: LOAD_GAME")
            fetch('http://localhost:3001/games/load', serialize(action.payload) )
            .then(response => response.json())
            .then(object => console.log(object))
            
            return state

        case "CREATE_GAME":

      

            fetch('http://localhost:3001/games/create', serialize(action.payload))
            .then(response => response.json())
            .then(object => console.log(object))
            
            
            return state   
            
        
        default:
            return state
    }
}