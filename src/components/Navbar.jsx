import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='h-16 bg-gray-100 flex justify-between px-20 items-center shadow-lg'>
      <div><h1 className='text-3xl font-bold text-blue-950 cursor-pointer italic underline'>Neha's Store</h1></div>
<div>
<ul className='flex gap-6'>
       <NavLink to='/'> <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Home</li></NavLink>
       <NavLink to='/products'> <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Product</li></NavLink>
       <NavLink to='/about'>  <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>About Us</li></NavLink>
        <NavLink to='/contact'> <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Contact Us</li></NavLink>
      </ul>
</div>

<div><button className='px-4 py-2 bg-blue-950 text-white text-lg font-medium rounded-lg'>Login</button></div>
      
    </div>
  )
}

export default Navbar