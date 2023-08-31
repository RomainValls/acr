import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="p-4 bg-slate-50">
      <ul className="flex items-center place-content-evenly">
        <Link to="/">
          <img
            className="w-16 h-16 rounded-xl"
            src="/images/acr_logo.webp"
            alt="logo"
          />
        </Link>

        <ul className="nav-list">
          <li>
            <Link to="/association">L'association</Link>
          </li>
          <li>
            <Link to="/partenaires">Partenaires</Link>
          </li>
          <li>
            <Link to="/adoption">Adoption</Link>
          </li>
          <li>
            <Link to="/videos">Vidéos</Link>
          </li>
          <li>
            {" "}
            <Link to="#">Accès rapide</Link>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Navbar
