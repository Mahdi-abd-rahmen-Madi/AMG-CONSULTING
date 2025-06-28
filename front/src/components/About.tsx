import React from "react";
import { FaLightbulb, FaHeart } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" style={{color: 'var(--color-accent)'}}>About AMG Consulting</h2>
        <p className="mb-8" style={{fontSize: '1.15rem', color: 'var(--color-secondary)', textAlign: 'center'}}>
          At AMG Consulting, our mission is to empower businesses in Tunisia and beyond to reach their full potential through innovative marketing strategies, creative storytelling, and data-driven results.
        </p>
        <div className="card fade-in" style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{flex: 1, textAlign: 'center', paddingRight: '2rem', borderRight: '2px solid #e5e7eb'}}>
            <FaLightbulb style={{fontSize: '2.2rem', color: 'var(--color-accent)', marginBottom: '0.5rem'}} />
            <h3 className="font-semibold mb-2" style={{fontSize: '1.25rem'}}>Our Mission</h3>
            <p style={{color: '#444', fontSize: '1.05rem'}}>
              To deliver measurable growth for our clients by combining creativity, technology, and strategic thinking.
            </p>
          </div>
          <div style={{flex: 1, textAlign: 'center', paddingLeft: '2rem'}}>
            <FaHeart style={{fontSize: '2.2rem', color: 'var(--color-accent)', marginBottom: '0.5rem'}} />
            <h3 className="font-semibold mb-2" style={{fontSize: '1.25rem'}}>Our Values</h3>
            <ul className="about-list" style={{color: '#444', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.5rem'}}>&#8226; Integrity & Transparency</li>
              <li style={{marginBottom: '0.5rem'}}>&#8226; Innovation & Excellence</li>
              <li style={{marginBottom: '0.5rem'}}>&#8226; Client-Centric Approach</li>
              <li>&#8226; Collaboration & Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 