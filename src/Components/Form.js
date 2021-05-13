
import React, { Component } from 'react'

class Form extends Component {
    state = {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    setOptions = () => {
        return this.props.options.map(opt => <option value={opt}>{opt}</option>)
    }
    localSubHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state);
    }

    render() {
        return (
            <form onSubmit={this.localSubHandler}>
                <select name='num1' onChange={this.changeHandler}>
                    {this.setOptions()}
                </select>
                <select name='num2' onChange={this.changeHandler}>
                    {this.setOptions()}
                </select>
                <select name='num3' onChange={this.changeHandler}>
                    {this.setOptions()}
                </select>
                <select name='num4' onChange={this.changeHandler}>
                    {this.setOptions()}
                </select>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
