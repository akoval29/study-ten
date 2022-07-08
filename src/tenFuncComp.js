import React, {useState} from 'react';
import './index.css';

const TenFunc = (props) => {

    let [ten, setTenValue] = useState(10);
    // const [ten2, setTenText] = useState();
    
    function changeTenValue(i) {
        setTenValue(ten1 => ten1 + i);
    }
    
    function randomValue() {
        return ten = Math.floor(Math.random() * 50);
        
    }

    function resetValue() {
        ten = 10;
        
    }
    
    // this.state = {
    //         ten: 10,
    //         textPlus: "INCR",
    //         textMinus: "DECR",
    //         textReset: "RESET",
    //         textRandom: "RND"
    //     }
    // }
    
    // nextStep = () => {
    //     this.setState({
    //         ten: this.state.ten +1
    //     })
    // }
    
    // prefStep = () => {
    //     this.setState({
    //         ten: this.state.ten -1
    //     })
    // }
    
    // resetStep = () => {
    //     this.setState({
    //         ten: this.state.ten = 10
    //     })
    // }

    // randomStep = () => {
    //     this.setState({
    //         ten: this.state.ten = Math.floor(Math.random() * 50)
    //     })
    // }


    return (
        <div className="app">
            <div className="counter">{ten}</div>
                <div className="controls">
                    <button onClick={() => changeTenValue(1)}>+1</button>
                    <button onClick={() => changeTenValue(-1)}>-1</button>
                    <button onClick={() => randomValue()}>Random</button>
                    <button onClick={() => resetValue()}>Reset</button>
            </div>
        </div>
    )
    
}

export default TenFunc;