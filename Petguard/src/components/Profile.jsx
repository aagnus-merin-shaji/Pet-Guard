import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Profile = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [favorites, setFavorites] = useState([]);
    
    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const toggleFavorite = (id) => {
        setFavorites((prev) => 
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const pets = [
        { id: 1, name: "Bella", breed: "Golden Retriever", age: "3 years", vaccinated: true, size: "Large", adoptionFee: "$200", image: "public/bella.jpeg", status: "Available" },
        { id: 2, name: "Whiskers", breed: "Maine Coon", age: "2 years", vaccinated: false, size: "Medium", adoptionFee: "$150", image: "public/whisker.jpeg", status: "Adopted" },
        { id: 3, name: "Max", breed: "Graden Dog", age: "4 years", vaccinated: true, size: "Large", adoptionFee: "$180", image: "public/graden.jpeg", status: "Available" },
        { id: 4, name: "Max", breed: "Labrador", age: "3 years", vaccinated: true, size: "Large", adoptionFee: "$180", image: "public/patti.jpg", status: "Unavailable" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 flex-grow">
                {pets.map((pet) => (
                    <div 
                        key={pet.id} 
                        className="shadow-lg rounded-2xl overflow-hidden bg-white transition-transform hover:scale-105 relative"
                    >
                        <button 
                            onClick={() => toggleFavorite(pet.id)} 
                            className={`absolute top-4 right-4 text-2xl ${favorites.includes(pet.id) ? 'text-red-500' : 'text-gray-300'}`}
                        >
                            <FaHeart />
                        </button>
                        <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover rounded-t-2xl" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{pet.name}</h2>
                            <p className="text-gray-600">Breed: {pet.breed}</p>
                            <p className="text-gray-600">Age: {pet.age}</p>
                            <p className={pet.vaccinated ? "text-green-600" : "text-red-600"}>
                                {pet.vaccinated ? "Vaccinated ✅" : "Not Vaccinated ❌"}
                            </p>
                            <p className="text-gray-600">Size: {pet.size}</p>
                            <p className="text-gray-600 font-semibold">Adoption Fee: {pet.adoptionFee}</p>
                            <p className={`mt-2 font-bold ${pet.status === "Available" ? "text-green-500" : "text-red-500"}`}>Status: {pet.status}</p>
                            {expandedId === pet.id && <p className="mt-2 text-gray-700">More information about {pet.name}...</p>}
                            <div className="flex flex-col gap-3 mt-4">
                                <button 
                                    onClick={() => toggleReadMore(pet.id)}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                                >
                                    {expandedId === pet.id ? "Read Less" : "Read More"}
                                </button>
                                <a href="/adoptionform">
                                    <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                        Adopt
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="bg-gray-800 text-white text-center py-4 mt-6 flex flex-col items-center">
                <p>&copy; 2025 Pet Adoption. All rights reserved.</p>
                <button className="mt-2 text-2xl text-red-500">
                    <FaHeart />
                </button>
            </footer>
        </div>
    );
};

export default Profile;
