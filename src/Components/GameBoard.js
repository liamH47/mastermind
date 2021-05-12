// import axios from 'axios'
import React from 'react'
import Select from './Select'



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
 * 2. this should probably be a Select that is it's own component. on submit, it will 
 */

class GameBoard extends React.Component {

    constructor(props){
        super(props)
            this.state = {
                secretCode: [ 1, 2, 3, 4 ],
                tries: 10,
                gameStarted: false
            };
            this.startGame = this.startGame.bind(this)
    }


    startGame(){
        this.setState({ gameStarted: !this.state.gameStarted })
    }

    render() {
        return (
            <div>
                <h1>Mastermind!</h1>
                <button onClick={this.startGame}>Start Game</button>
                <form>
                    <Select />
                    <Select />
                    <Select />
                    <Select />
                </form>
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
