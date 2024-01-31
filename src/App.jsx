import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'

import Navbar from './components/Navbar'

import Products from './components/Products'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App