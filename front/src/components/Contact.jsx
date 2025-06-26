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
        <h2 className="section-title">Contact Us</h2>
        <div className="flex flex-col flex-row gap-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
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
          <div className="flex-1" style={{height: '18rem'}}>
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