
export function attemptLogin(loginData){
    console.log(`dispatching ATTEMPT_LOGIN for ${loginData.username}` )
    return { type: 'ATTEMPT_LOGIN', credentials: loginData }
}