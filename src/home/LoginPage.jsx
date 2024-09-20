import React from 'react';
 import { useNavigate ,Link} from 'react-router-dom';
import './loginpage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (type) => {
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card elders">
        <div className="icon elders-icon"></div>
        <h2>Elders</h2>
        <button onClick={() => handleLogin('elders')} className="login-button">Login</button>
      </div>

      <div className="login-card volunteers">
        <div className="icon volunteers-icon"></div>
        <h2>Volunteers</h2>
        <button onClick={() => handleLogin('volunteers')} className="login-button">Login</button>
      </div>

     <Link to={'/ElderWelcome'}> <div className="login-card family">
        <div className="icon family-icon"></div>
        <h2>Family</h2>
        <button onClick={() => handleLogin('family')} className="login-button">Login</button>
      </div></Link>
    </div>
  );
};

export default LoginPage;
