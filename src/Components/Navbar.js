import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { movieContext } from "./MovieProvider";
import "./Navbar.css";
const Navbar = () => {
  const [,,,,,favourite] = useContext(movieContext)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            to="/"
            className="navbar-logo pb-3"
            onClick={closeMobileMenu}
          >
            MovieApp
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                exact={true}
                activeClassName="is-active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Movies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/favourite"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Favourite ({favourite.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
