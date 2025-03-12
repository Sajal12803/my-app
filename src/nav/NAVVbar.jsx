import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./NavBar.css";

const NAVVbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation function

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="nav_main">
      <div className="nav-container">
        <h1>Elder Aid</h1>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </div>
      
     
      {/* Sliding Menu */}
      <div className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Profile */}
        <div className="menu-item" onClick={() => { navigate("/ElderProfile"); closeMenu(); }}>
          <div className="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="10" r="4"></circle>
              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
          <span>Profile</span>
        </div>

        {/* Messages */}
        <div className="menu-item" onClick={() => { navigate("/PageVolunteer"); closeMenu(); }}>
          <div className="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
          </div>
          <span>Messages</span>
        </div>

        {/* Medical Report */}
        <div className="menu-item">
          <div className="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          </div>
          <span>Medical Report</span>
        </div>

        {/* Ratings */}
        <div className="menu-item">
          <div className="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <span>Ratings</span>
        </div>

        {/* Logout */}
        <div className="menu-item logout" onClick={() => { navigate("/login"); closeMenu(); }}>
          <div className="icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
          <span>Logout</span>
        </div>
      </div>

      {/* Overlay (closes menu when clicked) */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default NAVVbar;
