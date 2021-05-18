import e from 'express';
import React, {Component} from 'react'

class StartForm extends Component {

    //need to create a state field here to keep track of values
    //when start game is clicked it will call start game, this time being passed the state object from this component
    //also need to change the way that options are rendered so that it loops up until the value of options, and fix the backend thing
    state = {
        tries: 10,
        gameStarted: true,
        guesses: [],
        revealCode: false,
        // time: 0,
        // options: 8
    }

    localStartHandler = (e) => {
        e.preventDefault();
        const { startGame } = this.props;
        console.log("clicked")
        startGame(this.state)
    }

    // changeHandler = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    render(){
        return (
            <form className='start-form' onSubmit={this.localStartHandler}>
                <h4>Time Limit</h4>
                <label for='None'>None</label>
                <input type='radio' name='time' value='0' />
                <label for='30'>30s</label>
                <input type='radio' name='time' value='30' />
                <label for='15'>15s</label>
                <input type='radio' name='time' value='15' />
                <h4>Amount of Options</h4>
                <label for='6'>6</label>
                <input type='radio' name='options' value='6' />
                <label for='30'>8</label>
                <input type='radio' name='options' value='8' />
                <label for='15'>10</label>
                <input type='radio' name='options' value='10' />
            <button type='submit'>Start Game</button>  
        </form>
        )
    }
}

export default StartForm

// return (
//     <form className='start-form' onSubmit={this.localStartHandler}>
//         <h4>Time Limit</h4>
//         <label for='None'>None</label>
//         <input type='radio' name='time' value='0' onChange={this.changeHandler}/>
//         <label for='30'>30s</label>
//         <input type='radio' name='time' value='30' onChange={this.changeHandler}/>
//         <label for='15'>15s</label>
//         <input type='radio' name='time' value='15' onChange={this.changeHandler}/>
//         <h4>Amount of Options</h4>
//         <label for='6'>6</label>
//         <input type='radio' name='options' value='6' onChange={this.changeHandler}/>
//         <label for='30'>8</label>
//         <input type='radio' name='options' value='8' onChange={this.changeHandler}/>
//         <label for='15'>10</label>
//         <input type='radio' name='options' value='10' onChange={this.changeHandler}/>
//     <button type='submit'>Start Game</button>  
// </form>
// )
