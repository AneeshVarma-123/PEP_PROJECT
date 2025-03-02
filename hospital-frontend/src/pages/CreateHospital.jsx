


import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateHospital = () => {
  const [hospital, setHospital] = useState({
    name: "",
    location: "",
    specialty: "",
    rating: "",
  });

  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hospital),
      });

      if (response.ok) {
        alert("Hospital created successfully!");
        setHospital({ name: "", location: "",  specialty: "", rating: "" });
      } else {
        alert("Failed to create hospital");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Create Hospital</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Hospital Name" value={hospital.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={hospital.location} onChange={handleChange} required />
      
        <input type="text" name="specialty" placeholder="Specialty" value={hospital.specialty} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" value={hospital.rating} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateHospital;
