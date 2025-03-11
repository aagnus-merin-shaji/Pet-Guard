import React from 'react';
import { useFormik } from 'formik';

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
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Pet Medical Record Form</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {Object.keys(formik.initialValues).map((field) => (
          <div key={field} className="flex flex-col">
            <label htmlFor={field} className="font-medium">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'petAge' ? 'number' : 'text'}
              id={field}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
              className="mt-2 p-2 border border-gray-300 rounded"
            />
            {formik.errors[field] && <div className="text-red-500 text-sm mt-1">{formik.errors[field]}</div>}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Medicalrecord;