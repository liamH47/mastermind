import React, { Component } from 'react';
import Guess from './Guess';
import FeedBack from './FeedBack';
import GuessForm from './GuessForm';

class TestBoard extends Component {

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
        let newArr2 = [];
        let guesses = this.props.guesses;
        for(let i = 0; i < guesses.length; i++){
            Array.prototype.push.apply(newArr2, guesses[i].feedBack);
        }
        this.setState({ feedArray: newArr2 });
    }

    renderFeedBack = () => {
        let feedback = [];
        for(let i = 0; i < 40; i++){
            feedback.push(i)
        }

        return feedback.map((el, idx) => <FeedBack feedBack={this.state.feedArray[idx]} index={idx} text={el} key={idx}  />)
    }

    render() {
        const { options, guesses, submitHandler, tries } = this.props;
        return (
            <section className='current-game'>
                <div className='board-container'>
                    <div className='guesses'>
                        {this.renderGuesses()}
                    </div>
                    <div className='feedback'>
                        {this.renderFeedBack()}
                    </div>
                </div>
                <GuessForm 
                    options={options} 
                    guesses={guesses}
                    submitHandler={submitHandler}
                    tries={tries}
                />
            </section>
        )
    }
}

export default TestBoard;