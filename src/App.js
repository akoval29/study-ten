import logo from './logo.svg';
import {Component, StrictMode} from "react"; // для класів, або як как варіант тащим всю бібліотеку- import React from "react"; 
import './App.css';


nextYear = () => {
  this.setState({
    years: this.state.years +1
  })
}

// const Header = () => {
//   return <h2>Hello from app.js</h2>
// }

// const Field1 = () => {
//   return <input placeholder="Type text" type="text"/>
// }

// const Field2 = () => {
//   const holder = "Enter here - styled";
//   const styledField = {
//     width: "300px"
//   };
//   return <input 
//     placeholder={holder} 
//     type="text" 
//     style={styledField}/>
// }

// class Field3 extends Component {  // або якщо ми імпортували весь реакт - class Field3 extends React.Component {
//   render() {
//     const holder = "Enter here - styled - class";
//     const styledField = {
//       width: "300px"
//     };
//     return <input 
//       placeholder={holder} 
//       type="text" 
//       style={styledField}/>
//   }
// };

// function Btn1() {
//   const text = "Log in";
//   return <button>{text}</button>
// }

// function Btn2() {
//   const res = () =>{
//   return "Log in";
//   }  
//   return <button>{res()}</button>
// }

// function Btn3() {
//   const p = <p>Log in</p>
//   return <button>{p}</button>
// }

// function Btn4() {
//   return <button>{3 + 6}</button>
// }

// function Btn5() {
//   const text = "Log In";
//   const logged = true;
//   return <button>{logged ? "Enter" : text}</button>
// }

// function App() {
//   return (
//     <div className="App">
//       <StrictMode>  
//         <Header/>
//       </StrictMode>
      
//       <Field1/>
//       <Field2/>
//       <Field3/>
//       <Btn1/>
//       <Btn2/>
//       <Btn3/>
//       <Btn4/>
//       <Btn5/>
//     </div>
//   );
// }

// export {Header};  // to index.js
export default App;
