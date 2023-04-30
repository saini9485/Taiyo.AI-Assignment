import React from "react";
import { NavLink } from "react-router-dom";
import  "../navbar/Navbar.css";
// import logo from "./images/logo192.png";

const Navbar = () => {
  return (
    <div className="navLinks">
      {/* <img className={styles.image} src={logo} alt="logo-img" /> */}

      <NavLink to="/">Contact</NavLink>
      <NavLink to="/charts-and-maps">Charts & Maps</NavLink>
    </div>
  );
};

export default Navbar;