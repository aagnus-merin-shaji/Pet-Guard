import React from 'react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';

const Medicalrecord = () => {
  const formik = useFormik({
    initialValues: {
      petName: '',
      petAge: '',
      petSpecies: '',
      petBreed: '',
      vaccinations: '',
      allergies: '',
      medicalHistory: '',
      contactInfo: '',
    },
    validate: (values) => {
      const errors = {};
      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          errors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
        }
      });
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted successfully:', values);
      resetForm();
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center" // Added background classes
      style={{ backgroundImage: "url('/public/ai-generated-8949581_1920.jpg')" }} // Added background image style
    >
      <div className="max-w-xl w-full p-8 bg-white shadow-md rounded-xl">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-6"
        >
          Pet Medical Record
        </motion.h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {Object.keys(formik.initialValues).map((field) => (
            <motion.div
              key={field}
              initial={{ x: -20, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * field }}
              className="flex flex-col"
            >
              <label htmlFor={field} className="text-sm font-medium text-gray-700">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field === 'petAge' ? 'number' : 'text'}
                id={field}
                name={field}
                value={formik.values[field]}
                onChange={formik.handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out text-sm"
              />
              {formik.errors[field] && (
                <div className="text-red-500 text-xs mt-1">{formik.errors[field]}</div>
              )}
            </motion.div>
          ))}
          <motion.button
  type="submit"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
  className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out text-sm"
>
  <a href="/" className="block w-full h-full text-center">
    Submit Record
  </a>
</motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Medicalrecord;