// import axios from 'axios'
import React from 'react'
import Form from './Form'



// const GameBoard = () => {
//     const [gameStarted, setGameStarted] = useState(false)
//     return (
//         <div>
//            <h1>Mastermind!</h1> 
//            <button onClick={() => setGameStarted(!gameStarted)}>Start Game</button>
//         </div>
//     )
// }

// export default GameBoard

/**
 * next plans
 * 1. create inputs for secret code. they should be dropdowns with options of 0-7
 * 2. this should probably be a Select that is it's own component. on submit, it will check whether the user input matches secret code
 * 3.  
 
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
            this.submitHandler = this.submitHandler.bind(this)
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
        let guessArr = [];
        for(let key in obj){
            let plsWork = parseInt(obj[key])
            guessArr.push(plsWork);
        }
        if(guessArr == this.state.secretCode){
            console.log('correct!')
        }      
        this.setState({ currentGuess: guessArr })
        console.log(this.state.currentGuess, this.state.secretCode);
    }

    render() {
        return (
            <div>
                <h1>Mastermind!</h1>
                <button onClick={this.startGame}>Start Game</button>
                <Form options={this.state.options} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
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
