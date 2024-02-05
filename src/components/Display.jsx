import React from 'react'
import Img1 from '../assets/img4.png'

const Display = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-5 md:py-8 py-4'>

            <div className='grid md:grid-cols-3 grid-cols-1 bg-slate-400'>
               <div className='md:col-span-3 bg-slate-300'>
                  <h1 className='font-semibold uppercase md:text-2xl text-xl md:text-start text-center'>Book and e-books</h1>
              </div>
              
                  <div className='bg-amber-500'>
                    <img className='h-56' src={Img1} alt="" />
                  </div>
                  <div className='bg-amber-300 md:col-span-2 col-span-1'>
                    <img className='h-56' src={Img1} alt="" />
                  </div>




            </div>
            
        </div>
    </div>
  )
}

export default Display
