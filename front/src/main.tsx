import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './main.css';
import { FaMoon, FaSun, FaWhatsapp, FaInstagram, FaBullhorn, FaChartLine, FaPalette, FaGlobe, FaVideo, FaMicrophone, FaLightbulb, FaHeart, FaBars, FaTimes, FaCheckCircle } from 'react-icons/fa';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Replace this URL with your actual Google Apps Script Web App URL
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVEZoeg3WcBlUMe3TnDa29MoVy7wUaBpFhqR-LuuNjMjyB6vwom-Ra2uS_ZbJol2CtXQ/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData, // No headers!
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for contacting AMG Consulting! We\'ll get back to you soon.');
        if (formRef.current) formRef.current.reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  // Services auto-advance logic for mobile/tablet
  const [serviceIndex, setServiceIndex] = useState(0);
  const [serviceAnimating, setServiceAnimating] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches;
  
  // Metrics auto-advance logic for mobile/tablet
  const [metricIndex, setMetricIndex] = useState(0);
  const [metricAnimating, setMetricAnimating] = useState(false);
  const metrics = [
    { value: '312%', label: 'Average ROI Increase' },
    { value: '6', label: 'Months to Results' },
    { value: '15+', label: 'Companies Scaled' },
  ];
  
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setServiceAnimating(true);
      setTimeout(() => {
        setServiceIndex((prev) => (prev + 1) % services.length);
        setServiceAnimating(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, services.length]);
  
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setMetricAnimating(true);
      setTimeout(() => {
        setMetricIndex((prev) => (prev + 1) % metrics.length);
        setMetricAnimating(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, metrics.length]);

  // Portfolio data
  const projects = [
    { title: 'Brand Launch Campaign', image: '/assets/brand.png', desc: 'A successful multi-channel campaign for a Tunisian startup.' },
    { title: 'Website Redesign', image: '/assets/website.png', desc: 'Modern, responsive website for a local business.' },
    { title: 'Social Media Growth', image: '/assets/social.png', desc: 'Doubled engagement for a retail client in 6 months.' },
    { title: 'Ramadan Campaign', image: '/assets/ramadan.jpg', desc: 'Creative Ramadan Kareem campaign for a food brand, blending tradition and product design.' },
    { title: 'UI/UX Design Example', image: '/assets/uiux.png', desc: 'Modern UI/UX design for a digital product, focused on user experience and aesthetics.' },
  ];

  // Portfolio swipe logic for mobile/tablet
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPortfolioIndex((prev) => (prev + 1) % projects.length);
        setAnimating(false);
      }, 500); // animation duration
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, projects.length]);

  // Testimonials data
  const testimonials = [
    { name: 'Sami B.', company: 'Startup Tunisia', quote: 'AMG Consulting helped us launch our brand with creativity and professionalism. Highly recommended!' },
    { name: 'Leila M.', company: "Leila's Boutique", quote: 'Their digital marketing strategies brought us more clients than ever before.' },
    { name: 'Ahmed K.', company: 'Tech Innovate', quote: 'A reliable partner for all our marketing needs. The team is responsive and innovative.' },
  ];

  // Testimonials auto-advance logic for mobile/tablet
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialAnimating, setTestimonialAnimating] = useState(false);
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setTestimonialAnimating(true);
      setTimeout(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setTestimonialAnimating(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  // About carousel logic for mobile/tablet
  const aboutCards = [
    {
      type: 'description',
      content: (
        <>
          <div className="about-description">
            At AMG Consulting, our mission is to empower businesses in Tunisia and beyond to reach their full potential through innovative marketing strategies, creative storytelling, and data-driven results.
          </div>
        </>
      ),
    },
    {
      type: 'mission',
      icon: <div className="about-mission-icon"><FaLightbulb color="var(--color-accent)" size={35} /></div>,
      title: 'Our Mission',
      desc: 'To deliver measurable growth for our clients by combining creativity, technology, and strategic thinking.',
    },
    {
      type: 'values',
      icon: <div className="about-values-icon"><FaHeart color="var(--color-accent)" size={35} /></div>,
      title: 'Our Values',
      desc: (
        <div className="about-list-centered">
          <div className="about-list-item">Integrity</div>
          <div className="about-list-item">Innovation</div>
          <div className="about-list-item">Client-Centric</div>
          <div className="about-list-item">Collaboration</div>
        </div>
      ),
    },
  ];

  const [aboutIndex, setAboutIndex] = useState(0);
  const [aboutAnimating, setAboutAnimating] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setAboutAnimating(true);
      setTimeout(() => {
        setAboutIndex((prev) => (prev + 1) % aboutCards.length);
        setAboutAnimating(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, aboutCards.length]);

  // Dynamic blur effect for background blobs
  useEffect(() => {
    const checkBlobProximity = () => {
      const blobs = document.querySelectorAll('.section-bg-shape, .section-bg-float');
      const contentAreas = document.querySelectorAll('.hero-content, .about-container, .services-container, .portfolio-container, .testimonials-container, .contact-container, .service-card, .portfolio-card-item, .testimonial-card, .contact-card, .about-mission, .about-values');
      
      blobs.forEach(blob => {
        const blobRect = blob.getBoundingClientRect();
        let isVeryNearContent = false;
        
        contentAreas.forEach(content => {
          const contentRect = content.getBoundingClientRect();
          
          // Check if blob overlaps or is within 5px of content
          const horizontalOverlap = !(blobRect.right < contentRect.left - 5 || blobRect.left > contentRect.right + 5);
          const verticalOverlap = !(blobRect.bottom < contentRect.top - 5 || blobRect.top > contentRect.bottom + 5);
          
          if (horizontalOverlap && verticalOverlap) {
            isVeryNearContent = true;
          }
        });
        
        // Apply blur class only when very close (within 5px)
        blob.classList.remove('blur-close', 'blur-very-close');
        if (isVeryNearContent) {
          blob.classList.add('blur-very-close');
        }
      });
    };

    // Check proximity on scroll and periodically
    const handleScroll = () => {
      requestAnimationFrame(checkBlobProximity);
    };

    const interval = setInterval(checkBlobProximity, 100); // Check every 100ms
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="main-bg">
      {/* Global Background Shapes - Static and Independent */}
      <div className="section-bg-shape section-bg-shape-blue"></div>
      <div className="section-bg-shape section-bg-shape-purple"></div>
      <div className="section-bg-shape section-bg-shape-pink"></div>
      <div className="section-bg-float section-bg-float-blue"></div>
      <div className="section-bg-float section-bg-float-pink"></div>
      <div className="section-bg-float section-bg-float-yellow"></div>
      
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
            <button 
              className="menu-link menu-theme-toggle" 
              onClick={() => {
                setDark((d) => !d);
                setOpen(false);
              }} 
              aria-label="Toggle dark mode"
            >
              {dark ? <FaSun /> : <FaMoon />}
              <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
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
              Trusted by 15+ MENA Companies
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">Scale Your Business</span>
              <span className="hero-title-gradient"> to 7-Figures</span>
            </h1>
            <p className="hero-subtitle">
              Transform your marketing into a <span className="hero-subtitle-bold">predictable revenue engine</span> with data-driven strategies that deliver measurable ROI across Tunisia and MENA.
            </p>
            <div className="hero-metrics-row">
              {isMobile ? (
                <div className="metrics-carousel-container">
                  {metrics.map((metric, idx) => {
                    const isActive = idx === metricIndex;
                    const isPrev = idx === (metricIndex - 1 + metrics.length) % metrics.length;
                    const isNext = idx === (metricIndex + 1) % metrics.length;
                    const isVisible = isActive || isPrev || isNext;
                    
                    if (!isVisible) return null;
                    
                    let cardClass = 'metric-carousel-card';
                    if (isActive) cardClass += ' active';
                    if (isPrev) cardClass += ' prev';
                    if (isNext) cardClass += ' next';
                    if (metricAnimating) cardClass += ' animating';
                    
                    return (
                      <div key={idx} className={cardClass}>
                        <div className="hero-metric-value">{metric.value}</div>
                        <div className="hero-metric-label">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div className="hero-metric">
                    <div className="hero-metric-value">312%</div>
                    <div className="hero-metric-label">Average ROI Increase</div>
                  </div>
                  <div className="hero-metric">
                    <div className="hero-metric-value">6</div>
                    <div className="hero-metric-label">Months to Results</div>
                  </div>
                  <div className="hero-metric">
                    <div className="hero-metric-value">15+</div>
                    <div className="hero-metric-label">Companies Scaled</div>
                  </div>
                </>
              )}
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
          <div className="about-container">
            <h2 className="about-title">About AMG Consulting</h2>
            <div className="about-card">
              {isMobile ? (
                <div className="about-carousel-container">
                  {aboutCards.map((card, idx) => {
                    const isActive = idx === aboutIndex;
                    const isPrev = idx === (aboutIndex - 1 + aboutCards.length) % aboutCards.length;
                    const isNext = idx === (aboutIndex + 1) % aboutCards.length;
                    const isVisible = isActive || isPrev || isNext;

                    if (!isVisible) return null;

                    let cardClass = 'about-carousel-card';
                    if (isActive) cardClass += ' active';
                    if (isPrev) cardClass += ' prev';
                    if (isNext) cardClass += ' next';
                    if (aboutAnimating) cardClass += ' animating';

                    return (
                      <div key={card.type} className={cardClass}>
                        {card.type === 'description' ? (
                          card.content
                        ) : (
                          <>
                            {card.icon}
                            <h3 className={card.type === 'mission' ? 'about-mission-title' : 'about-values-title'}>
                              {card.title}
                            </h3>
                            {card.type === 'mission' ? (
                              <p className="about-mission-desc">{card.desc}</p>
                            ) : (
                              card.desc
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div className="about-description">
                    At AMG Consulting, our mission is to empower businesses in Tunisia and beyond to reach their full potential through innovative marketing strategies, creative storytelling, and data-driven results.
                  </div>
                  <div className="about-cards-row">
                    <div className="about-mission">
                      <div className="about-mission-icon"><FaLightbulb color="var(--color-accent)" size={35} /></div>
                      <h3 className="about-mission-title">Our Mission</h3>
                      <p className="about-mission-desc">To deliver measurable growth for our clients by combining creativity, technology, and strategic thinking.</p>
                    </div>
                    <div className="about-values">
                      <div className="about-values-icon"><FaHeart color="var(--color-accent)" size={35} /></div>
                      <h3 className="about-values-title">Our Values</h3>
                      <div className="about-list-centered">
                        <div className="about-list-item">Integrity & Transparency</div>
                        <div className="about-list-item">Innovation & Excellence</div>
                        <div className="about-list-item">Client-Centric Approach</div>
                        <div className="about-list-item">Collaboration & Growth</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="services-section">
          <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            <div className="services-card">
              {isMobile ? (
                <div className="services-carousel-container">
                  {services.map((service, idx) => {
                    const isActive = idx === serviceIndex;
                    const isPrev = idx === (serviceIndex - 1 + services.length) % services.length;
                    const isNext = idx === (serviceIndex + 1) % services.length;
                    const isVisible = isActive || isPrev || isNext;
                    
                    if (!isVisible) return null;
                    
                    let cardClass = 'services-carousel-card';
                    if (isActive) cardClass += ' active';
                    if (isPrev) cardClass += ' prev';
                    if (isNext) cardClass += ' next';
                    if (serviceAnimating) cardClass += ' animating';
                    
                    return (
                      <div key={idx} className={cardClass}>
                        {service.icon}
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="services-grid">
                  {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                      {service.icon}
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="portfolio-section">
          <div className="portfolio-container">
            <h2 className="portfolio-title">Our Work</h2>
            <div className="portfolio-card">
              {isMobile ? (
                <div className="portfolio-carousel-container">
                  {projects.map((project, idx) => {
                    const isActive = idx === portfolioIndex;
                    const isPrev = idx === (portfolioIndex - 1 + projects.length) % projects.length;
                    const isNext = idx === (portfolioIndex + 1) % projects.length;
                    const isVisible = isActive || isPrev || isNext;
                    
                    if (!isVisible) return null;
                    
                    let cardClass = 'portfolio-carousel-card';
                    if (isActive) cardClass += ' active';
                    if (isPrev) cardClass += ' prev';
                    if (isNext) cardClass += ' next';
                    if (animating) cardClass += ' animating';
                    
                    return (
                      <div key={idx} className={cardClass}>
                        <div className="portfolio-carousel-image" style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: idx === 1 ? 'contain' : 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className="portfolio-carousel-content">
                          <h3 className="portfolio-project-title">{project.title}</h3>
                          <p className="portfolio-project-desc">{project.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <div className="testimonials-container">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-card">
              {isMobile ? (
                <div className="testimonials-carousel-container">
                  {testimonials.map((t, idx) => {
                    const isActive = idx === testimonialIndex;
                    const isPrev = idx === (testimonialIndex - 1 + testimonials.length) % testimonials.length;
                    const isNext = idx === (testimonialIndex + 1) % testimonials.length;
                    const isVisible = isActive || isPrev || isNext;
                    
                    if (!isVisible) return null;
                    
                    let cardClass = 'testimonial-carousel-card';
                    if (isActive) cardClass += ' active';
                    if (isPrev) cardClass += ' prev';
                    if (isNext) cardClass += ' next';
                    if (testimonialAnimating) cardClass += ' animating';
                    
                    return (
                      <div key={idx} className={cardClass}>
                        <p className="testimonial-quote">"{t.quote}"</p>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-company">{t.company}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="testimonials-row">
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="testimonial-card">
                      <p className="testimonial-quote">"{t.quote}"</p>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-company">{t.company}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-card">
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label className="contact-label">Name</label>
                  <input type="text" name="name" required className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Email</label>
                  <input type="email" name="email" required className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Message</label>
                  <textarea name="message" required className="contact-textarea" rows={4} />
                </div>
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="contact-status contact-status-success contact-status-animated">
                    <FaCheckCircle className="contact-status-icon" />
                    <span>{submitMessage}</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact-status contact-status-error">
                    {submitMessage}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="contact-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
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
                    <a href="https://wa.me/21620033875" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="contact-social-link">
                      <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/amg.consulting_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social-link">
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="contact-email">
                    <a href="mailto:amgconsulting0@gmail.com">amgconsulting0@gmail.com</a>
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
