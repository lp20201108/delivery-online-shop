import React from "react";
import { Link, NavLink } from "react-router-dom";

const navArr = [
  { label: "Home", exact: true, to: "/" },
  { label: "Products", exact: false, to: "/products" },
  { label: "Search", exact: false, to: "/search" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          The Delivery
        </Link>
        <ul className="navbar-nav">
          {navArr.map(({ label, exact, to }) => (
            <li className="nav-item" key={to}>
              <NavLink
                exact={exact}
                to={to}
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
