import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductCard = ({image, brand, price, description, title}) => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        const fetchApi = async () => {
          try {
            const response = await axios.get("https://dummyjson.com/products");
            setData(response?.data); 
            console.log(response.data);
          } catch (err) {
            console.log(err);
          }
        };
      
        fetchApi();
      }, []);
  return (
    <div>
    <div className='flex flex-wrap flex-col items-center gap-5 pt-5 w-[320px] h-[400px]  m-6 shadow-lg rounded-lg bg-purple-200'>

        <img src={image} alt="image"  className='border border-b-2 h-20 px-4 w-full object-cover rounded-lg'/>
        <h1 className='text-xl font-semibold'>{brand}</h1>
        <p className='text-lg text-gray-400 '>{title}</p>
        <p className='text-lg text-black font-medium'>Price : {price}</p>
        <span className='text-lg px-4 '>{description}</span>
    </div>

</div>
  )
}

export default ProductCard