import axios from 'axios'
import React from 'react';
import CodeContainer from './CodeContainer';
import GameBoard from './GameBoard';
import StartForm from './StartForm';
import Timer from './Timer';
import ReplayButton from './ReplayButton';
import FeedBackKey from './FeedBackKey';

class GameContainer extends React.Component {

    state = {
        secretCode: [],
        tries: 10,
        gameStarted: false,
        options: 8,
        guesses: [],
        revealCode: false,
        score: 0,
        timer: 0
    };

    getCode = (num) => {
        return axios.get(`http://localhost:3001/rng/${num}`)
        .then(response => response.data)
    };

    startGame = (obj) => {

        this.getCode(this.state.options - 1)
        .then((code) => {
            this.setState({
                secretCode: code,
                tries: obj.tries,
                gameStarted: obj.gameStarted,
                guesses: obj.guesses,
                revealCode: obj.revealCode,
                timer: obj.timer,
                options: obj.options
            })      
        })
    }

    submitHandler = (arr) => {
        let secret = this.state.secretCode;
        this.checkGuess(arr, secret)
    }
    checkGuess = (userGuess, code) => {
        let guessObj = {
            guess: userGuess,
            feedBack: []
        }
        let correct = 0;
        let guessCopy = [...userGuess];
        let codeCopy = [...code];
        for(let i = 0; i < guessCopy.length; i++){
            if(codeCopy[i] === guessCopy[i]){
                guessObj.feedBack.push("rightSpot");
                guessCopy[i] = -1;
                codeCopy[i] = -1;
                correct++;
            }
        }
        if(correct === 4){
            return this.setState({
                guesses: [...this.state.guesses, guessObj],
                revealCode: !this.state.revealCode,
                score: this.state.score + this.state.tries,
                tries: this.state.tries - 1                  
            })          
        }
        for(let i = 0; i < guessCopy.length; i++){
            let notIncluded = true;
            if(codeCopy[i] === -1) continue;
            for(let j = 0; j < guessCopy.length; j++){
                if(guessCopy[j] === -1) continue;
                else if(codeCopy[i] === guessCopy[j]){
                    guessObj.feedBack.push("sortOf");
                    guessCopy[j] = -1;
                    notIncluded = false;
                    break;
                }
            }
            if(notIncluded) guessObj.feedBack.push("wrong");
        }
        let sorted = guessObj.feedBack.sort();
        guessObj.feedBack = sorted;
        this.setState({ 
            guesses: [...this.state.guesses, guessObj],
            tries: this.state.tries - 1
        }); 
    }

    outOfTime = () => {
        let guessObj = {
            guess: [10,10,10,10],
            feedBack: ['wrong', 'wrong', 'wrong', 'wrong']
        }
        this.setState({
            guesses: [...this.state.guesses, guessObj],
            tries: this.state.tries - 1
        })
    }

    renderReplayButton = () => {
        const { tries, revealCode } = this.state;
        if(revealCode || tries === 0){
            return <ReplayButton options={this.state.options} startGame={this.startGame}/>
        }
    }

    render() {
        return (
            <section className='game-container'>
                <h1>Mastermind!</h1>
                {this.state.gameStarted ?
                <>
                <div>
                    <h3>Session Score: {this.state.score}</h3>
                    {this.renderReplayButton()}
                    <CodeContainer secret={this.state.secretCode} revealCode={this.state.revealCode} tries={this.state.tries} />
                    <> {this.state.revealCode ?
                        <h3>Congratulations, you won!</h3>
                        : <h3>Lives:  {this.state.tries}</h3>
                    }
                    {this.state.timer && this.state.tries ?
                    <Timer outOfTime={this.outOfTime} count={this.state.timer} tries={this.state.tries} />
                    : null}
                    </>
                </div>
                    <GameBoard 
                        options={this.state.options} 
                        guesses={this.state.guesses}
                        submitHandler={this.submitHandler}
                        tries={this.state.tries}
                    />
                <FeedBackKey />  
                </>
                    : <StartForm startGame={this.startGame}/>
                }

            </section>
        )
    }
};
export default GameContainer