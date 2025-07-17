import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const MAIN_PAGE_URL = 'https://amg-consulting.vercel.app/';

function isMobileDevice() {
  return window.matchMedia && window.matchMedia('(max-width: 900px)').matches;
}

const MobileQRCodePage: React.FC = () => {
  const isMobile = isMobileDevice();

  if (!isMobile) {
    return (
      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem' }}>
        This page is only available on mobile devices.
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      padding: '0 1rem',
      position: 'relative',
    }}>
      <h2 style={{ color: '#fff', marginBottom: '2rem', fontWeight: 700 }}>Scan to Visit Our Mobile Site</h2>
      <div style={{ background: '#fff', borderRadius: '1.5rem', padding: '1.5rem', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
        <QRCodeCanvas value={MAIN_PAGE_URL} size={220} bgColor="#fff" fgColor="#764ba2" />
      </div>
      <p style={{ marginTop: '1.5rem', color: '#e0e7ef', fontSize: '1.1rem', textAlign: 'center', maxWidth: 320 }}>
        Scan this QR code to open the main page on your mobile device.
      </p>
      <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 600, margin: '2rem 0 1rem 0' }}>Follow Us</h3>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="https://wa.me/21620033875" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', borderRadius: '50%', fontSize: '1.25rem', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/amg.consulting_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', borderRadius: '50%', fontSize: '1.25rem', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <FaInstagram />
        </a>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} AMG Consulting. All rights reserved.
      </div>
    </div>
  );
};

export default MobileQRCodePage; 