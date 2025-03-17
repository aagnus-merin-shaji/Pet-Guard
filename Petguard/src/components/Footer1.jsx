import React from 'react'

function Footer1() {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8 mt-16 rounded-t-3xl shadow-inner animate-slide-up">
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold">Find Your Forever Friend</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Pet Adoption Center. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Contact Us</a>
          </div>
          <div className="flex justify-center mt-6 space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">Facebook</a>
            <a href="#" className="hover:text-white transition duration-300">Twitter</a>
            <a href="#" className="hover:text-white transition duration-300">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer1