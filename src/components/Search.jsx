import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className='w-full bg-gray-200'>
        <div className='max-w-[1240px] mx-auto py-6'>
            <div className='flex justify-center'>
            <input className='border border-red-900 rounded-l-md w-10/12 py-1 px-4 mr-1' type="text" placeholder='Search books'/>

            <CiSearch className='text-4xl text-white bg-red-900 rounded-r-md p-1'/>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default Search
