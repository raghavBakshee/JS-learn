/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Counter from './components/Counter';
import Post from './components/Post';
import Mymemo from './components/Mymemo';
import Myref from './components/Myref';
import useInterval from './custom_hook/useInterval';
function App() {
  //const [count, setCount] = useState(0)
  const obj = {name:"Hello", age:22};
  const title = "About Title";
  const second = useInterval();
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    {/* <Counter/>
    <Home/>
    <About myObj = {obj} title = {title}/> */}
    
    {/* <Post/> */}
    <Mymemo/>
    {/* <p>Elaped Time : {second}</p>
    <Myref/> */}
    </>
  )
}

export default App
