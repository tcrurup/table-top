import React from 'react'

const ListRow = props => {
    
    
    return <div className='games-with-characters-list-item' onClick={props.loadGame}>
        {props.game.name}
    </div>
}




export default ListRow



/*render = () => this.html(this.props.game)
    
    
    focusCard = () => this.props.focusCard(this.props.game.id)
    cardFront = () => (this.props.game.has_game ?  this.gameDetails() : <span>-CREATE NEW-</span>)
    gameDetails = () => <span>{this.props.game.name}</span>  

    cardBack = game => {
        if(game.has_game){
            return <GameRoom 
                game={game} 
                loadGame={this.props.loadGame}
                deleteGame={this.props.deleteGame}    
            /> 
        } else {
            return <GameRoomInput 
                userId={this.props.user.id} 
                gameId={this.props.game.id} 
                onSubmit={this.props.createGame}
                flipToFront={this.props.flipToFront}
            />
        }
    }
    html = game => 
        <div 
            className={`game-rooms-container-card-empty ${game.focus ? 'flipped' : ''}`} 
            onClick={() => {
                if(game.focus == false){this.focusCard(game.id)}
            }}
        >

            <div className='flip-card'> 
                <div className="flip-card-front">
                    {this.cardFront()}
                </div>
                <div className="flip-card-back">
                    {this.cardBack(game)}
                </div>
            </div>

        </div>*/