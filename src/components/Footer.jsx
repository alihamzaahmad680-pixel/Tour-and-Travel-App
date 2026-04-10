// import React from 'react'
// import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-14 px-6 md:px-12">

//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-8">
//         <div>
//           <h2 className="text-3xl font-bold tracking-wide">Trippy</h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Choose your favourite destination.
//           </p>
//         </div>

//         <div className="flex gap-5 mt-6 md:mt-0 text-lg">
//           <a href="#" className="p-3 rounded-full bg-gray-900 hover:bg-blue-600 transition duration-300">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="p-3 rounded-full bg-gray-900 hover:bg-pink-500 transition duration-300">
//             <FaInstagram />
//           </a>
//           <a href="#" className="p-3 rounded-full bg-gray-900 hover:bg-blue-400 transition duration-300">
//             <FaTwitter />
//           </a>
//           <a href="#" className="p-3 rounded-full bg-gray-900 hover:bg-gray-600 transition duration-300">
//             <FaBehance />
//           </a>
//         </div>

//       </div>
      
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Project</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li><a href="#" className="hover:text-white transition">Changelog</a></li>
//             <li><a href="#" className="hover:text-white transition">Status</a></li>
//             <li><a href="#" className="hover:text-white transition">License</a></li>
//             <li><a href="#" className="hover:text-white transition">All Versions</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Community</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li><a href="#" className="hover:text-white transition">GitHub</a></li>
//             <li><a href="#" className="hover:text-white transition">Issues</a></li>
//             <li><a href="#" className="hover:text-white transition">Project</a></li>
//             <li><a href="#" className="hover:text-white transition">Twitter</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Help</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li><a href="#" className="hover:text-white transition">Support</a></li>
//             <li><a href="#" className="hover:text-white transition">Troubleshooting</a></li>
//             <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Others</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
//             <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-white transition">License</a></li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
//         {new Date().getFullYear()} Trippy. All rights reserved.
//       </div>

//     </footer>
//   )
// }

// export default Footer
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-6 md:px-12">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-8">
        
        <div>
          <h2 className="text-3xl font-bold tracking-wide">Trippy</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Choose your favourite destination.
          </p>
        </div>
        <div className="flex gap-5 mt-6 md:mt-0 text-lg">

          <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-blue-600 transition duration-300">
            <FaFacebookF />
          </a> 

           <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-pink-500 transition duration-300">
            <FaInstagram />
          </a> 

         
          <a href="https://www.linkedin.com/in/ali-hamza-547b6b38a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-blue-700 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alihamzaahmad680-pixel" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-gray-700 transition duration-300">
            <FaGithub />
          </a>

        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div>
          <h4 className="text-lg font-semibold mb-4">Project</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            <li><a href="#" className="hover:text-white transition">Status</a></li>
            <li><a href="#" className="hover:text-white transition">License</a></li>
            <li><a href="#" className="hover:text-white transition">All Versions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="https://github.com/yourusername" className="hover:text-white transition">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition">Issues</a></li>
            <li><a href="#" className="hover:text-white transition">Project</a></li>
            <li><a href="https://twitter.com/yourprofile" className="hover:text-white transition">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Support</a></li>
            <li><a href="#" className="hover:text-white transition">Troubleshooting</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Others</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">License</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        {new Date().getFullYear()} Trippy. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer