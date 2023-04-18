import React from "react";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="nav__main">
      <div>
        <p>LOGO</p>
      </div>
      <ul className="links">
        <ul>Home</ul>
        <ul>User</ul>
        <ul>Posts</ul>
      </ul>
    </div>
  );
};

export default Navbar;
