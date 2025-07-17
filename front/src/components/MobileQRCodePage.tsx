import React from 'react';
import { QRCode } from 'qrcode.react';

const MAIN_PAGE_URL = window.location.origin;

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
      <h2>Scan to Visit Our Mobile Site</h2>
      <QRCode value={MAIN_PAGE_URL} size={220} />
      <p style={{ marginTop: '1rem' }}>Scan this QR code to open the main page on your mobile device.</p>
    </div>
  );
};

export default MobileQRCodePage; 