import React from 'react'
import Heroimg from '../assets/libraryhero.jpg'

const Hero = () => {
  return (
    <div className='w-full h-full relative'>
        <img src={Heroimg} alt="" />
       <svg className='absolute top-[50%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#680000" fill-opacity="1" d="M0,0L120,48C240,96,480,192,720,229.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero