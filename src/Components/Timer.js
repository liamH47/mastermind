import React, { Component } from 'react'

class Timer extends Component {

    state = {
        count: this.props.count
    }
    componentDidMount() {
        if(this.props.tries > 0){
            this.interval = setInterval(() => {
                if(!this.state.count) {
                    this.props.outOfTime();
                    this.setState({ count: this.props.count + 1})
                }
                this.setState({ count: this.state.count - 1})
            }, 1000)
        };
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='timer-container'>
                <h3>Time: {this.state.count}</h3>
            </div>
        )
    }
}
export default Timer