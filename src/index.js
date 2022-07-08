import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import reportWebVitals from './reportWebVitals';

import TenClass from './tenClassComp';
import TenFunc from './tenFuncComp';


ReactDOM.render(
    // <TenClass />, document.getElementById('app')
    <div>
        <div>
            <TenClass/>
        </div>

        <div>
            <TenFunc/> 
        </div>
        
        
    </div>, document.getElementById('app')

);