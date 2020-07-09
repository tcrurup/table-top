
    
const routes = {
    base: 'http://localhost:3001',  
        
    userpath: {
        base: '/users',
        login: '/login'
    }
}
    
    



export function loginUrl(){ 
    return  `${routes.base}${routes.userpath.base}${routes.userpath.login}`
}