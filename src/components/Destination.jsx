import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/4.jpg'
import img3 from '../assets/5.jpg'
import img4 from '../assets/6.jpg'

const Destination = () => {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='max-w-4xl mx-auto text-center mb-16 px-4'>
        <h2 className='text-4xl font-bold mb-4'>Popular Destinations</h2>
        <p className='text-gray-600 text-lg leading-relaxed'>
         Toure give you the opportunity to explore the world and discover new places.
        </p>
      </div>
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mb-24'>

        <div className='lg:w-1/2 pl-6 lg:pl-12'>
          <h3 className='text-2xl font-bold mb-4'>Mt.Daguldul Batangas</h3>
          <p className='text-gray-600 leading-relaxed max-w-md'>
            Mt.Daguldul is a popular hiking destination in Batangas, known for its scenic views and challenging trails. 
            Experience the beauty of nature and enjoy the fresh mountain air while exploring this hidden gem.
            
          </p>
        </div>
        <div className='lg:w-1/2 flex gap-6'>
          <img 
            src={img1} 
            className='w-1/2 h-64 object-cover rounded-xl shadow-lg -mt-6 hover:scale-105 transition duration-300'
          />
          <img 
            src={img2} 
            className='w-1/2 h-64 object-cover rounded-xl shadow-lg mt-6 hover:scale-105 transition duration-300'
          />
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-12'>
        
        <div className='lg:w-1/2 pl-6 lg:pl-12'>
          <h3 className='text-2xl font-bold mb-4'>Taal Volcano Batangas </h3>
          <p className='text-gray-600 leading-relaxed max-w-md'>
            Taal Volcano is a stunning natural wonder located in Batangas, Philippines. 
            Experience the beauty of this active volcano and its surrounding landscapes.
              Explore the crater lake, hike to the summit for breathtaking views, and immerse yourself in the unique ecosystem of this volcanic island.
          </p>
        </div>

        <div className='lg:w-1/2 flex gap-6'>
          <img 
            src={img3} 
            className='w-1/2 h-64 object-cover rounded-xl shadow-lg -mt-6 hover:scale-105 transition duration-300'
          />
          <img 
            src={img4} 
            className='w-1/2 h-64 object-cover rounded-xl shadow-lg mt-6 hover:scale-105 transition duration-300'
          />
        </div>
      </div>

    </section>
  )
}

export default Destination