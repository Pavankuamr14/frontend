import React, { useState } from 'react';
import Nav from './nav'; // Import Navbar
import './userhome.css'; // CSS for the homepage layout
import UserFooter from './userfooter';
import { Link } from 'react-router-dom';
const UserHome = () => {
  const [userName, setUserName] = useState("Anju"); // Example user name
  
  return (
    <>
      <Nav />
      <div className="userhomepage-container">
        {/* Welcome Message */}
        <h1>Welcome, {userName}!</h1>
        <h2>Choose the input type</h2>
        
        {/* Cards Layout */}
        <div className="userhomepage-content">
          <div className="userhomepage-card">
            <img src="/text.svg" alt="NLP" className="userhomepage-card-img" />
            <p>Our NLP website operates by collecting text data from various sources...</p>
          </div>
          <Link to="/audio" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="userhomepage-card">
        <img src="/audio.svg" alt="Voice Data" className="userhomepage-card-img" />
        <p>For voice data, our platform captures audio inputs...</p>
      </div>
    </Link>
          <div className="userhomepage-card">
            <img src="/video.svg" alt="Video Data" className="userhomepage-card-img" />
            <p>When it comes to video data, our site analyzes audiovisual content...</p>
          </div>
        </div>
      </div>
      <UserFooter/>
    </>
  );
};

export default UserHome;
