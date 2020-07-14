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
    }

    cardFront = () => {
        const game = this.props.game
        if(game.has_game){
            return (
                <>
                <span>{game.name}</span>
                </>
            )
        } else {return <span>Click Here To Create A New Game</span>}
    }
    
    render(){
        return(        
            <div 
                className='game-rooms-container-card-empty' 
                onClick={this.flipCard}
            >
                <div className={ this.state.flipped ? 'flip-card flipped' : 'flip-card'}> 
                    <div className="flip-card-front">
                        {this.cardFront()}
                    </div>
                    <div className="flip-card-back">

                    </div>
                </div>
            </div>
        )
    }

}
export default GameRoomCard