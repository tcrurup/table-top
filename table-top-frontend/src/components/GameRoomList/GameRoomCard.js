import React, {Component } from 'react'

class GameRoomCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
    }

    
    flipCard = () => {
        this.setState({ flipped: !this.state.flipped})
        console.log(!this.state.flipped)
    }
    
    render(){
        return(        
            <div 
                className='game-rooms-container-card-empty' 
                onClick={this.flipCard}
            >
                <div className={ this.state.flipped ? 'flip-card flipped' : 'flip-card'}> 
                    <div className="flip-card-front">
                        -Create Game-
                    </div>
                    <div className="flip-card-back">

                    </div>
                </div>
            </div>
        )
    }

}
export default GameRoomCard