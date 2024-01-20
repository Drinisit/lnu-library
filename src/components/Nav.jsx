import React from 'react'
import NavLinks from './NavLinks'
import Logo from '../assets/lib-logo.png'

const Nav = () => {
  return (
    <div className='w-full py-4 px-16'>
        <div className='text-md flex justify-between items-center'>
            <img className='h-14' src={Logo} alt="" />

            <ul className='flex items-center gap-6'>
                <li>
                 Home
                </li>
                <NavLinks />
  
            </ul>

            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Nav