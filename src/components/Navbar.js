import React from 'react'
import { Link } from 'react-router-dom'



const Home = <h1>Home</h1>
const Contact=<h1>Contact us</h1>
const Registration=<h1>Registration</h1>
const Login =<h1>Login</h1>
const About =<h1>About us</h1>

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">React.</span>
          </div>
          <ul className='flex'>
          <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' >
            <Link to='./Hero.js'>{Home}</Link>
           </li>
           <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' >
            <Link to='./About.js'>{About}</Link>
           </li>
          
       
           <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' >
            <Link to='./Contact.js'>{Contact}</Link>
           </li>
           <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' >
            <Link to='./Registration.js'>{Registration}</Link>
           </li>
          
          


          
           <li className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' >
             <Link to='./Login.js'>{Login}</Link>
           </li>

          </ul>
          
           
          
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar;