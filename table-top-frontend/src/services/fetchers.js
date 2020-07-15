import { serializePostData } from './serializers.js'
import FetchRequest from '../services/FetchRequest'

export function fetchLoadGame(serializedData, onSuccess, onFailure = x => console.log(x)){
    new FetchRequest('http://localhost:3001/games/load', serializePostData(serializedData))
    .onSuccess(onSuccess)
    .onFailure(onFailure)
    .send()
}

