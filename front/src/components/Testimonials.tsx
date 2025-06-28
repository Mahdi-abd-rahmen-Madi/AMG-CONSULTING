import React from "react";

const testimonials = [
  {
    name: "Sami B.",
    company: "Startup Tunisia",
    quote:
      "AMG Consulting helped us launch our brand with creativity and professionalism. Highly recommended!",
  },
  {
    name: "Leila M.",
    company: "Leila's Boutique",
    quote:
      "Their digital marketing strategies brought us more clients than ever before.",
  },
  {
    name: "Ahmed K.",
    company: "Tech Innovate",
    quote:
      "A reliable partner for all our marketing needs. The team is responsive and innovative.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title" style={{color: 'var(--color-accent)'}}>Testimonials</h2>
        <div className="card" style={{background: 'rgba(255,255,255,0.98)'}}>
          <div className="testimonials-row" style={{background: 'none'}}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="testimonial-card"
                style={{background: 'none', boxShadow: 'none', color: '#222'}}
              >
                <p className="testimonial-quote" style={{color: 'var(--color-primary)'}}>
                  "{t.quote}"
                </p>
                <div className="testimonial-name" style={{color: 'var(--color-accent)', fontWeight: 700}}>{t.name}</div>
                <div className="testimonial-company" style={{color: 'var(--color-secondary)'}}>{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 