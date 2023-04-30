import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [click,setClick]=useState(false)
  return (
    <div className='main-nav'>
        <ul className={click?"nav-link":"nav-link active"}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/about">Posts</Link></li>
            <li><Link to="/blog">Comments</Link></li>
            <li><Link to="/contact">Album</Link></li>
            <li><Link to="/album"><i class="fa-solid fa-cart-shopping"></i></Link></li>

            


        </ul>
        <div className='oc-bar'onClick={()=>setClick(!click)}>
        { click ? (<i className="fa-solid fa-xmark"></i>):(<i className="fa-solid fa-bars"></i>)
       }
        </div>
      
    </div>
  )
}
export default Navbar;
