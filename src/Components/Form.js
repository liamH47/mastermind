// import React, { useState } from 'react';
// import Select from './Select';

// const Form = () => {
//     const [formData, setFormData] = useState({
//         firstNum: '',
//         secondNum: '',
//         thirdNum: '',
//         fourthNum: ''
//     })

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <Select 
//                 onChange={(e) => setFormData({...formData, firstNum: e.target.value })}
//                 value={formData.firstNum}
//                 name='firstNum'
//             />
//             <Select 
//                 onChange={(e) => setFormData({...formData, secondNum: e.target.value })}
//                 value={formData.secondNum}
//                 name='secondNum'
//             />
//             <Select 
//                 onChange={(e) => setFormData({...formData, thirdNum: e.target.value })}
//                 value={formData.thirdNum}
//                 name='thirdNum'
//             />
//             <Select 
//                 onChange={(e) => setFormData({...formData, fourthNum: e.target.value })}
//                 value={formData.fourthNum}
//                 name='fourthNum'
//             />
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default Form
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

/**
 * need to figure out why the formdata is not working. maybe try using a class component instead
 */