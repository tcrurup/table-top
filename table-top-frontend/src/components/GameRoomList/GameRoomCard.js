import React, {Component } from 'react'

class GameRoomCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
    }

    focusCard = () => {
        this.props.focusCard(this.props.game.id)
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
        const game = this.props.game
        return(        
            <div 
                className='game-rooms-container-card-empty' 
                onClick={() => this.focusCard(game.id)}
            >
                <div className={ game.focus ? 'flip-card flipped' : 'flip-card'}> 
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