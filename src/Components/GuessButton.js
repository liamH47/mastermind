// import React from 'react'

// class extends React.Component {

//     const localClickHandler = (src) => {
//         // let num = parseInt(src);
//         clickHandler(src);
//     }

//     return (

//     )
// }



import React, { Component } from 'react'

class GuessButton extends Component {

    localClickHandler = () => {
        this.props.clickHandler(this.props.source);
    }

    render() {
        const { source } = this.props;
        return (
            <button onClick={this.localClickHandler} name={`${source}`}>
                <img src={`/img/chars/${source}.jpg`}  alt={source}></img>
            </button>
        )
    }
}
export default GuessButton