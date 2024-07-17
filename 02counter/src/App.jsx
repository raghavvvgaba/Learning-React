import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  //useState gives two things in form of an array. On the [0] it gives the variable that has to be changed. On [1] it gives a function which changes the value of the variable at [0]
const [counter, setCounter] = useState(15)

const addValue = () =>{
  if(counter + 1 > 20)
    alert('Upper Limit exceeded');
  else
  setCounter(counter + 1);
  console.log(counter)
}
const removeValue = () =>{
  if(counter - 1 < 0)
    alert('Lower Limit exceeded');
  else
  setCounter(counter - 1);
  console.log(counter)
}

  return (
    <>
      <h1>Counter</h1>
      <h3>Value of counter is {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
