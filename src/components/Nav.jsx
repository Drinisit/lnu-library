import React from 'react'
import Logo from '../assets/lib-logo.png'

const Nav = () => {
  return (
    <div className='w-full py-4 px-16'>
        <div className='text-md flex justify-between items-center'>
            <img className='h-14' src={Logo} alt="" />

            <ul className='flex'>
                <li className='px-4 font-bold'>Home</li>
                <li className='px-4 font-bold'>Resource</li>
                <li className='px-4 font-bold'>Services</li>
                <li className='px-4 font-bold'>Library Branches</li>
                <li className='px-4 font-bold'>About us</li>
            </ul>

            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Nav