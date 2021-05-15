import React, { useEffect } from 'react';

//maybe need to pass index as a string so that it doesnt get evaluated as false

const Guess = ({guesses, index}) => {
    // useEffect(() => {
    //     console.log("guess useeffect", index);
    // }, [])

    return (
        <div className='guess-square'>
            <p>{index <= guesses.length - 1 ? parseInt(guesses[index]) : "?"}</p>
        </div>
    )
}

export default Guess

