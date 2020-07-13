import React from 'react'

const FormCreator = props => {

    function inputWithLabel(type, id, label, value){  
        console.log(type)
        return(
            <div className='form-input'>
                <label htmlFor={id}>{label}</label>
                <span className='whitespace' />
                <input 
                    type={type} 
                    id={id} 
                    value={value} 
                    onChange={props.formSchema.onChange}
                />
            </div>
        )
    }
    
    return (
        <form onSubmit={props.formSchema.onSubmit}>
            
            {Object.keys(props.formSchema.fields).map( field => {
                console.log(props.formSchema)
                return inputWithLabel(
                    props.formSchema.fields[field].type,
                    props.formSchema.fields[field].id,
                    field,
                    props.formSchema.fields[field].value
                )
            })}
            
            
            {/*props.formSchema.fields.map( field => {
                return inputWithLabel (
                    field.type, 
                    field.id, 
                    field.label, 
                    field.value, 
                    field.onChange
                )
            })*/}
            <input type='submit' id='button' value="SUBMIT" />
        </form>
    )
}

export default FormCreator