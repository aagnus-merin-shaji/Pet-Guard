import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
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
     
    </>
  );
};

export default Navbar;
