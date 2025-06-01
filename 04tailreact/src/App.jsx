import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "sujan",
    age: 2
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-11'>Tailwind TEST</h1>


      <Card username="chaiAurcode" btnText="visit me" />
      <Card username="sujan" />



    </>
  )
}

export default App
