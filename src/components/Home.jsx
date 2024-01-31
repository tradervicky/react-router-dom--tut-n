
import axios from 'axios'
import  { useEffect } from 'react'
import { useState } from 'react'
import HomeCard from './HomeCard'

const Home = () => {
  

const [data, setData] = useState([]); 



useEffect(() => {
  const fetchApi = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setData(response?.data); 
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchApi();
}, []);
  return (
    <div className='grid grid-cols-4'>
       {data &&
      data.users?.map((item, index) => (
        <HomeCard key={index} image={item.image} fname={item.firstName} lname={item.lastName} email={item.email} address={item.address.address} />
      ))}
        
        

    </div>
  )
}

export default Home