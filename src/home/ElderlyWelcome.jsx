import React from 'react';
 import { useNavigate } from 'react-router-dom';
import './Elderlywelcome.css';
import NavBarr from '../nav/NavBarr';

const ElderWelcome = () => {
  const navigate = useNavigate();

  const handleLogin = (type) => {
    navigate("/Home");
  };

  return (
    <>
    <NavBarr/>
    <div className="logon-container">
        <div>
            <h1 className='welcome-elder'>Welcome!</h1>
            <br />
        </div>
      <div className="logon-card">
        <h2>Name :</h2>
        <input
                        type="text"
                        className="input-field"
                        required
                    />
      </div>
      <div className="logon-card">
        <h2>Contact :</h2>
        <input
                        type="text"
                        className="input-field"
                        required
                    />
      </div>

      <div className="logon-card">
        <h2>Medical Report</h2>
        <button onClick={() => handleLogin('Home')} className="logon-button">
        <h1>&#8594;</h1>
        </button>
      </div>
    </div>
    </>
  );
};

export default ElderWelcome;