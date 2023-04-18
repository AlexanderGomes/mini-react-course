import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav__main">
      <div>
        <p>LOGO</p>
      </div>
      <ul className="links">
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/users"}>
          <li>Users</li>
        </Link>

        <Link to={"/posts"}>
          <li>Posts</li>
        </Link>

      </ul>
    </div>
  );
};

export default Navbar;
