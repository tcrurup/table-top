
export function serializeUserGames(userGame){
    return { 
        user : {
            serialized_to: 'userGame',
            id: userGame.id,
            name: userGame.name,
            user_id: userGame.user_id,
            focus: userGame.focus
        }
    }
}


