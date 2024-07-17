import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card username="Raghav Gaba" btnText="Click Here"/>
      <Card username="Dev Gaba" btnText="Visit Here"/>
    </>
  )
}

export default App
