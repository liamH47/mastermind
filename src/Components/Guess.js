import React, {useEffect} from 'react'

const Guess = ({guesses, index}) => {

    useEffect(() => {
        console.log("guess useeffect", guesses);
    }, [])

    // const renderGuess = (props) => {
    //     if(props.guesses[props.index]){
    //         return <p>{props.guesses[props.index]}</p>
    //     }

    // }

    return (
        <div className='guess-square'>
            <p>{guesses[index] || "?"}</p>
        </div>
    )
}

export default Guess

