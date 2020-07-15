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

export function createFormField(fieldLabel, options= {}){
    return {[fieldLabel]: { type: 'text', id: fieldLabel, ...options }}
}

export default FormCreator