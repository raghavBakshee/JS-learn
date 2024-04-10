/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 // let counter = 15
 const [counter, setCounter] = useState(3)

const addValue = () =>{
  //counter = counter + 1;
  if(counter < 5) setCounter(counter + 1)
  //console.log("clicked", counter)
}

const removeValue = () =>{
  if(counter > 0) setCounter(counter - 1)
}
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter} </h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
