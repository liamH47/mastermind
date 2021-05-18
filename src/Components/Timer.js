import React, { Component } from 'react'

class Timer extends Component {

    state = {
        count: this.props.count
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if(!this.state.count) {
                this.props.outOfTime();
                this.setState({ count: this.props.count})
            }
            this.setState({ count: this.state.count - 1})
        }, 1000)
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