import React from "react";
import { FaBullhorn, FaChartLine, FaPalette, FaGlobe, FaVideo, FaMicrophone } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Digital Marketing",
    desc: "SEO, SEM, and social media campaigns tailored to your brand.",
  },
  {
    icon: <FaPalette className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Branding & Design",
    desc: "Creative branding, logo design, and visual identity.",
  },
  {
    icon: <FaPalette className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "UI/UX Design",
    desc: "User interface and experience design for web and mobile apps.",
  },
  {
    icon: <FaChartLine className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Strategy & Consulting",
    desc: "Data-driven marketing strategies for measurable growth.",
  },
  {
    icon: <FaGlobe className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Web Development",
    desc: "Modern, responsive websites that convert visitors into clients.",
  },
  {
    icon: <FaVideo className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Video Editing",
    desc: "Professional video editing to make your brand stand out on every platform.",
  },
  {
    icon: <FaMicrophone className="service-icon" style={{color: 'var(--color-accent)'}} />,
    title: "Voice Over",
    desc: "High-quality voice over services for ads, presentations, and more.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title" style={{color: 'var(--color-accent)'}}>Our Services</h2>
        <div className="card" style={{background: 'rgba(255,255,255,0.98)'}}>
          <div className="services-grid" style={{background: 'none'}}>
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{background: 'none', boxShadow: 'none', color: '#222'}}
              >
                {service.icon}
                <h3 className="font-semibold mb-2" style={{fontSize: '1.15rem', color: 'var(--color-primary)'}}>{service.title}</h3>
                <p style={{color: 'var(--color-secondary)'}}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 