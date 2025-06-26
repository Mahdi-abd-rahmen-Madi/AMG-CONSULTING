import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Portfolio" },
  { to: "testimonials", label: "Testimonials" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="navbar-brand">AMG Consulting</div>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              className="navbar-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        {open && (
          <div className="navbar-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="navbar-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 