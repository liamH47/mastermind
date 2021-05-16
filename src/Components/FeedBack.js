// import React, { useEffect } from 'react';

// const FeedBack = ({feedBack, index}) => {

//     useEffect(() => {
//         if(feedBack[index]){
//             console.log("feedback hook:", feedBack[index])
//         }
//     }, [])

//     const renderGrid = () => {
//         let items = [];
//         for(let i = 0; i < 4; i++){
//             items.push(i);
//         }
//         return items.map(el => <div className='single-feedback'></div>)
//     }

//     return (
//         <div className='feedback-square'>
//             {renderGrid()}
//         </div>
//     )
// }

// export default FeedBack

import React, { Component } from 'react';
import TinySquare from './TinySquare'

class FeedBack extends Component {

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("in feedback CDU:", this.props.feedBack[this.props.index])
    // }
    

    // renderGrid = () => {
    //     let items = [];
    //     for(let i = 0; i < 4; i++){
    //         items.push(i);
    //     }
    //     return items.map((el, index) => <TinySquare key={index}/>)
    // }

    render() {
        return (
            <div className='feedback-square'>
                {this.props.feedBack ? <img src={`/img/feedback/${this.props.feedBack}.png`}></img> : <></>}
            </div>
        )
    }
}

export default FeedBack

