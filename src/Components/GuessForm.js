
import React, { Component } from 'react';
import GuessButton from './GuessButton';

class GuessForm extends Component {
    state = {
        guessArray: []
    }

    clickHandler = (num) => {
        console.log(" num in clickhandle:", num)
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
        const { options } = this.props;
        const {guessArray } = this.state;
        return options.map(num => <GuessButton isDisabled={guessArray.length} source={`${num}`} key={num} clickHandler={this.clickHandler}/>);
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
        return (
            <div className='form-container'>
                <h3>Current Guess</h3>
                <div className='current-guess-container'>
                    {this.renderCurrent()}
                </div>
                <div className='character-buttons'>
                    {this.renderButtons()}
                </div>
                <div className='button-container'>
                    <h3>Options</h3>
                    <button  onClick={this.resetGuess}>Reset</button>
                    <button disabled={guessArray.length !== 4} onClick={this.localSubHandler}>Submit</button>
                </div>
            </div>
        )
    }
}

export default GuessForm
