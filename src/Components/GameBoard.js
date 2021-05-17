import axios from 'axios'
import React from 'react';
import GuessForm from './GuessForm';
import GuessList from './GuessList';
import CodeContainer from './CodeContainer';
import TestBoard from './TestBoard';
import StartForm from './StartForm';

/**
 * plans for today + this weekend
 * create a board that looks more like a traditional mastermind board
 * work on the start game function. eventually, there will be a form that allows you to choose the settings for your game.
 *      for now, the following things are priorities:
 *          set static initial state that will be updated when start game is pressed, and can be reset when the game ends or player wants to restart
 *          make it so that when the player wins they have the option to start a new game
 *          also winning guess needs to show
*/

class GameBoard extends React.Component {

    state = {
        secretCode: [],
        tries: 10,
        gameStarted: false,
        options: [0,1,2,3,4,5,6,7],
        guesses: [],
        revealCode: false,
        score: 0
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
                    revealCode: !this.state.revealCode,
                    score: this.state.score + 1 + this.state.tries
                })
            }
            //this else if is not quite right. 0 is messing it up.
          } else if (!arr2.includes(arr1[i])){
            guessObj.feedBack.push("wrong");
          } else {
            guessObj.feedBack.push("included");
          }
        
        }
        this.setState({ 
            guesses: [...this.state.guesses, guessObj],
            tries: this.state.tries - 1
        });
        
    
    }
    render() {
        return (
            <section className='game-container'>
                <h1>Mastermind!</h1>
                <h3>Session Score: {this.state.score}</h3>
                {this.state.gameStarted ?
                <>
                <div>
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
                    {/* <GuessForm options={this.state.options} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>                 */}
                </>
                    : <StartForm startGame={this.startGame}/>
                }

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

