
import React, { Component } from 'react';
import GuessButton from './GuessButton';

class GuessForm extends Component {
    state = {
        guessArray: []
    }

    clickHandler = (num) => {
        this.setState({ guessArray: [...this.state.guessArray, num]})
    }

    resetGuess = () => {
        this.setState({ guessArray: [] })
    }

    localSubHandler = () => {
        let parsed = this.state.guessArray.map(el => parseInt(el));
        this.setState({ guessArray: []})
        this.props.submitHandler(parsed);
    }

    renderButtons = () => {
        const { options, tries } = this.props;
        const {guessArray } = this.state;
        let optArray = []
        for(let i = 0; i < options; i++){
            optArray.push(i);
        }
        return optArray.map(num => <GuessButton tries={tries} isDisabled={guessArray.length} source={`${num}`} key={num} clickHandler={this.clickHandler}/>);
    }

    renderCurrent = () => {
        const { guessArray } = this.state;
        if(guessArray.length) {
            return guessArray.map(num =>             
                    <img src={`/img/chars/${num}.jpg`} value={num} alt={num}/>
                )
        }
    }

    render() {
        const { guessArray } = this.state;
        const { tries } = this.props;
        return (
            <div className='form-container'>
                <h3>Current Guess</h3>
                <div className='current-guess-container'>
                    {this.renderCurrent()}
                </div>
                <h3>Options</h3>
                <div className='character-buttons'>
                    {this.renderButtons()}
                </div>
                <div className='button-container'>
                    <button  onClick={this.resetGuess}>Reset</button>
                    <button disabled={guessArray.length !== 4 || !tries} onClick={this.localSubHandler}>Check</button>
                </div>
            </div>
        )
    }
}

export default GuessForm
