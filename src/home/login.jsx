import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css'; // Importing the CSS styles

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // This function handles the login button click and navigates to ElderProfile
    const handleLogin = (e) => {
        e.preventDefault();
        // For now, we navigate to ElderProfile regardless of username/password
        navigate('/ChatPage');
    };

    const handleGoogleSignIn = () => {
        // Handle Google Sign-In logic here
        console.log('Google Sign-In Clicked');
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Forgot Password Clicked');
    };

    const handleForgotUsername = () => {
        // Handle forgot username logic here
        console.log('Forgot Username Clicked');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <button className="google-signin" onClick={handleGoogleSignIn}>
                    <img
                        src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=754&h=754&fit=crop&dpr=2"
                        alt="Google Logo"
                        className="google-logo"
                    />
                    Sign in with Google
                </button>

                <div className="divider">
                    <span>Or sign in with username</span>
                </div>

                {/* Form submission handled by handleLogin */}
                <form onSubmit={handleLogin}>
                    <label className='w-full' htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label className='w-full' htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        
                    />

                    <button type="submit" className="submit-button">
                        Login
                    </button>
                </form>

                <div className="forgot-section">
                    <p onClick={handleForgotPassword}>Forgot Password</p>
                    <p onClick={handleForgotUsername}>Forgot Username</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
