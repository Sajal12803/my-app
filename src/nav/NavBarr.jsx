import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./NavBar.css";

const NavBarr = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    // Clear user session if needed
    localStorage.removeItem("userToken"); // Example if using localStorage
    sessionStorage.clear(); // Clears session storage
    
    // Redirect to Login Page
    navigate("/login");
  };

  return (
    <div className="nav_main">
      <div className="nav-container">
        <div>
          <h1 className="barrh1">Elder Aid</h1>
        </div>
        <div>
          <button className="log-outbarr" onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default NavBarr;
