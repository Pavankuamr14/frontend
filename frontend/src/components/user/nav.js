import React, { useState } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faGift, faUser } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navba">
      <div className="navba-logo">
        <Link to="/decide">
        <img src="/logo.png" alt="Logo"  />
        </Link>
        
      </div>
      <div className="navba-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navba-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="#my-stats"><FontAwesomeIcon icon={faChartLine} /> My Stats</a></li>
        <li><a href="#bonus"><FontAwesomeIcon icon={faGift} /> Bonus</a></li>
        <li><a href="#profile"><FontAwesomeIcon icon={faUser} /> Profile</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
