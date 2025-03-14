import React from 'react'

export default function EditClinic() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Clinic Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Clinic Name</label>
          <input 
            type="text" 
            name="name" 
            defaultValue="Sunshine Medical Clinic" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input 
            type="text" 
            name="address" 
            defaultValue="123 Main Street, Springfield, IL" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input 
            type="text" 
            name="phone" 
            defaultValue="(123) 456-7890" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
          />
        </div>
        <a 
          href="/clinicprofile" 
          className="w-full block text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Save Changes
        </a>
      </form>
    </div>
  );
}
