import React, { Component } from 'react'

class ReplayButton extends Component {

    state = {
        tries: 10,
        gameStarted: true,
        guesses: [],
        revealCode: false,
        options: this.props.options,
        timer: this.props.timer
    }

    localStartHandler = (e) => {
        e.preventDefault();
        const { startGame } = this.props;
        startGame(this.state);
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