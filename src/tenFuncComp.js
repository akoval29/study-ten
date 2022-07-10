import React, {useState} from 'react';
import './index.css';

const TenFunc = (props) => {

    let [ten, setTenValue] = useState(10);
    // const [ten2, setTenText] = useState();
    
    function changeTenValue(i) {
        setTenValue(ten1 => ten1 + i);
    }
    
    function randomValue() {
        setTenValue(ten1 => Math.floor(Math.random() * 50));
        
    }

    function resetValue() {
        setTenValue(ten1 => 10);
        
    }
    

    return (
        <div className="app">
            <div className='innerText'> Створений на функціональних компонентах</div>
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