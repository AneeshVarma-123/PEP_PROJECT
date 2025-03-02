import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditHospital = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hospital, setHospital] = useState({
    name: "",
    city: "",
    image: "",
    specialty: "",
    rating: "",
  });

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
      const data = await response.json();
      setHospital(data);
    };
    fetchHospital();
  }, [id]);

  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/v1/hospitals/update?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hospital),
    });
    alert("Hospital Updated Successfully");
    navigate(`/hospital/${id}`);
  };

  return (
    <div>
      <h2>EDIT HOSPITAL DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={hospital.name} onChange={handleChange} required />
        <input name="city" value={hospital.city} onChange={handleChange} required />
        <input name="image" value={hospital.image} onChange={handleChange} required />
        <input name="specialty" value={hospital.specialty} onChange={handleChange} required />
        <input name="rating" value={hospital.rating} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditHospital;
