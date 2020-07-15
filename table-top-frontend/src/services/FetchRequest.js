class FetchRequest{

    constructor(url, data){
        this.url = url
        this.data = data
        this.succees = console.log
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

    send = () =>{
        fetch(this.url, this.data)
        .then(response => response.json())
        .then( object => {
            object.status === 200 ? this.success(object) : this.failure(object)
        })
    }

}

export default FetchRequest