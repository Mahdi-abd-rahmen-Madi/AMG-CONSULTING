import React from "react";
import { FaBullhorn, FaChartLine, FaPalette, FaGlobe, FaVideo, FaMicrophone } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn className="service-icon" />,
    title: "Digital Marketing",
    desc: "SEO, SEM, and social media campaigns tailored to your brand.",
  },
  {
    icon: <FaPalette className="service-icon" />,
    title: "Branding & Design",
    desc: "Creative branding, logo design, and visual identity.",
  },
  {
    icon: <FaChartLine className="service-icon" />,
    title: "Strategy & Consulting",
    desc: "Data-driven marketing strategies for measurable growth.",
  },
  {
    icon: <FaGlobe className="service-icon" />,
    title: "Web Development",
    desc: "Modern, responsive websites that convert visitors into clients.",
  },
  {
    icon: <FaVideo className="service-icon" />,
    title: "Video Editing",
    desc: "Professional video editing to make your brand stand out on every platform.",
  },
  {
    icon: <FaMicrophone className="service-icon" />,
    title: "Voice Over",
    desc: "High-quality voice over services for ads, presentations, and more.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card"
            >
              {service.icon}
              <h3 className="font-semibold mb-2" style={{fontSize: '1.15rem'}}>{service.title}</h3>
              <p style={{color: 'var(--color-secondary)'}}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 