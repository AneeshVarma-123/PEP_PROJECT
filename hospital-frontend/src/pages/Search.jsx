import { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState(""); // State for search input
  const [hospitals, setHospitals] = useState([]); // State for hospitals list

  useEffect(() => {
    // Fetch hospital data from backend when the component loads
    fetch("http://localhost:5000/api/hospitals")
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch((err) => console.error("Error fetching hospitals:", err));
  }, []);

  // Filter hospitals based on search query
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Hospitals</h1>
      <input
        type="text"
        placeholder="Search hospitals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", margin: "10px 0", width: "50%" }}
      />
      <ul>
        {filteredHospitals.map((hospital) => (
          <li key={hospital._id}>{hospital.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

