import axios from 'axios'
import React from 'react';
import GuessForm from './GuessForm';
import GuessList from './GuessList';
import CodeContainer from './CodeContainer';
import TestBoard from './TestBoard';
import StartForm from './StartForm';
import Timer from './Timer';

/**
 * plans for today + this weekend
 * work on the start game function. eventually, there will be a form that allows you to choose the settings for your game.
 *      for now, the following things are priorities:
 *          set static initial state that will be updated when start game is pressed, and can be reset when the game ends or player wants to restart
 *          make it so that when the player wins they have the option to start a new game
 *          also winning guess needs to show
 * adjust size of secret code mystery boxes
 * fix feedback logic
 * fix aesthetics of current guess container + guess form
 * add background
 * start adding game settings. probably timer first
 * //easy game setting to add could be make feedback more explicit by not sorting array
 * sort guess arrays so that feedback does not give away order
 *  ^ this could tie into settings. could have an easier setting where the hints are in order
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
    
    startGame = (e) => {
        e.preventDefault();
        this.getCode()
        .then((code) => {
            this.setState({
                 gameStarted: !this.state.gameStarted,
                 secretCode: code
            })      
        })
        console.log(this.state)
    }

    submitHandler = (arr) => {
        let secret = this.state.secretCode;
        this.checkGuess(arr, secret)
        console.log(arr, secret);
    }

    checkGuess = (arr1, arr2) => {
        let guessObj = {
            guess: [],
            feedBack: []
        }
        let rightSpot = 0;
        guessObj.guess = arr1;
        for(let i = 0; i < arr1.length; i++){
          if(arr1[i] === arr2[i]){
            rightSpot++;
            guessObj.feedBack.push("rightSpot");
            if(rightSpot === 4) {
               console.log("you won!");
               return this.setState({
                    guesses: [...this.state.guesses, guessObj],
                    revealCode: !this.state.revealCode,
                    score: this.state.score + 1 + this.state.tries,
                    tries: this.state.tries - 1
                })
            }
          } else if (!arr2.includes(arr1[i])){
            guessObj.feedBack.push("wrong");
          } else {            
            guessObj.feedBack.push("sorta");
          }
        
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
            return <button >Play Again</button>
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
                    {this.state.timer ?
                    <Timer outOfTime={this.outOfTime} count={5} />
                    : <> </>
                    }
                    <CodeContainer secret={this.state.secretCode} revealCode={this.state.revealCode} />
                    <> {this.state.revealCode ?
                        <h3>Congratulations, you won!</h3>
                        : <h3>You have {this.state.tries} tries left</h3>
                    }
                    </>
                </div>
                    <TestBoard 
                        options={this.state.options} 
                        guesses={this.state.guesses}
                        changeHandler={this.changeHandler}
                        submitHandler={this.submitHandler}
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

/**
 * css to work on
 * 1. make images fit perfectly in square
 * 2. get skeleton of start game form fleshed out for when i add rules
 * 3. adjust size and positioning of current guess and guess form so they appear next to board
 * 4. create a nicer header
 * 5. maybe change everything to some kind of mario font
 */

