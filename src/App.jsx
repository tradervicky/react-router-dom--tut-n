import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {  Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  const [data, setData] =useState([])

  const handleClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');  
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      
    }
  };
  
  
  
  return (
    <>
     
      
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <button onClick={handleClick}>click me</button>
      {
        data?.map((data, index)=>
        <h1 key={index}>title: {data.title} - yes/No : {data.id}</h1>
        )
      }


    </>
  )
}

export default App