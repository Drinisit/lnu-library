import React from 'react'



import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Display from '../components/Display'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search/>
      <Display />
    </div>
  )
}

export default Home
