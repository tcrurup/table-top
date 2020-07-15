export default class CreateFormSchema{

    constructor(onSubmit = {}, onChange = null){
        this.onSubmit = onSubmit
        this.onChange = onChange
        this.fields = []
        return this
    }

    addFieldToSchema(type, id, value, label=null){
        console.log(type)
        this.fields.push({ [label]: {type, id, value} })
        console.log(this.fields)
        return this
    }

    finalize(){
        return {
            onChange: this.onChange,
            onSubmit: this.onSubmit,
            fields: this.fields
        }
    }   

}   