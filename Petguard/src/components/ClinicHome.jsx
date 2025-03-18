import React from 'react';
import { motion } from 'framer-motion';

function ClinicHome() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/public/veterinarian-8859098_1920.jpg')", // Corrected image path
    filter: "brightness(60%)",
    height: "100vh", // Set height to 100% of viewport height
    width: "100vw", // Set width to 100% of viewport width
  }}
></div>
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white text-center p-8"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to PetCare Clinic</h1>
        <p className="text-lg mb-8">
          Your pet's health and happiness are our top priorities.
        </p>
        

<motion.button
  whileHover={{ scale: 1.1 }}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full"
>
  <a href="/clinicabout" className="block w-full h-full"> {/* Wrap the text with Link */}
    Learn More
  </a>
</motion.button>
      </motion.div>
    </div>
  );
}

export default ClinicHome;