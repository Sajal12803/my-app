import React from "react";
import "./NavBar.css";
import { FaAlignJustify  } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav_main">
      <div className="nav-container">
        <div>
          <h1>Elder Aid</h1>
        </div>

        <div>
          <h1>Profile</h1>
        </div>

        <div>
          <FaAlignJustify  size={'3em'}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
