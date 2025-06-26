import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          Elevate Your Brand with <span className="text-accent">AMG Consulting</span>
        </h1>
        <p style={{fontSize: '1.25rem', marginBottom: '2rem', color: '#fff'}}>
          Tunisia's leading marketing agency — driving growth, creativity, and results.
        </p>
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-70}
          className="hero-btn"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Hero; 