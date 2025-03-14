import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
  <nav className="container mx-auto flex justify-between items-center px-6">
    <div className="text-3xl font-extrabold tracking-wide">PAW GUARDIAN</div>
    <ul className="flex space-x-6 text-lg items-center">
      <li><Link to="/home" className="hover:text-gray-300 transition">Home</Link></li>
      <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-400 to-purple-500 text-white text-center py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-extrabold mb-6">Welcome to PAW GUARDIAN</h2>
          <p className="text-xl max-w-2xl mx-auto">
            The ultimate smart solution to keep your pets safe and monitored with real-time tracking.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <img src="public/dog.jpg" alt="Happy pet" className="rounded-xl shadow-lg w-1/4 transform hover:scale-110 transition duration-300 border-4 border-white" />
          <img src="public/cats.jpg" alt="Pets playing" className="rounded-xl shadow-lg w-1/4 transform hover:scale-110 transition duration-300 border-4 border-white" />
          <img src="public/dogcat.jpg" alt="Owner with pet" className="rounded-xl shadow-lg w-1/4 transform hover:scale-110 transition duration-300 border-4 border-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16" id='about'>
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">About Us</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Pet guardianship is more than just ownership; it's about love, care, and protection with the right tools.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-10 gap-8">
            <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold">Cat</h3>
              <p className="text-gray-600 mt-2">Smart devices designed to monitor and safeguard feline friends.</p>
            </div>
            <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold">Dog</h3>
              <p className="text-gray-600 mt-2">Advanced tracking systems for ensuring your canine's safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold">About Us</h3>
              <p className="mt-4 text-gray-400">Discover innovative ways to care for your pets with our smart pet guardian solutions.</p>
              <Link to="/single" className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">Read More</Link>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
              <p className="mt-4 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
              <div className="mt-4 flex items-center space-x-2">
                <input type="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} PAW GUARDIAN. All Rights Reserved.</p>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition">
            <FaArrowUp />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
