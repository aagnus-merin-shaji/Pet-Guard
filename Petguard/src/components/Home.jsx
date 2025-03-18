import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">

    <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="text-3xl font-extrabold tracking-wide">PAW GUARDIAN</div>
        <ul className="flex space-x-6 text-lg items-center">
          <li><Link to="/shelter" className="hover:text-gray-300 transition">Home</Link></li>
          <li><Link to="/animal" className="hover:text-gray-300 transition">Animals</Link></li>
          <li><Link to="/request" className="hover:text-gray-300 transition">Adoption Request</Link></li>
          <li><Link to="/petshelter" className="hover:text-gray-300 transition">Add Animal</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
          <li>
            <Link to="/shelterprofile" className="hover:text-gray-300 transition flex items-center space-x-2">
              <img src="shelter.jpeg" alt="Profile" className="w-8 h-8 rounded-full border-2 border-white" />
              <span>Profile</span>
            </Link>
          </li>
          <li><Link to="" className="hover:text-gray-300 transition">Logout</Link></li>
        </ul>
      </nav>
      </header>
  )
}

export default Home