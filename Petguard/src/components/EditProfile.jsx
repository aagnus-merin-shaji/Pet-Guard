import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "(123) 456-7890",
    bio: "Passionate about pet adoption and animal welfare.",
    location: "PetCity, PC 45678",
    interest: "Animal Rescue, Training, Pet Photography",
    petExperience: "5 years of experience in pet care and training",
    preferredPetType: "Dogs and Cats",
    hasOtherPets: "Yes, I have two dogs",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Profile:", formData);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h2>
      <div className="space-y-3 text-left px-6">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.replace(/([A-Z])/g, " $1").trim()}
            className="w-full p-2 border rounded"
          />
        ))}
      </div><br/>

      <a
        href="/adoption"
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md text-lg font-medium"
      >
        Save Profile
      </a>
    </div>
  );
};

export default EditProfile;