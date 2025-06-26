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
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-row">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card"
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-company">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 