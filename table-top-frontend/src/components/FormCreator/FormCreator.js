import React, { Component } from 'react'
import './FormCreator.css'

const FormCreator = props => {

    function inputWithLabel(type, id, label, value) {  
        return(
            <div className='form-input'>
                
                <div className={`overlay-${props.requesting ? 'enabled' : 'disabled'}`}>
                </div>

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

            <input type='submit' id='button' value="SUBMIT" />
        </form>
    )
}

export function createFormField(fieldLabel, options= {}){
    return {[fieldLabel]: { type: 'text', id: fieldLabel, ...options }}
}  

export default FormCreator