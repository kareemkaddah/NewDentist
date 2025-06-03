import React, { useState } from 'react';
import '../styles/Kontakt.css';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='kontakt-page'>
      <section className='hero-section'>
        <div className='container'>
          <h1>Kontakt</h1>
          <p className='subtitle'>Wir freuen uns auf Ihre Nachricht</p>
        </div>
      </section>

      <section className='contact-section'>
        <div className='container'>
          <div className='contact-grid'>
            <div className='contact-info'>
              <h2>Unsere Kontaktdaten</h2>
              <div className='info-card'>
                <h3>Adresse</h3>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
              <div className='info-card'>
                <h3>Telefon</h3>
                <p>+49 123 456789</p>
              </div>
              <div className='info-card'>
                <h3>E-Mail</h3>
                <p>info@dr-gabi-mousa.de</p>
              </div>
              <div className='info-card'>
                <h3>Öffnungszeiten</h3>
                <p>Montag - Freitag: 9:00 - 17:00</p>
                <p>Samstag: Nach Vereinbarung</p>
              </div>
            </div>

            <div className='contact-form'>
              <h2>Kontaktformular</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>E-Mail</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Telefon</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='message'>Nachricht</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  ></textarea>
                </div>
                <button type='submit' className='submit-button'>
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='map-section'>
        <div className='container'>
          <h2>So finden Sie uns</h2>
          <div className='map-container'>
            {/* Add your map component or iframe here */}
            <div className='map-placeholder'>
              <p>Karte wird geladen...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
