
import React, { Component } from 'react';
import GuessButton from './GuessButton';

class GuessForm extends Component {
    state = {
        guessArray: [],
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState !== this.state){
    //         this.renderCurrent();
    //     }
    // }
    

    changeHandler = (e) => {
        let currentGuess = [...this.state.guessArray, e.target.name];
        this.setState({ guessArray: currentGuess })

        // this.setState({ [e.target.name]: e.target.value })
    }

    // setOptions = () => {
    //     return this.props.options.map(opt => <option value={opt}>{opt}</option>)
    // }
    clickHandler = (num) => {
        console.log(" num in clickhandle:", num)
        this.setState({ guessArray: [...this.state.guessArray, num]})
        // this.guessArray.push(num)
    }

    localSubHandler = () => {
        // e.preventDefault();
        let parsed = this.state.guessArray.map(el => parseInt(el));
        this.setState({ guessArray: []})
        this.props.submitHandler(parsed);
    }
//original copy
    // renderButtons = () => {
    //     const { options } = this.props;
    //     return options.map(num => 
    //         <button onClick={this.changeHandler} name={`${num}`}>
    //             <img src={`/img/chars/${num}.jpg`}  alt={num}></img>
    //         </button>
    //         )
    // }
    renderButtons = () => {
        const { options } = this.props;
        return options.map(num => <GuessButton source={`${num}`} key={num} clickHandler={this.clickHandler}/>);
    }


    renderCurrent = () => {
        const { guessArray } = this.state;
        if(guessArray.length) {
            return guessArray.map(num => <img src={`/img/chars/${num}.jpg`} value={num} alt={num}/>)
        }
    }

    render() {
        return (
            <div>
                <h3>Current Guess</h3>
                <div className='current-guess-container'>
                    {this.renderCurrent()}
                </div>
                    {this.renderButtons()}
                {/* <form onSubmit={this.localSubHandler}>
                    {this.renderButtons()}
                    <select name='num1' onChange={this.changeHandler}>
                        {this.setOptions()}
                        </select>
                        <select name='num2' onChange={this.changeHandler}>
                        {this.setOptions()}
                        </select>
                        <select name='num3' onChange={this.changeHandler}>
                        {this.setOptions()}
                        </select>
                        <select name='num4' onChange={this.changeHandler}>
                        {this.setOptions()}
                    </select>
                </form> */}
                <button onClick={this.localSubHandler}>Submit</button>
            </div>
        )
    }
}

export default GuessForm
