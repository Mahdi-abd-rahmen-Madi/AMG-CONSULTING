import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  const formRef = useRef();

  // Dummy handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting AMG Consulting!");
    formRef.current.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container max-w-5xl">
        <h2 className="section-title" style={{color: 'var(--color-accent)', textAlign: 'center'}}>Contact Us</h2>
        <div className="card" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.98)',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            style={{background: 'none', boxShadow: 'none', color: '#222', flex: 1, maxWidth: 400}}
          >
            <div>
              <label className="contact-label">Name</label>
              <input
                type="text"
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Email</label>
              <input
                type="email"
                required
                className="contact-input"
              />
            </div>
            <div>
              <label className="contact-label">Message</label>
              <textarea
                required
                className="contact-textarea"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>
          </form>
          <div className="flex-1" style={{height: '18rem', background: 'none', boxShadow: 'none', maxWidth: 350}}>
            <MapContainer
              center={[36.8065, 10.1815]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[36.8065, 10.1815]}>
                <Popup>AMG Consulting, Tunis</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 