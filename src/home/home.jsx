import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "./style.css"; // Assuming this is the CSS file

export const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/LoginPage"); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="home">
     <div className="home_container">
      <div>
        <h1>Elder Aid</h1>
      </div>
      <div><p>
      orem ipsum dolor, sit amet consectetur adipisicing elit. Eos itaque adipisci aliquam, reiciendis fuga quidem commodi neque atque repellat ipsum!</p></div>
      <div>
        <button  onClick={handleButtonClick}>LET'S GET STARTED</button>
      </div>
      
     </div>
    </div>
  );
};
