import React, { Component } from 'react'

class GuessList extends Component {

    renderGuesses(){
        return this.props.guesses.map(g => <li>your guess: {g.guess} feedback: {g.feedback}</li>)
    }

    render() {
        return (
            <ul>
                {this.renderGuesses()}
            </ul>
        )
    }
}

export default GuessList;