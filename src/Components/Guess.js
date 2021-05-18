import React from 'react';

const Guess = ({guesses, index}) => {

    return (
        <div className='guess-square'>
            {index <= guesses.length - 1 ? 
                <div style={{
                    background: `url(/img/chars/${guesses[index]}.jpg) center/90% no-repeat`
                }}>
                </div>
            :   <div style={{
                    background: `url(/img/mystery/block.jpg) center/90% no-repeat`
                }}>
                </div>
            }
        </div>
    )
}

export default Guess