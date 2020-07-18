import React from 'react'
import NavOption from './NavOption.js'

const Bar = props => <div id='navbar'>
    {console.log(props)}
    {
        Object.keys(props.options).map( key => {
            return <NavOption name={key} onClick={props.options[key]} />
        })
    }
</div>

export default Bar

