import React, { Component } from 'react'
import './FormCreator.css'

const FormCreator = props => {

    function inputWithLabel(type, id, label, value) {  
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
            {console.log({...props.formSchema})}
            {props.formSchema.fields.map( field => {
                console.log(props.formSchema)
                let input = Object.keys(field).map( key => {
                    return inputWithLabel(
                        field[key].type,
                        field[key].id,
                        key,
                        field[key].value
                    )
                })
                console.log(input)
                return input
            })}

            <input type='submit' id='button' value="SUBMIT" />
        </form>
    )
}

export function createFormField(fieldLabel, options= {}){
    return {[fieldLabel]: { type: 'text', id: fieldLabel, ...options }}
}  

export default FormCreator