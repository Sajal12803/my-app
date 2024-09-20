import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import ChatPage from "./home/ChatPage";
import ElderProfile from "./home/ElderProfile";
import ElderWelcome from "./home/ElderlyWelcome.jsx";

// Make sure this path is correct

import Login from "./home/login";
import LoginPage from './home/LoginPage';// Capital "L
// import Navbar from './nav/Navbar.jsx'
import './App.css'

 // Assuming you have a Login component

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/ChatPage" element={<ChatPage/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ElderProfile" element={<ElderProfile />} />
        <Route path="/ElderWelcome" element={<ElderWelcome />} />

   
      </Routes>
    </Router>
    
  );
}

export default App;

