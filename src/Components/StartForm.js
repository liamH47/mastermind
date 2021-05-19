import React, {Component} from 'react'

class StartForm extends Component {

    state = {
        tries: 10,
        gameStarted: true,
        guesses: [],
        revealCode: false,
        timer: 0,
        options: 8
    }

    localStartHandler = (e) => {
        e.preventDefault();
        const { startGame } = this.props;
        console.log("clicked, state:", this.state);
        startGame(this.state);
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) });
    }

    render(){
        return (
            <form className='start-form' onSubmit={this.localStartHandler}>
                <h4>Time Limit</h4>
                <label for='None'>None</label>
                <input type='radio' name='timer' value={0} onChange={this.changeHandler}/>
                <label for='30'>30s</label>
                <input type='radio' name='timer' value={30} onChange={this.changeHandler}/>
                <label for='15'>15s</label>
                <input type='radio' name='timer' value={15} onChange={this.changeHandler}/>
                <h4>Amount of Options</h4>
                <label for='6'>6</label>
                <input type='radio' name='options' value={6} onChange={this.changeHandler}/>
                <label for='8'>8</label>
                <input type='radio' name='options' value={8} onChange={this.changeHandler}/>
                <label for='10'>10</label>
                <input type='radio' name='options' value={10} onChange={this.changeHandler}/>
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
//         <input type='radio' name='time' value='0' />
//         <label for='30'>30s</label>
//         <input type='radio' name='time' value='30' />
//         <label for='15'>15s</label>
//         <input type='radio' name='time' value='15' />
//         <h4>Amount of Options</h4>
//         <label for='6'>6</label>
//         <input type='radio' name='options' value='6' />
//         <label for='30'>8</label>
//         <input type='radio' name='options' value='8' />
//         <label for='15'>10</label>
//         <input type='radio' name='options' value='10' />
//     <button type='submit'>Start Game</button>  
// </form>
// )