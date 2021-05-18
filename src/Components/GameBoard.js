import axios from 'axios'
import React from 'react';
import CodeContainer from './CodeContainer';
import TestBoard from './TestBoard';
import StartForm from './StartForm';
import Timer from './Timer';
import ReplayButton from './ReplayButton';

/**
 * plans for today + this weekend
 * work on the start game function. eventually, there will be a form that allows you to choose the settings for your game.
 *      for now, the following things are priorities:
 *          set static initial state that will be updated when start game is pressed, and can be reset when the game ends or player wants to restart
 *          make it so that when the player wins they have the option to start a new game
 *          also winning guess needs to show
 * add background
 * start adding game settings. probably timer first
 * //easy game setting to add could be make feedback more explicit by not sorting array
 * sort guess arrays so that feedback does not give away order
 *  ^ this could tie into settings. could have an easier setting where the hints are in order
 * 
 * plans for tuesday(LAST FULL DAY!)
 * clean up code 
 * get the start form working
 * program the setting for more or less number options
 * fix flow of start game. e.g. make sure that when you finish a game you are able to reset or go back to form
 * fix timeout to stop when tries = 0 and reveal code
 * also need to fix timer so that when you submit a guess the timer resets
 * add a reset button/
 *      -needs to take back to start form, might just need to set gameStarted to false
 * //
 * 

*/

class GameBoard extends React.Component {

    state = {
        secretCode: [],
        tries: 10,
        gameStarted: false,
        options: [0,1,2,3,4,5,6,7],
        guesses: [],
        revealCode: false,
        score: 0,
        timer: 0
    };

    getCode = () => {
        return axios.get('http://localhost:3001/rng')
        .then(response => response.data)
    };

    startGame = (obj) => {

        this.getCode()
        .then((code) => {
            this.setState({
                secretCode: code,
                tries: obj.tries,
                gameStarted: obj.gameStarted,
                guesses: obj.guesses,
                revealCode: obj.revealCode,
                timer: obj.timer,
                // options: obj.options
            })      
        })
        console.log(this.state)
    }

    submitHandler = (arr) => {
        let secret = this.state.secretCode;
        this.checkGuess(arr, secret)
        console.log(arr, secret);
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
                score: this.state.score + 1 + this.state.tries,
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
            return <ReplayButton startGame={this.startGame}/>
        }
    }
    //will add a 'play again' button to display at end of game
    render() {
        return (
            <section className='game-container'>
                <h1>Mastermind!</h1>
                <h3>Session Score: {this.state.score}</h3>
                {this.state.gameStarted ?
                <>
                <div>
                    {this.state.timer && this.state.tries ?
                    <Timer outOfTime={this.outOfTime} count={this.state.timer} tries={this.state.tries} />
                    : null}
                    <CodeContainer secret={this.state.secretCode} revealCode={this.state.revealCode} />
                    <> {this.state.revealCode ?
                        <h3>Congratulations, you won!</h3>
                        : <h3>Lives:  {this.state.tries}</h3>
                    }
                    </>
                </div>
                    <TestBoard 
                        options={this.state.options} 
                        guesses={this.state.guesses}
                        changeHandler={this.changeHandler}
                        submitHandler={this.submitHandler}
                        tries={this.state.tries}
                    />
                </>
                    : <StartForm startGame={this.startGame}/>
                }
                {this.renderReplayButton()}
            </section>
        )
    }
};
export default GameBoard


