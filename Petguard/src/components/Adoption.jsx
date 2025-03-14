import React from "react";

const Adoption = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      {/* Navbar */}
      <nav id="main-nav" className="bg-gradient-to-r from-purple-700 to-blue-600 text-white shadow-lg py-4 px-6 flex justify-between items-center fixed w-full z-10 top-0">
      <h1 className="text-3xl font-extrabold tracking-wide">AdoptMe</h1>
    <ul className="flex space-x-6 items-center">
    <li><a href="#" className="hover:text-gray-300 transition duration-300">Home</a></li>
    <li><a href="#about" className="hover:text-gray-300 transition duration-300">About</a></li>
    <li><a href="/profile" className="hover:text-gray-300 transition">Portfolio</a></li>
    <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact</a></li>
    <li>
      <a href="/userprofile" className="hover:text-gray-300 transition duration-300">
        <img src="public/t1.jpg" alt="User Profile" className="w-10 h-10 rounded-full"/>
      </a>
    </li>
  </ul>
</nav>

      
      {/* Hero Section */}
      <section
  className="relative w-full h-[600px] flex flex-col items-center justify-center text-center mt-16 shadow-lg rounded-b-3xl animate-fade-in bg-gradient-to-r from-purple-700 to-blue-600  bg-center bg-no-repeat bg-blend-multiply"
  style={{ backgroundImage: "url('/petadoption.jpeg')" }}
>
<h1 className="relative text-6xl font-extrabold text-white 
               [text-shadow:3px_3px_0px_rgba(0,0,0,1),6px_6px_0px_rgba(0,0,0,0.8),9px_9px_0px_rgba(0,0,0,0.6)]">
    Find Your New Best Friend
</h1>
<p className="relative mt-4 text-xl text-white-500 
               [text-shadow:6px_6px_10px_rgba(0,0,0,0.7)]">
    Adopt a pet and give them a loving home.
</p>

</section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center px-8 rounded-xl shadow-lg mx-6 mt-10 text-gray-800 animate-slide-in">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-6 text-lg leading-relaxed">We are dedicated to helping pets find their forever homes. Our mission is to connect loving families with pets in need, ensuring they receive the care, love, and support they deserve.</p>
        <p className="mt-4 text-lg leading-relaxed">Join us in our mission to give every pet a loving home. Whether you're looking to adopt, foster, or support us through donations, every contribution makes a difference in the lives of these beautiful animals.</p>
      </section>

      {/* Pet Listing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-400 to-purple-500 text-center mt-10 animate-fade-in-up">
        <h2 className="text-4xl font-bold">Meet Our Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-8">
          {["bella.jpeg", "whisker.jpeg", "mmm.jpg"].map((img, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transform transition duration-300 hover:scale-110 text-gray-800 animate-zoom-in">
              <img src={`public/${img}`} alt={`Pet ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
              <h3 className="text-2xl font-semibold mt-4">{index === 0 ? "Bella" : index === 1 ? "Whiskers" : "Max"}</h3>
              <p className="text-gray-600 mt-2">{index === 0 ? "Friendly and playful dog looking for a home." : index === 1 ? "A curious and loving cat waiting for a family." : "Energetic and affectionate pup seeking a loving home."}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16 rounded-t-3xl shadow-inner animate-slide-up">
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold">Find Your Forever Friend</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Pet Adoption Center. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-300">Contact Us</a>
          </div>
          <div className="flex justify-center mt-6 space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">Facebook</a>
            <a href="#" className="hover:text-white transition duration-300">Twitter</a>
            <a href="#" className="hover:text-white transition duration-300">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Adoption;
