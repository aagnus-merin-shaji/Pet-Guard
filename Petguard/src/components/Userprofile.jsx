import React from "react";
import { useNavigate } from "react-router-dom";

const Userprofile = () => {
  const navigate = useNavigate();
  const user = {
    username: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "(123) 456-7890",
    bio: "Passionate about pet adoption and animal welfare.",
    location: "PetCity, PC 45678",
    interest: "Animal Rescue, Training, Pet Photography",
    petExperience: "5 years of experience in pet care and training",
    preferredPetType: "Dogs and Cats",
    hasOtherPets: "Yes, I have two dogs",
    profilePicture: "/profile.jpg",
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-300">
      <div className="relative w-32 h-32 mx-auto">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 object-cover shadow-md"
          onError={(e) => (e.target.src = "/public/t1.jpg")}
        />
      </div>
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.username}</h2>
      <p className="text-gray-500">{user.bio}</p>
      <div className="mt-4 space-y-2 text-left px-6">
        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>Phone:</strong> {user.phoneNumber}</p>
        <p className="text-gray-600"><strong>Location:</strong> {user.location}</p>
        <p className="text-gray-600"><strong>Interests:</strong> {user.interest}</p>
        <p className="text-gray-600"><strong>Pet Experience:</strong> {user.petExperience}</p>
        <p className="text-gray-600"><strong>Preferred Pet Type:</strong> {user.preferredPetType}</p>
        <p className="text-gray-600"><strong>Has Other Pets:</strong> {user.hasOtherPets}</p>
      </div>
      <button
        onClick={() => navigate("/editprofile")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md text-lg font-medium"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default Userprofile;
