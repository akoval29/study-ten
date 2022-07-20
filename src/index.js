import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import {Container, Row, Col} from "react-bootstrap";
// import reportWebVitals from './reportWebVitals';

import TenClass from './tenClassComp';
import TenFunc from './tenFuncComp';
import CustomHoocks from './tenCustomHoock';

// const BootStrContainer = (props) => {
//     return (
//         <Container className="mt-5 mb-5">
//             {/* <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>BootstrapTest1</h3> */}
//             <Row>
//                 <Col>
//                     <TenClass/>
//                 </Col>
//                 <Col>
//                     <TenFunc/>
//                 </Col>
//                 <Col>
//                     <CustomHoocks/>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

ReactDOM.render(
  <div>
    <TenClass/>
    <TenFunc/> 
    <CustomHoocks/>
    {/* <BootStrContainer/> */}
  </div>, document.getElementById('app')
);