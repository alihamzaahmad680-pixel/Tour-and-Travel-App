import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaPhone, FaBars, FaTimes } from "react-icons/fa"
import { MdTour } from "react-icons/md"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItemClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-200 hover:text-blue-800"

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='text-2xl font-bold text-gray-800'>
            Trippy 
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-4 items-center text-gray-700 font-medium'>
            <Link to='/' className={menuItemClass}><FaHome /> Home</Link>
            <Link to='/services' className={menuItemClass}><MdTour /> Services</Link>
            <Link to='/about' className={menuItemClass}><FaInfoCircle /> About</Link>
            <Link to='/contact' className={menuItemClass}><FaPhone /> Contact</Link>
            <Link to='/signup' className='bg-blue-200 text-blue-800 px-5 py-2 rounded-lg hover:bg-blue-300 transition-colors duration-300'>
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>

        <div onClick={toggleMenu} className='absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300'></div>

        <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className='px-6 py-8 flex flex-col space-y-4'>
            <Link onClick={toggleMenu} to='/' className={menuItemClass}><FaHome /> Home</Link>
            <Link onClick={toggleMenu} to='/services' className={menuItemClass}><MdTour /> Services</Link>
            <Link onClick={toggleMenu} to='/about' className={menuItemClass}><FaInfoCircle /> About</Link>
            <Link onClick={toggleMenu} to='/contact' className={menuItemClass}><FaPhone /> Contact</Link>
            <Link onClick={toggleMenu} to='/signup' className='bg-blue-200 text-blue-800 px-5 py-2 rounded-lg hover:bg-blue-300 transition-colors duration-300 text-center'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
