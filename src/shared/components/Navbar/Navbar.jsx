import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          The Delivery
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link" aria-current="page">
              Главная
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
