import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row container">
        <div>
          &copy; {new Date().getFullYear()} AMG Consulting. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-email">
          <a href="mailto:info@amgconsulting.tn">
            info@amgconsulting.tn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 