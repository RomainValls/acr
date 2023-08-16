import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/association" element={<Association />} />
        <Route path="/partenaires" element={<Partenaire />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/videos" element={<Videos />} /> */}
      </Routes>
    </>
  );
}

export default App;
