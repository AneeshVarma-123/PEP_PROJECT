import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CreatePage from "./pages/CreateHospital";
import SearchPage from "./pages/Search";
import HospitalDetailsPage from "./pages/hospitaldetails";
import EditPage from "./pages/edithospital";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/hospital/:id" element={<HospitalDetailsPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;

