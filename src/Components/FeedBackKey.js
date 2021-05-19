import React from 'react'

const FeedBackKey = () => {
    return (
        <>
            <span className='feedback-key'>
                <img src='/img/feedback/rightSpot.png'></img>
                    <p>Right thing, right place.</p>
            </span>
            <span className='feedback-key'>
                <img src='/img/feedback/sortOf.png'></img>
                    <p>Right thing, wrong place.</p>
            </span>
            <span className='feedback-key'>
                <img src='/img/feedback/wrong.png'></img>
                    <p>Nope.</p>
            </span>
        </>
    )
}

export default FeedBackKey
