import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import Navbar from "../nav/Navbar";

const ElderlyProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    language: "",
    gender: "",
    location: "",
    about: "",
    hobbies: "",
    offlineMeet: false,
    governmentId: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = function () {};
  const handleFileUpload = (e) => {
    setFormData({ ...formData, governmentId: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleClick=(e)=>{
    e.preventDefault()
    window.location.href='./ChatPage'
  }

  return (
    <>
    <Navbar/>
    <div className="profile-background ">
      
      <div className="profile-container">
        {/* <nav className="nav-bar">
          <Link to="/elderly-welcome">Elderly Welcome</Link>
          <Link to="/volunteer-welcome">Volunteer Welcome</Link>
        </nav> */}
        
        <form onSubmit={handleSubmit} class="sec">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Language:</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
          </div>
          <div className="gender-options">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Others"
                onChange={handleChange}
              />{" "}
              Others
            </label>
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>About You:</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Hobbies:</label>
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
            />
          </div>
          <div className="meet">
            <label>Interested in Offline Meet?:</label>

            <div className="meet-options">
              <label htmlFor="">Yes</label>
              <input
                type="checkbox"
                name="offlineMeet"
                checked={formData.offlineMeet}
                onChange={handleChange}
              />
              <label htmlFor="">No</label>
              <input
                type="checkbox"
                name="offlineMeet"
                checked={formData.offlineMeet}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Government ID (img/PDF):</label>
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/*,application/pdf"
            />
          </div>
          <div className="center-btn">
            <button
              cal
              onClick={handleClick}
              className="login-button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ElderlyProfile;
