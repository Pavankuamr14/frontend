import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Ensure you install 'lucide-react'
import './footer.css'; // CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Your Logo" className="footer-logo-img" />
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
