import React from 'react'

const StartForm = ({startGame}) => {
    return (
        <form className='start-form' onSubmit={startGame}>
            <h4>Time Limit</h4>
            <label for='None'>None</label><br></br>
            <input type='radio' name='time' value='none'/>
            <label for='30'>30s</label><br></br>
            <input type='radio' name='time' value='30'/>
            <label for='15'>15s</label><br></br>
            <input type='radio' name='time' value='15'/>
            <button type='submit'>Start Game</button>  
        </form>
    )
}

export default StartForm
