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
        revealCode: false,
        // options: this.props.options

    }

    localStartHandler = (e) => {
        e.preventDefault();
        const { startGame } = this.props;
        console.log("clicked")
        startGame(this.state)
    }

    localRestartHandler = (e) => {
        this.setState({ gameStarted: false });
        this.localStartHandler(e);
        
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.localStartHandler}>Play Again</button>    
                </div>
                <div>
                    <button onClick={this.localRestartHandler}>Change Settings</button>
                </div>
            </div>
        )
    }
}
export default ReplayButton