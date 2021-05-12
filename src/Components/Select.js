// import React, { Component } from 'react'

// export default class Form extends Component {

//     state = {
//         options: [0,1,2,3,4,5,6,7]
//     }

//     componentDidMount() {
//         console.log("options:", this.state.options)
//     }
    

//     renderOptions(){
//         return this.state.options.map(opt => <option value={opt}>{opt}</option>)
//     }

//     render() {
//         return (
//             <div>
//                <select>
//                 {this.renderOptions}
//                </select>
//             </div>
//         )
//     }
// }

import React from 'react'

const Select = () => {
    return (
        <select>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
        </select>
    )
}

export default Select


