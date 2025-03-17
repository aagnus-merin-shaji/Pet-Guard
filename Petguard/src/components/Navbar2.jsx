import React from 'react';

function Navbar2() {
  return (
    <nav
      id="main-nav"
      className="bg-white text-gray-800 shadow-lg h-16 px-6 flex justify-between items-center fixed w-full z-10 top-0"
    >
      <h1 className="text-3xl font-extrabold tracking-wide">PAW GUARDIAN</h1>
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/adoption" className="hover:text-gray-600 transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-600 transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="/profile" className="hover:text-gray-600 transition">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-600 transition duration-300">
            Contact
          </a>
        </li>
        <li>
          <a href="/userprofile" className="hover:text-gray-600 transition duration-300">
            <img src="public/t1.jpg" alt="User Profile" className="w-10 h-10 rounded-full" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;