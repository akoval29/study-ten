import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
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
        <div class="app">
        <div class="counter">{this.state.ten}</div>
        <div class="controls">
        <button onClick={this.nextStep}>{this.state.textPlus}</button>
        <button onClick={this.prefStep}>{this.state.textMinus}</button>
        <button onClick={this.randomStep}>{this.state.textRandom}</button>
        <button onClick={this.resetStep}>{this.state.textReset}</button>
        </div>
        </div>
    )
    }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов