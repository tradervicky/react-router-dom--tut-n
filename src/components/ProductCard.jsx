import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductCard = ({image, brand, description, price, title}) => {
   
  return (
    <div>
    <div className='flex flex-wrap flex-col items-center gap-5 pt-5 w-[320px] h-[300px]  m-6 shadow-lg rounded-lg bg-purple-200'>

        <img src={image} alt="image"  className='border border-b-2 h-24 w-24 rounded-[50%]'/>
        <h1 className='text-xl font-semibold'>{brand}</h1>
        <p className='text-lg text-gray-400 '>{title}</p>
        <p className='text-lg text-black font-medium'>Price : {price}</p>
        <span className='text-lg '>{description}</span>
    </div>

</div>
  )
}

export default ProductCard