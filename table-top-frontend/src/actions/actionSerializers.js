

export function serializeGameActions(payload){
    return {
        game:{

        }
    }
}

export function serializeUserGames(userGame){
    return {
        id: userGame.id,
        name: userGame.name,
        user_id: userGame.user_id,
        focus: userGame.focus
    }
}