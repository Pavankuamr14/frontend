import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="responsive-logo" />
      </div>

      {/* Nav Links - Desktop View */}
      <ul className="navbar-links">
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} /> Home
          </a>
        </li>
        <li>
          <a href="#aboutt">
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '20px' }} /> About
          </a>
        </li>
        <li>
          <a href="#team">
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: '20px' }} /> Team
          </a>
        </li>
      </ul>
      
      {/* Get Started Button */}
      <div className="navbar-button">
        <a href="/decide" className="btn">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
