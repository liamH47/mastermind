import React, { Component } from 'react';
import Guess from './Guess';
import FeedBack from './FeedBack';

class TestBoard extends Component {

    /**
     * next steps
     * rather than passing the guess array that has every single entry, i think i should make an array of guesses that is
        made up of literally just the numbers. push all of those arrays into another flat array
     */
    state = {
        guessArray: [],
        feedArray: []
    }

    componentDidMount() {
        this.setGuesses();
        this.setFeedBack();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            this.setGuesses();
            this.setFeedBack();
        }
        // console.log("guesses in cdu", this.props.guesses[0].included)
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
        for(let i = 0; i < 40; i++){
            items.push(<Guess key={i}/>);
        }
        return items.map((el, index) => <Guess index={`${index}`} key={index} guesses={this.state.guessArray}/>)
    }

    setFeedBack = () => {
        let newArr = [];
        let guesses = this.props.guesses
        for(let i = 0; i < guesses.length; i++){
            let obj = {
                included: guesses[i].included,
                rightSpot: guesses[i].rightSpot
            };
            newArr.push(obj);
        }
        this.setState({ feedArray: newArr });
    }
    /**
     * need to do something similar to set guesses. each index in the array here should be an object
     * 
     */

    renderFeedBack = () => {
        let feedback = [];
        let obj = {};
        for(let i = 0; i < 10; i++){
            feedback.push(i)
        }

        return feedback.map((el, idx) => <FeedBack feedBack={this.state.feedArray} index={idx} text={el} key={idx}  />)
    }
//pass feedback the number of correct, number of rightspot. it will render that many of
// those, and then 4 - the total(right + rightspot) empty ones 
//will need images for each thing (star, coin, x)
    render() {
        return (
            <section className='board-container'>
                <div className='guesses'>
                    {this.renderGuesses()}
                </div>
                <div className='feedback'>
                    {this.renderFeedBack()}
                </div>
            </section>
        )
    }
}

export default TestBoard;