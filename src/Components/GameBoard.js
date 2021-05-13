// import axios from 'axios'
import React from 'react';
import Form from './Form';
import GuessList from './GuessList';





/**
 * next plans
 * 1. create inputs for secret code. they should be dropdowns with options of 0-7
 * 2. this should probably be a Select that is it's own component. on submit, it will check whether the user input matches secret code
 * 3. work on updating the amount of remaining tries when submit happens, also displaying the number of tries
 * 4. once tries are updating and displaying, show the details about the guesses
 * 5. create a past guesses component. every guess will be pushed into an array in state, and then each of those will be mapped into a guess that is an <li>
 
*/

class GameBoard extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                secretCode: [ 1, 2, 3, 4 ],
                tries: 10,
                gameStarted: false,
                options: [0,1,2,3,4,5,6,7],
                currentGuess: []
            };
            this.startGame = this.startGame.bind(this)
    }


    startGame(){
        this.setState({ gameStarted: !this.state.gameStarted })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (obj) => {
        this.setState({ currentGuess: [] })
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
        for(let i = 0; i < arr1.length; i++){
          if(arr1[i] === arr2[i]) rightSpot++;
          if(arr2.includes(arr1[i]) && arr1[i] !== arr2[i]) included++
        }
        if(rightSpot === 4) console.log("you won!"); 
        else {
            this.setState({ tries: this.state.tries - 1 });
            if(included + rightSpot === 0){
                console.log("none of those are correct... at all") ;
            } 
            else {
                console.log(`you got ${rightSpot} numbers in their correct place, and ${included} numbers that are in the code, but not in their correct place`); 
            }
        }
        // let included = 0;
        // let rightSpot = 0;
        // for(let i = 0; i < arr1.length; i++){
        //     // if(arr1[i] === arr2[i]) rightSpot++
        //     // if(arr2.includes(arr1[i]) && arr1[i] !== arr2[i]) included++
        //     if(arr1[i] !==arr2[i]){
        //         console.log('nope')
        //         this.setState({ tries: this.state.tries - 1})
        //         return false;
        //     }
        // }
        // console.log('yup!')
        // return true;
        /**
         * need to count 
         * 1. how many values are included but not in the right place
         * 2. how many are included and idi
         * }
         */
    }

    render() {
        return (
            <div>
                <h1>Mastermind!</h1>
                <button onClick={this.startGame}>Start Game</button>
                <Form options={this.state.options} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
                <div>
                    <h3>You have {this.state.tries} tries left</h3>
                    <h3>Past Guesses:</h3>
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
