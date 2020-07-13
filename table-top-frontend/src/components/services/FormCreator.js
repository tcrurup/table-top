import React from 'react'

export default function FormCreator(props){

    function inputWithLabel(type, id, label, value){  
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
                return inputWithLabel(
                    props.formSchema.fields[field].type,
                    props.formSchema.fields[field].id,
                    field,
                    props.formSchema.fields[field].value
                )
            })}

            <input type='submit' id='button' value="SUBMIT" />
        </form>
    )
}

export function createField(fieldLabel, opt = {}){
    
    let field = {[fieldLabel]: { type: fieldLabel, id: fieldLabel} }
    
    const options = Object.keys(opt)
    if(options.length > 0){
        options.forEach( option => {
            field[fieldLabel] = {...field[fieldLabel], ...option}
        })
    }

    return field
}
