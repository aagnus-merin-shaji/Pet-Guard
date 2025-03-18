import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

function ClinicNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white bg-opacity-90 shadow-md p-4 flex justify-between items-center"
    >
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <FaPaw className="text-blue-500 mr-2" /> PetCare
      </h2>
      <ul className="flex space-x-6">
        {[
          { name: "Home", path: "/clinic" },
          { name: "Services", path: "/services" },
          { name: "Contact", path: "/contact" },
          { name: "About", path: "/clinicabout" },
          { name: "Medical Record", path: "/medical" },
        ].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#3b82f6" }}
          >
            <Link to={item.path} className="text-gray-700 font-medium">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default ClinicNavbar;