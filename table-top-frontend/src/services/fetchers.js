import FetchRequest from '../services/FetchRequest'

export function fetchFriendsOfUser(userId){
    const fetch = FetchRequest.create('http://localhost:3001/friends/friends_of_user', { user_id: userId })
    fetch.onSuccess(console.log('success'))
    fetch.onFailure(console.log('failure'))
    fetch.startFetch()
}

