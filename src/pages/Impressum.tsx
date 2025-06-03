import React from 'react';
import '../styles/Legal.css';

const Impressum = () => {
  return (
    <div className='legal-page'>
      <section className='hero-section'>
        <div className='container'>
          <h1>Impressum</h1>
        </div>
      </section>

      <section className='legal-content'>
        <div className='container'>
          <div className='legal-section'>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Dr. Gabi Mousa</p>
            <p>Zahnärztin</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
          </div>

          <div className='legal-section'>
            <h2>Kontakt</h2>
            <p>Telefon: +49 123 456789</p>
            <p>E-Mail: info@dr-gabi-mousa.de</p>
          </div>

          <div className='legal-section'>
            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Zahnärztin</p>
            <p>Zuständige Kammer: Zahnärztekammer</p>
            <p>Verliehen in: Deutschland</p>
          </div>

          <div className='legal-section'>
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a href='https://ec.europa.eu/consumers/odr/'>
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
              bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
