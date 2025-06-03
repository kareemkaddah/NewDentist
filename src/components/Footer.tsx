import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Kontakt</h3>
          <p>Dr. Gabi Mousa</p>
          <p>Zahnärztin</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>Tel: +49 123 456789</p>
          <p>E-Mail: info@dr-gabi-mousa.de</p>
        </div>

        <div className='footer-section'>
          <h3>Öffnungszeiten</h3>
          <p>Montag - Freitag: 9:00 - 17:00</p>
          <p>Samstag: Nach Vereinbarung</p>
          <p>Sonntag: Geschlossen</p>
        </div>

        <div className='footer-section'>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to='/'>Startseite</Link>
            </li>
            <li>
              <Link to='/leistungen'>Leistungen</Link>
            </li>
            <li>
              <Link to='/ueber-uns'>Über uns</Link>
            </li>
            <li>
              <Link to='/kontakt'>Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Rechtliches</h3>
          <ul>
            <li>
              <Link to='/impressum'>Impressum</Link>
            </li>
            <li>
              <Link to='/datenschutz'>Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <p>© 2025 Dr. Gabi Mousa. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
