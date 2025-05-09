import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let [counter, setCounter] = useState(5)
  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // console.log("value added", Math.random());
    
    // counter = counter + 1
    // console.log("clicked", counter);

    //setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter -1)
  } 

  return (
    <>
      <h1>Mritunjay Mishra</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
