class FetchRequest{

    serialize(data){
        return{
            method: this.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }    
    }
    
    constructor(url, data, method='POST'){
        this.url = url
        this.data = data
        this.method = method
        this.success = console.log
        this.failure = console.log
        return this
    }

    onSuccess = func => {
        this.success = func
        return this   
    }
    
    onFailure = func => { 
        this.failure = func
        return this
    }

    startFetch = () =>{
        fetch(this.url, this.serialize(this.data))
        .then(response => {
            const json = response.json()
            console.log(json)
            if(response.ok){
                json.then( object => this.success(object)) 
            } else {
                json.then( object => this.failure(object))
            }
        }).catch( error => console.log(error) )
    }

}

export default FetchRequest