import React from 'react';
import '../styles/Legal.css';

const Datenschutz = () => {
  return (
    <div className='legal-page'>
      <section className='hero-section'>
        <div className='container'>
          <h1>Datenschutzerklärung</h1>
        </div>
      </section>

      <section className='legal-content'>
        <div className='container'>
          <div className='legal-section'>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen.
            </p>
          </div>

          <div className='legal-section'>
            <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div className='legal-section'>
            <h2>3. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
          </div>

          <div className='legal-section'>
            <h2>4. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
