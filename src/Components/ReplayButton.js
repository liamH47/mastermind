import React, { Component } from 'react'

class ReplayButton extends Component {
    /**
     things that need to be reset 
     *1. tries should go back to 10
     2. revealcode needs to be false
     3. guesses needs to be emptied 
     */

    state = {
        tries: 10,
        gameStarted: true,
        guesses: [],
        revealCode: false
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
                <button onClick={this.localStartHandler}>Play Again</button>    
            </div>
        )
    }
}
export default ReplayButton