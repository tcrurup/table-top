import React, { Component }from 'react'
import { connect } from 'react-redux'

class GamePage extends Component{

    render = () => <div>{this.props.game.name}</div>
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GamePage)