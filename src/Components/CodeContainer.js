import React, { Component } from 'react'

class CodeContainer extends Component {

    componentDidMount() {
        console.log('codecontainer props:', this.props)
    }


    renderSecret(){
        if(this.props.revealCode){
            return this.props.secret.map((number, index) => <li key={index} value={number}>{number}</li>)
        } else {
            return this.props.secret.map((number, index) => <li key={index} value={number}>?</li>)
        }
    //    if(!this.props.revealCode){
    //    }
    }

    render() {
        return (
            <ul className='secret-container'>
                {this.renderSecret()}
            </ul>

        )
    }
}

export default CodeContainer