import React from "react";

const projects = [
  {
    title: "Brand Launch Campaign",
    image: "/assets/portfolio1.jpg",
    desc: "A successful multi-channel campaign for a Tunisian startup.",
  },
  {
    title: "Website Redesign",
    image: "/assets/portfolio2.jpg",
    desc: "Modern, responsive website for a local business.",
  },
  {
    title: "Social Media Growth",
    image: "/assets/portfolio3.jpg",
    desc: "Doubled engagement for a retail client in 6 months.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="portfolio-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
              />
              <div className="portfolio-content">
                <h3 className="font-semibold mb-2" style={{fontSize: '1.1rem'}}>{project.title}</h3>
                <p style={{color: 'var(--color-secondary)'}}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio; 