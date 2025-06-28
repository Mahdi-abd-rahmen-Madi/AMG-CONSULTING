import React from "react";

const projects = [
  {
    title: "Brand Launch Campaign",
    image: "/assets/brand.png",
    desc: "A successful multi-channel campaign for a Tunisian startup.",
  },
  {
    title: "Website Redesign",
    image: "/assets/website.png",
    desc: "Modern, responsive website for a local business.",
  },
  {
    title: "Social Media Growth",
    image: "/assets/social.png",
    desc: "Doubled engagement for a retail client in 6 months.",
  },
  {
    title: "Ramadan Campaign",
    image: "/assets/ramadan.jpg",
    desc: "Creative Ramadan Kareem campaign for a food brand, blending tradition and product design.",
  },
  {
    title: "UI/UX Design Example",
    image: "/assets/uiux.png",
    desc: "Modern UI/UX design for a digital product, focused on user experience and aesthetics.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title" style={{color: 'var(--color-accent)'}}>Our Work</h2>
        <div className="card" style={{background: 'rgba(255,255,255,0.98)'}}>
          <div className="portfolio-grid" style={{background: 'none'}}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="portfolio-card"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: idx === 1 ? 'contain' : 'cover'
                }}
              >
                <div className="portfolio-content">
                  <h3 className="font-semibold mb-2" style={{fontSize: '1.1rem', color: 'var(--color-accent)'}}>{project.title}</h3>
                  <p style={{color: '#fff'}}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio; 