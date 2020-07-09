
export function attemptLogin(loginData){
    return { type: 'ATTEMPT_LOGIN', credentials: loginData }
}