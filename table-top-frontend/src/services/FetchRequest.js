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
        .then(response => {
            console.log(response)
            if(!response.ok){ throw new Error(response) }
            return response.json() 
        })
        .then( object => {
            this.success(object)  
        }) 
        .catch(error => {
            this.failure(error)
        })
    }

}

export default FetchRequest