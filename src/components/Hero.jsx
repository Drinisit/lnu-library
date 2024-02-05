import HeroBg from '../assets/libraryhero.jpg'
import Wave from '../assets/wave1.svg'

const Hero = () => {
  return (
    <div className='w-full relative '>
            <img src={HeroBg} alt="" />
            <img className='absolute top-[50%]' src={Wave} alt="" />
    </div>
  )
}

export default Hero