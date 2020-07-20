
export function serializeUserGames(userGame){
    return { 
        user : {
            serialized_to: 'userGame',
            id: userGame.id,
            name: userGame.name,
            user_id: userGame.user_id,
        }
    }
}

export function serializeGame(game){
    console.log(game)
    return {
        game : {
            serialized_to: 'Game',
            id: game.id,
            user_id: game.user_id
        }
    }
}

export function serializeLoginAttempt(credentials){
    return{
        user: {
            serialized_to:'loginAttempt',
            username: credentials.username,
            password: credentials.password,
            email: credentials.email,
            type: credentials.type,
        }
    }
}


