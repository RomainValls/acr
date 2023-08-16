import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex place-content-evenly">
        <img
          className="w-16 h-16 rounded-xl"
          src="/images/acr_logo.webp"
          alt="logo"
        />
        <Link to="/association">L'association</Link>
        <Link to="/partenaires">Partenaires</Link>
        <Link to="/adoption">Adoption</Link>
        <Link to="/videos">Vidéos</Link>
        <Link to="">Accès rapide</Link>
      </ul>
    </div>
  );
};

export default Navbar;
