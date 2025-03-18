import React from 'react';
import { motion } from 'framer-motion';

export default function Clinicabout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl text-center relative overflow-hidden"
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 "
          style={{
            backgroundImage: "url('/public/cat-8553498_1920.jpg')", // Replace with your image path
          }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-6 animate-pulse">
            About Our Pet Clinic
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Welcome to Paws & Care Pet Clinic, where we provide exceptional care for your beloved pets.
            Our dedicated team of veterinarians and staff are committed to ensuring the health and
            happiness of your furry friends.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer a wide range of services, from regular check-ups and vaccinations to advanced
            treatments. Your pet's well-being is our top priority!
          </p>
        </div>
      </motion.div>
    </div>
  );
}