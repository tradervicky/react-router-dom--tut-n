import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';


const Products = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
      const fetchApi = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products");
          setData(response?.data); 
          console.log(response?.data);
        } catch (err) {
          console.log(err);
        }
      };
    
      fetchApi();
    }, []);
    console.log(data)
  return (
    <div className='grid grid-cols-4'>
    {data &&
   data.products?.map((item, index) => (
     <ProductCard key={index} image={item.thumbnail} price={item.price} brand={item.brand} title={item.title} description={item.description}/>
   ))}
     
     

 </div>
  )
}

export default Products