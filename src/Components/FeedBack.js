import React, { Component } from 'react';


class FeedBack extends Component {

    render() {
        const { feedBack } = this.props;
        return (
            <div className='feedback-square'>
                {feedBack ? 
                <div style={{
                    background: `url(/img/feedback/${feedBack}.png) center/cover no-repeat`
                }}>
                </div> 
                : null}
            </div>
        )
    }
}

export default FeedBack

