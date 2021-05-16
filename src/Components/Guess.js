import React, { useEffect } from 'react';

//maybe need to pass index as a string so that it doesnt get evaluated as false

const Guess = ({guesses, index}) => {
    // useEffect(() => {
    //     console.log("guess useeffect", index);
    // }, [])

    return (
        <div className='guess-square'>
            {index <= guesses.length - 1 ? 
                <img src={`/img/chars/${guesses[index]}.jpg`} alt={guesses[index]} />
                : <img src='/img/mystery/block.jpg' alt='?'/>
            }
        </div>
    )
}

export default Guess

// return (
//     <div className='guess-square'>
//         {index <= guesses.length - 1 ? 
//             parseInt(guesses[index]) 
//             : "?"
//         }
//     </div>
// )