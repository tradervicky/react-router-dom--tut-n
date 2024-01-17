import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navi = useNavigate();

const handleContacts = ()=>{
    navi('/contacts')
}
const handleServices = ()=>{
    navi('/services')
}
  return (
    <div>
        <ul style={{display:"flex", cursor:"pointer", justifyContent:"space-evenly"}}>
           <li onClick={()=>navi('/')}>Home</li>
            <li onClick={()=>navi('/about')}>About</li>
            <li onClick={handleContacts}>Contacts</li>
            <li onClick={handleServices}>Services</li>
           {/* <Link to={'/'}><li>Home</li></Link> 
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/services'>Services</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbar