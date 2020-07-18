import React from 'react'

const SpinningLoader = props => {
    
    const loaderStyle = () => {
        return{
            'border': `16px solid ${props.backgroundColor}`,
            'border-top': `16px solid ${props.spinnerColor}`,
            'border-radius' : '50%',
        }
    }
    
    return <div className='spinning-loader-container'> 
        <div className='spinning-loader'
            style={loaderStyle()}
        />
    </div>
}

export default SpinningLoader