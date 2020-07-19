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

    function showErrors(errors){
        if(errors){ return <div>{errors}</div> }
    }
    
   
    return (
        <form onSubmit={props.formSchema.onSubmit}>
            {props.formSchema.fields.map( field => {
                let input = Object.keys(field).map( key => {
                    return inputWithLabel(
                        field[key].type,
                        field[key].id,
                        key,
                        field[key].value
                    )
                })
                return input
            })}
            {showErrors(props.errors)}
            <input type='submit' id='button' value="SUBMIT" />
        </form>
    )
}

export function createFormField(fieldLabel, options= {}){
    return {[fieldLabel]: { type: 'text', id: fieldLabel, ...options }}
}  

export function createInputWithLabel(type, id, label, value, onChange=null) {  
    return(
        <div className='form-input'>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type} 
                id={id} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}



export default FormCreator