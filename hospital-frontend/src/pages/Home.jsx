import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Hospital Management System</h1>
      <nav>
        <Link to="/create">Create Hospital</Link> | 
        <Link to="/search">Search Hospitals</Link> |
        <Link to="/hospital/:id">Hospital Details</Link> | 
        <Link to="/edit/:id">Edit Hospital Details</Link>
      </nav>
    </div>
  );
}

export default Home;
