import React from 'react'

export default function ShelterProfile() {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
        <img
          src="public/shelter.jpeg"
          alt="Shelter"
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200"
        />
        <h2 className="text-xl font-semibold mt-4">Safe Haven Shelter</h2>
        <p className="text-gray-600">Providing support and care for those in need</p>
        <div className="mt-4 text-left">
          <p>
            <span className="font-semibold">Phone:</span> +1 234 567 890
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Shelter Lane, City, State, ZIP
          </p>
        </div>
        <a href="/editshelter">
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Edit Profile
  </button>
</a>
      </div>
    );
  }
  