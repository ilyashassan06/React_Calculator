import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './assets/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex h-[100vh] justify-center items-center'>

    <Calculator/>
     </div>
  )
}

export default App
