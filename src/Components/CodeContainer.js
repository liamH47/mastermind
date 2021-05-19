import React, { Component } from 'react'

class CodeContainer extends Component {

    renderSecret(){
        if(this.props.revealCode || this.props.tries === 0){
            return this.props.secret.map((number, index) => <img key={index} alt={number} src={`/img/chars/${number}.jpg`}></img>)
        } else {
            return this.props.secret.map((number, index) => <img key={index} alt={number} src="/img/mystery/block.jpg"></img>)
        }
    }

    render() {
        return (
            <div className='secret-container'>
                {this.renderSecret()}
            </div>
        )
    }
}

export default CodeContainer
