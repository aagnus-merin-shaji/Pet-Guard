import React, { useState, useEffect } from 'react';

function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? '#f0f0f0' : 'gray', // Change background color
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth transition
    boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.1)', // Add shadow on scroll
  };

  return (
    <nav
      id="main-nav"
      className="text-gray-800 h-16 px-6 flex justify-between items-center fixed w-full z-10 top-0"
      style={navbarStyle}
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
            <img src="/t1.jpg" alt="User Profile" className="w-10 h-10 rounded-full" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;