import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-green-400 font-bold'>Hello World</h1>
    </>
  )
}

export default App
