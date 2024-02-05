import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className='w-full bg-[#680000]'>
        <div className='max-w-[1240px] mx-auto md:py-6 py-2'>
            <div className='flex justify-center'>
            <input className='border border-red-900 rounded-l-md md:w-10/12 w-1/2 md:h-9 h-6 text-sm py-1 px-4 mr-1' type="text" placeholder='Search books'/>

            <CiSearch className='md:text-4xl text-2xl text-white bg-red-900 rounded-r-md p-1'/>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default Search
