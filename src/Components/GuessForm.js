
import React, { Component } from 'react';
import GuessButton from './GuessButton';

class GuessForm extends Component {
    state = {
        guessArray: []
        // buttonsDisabled: false
    }
    // changeHandler = (e) => {
    //     let currentGuess = [...this.state.guessArray, e.target.name];
    //     this.setState({ guessArray: currentGuess })

    // }

    clickHandler = (num) => {
        console.log(" num in clickhandle:", num)
        this.setState({ guessArray: [...this.state.guessArray, num]})
    }

    resetGuess = () => {
        this.setState({ guessArray: [] })
    }

    localSubHandler = () => {
        // e.preventDefault();
        let parsed = this.state.guessArray.map(el => parseInt(el));
        this.setState({ guessArray: []})
        this.props.submitHandler(parsed);
    }

    renderButtons = () => {
        const { options } = this.props;
        const {guessArray } = this.state;
        return options.map(num => <GuessButton isDisabled={guessArray.length} source={`${num}`} key={num} clickHandler={this.clickHandler}/>);
    }


    renderCurrent = () => {
        const { guessArray } = this.state;
        if(guessArray.length) {
            return guessArray.map(num => 
                <div>
                    <img src={`/img/chars/${num}.jpg`} value={num} alt={num}/>
                </div>)
        }
    }

    render() {
        return (
            <div className='form-container'>
                <h3>Current Guess</h3>
                <div className='current-guess-container'>
                    {this.renderCurrent()}
                </div>
                <div className='character-buttons'>
                    {this.renderButtons()}
                </div>
                <button onClick={this.resetGuess}>Reset</button>
                <button onClick={this.localSubHandler}>Submit</button>
            </div>
        )
    }
}

export default GuessForm