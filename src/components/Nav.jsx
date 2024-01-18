import React from 'react'

const Nav = () => {
  return (
    <div className='w-full py-4 px-8'>
        <div className='text-md flex justify-between'>
            <h1>LNU</h1>

            <ul className='flex'>
                <li className='px-2'>Home</li>
                <li className='px-2'>Resource</li>
                <li className='px-2'>Services</li>
                <li className='px-2'>Library Branches</li>
                <li className='px-2'>About us</li>
            </ul>

            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Nav