import React, { Component } from 'react'

class ReplayButton extends Component {

    state = {
        tries: 10,
        gameStarted: true,
        guesses: [],
        revealCode: false,
        options: this.props.options

    }

    localStartHandler = (e) => {
        e.preventDefault();
        const { startGame } = this.props;
        console.log("clicked")
        startGame(this.state)
    }


    render() {
        return (
            <div>
                <div>
                    <button className='play-again' onClick={this.localStartHandler}>Play Again</button>    
                </div>
            </div>
        )
    }
}
export default ReplayButton