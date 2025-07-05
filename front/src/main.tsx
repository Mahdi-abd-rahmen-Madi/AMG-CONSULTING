import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './main.css';
import { FaMoon, FaSun, FaFacebook, FaLinkedin, FaInstagram, FaBullhorn, FaChartLine, FaPalette, FaGlobe, FaVideo, FaMicrophone, FaLightbulb, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { ChevronRight, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Main() {
  // Dark mode toggle logic
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // Navbar logic
  const [open, setOpen] = useState(false);
  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Services' },
    { to: 'portfolio', label: 'Portfolio' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'contact', label: 'Contact' },
  ];

  // Hero animation logic
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  // Contact form logic
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for contacting AMG Consulting!');
    if (formRef.current) formRef.current.reset();
  };

  // Keyboard navigation logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = document.querySelectorAll('.hero-section, .about-section, .services-section, .portfolio-section, .testimonials-section, .contact-section');
      const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < sections.length - 1) {
          sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Services data
  const services = [
    { icon: <FaBullhorn color="var(--color-accent)" size={40} />, title: 'Digital Marketing', desc: 'SEO, SEM, and social media campaigns tailored to your brand.' },
    { icon: <FaPalette color="var(--color-accent)" size={40} />, title: 'Branding & Design', desc: 'Creative branding, logo design, and visual identity.' },
    { icon: <FaPalette color="var(--color-accent)" size={40} />, title: 'UI/UX Design', desc: 'User interface and experience design for web and mobile apps.' },
    { icon: <FaChartLine color="var(--color-accent)" size={40} />, title: 'Strategy & Consulting', desc: 'Data-driven marketing strategies for measurable growth.' },
    { icon: <FaGlobe color="var(--color-accent)" size={40} />, title: 'Web Development', desc: 'Modern, responsive websites that convert visitors into clients.' },
    { icon: <FaVideo color="var(--color-accent)" size={40} />, title: 'Video Editing', desc: 'Professional video editing to make your brand stand out on every platform.' },
    { icon: <FaMicrophone color="var(--color-accent)" size={40} />, title: 'Voice Over', desc: 'High-quality voice over services for ads, presentations, and more.' },
  ];

  // Portfolio data
  const projects = [
    { title: 'Brand Launch Campaign', image: '/assets/brand.png', desc: 'A successful multi-channel campaign for a Tunisian startup.' },
    { title: 'Website Redesign', image: '/assets/website.png', desc: 'Modern, responsive website for a local business.' },
    { title: 'Social Media Growth', image: '/assets/social.png', desc: 'Doubled engagement for a retail client in 6 months.' },
    { title: 'Ramadan Campaign', image: '/assets/ramadan.jpg', desc: 'Creative Ramadan Kareem campaign for a food brand, blending tradition and product design.' },
    { title: 'UI/UX Design Example', image: '/assets/uiux.png', desc: 'Modern UI/UX design for a digital product, focused on user experience and aesthetics.' },
  ];

  // Testimonials data
  const testimonials = [
    { name: 'Sami B.', company: 'Startup Tunisia', quote: 'AMG Consulting helped us launch our brand with creativity and professionalism. Highly recommended!' },
    { name: 'Leila M.', company: "Leila's Boutique", quote: 'Their digital marketing strategies brought us more clients than ever before.' },
    { name: 'Ahmed K.', company: 'Tech Innovate', quote: 'A reliable partner for all our marketing needs. The team is responsive and innovative.' },
  ];

  // Floating background elements for sections
  const SectionBackgroundShapes = () => (
    <>
      <div className="section-bg-shape section-bg-shape-blue"></div>
      <div className="section-bg-shape section-bg-shape-purple"></div>
      <div className="section-bg-shape section-bg-shape-pink"></div>
      <div className="section-bg-float section-bg-float-blue"></div>
      <div className="section-bg-float section-bg-float-pink"></div>
      <div className="section-bg-float section-bg-float-yellow"></div>
    </>
  );

  return (
    <div className="main-bg">
      {/* Dark Mode Toggle */}
      <button className="darkmode-toggle" onClick={() => setDark((d) => !d)} aria-label="Toggle dark mode">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
      {/* Menu Icon */}
      <div className="menu-container">
        <button className="menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        {open && (
          <div className="menu-dropdown">
            {navLinks.map((link) => (
              <a key={link.to} href={`#${link.to}`} className="menu-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {/* Scroll Snap Container */}
      <div className="scroll-snap-container">
        <div className="hero-section">
          <div className="hero-bg-shapes"></div>
          <div className="hero-grid-pattern"></div>
          <div className={`hero-content ${isVisible ? 'hero-visible' : 'hero-hidden'}`}> 
            <div className="hero-trust-indicator">
              <Award className="hero-award-icon" />
              Trusted by 200+ MENA Companies
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">Scale Your Business</span>
              <span className="hero-title-gradient"> to 7-Figures</span>
            </h1>
            <p className="hero-subtitle">
              Transform your marketing into a <span className="hero-subtitle-bold">predictable revenue engine</span> with data-driven strategies that deliver measurable ROI across Tunisia and MENA.
            </p>
            <div className="hero-metrics-row">
              <div className="hero-metric">
                <div className="hero-metric-value">312%</div>
                <div className="hero-metric-label">Average ROI Increase</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-value">6</div>
                <div className="hero-metric-label">Months to Results</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-value">200+</div>
                <div className="hero-metric-label">Companies Scaled</div>
              </div>
            </div>
            <div className="hero-cta-row">
              <button className="hero-cta-btn">
                Get Your Free Growth Audit
                <ArrowRight className="hero-cta-arrow" />
                <div className="hero-cta-btn-bg"></div>
              </button>
              <div className="hero-cta-spots">
                <div className="hero-cta-dot"></div>
                <span className="hero-cta-spots-label">Only 5 spots left this month</span>
              </div>
            </div>
            <div className="hero-results-banner">
              <div className="hero-results-banner-bg">
                <div className="hero-results-banner-content">
                  <TrendingUp className="hero-results-icon" />
                  <span className="hero-results-text">Our clients see an average of 312% ROI increase within the first 6 months</span>
                  <Users className="hero-results-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section">
          <SectionBackgroundShapes />
          <div className="about-container">
            <h2 className="about-title">About AMG Consulting</h2>
            <p className="about-description">At AMG Consulting, our mission is to empower businesses in Tunisia and beyond to reach their full potential through innovative marketing strategies, creative storytelling, and data-driven results.</p>
            <div className="about-card">
              <div className="about-mission">
                <div className="about-mission-icon"><FaLightbulb color="var(--color-accent)" size={35} /></div>
                <h3 className="about-mission-title">Our Mission</h3>
                <p className="about-mission-desc">To deliver measurable growth for our clients by combining creativity, technology, and strategic thinking.</p>
              </div>
              <div className="about-values">
                <div className="about-values-icon"><FaHeart color="var(--color-accent)" size={35} /></div>
                <h3 className="about-values-title">Our Values</h3>
                <ul className="about-list">
                  <li className="about-list-item">&#8226; Integrity & Transparency</li>
                  <li className="about-list-item">&#8226; Innovation & Excellence</li>
                  <li className="about-list-item">&#8226; Client-Centric Approach</li>
                  <li className="about-list-item">&#8226; Collaboration & Growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="services-section">
          <SectionBackgroundShapes />
          <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            <div className="services-card">
              <div className="services-grid">
                {services.map((service, idx) => (
                  <div key={idx} className="service-card">
                    {service.icon}
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section">
          <SectionBackgroundShapes />
          <div className="portfolio-container">
            <h2 className="portfolio-title">Our Work</h2>
            <div className="portfolio-card">
              <div className="portfolio-grid">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="portfolio-card-item"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: idx === 1 ? 'contain' : 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="portfolio-content">
                      <h3 className="portfolio-project-title">{project.title}</h3>
                      <p className="portfolio-project-desc">{project.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <SectionBackgroundShapes />
          <div className="testimonials-container">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-card">
              <div className="testimonials-row">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="testimonial-card">
                    <p className="testimonial-quote">"{t.quote}"</p>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-company">{t.company}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <SectionBackgroundShapes />
          <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-card">
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label className="contact-label">Name</label>
                  <input type="text" required className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Email</label>
                  <input type="email" required className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Message</label>
                  <textarea required className="contact-textarea" rows={4} />
                </div>
                <button type="submit" className="contact-btn">Send Message</button>
              </form>
              <div className="contact-info">
                <div className="contact-map">
                  <MapContainer center={[36.8065, 10.1815]} zoom={13} scrollWheelZoom={false} className="contact-map-leaflet">
                    <TileLayer attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[36.8065, 10.1815]}>
                      <Popup>AMG Consulting, Tunis</Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="contact-social">
                  <h3 className="contact-social-title">Follow Us</h3>
                  <div className="contact-social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="contact-social-link">
                      <FaFacebook />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-social-link">
                      <FaLinkedin />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social-link">
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="contact-email">
                    <a href="mailto:info@amgconsulting.tn">info@amgconsulting.tn</a>
                  </div>
                  <div className="contact-copyright">
                    &copy; {new Date().getFullYear()} AMG Consulting. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
