import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './Component/navbar'
import Women from './pages/Women'
import Men from './pages/Men'

function App() {

  return (
    <BrowserRouter>
      <Navbar className="Navbar"/>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/men' element={<Men/>}></Route>
          <Route path='/women' element={<Women/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
