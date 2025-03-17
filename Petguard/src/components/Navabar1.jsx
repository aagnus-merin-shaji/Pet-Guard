import React from 'react'

function Navabar1() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 backdrop-blur-md bg-white/50 shadow-md">
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">🐾 PAW GUARDIAN</h1>
        <ul className="flex space-x-6 text-gray-700 text-lg">
          <li><a href="#features" className="hover:text-gray-500 transition">Features</a></li>
          <li><a href="#about" className="hover:text-gray-500 transition">About</a></li>
          <li><a href="#contact" className="hover:text-gray-500 transition">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navabar1