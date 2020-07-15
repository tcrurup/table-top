
export function serializeUserGames(userGame){
    return {
        serialized_to: 'userGame',
        id: userGame.id,
        name: userGame.name,
        user_id: userGame.user_id,
        focus: userGame.focus
    }
}

export function serializePostData(serializedData){
    return{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(serializedData)
    }    
}
