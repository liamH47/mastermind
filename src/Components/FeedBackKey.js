import React from 'react'

const FeedBackKey = () => {
    return (
        <div className='feedback-info'>
            <span className='feedback-key'>
                <img src='/img/feedback/rightSpot.png' alt='correct'></img>
                    <p>Right thing, right place.</p>
            </span>
            <span className='feedback-key'>
                <img src='/img/feedback/sortOf.png' alt='sort of'></img>
                    <p>Right thing, wrong place.</p>
            </span>
            <span className='feedback-key'>
                <img src='/img/feedback/wrong.png' alt='wrong'></img>
                    <p>Nope.</p>
            </span>
        </div>
    )
}

export default FeedBackKey
