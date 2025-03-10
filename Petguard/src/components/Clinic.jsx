import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

function Clinic() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/petclinic.jpg')",
          filter: "brightness(70%)", // Darken for readability
        }}
      ></div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full bg-white bg-opacity-90 shadow-md p-4 flex justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaPaw className="text-blue-500 mr-2" /> PetCare
        </h2>
        <ul className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/clinicabout" },
            { name : "Medical Record", path:"/medical"}
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#3b82f6" }} // Hover effect
            >
              <Link to={item.path} className="text-gray-700 font-medium">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Content */}
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-white bg-opacity-90 shadow-lg rounded-2xl p-10 max-w-2xl text-center z-10"
      >
      </motion.div> */}
    </div>
  );
}

export default Clinic;
