import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const GuestPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center text-gray-900" style={{ backgroundImage: "url('public/alec-favale-Ivzo69e18nk-unsplash.jpg')" }}>
      
      {/* Hero Section */}
      <header className="w-full max-w-5xl text-center mt-24 p-6">
        <motion.img 
          src="/petguard.jpeg" 
          alt="PetGuard Logo" 
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-300 shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        />
        <motion.h1 className="text-6xl font-extrabold text-gray-800 tracking-wide" animate={{ y: [10, 0], opacity: [0, 1] }} transition={{ delay: 0.3, type: "spring", stiffness: 120 }}>
          Protect. Care. Love.
        </motion.h1>
        <motion.p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto" animate={{ opacity: [0,1], y:[20,0]}} transition={{delay:0.5,duration:0.6}}>
          Keep your furry friends safe with real-time tracking, emergency alerts, and AI-driven pet monitoring.
        </motion.p>
        <motion.button 
  className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xl rounded-lg shadow-lg hover:scale-105 transform transition"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  animate={{ scale: [0.9, 1] }}
  transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
>
  <a href="/login" className="text-white no-underline">Get Started</a>
</motion.button>
      </header>
      
      {/* Features Section */}
      <main id="features" className="w-full max-w-5xl mt-12 p-6 text-center bg-white/70 shadow-lg rounded-2xl">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose PetGuard?</h2>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
          PetGuard offers an innovative way to ensure your pet's safety with the latest technology.
        </p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition" variants={featureVariants}>
            <h3 className="text-xl font-bold text-gray-800">📍 Real-Time Tracking</h3>
            <p className="mt-2 text-gray-600">Monitor your pet's location anytime, anywhere.</p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition" variants={featureVariants} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-bold text-gray-800">🚨 Emergency Alerts</h3>
            <p className="mt-2 text-gray-600">Get instant alerts if your pet is in danger.</p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition" variants={featureVariants} transition={{ delay: 0.4 }}>
            <h3 className="text-xl font-bold text-gray-800">🤖 Smart AI Monitoring</h3>
            <p className="mt-2 text-gray-600">AI-driven health tracking and behavior analysis.</p>
          </motion.div>
        </motion.div>
      </main>
      
      {/* Testimonials Section */}
      <motion.section 
        className="w-full max-w-5xl mt-16 p-6 text-center bg-gradient-to-r from-green-200 to-blue-100 shadow-lg rounded-2xl"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={testimonialVariants}
      >
        <h2 className="text-4xl font-semibold text-gray-800">What Pet Owners Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.blockquote className="p-6 bg-white shadow-md rounded-lg italic border-l-4 border-blue-500" variants={testimonialVariants} transition={{delay:0.2}}>
            "PetGuard gave me peace of mind knowing my dog is safe. The tracking is amazing!" <br/>
            <span className="font-bold text-gray-700">- Emily R.</span>
          </motion.blockquote>
          <motion.blockquote className="p-6 bg-white shadow-md rounded-lg italic border-l-4 border-teal-500" variants={testimonialVariants} transition={{delay:0.4}}>
            "The emergency alerts helped me find my lost cat within minutes. Best decision ever!" <br/>
            <span className="font-bold text-gray-700">- Jason M.</span>
          </motion.blockquote>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="w-full py-6 mt-12 text-center bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} PetGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GuestPage;