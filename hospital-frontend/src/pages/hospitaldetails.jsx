import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const HospitalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
      const data = await response.json();
      setHospital(data);
    };
    fetchHospital();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/api/v1/hospitals/delete?id=${id}`, {
      method: "DELETE",
    });
    alert("Hospital Deleted Successfully");
    navigate("/");
  };

  return (
    <div>
      {hospital ? (
        <>
          <h2>HOSPITAL DETAILS</h2>
          <p>Name: {hospital.name}</p>
          <p>City: {hospital.city}</p>
          <img src={hospital.image} alt={hospital.name} width="200" />
          <p>Specialty: {hospital.specialty}</p>
          <p>Rating: {hospital.rating}</p>
          <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HospitalDetails;
