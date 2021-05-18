import React, { Component } from 'react'

class Timer extends Component {

    state = {
        count: this.props.count
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count - 1})
        }, 1000)
        if(!this.state.count) {
            this.props.outOfTime();
        }
    }
    

    render() {
        return (
            <div>
                <p>Time: {this.state.count}</p>
            </div>
        )
    }
}
export default Timer