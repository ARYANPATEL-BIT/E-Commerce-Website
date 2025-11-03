import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './Component/navbar'
import Women from './pages/Women'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/women' element={<Women/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
