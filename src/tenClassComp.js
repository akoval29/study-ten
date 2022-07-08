import React from 'react';
import {Component} from 'react';
import './index.css';

class TenClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: 10,
            textPlus: "INCR",
            textMinus: "DECR",
            textReset: "RESET",
            textRandom: "RND"
        }
    }
    
    nextStep = () => {
        this.setState({
        ten: this.state.ten +1
        })
    }
    
    prefStep = () => {
        this.setState({
        ten: this.state.ten -1
        })
    }
    
    resetStep = () => {
        this.setState({
        ten: this.state.ten = 10
        })
    }

    randomStep = () => {
        this.setState({
        ten: this.state.ten = Math.floor(Math.random() * 50)
        })
    }

    render() {
        return (
            <div className="app">
                <div className="counter">{this.state.ten}</div>
                    <div className="controls">
                    <button onClick={this.nextStep}>{this.state.textPlus}</button>
                    <button onClick={this.prefStep}>{this.state.textMinus}</button>
                    <button onClick={this.randomStep}>{this.state.textRandom}</button>
                    <button onClick={this.resetStep}>{this.state.textReset}</button>
                </div>
            </div>
        )
    }
}

export default TenClass;
