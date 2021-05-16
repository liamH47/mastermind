import React from 'react'

const StartForm = ({startGame}) => {
    return (
        <form className='start-form' onSubmit={startGame}>
            <button type='submit'>Start Game</button>  
        </form>
    )
}

export default StartForm
