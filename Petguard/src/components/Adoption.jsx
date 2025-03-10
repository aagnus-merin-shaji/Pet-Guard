import React from "react";

const Adoption = () => {
  return (
    <div className="min-h-screen bg-black-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full z-10 top-0">
        <h1 className="text-3xl font-extrabold tracking-wide">AdoptMe</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Home</a></li>
          <li><a href="/pet" className="hover:text-gray-300 transition duration-300">Adopt</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact</a></li>
          <li><a href="" className="hover:text-gray-300 transition duration-300">Clinic Registration</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center mt-16">
        <h1 className="text-4xl font-bold">Find Your New Best Friend</h1>
        <p className="mt-2 text-lg">Adopt a pet and give them a loving home.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Browse Pets
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-gray-600">We are dedicated to helping pets find their forever homes. Our mission is to connect loving families with pets in need, ensuring they receive the care, love, and support they deserve.</p>
        <p className="mt-4 text-lg text-gray-600">Founded by a passionate group of animal lovers, AdoptMe has helped countless pets find a second chance at happiness. We work closely with shelters, foster homes, and veterinary clinics to provide the best services for our furry friends.</p>
        <p className="mt-4 text-lg text-gray-600">Join us in our mission to give every pet a loving home. Whether you're looking to adopt, foster, or support us through donations, every contribution makes a difference in the lives of these beautiful animals.</p>
      </section>

      {/* Pet Listing Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://via.placeholder.com/150" alt="Pet 1" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">Bella</h3>
            <p className="text-gray-600">Friendly and playful dog looking for a home.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://via.placeholder.com/150" alt="Pet 2" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">Whiskers</h3>
            <p className="text-gray-600">A curious and loving cat waiting for a family.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://via.placeholder.com/150" alt="Pet 3" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">Max</h3>
            <p className="text-gray-600">Energetic and affectionate pup seeking a loving home.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Find Your Forever Friend</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Pet Adoption Center. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Adoption;