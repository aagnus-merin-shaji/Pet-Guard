import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
function Footer() {
  return (
    <>
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
  )
}

export default Footer