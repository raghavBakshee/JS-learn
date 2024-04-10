import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  let myObj = {
    username:"raghav",
    age:29
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-9
      rounded-2xl mb-6'>Tailwind Test</h1>

      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that Ive seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

{/* <Card channel="chairaurreact" myArr={[1,2,3]}
someObj = {myObj}/> */}
<Card username = "chaiaurcode" btntext = "Visit Me"/>
<Card username = "chaiaurreact" btntext = "Join Me"/>
    </>
  )
}

export default App
