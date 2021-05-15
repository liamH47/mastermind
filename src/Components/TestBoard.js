import React, { Component } from 'react';
import Guess from './Guess';

class TestBoard extends Component {

    /**
     * next steps
     * rather than passing the guess array that has every single entry, i think i should make an array of guesses that is
        made up of literally just the numbers. push all of those arrays into another flat array
     */
    state = {
        guessArray: []
    }

    componentDidMount() {
        this.setGuesses()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            this.setGuesses();
        }
    }
    

    setGuesses = () => {
        let newArr = [];
        let guesses = this.props.guesses
        for(let i = 0; i < guesses.length; i++){
            Array.prototype.push.apply(newArr, guesses[i].guess);
        }
        this.setState({ guessArray: newArr });
    }
    

    renderGuesses = () => {
        let items = [];
        for(let i = 0; i < 44; i++){
            items.push(<Guess key={i}/>);
        }
        return items.map((el, index) => <Guess index={index} key={index} guesses={this.state.guessArray}/>)
    }

    render() {
        return (
            <section className='board-container'>
                <div className='guesses'>
                    {this.renderGuesses()}
                </div>
                <div className='feedback'>
                </div>
            </section>
        )
    }
}

export default TestBoard;