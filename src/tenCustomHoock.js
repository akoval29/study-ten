import React, {useState, useEffect} from 'react';
import './index.css';

function useCounter(initial) {
  const [counter, setCounter] = React.useState(initial);

  // Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
  // которые приходят в компонент + аргумент initial поменяйте на 0 или null

  React.useEffect(() => {
      fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
          .then(res => res.text())
          .then(res => setCounter(res))
          .catch(err => console.log(err))
  }, [])

  const incCounter = () => {
    if (counter < 50) {
      setCounter(counter => counter + 1)
    }
  } 

  const decCounter = () => {
    if (counter > -50) {
      setCounter(counter => counter - 1)
    }
  }

  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }

  const resetCounter = () => {
    setCounter(initial)
  }
  
  return {counter,
incCounter,
decCounter,
rndCounter,
resetCounter
}
}

const Counter = (props) => {
const {counter, incCounter, decCounter, rndCounter, resetCounter} = useCounter(props.counter);

return (
<div className="app">
<div className='innerText'> Кастомні хуки</div>
  <div className="counter">{counter}</div>
  <div className="controls">
    <button onClick={incCounter}>INC</button>
    <button onClick={decCounter}>DEC</button>
    <button onClick={rndCounter}>RND</button>
    <button onClick={resetCounter}>RESET</button>
  </div>
</div>
)
}

const RndCounter = (props) => {
const {counter, rndCounter, resetCounter} = useCounter(props.counter);

return (
<div className="app">
<div className='innerText'> Fetch на random.org</div>
  <div className="counter">{counter}</div>
  <div className="controls">
    <button onClick={rndCounter}>RND</button>
    <button onClick={resetCounter}>RESET</button>
  </div>
</div>
)
}

const CustomHoocks = () => {
return (
  <>
      <Counter counter={0}/>
      <RndCounter counter={5}/>
  </>
)
}

export default CustomHoocks;
// ReactDOM.render(<App />, document.getElementById('app'));
