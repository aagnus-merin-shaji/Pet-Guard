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
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div
  className="max-w-4xl w-full p-8 bg-white shadow-2xl rounded-lg relative"
  style={{
    backgroundImage: "url('/public/petclinic.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Pet Medical Record Form</h2>
  <form onSubmit={formik.handleSubmit} className="space-y-6">
    {Object.keys(formik.initialValues).map((field) => (
      <div key={field} className="flex flex-col">
        <label htmlFor={field} className="font-medium text-gray-700">
          {field.replace(/([A-Z])/g, ' $1')}
        </label>
        <input
          type={field === 'petAge' ? 'number' : 'text'}
          id={field}
          name={field}
          value={formik.values[field]}
          onChange={formik.handleChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {formik.errors[field] && <div className="text-red-500 text-sm mt-1">{formik.errors[field]}</div>}
      </div>
    ))}
    <button
      type="submit"
      className="w-full py-3 bg-blue-500 text-white rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>
    </div>
  );
};

export default Medicalrecord;
