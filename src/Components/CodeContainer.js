import React, { Component } from 'react'

class CodeContainer extends Component {

    renderSecret(){
        const { revealCode, secret, tries } = this.props;
        if(revealCode || tries === 0){
            return secret.map((number, index) => <img key={index} alt={number} src={`/img/chars/${number}.jpg`}></img>)
        } else {
            return secret.map((number, index) => <img key={index} alt={number} src="/img/mystery/block.jpg"></img>)
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
