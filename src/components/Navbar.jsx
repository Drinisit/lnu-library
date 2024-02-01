import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header  className='text-center'>
            <nav>
                <ul className='flex gap-2 '>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/services">Service</NavLink></li>
                    <li><NavLink to="/braches">Libray Branches</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar