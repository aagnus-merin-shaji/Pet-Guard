import React from "react";

const Adoption = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800"> {/* Changed background */}
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center mt-0 shadow-lg rounded-b-3xl animate-fade-in bg-cover bg-center bg-no-repeat bg-blend-multiply"
        style={{ backgroundImage: "url('/public/pexels-0ldpikes-29607281.jpg')" }}
      >
        <h1 className="relative text-6xl font-extrabold text-white [text-shadow:3px_3px_0px_rgba(0,0,0,1),6px_6px_0px_rgba(0,0,0,0.8),9px_9px_0px_rgba(0,0,0,0.6)]">
          Find Your New Best Friend
        </h1>
        <p className="relative mt-4 text-xl text-white-500 [text-shadow:6px_6px_10px_rgba(0,0,0,0.7)]">
          Adopt a pet and give them a loving home.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white text-center px-8 rounded-xl shadow-lg mx-6 mt-10"
      >
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-6 text-lg leading-relaxed">
          We are dedicated to helping pets find their forever homes. Our mission is to connect loving families with pets in need, ensuring they receive the care, love, and support they deserve.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Join us in our mission to give every pet a loving home. Whether you're looking to adopt, foster, or support us through donations, every contribution makes a difference in the lives of these beautiful animals.
        </p>
      </section>

      {/* Pet Listing Section */}
      <section className="py-16 text-center mt-10">
        <h2 className="text-4xl font-bold">Meet Our Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-8">
          {["bella.jpeg", "whisker.jpeg", "pexels-pixabay-220938.jpg"].map((img, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transform transition duration-300 hover:scale-110"
            >
              <img
                src={`public/${img}`}
                alt={`Pet ${index + 1}`}
                className="w-half h-60 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">
                {index === 0 ? "Bella" : index === 1 ? "Whiskers" : "Max"}
              </h3>
              <p className="text-gray-600 mt-2">
                {index === 0
                  ? "Friendly and playful dog looking for a home."
                  : index === 1
                  ? "A curious and loving cat waiting for a family."
                  : "Energetic and affectionate pup seeking a loving home."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Adoption;