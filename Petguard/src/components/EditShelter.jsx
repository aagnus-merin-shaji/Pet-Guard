import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditShelterProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Safe Haven Shelter",
    phone: "+1 234 567 890",
    address: "123 Shelter Lane, City, State, ZIP",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Shelter Info:", formData);
    navigate("/"); // Redirect to profile page
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-center">Edit Shelter Profile</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block font-semibold">Shelter Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <a href="/home" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 block text-center">
  Save Changes
</a>

      </form>
    </div>
  );
}