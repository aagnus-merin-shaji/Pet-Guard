import React from 'react'

export default function ClinicProfile() {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sunshine Medical Clinic</h2>
        <p className="text-gray-600"><strong>Address:</strong> 123 Main Street, Springfield, IL</p>
        <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
        <a href="/editclinic" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Edit</a>
      </div>
    );
  }