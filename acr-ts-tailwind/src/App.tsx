import "./App.css"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/Homepage"
import Footer from "./components/Footer"
import Partners from "./pages/Partners"
import Association from "./pages/Association"
import Adoption from "./pages/Adoption"
import Videos from "./pages/Videos"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/association" element={<Association />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
