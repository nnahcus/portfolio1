import { useState } from 'react'
import Navbar from './compenents/navbar'
import './App.css'
import Home from './compenents/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
