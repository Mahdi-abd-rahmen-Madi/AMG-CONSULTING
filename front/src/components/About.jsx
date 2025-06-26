import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-content">
        <h2 className="section-title">About AMG Consulting</h2>
        <p className="mb-6">
          At AMG Consulting, our mission is to empower businesses in Tunisia and beyond to reach their full potential through innovative marketing strategies, creative storytelling, and data-driven results.
        </p>
        <div className="about-values">
          <div style={{flex: 1}}>
            <h3 className="font-semibold mb-2" style={{fontSize: '1.25rem'}}>Our Mission</h3>
            <p>
              To deliver measurable growth for our clients by combining creativity, technology, and strategic thinking.
            </p>
          </div>
          <div style={{flex: 1}}>
            <h3 className="font-semibold mb-2" style={{fontSize: '1.25rem'}}>Our Values</h3>
            <ul className="about-list">
              <li>Integrity & Transparency</li>
              <li>Innovation & Excellence</li>
              <li>Client-Centric Approach</li>
              <li>Collaboration & Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 