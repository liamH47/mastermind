import React, { Component } from 'react'

class GuessButton extends Component {

    localClickHandler = () => {
        this.props.clickHandler(this.props.source);
    }

    render() {
        const { source, isDisabled, tries } = this.props;
        return (
            <div>
                <button disabled={isDisabled >= 4 || !tries} onClick={this.localClickHandler} name={`${source}`}>
                    <img src={`/img/chars/${source}.jpg`}  alt={source}></img>
                </button>
            </div>
        )
    }
}
export default GuessButton
