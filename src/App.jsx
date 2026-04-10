import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destination from './components/Destination'
import Trip from './components/Trip'
import Footer from './components/Footer'
import About from './Routes/About'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import SignUp from './Routes/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route 
          path='/' 
          element={
            <>
              <Hero />
              <Destination />
              <Trip />
              <Footer />
            </>
          } 
        />

        {/* Other pages */}
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App