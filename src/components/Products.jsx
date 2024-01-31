import React from 'react'
import ProductCard from './ProductCard';


const Products = () => {
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
    console.log(data)
  return (
    <div className='grid grid-cols-4'>
    {data &&
   data.products?.map((item, index) => (
     <ProductCard key={index} image={item.image} fname={item.firstName} lname={item.lastName} email={item.email} address={item.address.address} />
   ))}
     
     

 </div>
  )
}

export default Products