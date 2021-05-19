import React, { Component } from 'react';


class FeedBack extends Component {

    render() {
        return (
            <div className='feedback-square'>
                {this.props.feedBack ? 
                <div style={{
                    background: `url(/img/feedback/${this.props.feedBack}.png) center/cover no-repeat`
                }}>
                </div> 
                : null}
            </div>
        )
    }
}

export default FeedBack

