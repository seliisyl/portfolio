
import React from "react";
import "../index.css"; // On crée un CSS pour styliser la navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">YouLiveVent</h1>
      <ul className="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Événements</a></li>
        <li><a href="#">Galerie</a></li>
        <li><a href="#">Prestations</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
