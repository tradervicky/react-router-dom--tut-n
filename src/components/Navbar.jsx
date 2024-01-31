import React from 'react'

const Navbar = () => {

  return (
    <div className='h-16 bg-gray-100 flex justify-between px-20 items-center shadow-lg'>
      <div><h1 className='text-3xl font-bold text-blue-950 cursor-pointer'>Logo</h1></div>
<div>
<ul className='flex gap-6'>
        <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Home</li>
        <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Product</li>
        <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>About Us</li>
        <li className='text-lg font-medium text-blue-950 hover:blue cursor-pointer'>Contact Us</li>
      </ul>
</div>

<div><button className='px-4 py-2 bg-blue-950 text-white text-lg font-medium rounded-lg'>Login</button></div>
      
    </div>
  )
}

export default Navbar