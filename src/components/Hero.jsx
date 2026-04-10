import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/12.jpg' 

const Hero = () => {
  return (
    <section 
      className='h-screen bg-cover bg-center flex items-center justify-center' 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='bg-opacity-50 p-10 rounded-lg text-center text-white max-w-lg'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Your Journey Your Story 
        </h1>
        <p className='mb-6 text-lg'>
          Choose Your Favourite Destination.
        </p>
        <Link 
          to='/services' 
          className='bg-white text-black px-6 py-3 rounded-lg font-semibold transition'
        >
          Travel Plan 
        </Link>
      </div>
    </section>
  )
}

export default Hero