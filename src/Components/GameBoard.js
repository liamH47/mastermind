// import axios from 'axios'
import React from 'react';
import Form from './Form';
import GuessList from './GuessList';
import CodeContainer from './CodeContainer';

/**
 * 
*/

class GameBoard extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                secretCode: [ 1, 2, 3, 4 ],
                tries: 10,
                gameStarted: false,
                options: [0,1,2,3,4,5,6,7],
                guesses: [],
                revealCode: false,
                score: 0
            };
            this.startGame = this.startGame.bind(this)
    }


    startGame(){
        this.setState({ gameStarted: !this.state.gameStarted })
    }

    // changeHandler = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    submitHandler = (obj) => {
        let secret = this.state.secretCode
        let guessArr = [];
        for(let key in obj){
            let plsWork = parseInt(obj[key])
            guessArr.push(plsWork);
        }
        this.checkGuess(guessArr, secret)
        console.log(guessArr, secret);
    }

    checkGuess(arr1, arr2){
        let included = 0;
        let rightSpot = 0;
        let guessObj = {
            guess: [],
            feedback: ''
        }
        for(let i = 0; i < arr1.length; i++){
          if(arr1[i] === arr2[i]) rightSpot++;
          if(arr2.includes(arr1[i]) && arr1[i] !== arr2[i]) included++
        }
        if(rightSpot === 4) {
            this.setState({ 
                revealCode: !this.state.revealCode,
                score: this.state.score + 1 + this.state.tries
            })        
            console.log("you won!"); 
        }
        else {
            this.setState({ tries: this.state.tries - 1 });
            guessObj.guess = arr1;
            if(included + rightSpot === 0){
                guessObj.feedback = "none of those are correct... at all";
            } 
            else {
                guessObj.feedback = `you got ${rightSpot} numbers in their correct place, and ${included} numbers that are in the code, but not in their correct place`; 
            }
            this.setState({ guesses: [...this.state.guesses, guessObj]});
        }
    }

    render() {
        return (
            <div>
                <h1>Mastermind!</h1>
                <h3>Session Score: {this.state.score}</h3>
                <button onClick={this.startGame}>Start Game</button>
                <Form options={this.state.options} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
                <div>
                    <CodeContainer secret={this.state.secretCode} revealCode={this.state.revealCode} />
                    <> {this.state.revealCode ?
                        <h3>Congratulations, you won!</h3>
                        : <h3>You have {this.state.tries} tries left</h3>
                    }
                    </>
                    <h3>Past Guesses:</h3>
                    <GuessList guesses={this.state.guesses}/>
                </div>
            </div>
        )
    }
}

export default GameBoard



    // componentDidMount() {
    //   this.setCode();
    //   axios.get('https://csrng.net/csrng/csrng.php?min=0&max=7')
    //     .then(res => {
    //         // console.log(res.data[0].random)
    //         const number = res.data[0].random;
    //         // console.log(number)
    //         this.setState({...this.state.numbers, number})
    //     });
    //   console.log(this.state);
    // }

    // setCode(){
    //     let nums = [];
    //     let count = 0;
    //     for(count; count < 4; count++){
    //       setInterval(function () {

    //           axios.get('https://csrng.net/csrng/csrng.php?min=0&max=7')
    //           .then(res => {
    //               // console.log(res.data[0].random)
    //               const number = res.data[0].random;
    //               // console.log(number)
    //               nums.push(number)
    //             });
    //           console.log(nums)
    //         }, 1000)
    //     }
    //     clearInterval();
    //     console.log(nums)
    //     this.setState({ numbers: nums });
    // }
