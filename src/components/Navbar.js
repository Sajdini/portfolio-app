import React from "react";

import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand" style={{ width: "6rem" }}>
          <img
            className="logo"
            src={logo}
            alt="Logo..."
            style={{
              width: "90%",
              backgroundColor: "#f9ab00",
              borderRadius: "100px",
            }}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <GiHamburgerMenu style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="home" className="nav-link">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" className="nav-link">
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="biography" offset={-110} className="nav-link" href="#">
                Biography
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" offset={-110} className="nav-link" href="#">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="footer" className="nav-link">
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
