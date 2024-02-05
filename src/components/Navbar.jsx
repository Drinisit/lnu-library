import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10'>

            <div>
              <h1 className='text-2xl text-red-900 font-semibold cursor-pointer'>LNU-LIBRARY</h1>
            </div>
        
            <nav>
                <ul className='flex gap-2 '>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/services">Service</NavLink></li>
                    <li><NavLink to="/braches">Libray Branches</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </nav>
      
    </div>
  )
}

export default Navbar