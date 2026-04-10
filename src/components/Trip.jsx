import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

const Trip = () => {

  const trips = [
    {
      id: 1,
      title: 'Paris Tour',
      img: img1,
      desc: 'Experience the magic of Paris with breathtaking views of the Eiffel Tower, charming streets of Montmartre, luxurious cruises on the Seine, world-class cuisine at local bistros, and endless cultural landmarks. Enjoy a journey filled with romance, art, and unforgettable memories.'
    },
    {
      id: 2,
      title: 'Tokyo Trip',
      img: img2,
      desc: 'Dive into the vibrant city of Tokyo, where tradition meets modernity. Explore historic temples, buzzing street markets, futuristic technology, exquisite Japanese cuisine, and neon-lit nightlife. Every corner offers a new adventure and a unique cultural experience.'
    },
    {
      id: 3,
      title: 'Dubai Tour',
      img: img3,
      desc: 'Discover Dubai’s blend of luxury and adventure. From towering skyscrapers like the Burj Khalifa, golden desert safaris, serene beaches, world-class shopping malls, to exquisite dining experiences, this city offers unforgettable moments and experiences for every traveler.'
    }
  ]

  return (
    <section className='py-20 bg-gray-50'>

      <div className='text-center mb-16'>
        <h2 className='text-5xl font-extrabold mb-4 text-gray-800'>Our Trips</h2>
        <p className='text-gray-600 max-w-xl mx-auto'>
          Explore our carefully curated trips designed for unforgettable experiences. Each destination offers unique adventures, cultural richness, and luxury that will leave you inspired and rejuvenated.
        </p>
      </div>

      <div className='max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {trips.map(trip => (
          <div 
            key={trip.id} 
            className='bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'
          >
            
            <div className='overflow-hidden'>
              <img 
                src={trip.img} 
                alt={trip.title} 
                className='w-full h-48 object-cover transition-transform duration-500 hover:scale-110'
              />
            </div>

            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-4 text-gray-800'>{trip.title}</h3>
              <p className='text-gray-700 text-base leading-relaxed'>{trip.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Trip