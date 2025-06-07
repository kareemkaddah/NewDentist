import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ToothIcon,
  TreatmentIcon,
  AestheticIcon,
  CrownIcon,
  StarIcon,
} from './components/Icons';
import Layout from './components/Layout';
import Leistungen from './pages/Leistungen';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const reviews = [
    {
      text: 'Sehr professionelle und freundliche Behandlung. Das gesamte Team ist sehr bemüht und nimmt sich Zeit für die Patienten.',
      author: 'Maria Schmidt',
    },
    {
      text: 'Endlich eine Zahnarztpraxis, die sich wirklich um ihre Patienten kümmert. Die Behandlung war schmerzfrei und die Beratung sehr ausführlich.',
      author: 'Thomas Müller',
    },
    {
      text: 'Moderne Ausstattung und ein sehr angenehmes Ambiente. Die Terminvereinbarung war unkompliziert und die Wartezeiten minimal.',
      author: 'Lisa Weber',
    },
    {
      text: 'Sehr zuvorkommend und professionell. Die Behandlung war schmerzfrei und die Nachsorge hervorragend.',
      author: 'Anna Becker',
    },
  ];

  const nextReview = () => {
    setSlideDirection('slide-out-left');
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 2) % reviews.length);
      setSlideDirection('slide-in-right');
    }, 300);
  };

  const prevReview = () => {
    setSlideDirection('slide-out-right');
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 2 + reviews.length) % reviews.length);
      setSlideDirection('slide-in-left');
    }, 300);
  };

  return (
    <>
      <section id='services' className='services'>
        <div className='container'>
          <h2>Leistungen</h2>
          <div className='services-grid'>
            <div className='service-card'>
              <div className='service-icon'>
                <ToothIcon size={40} color='var(--text-color)' />
              </div>
              <h3>Vorsorge & Prophylaxe</h3>
              <p>
                Professionelle Zahnreinigung, Kontrolluntersuchungen und
                individuelle Mundhygieneberatung für Ihre optimale
                Zahngesundheit
              </p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>
                <TreatmentIcon size={40} color='var(--text-color)' />
              </div>
              <h3>Zahnbehandlung</h3>
              <p>
                Moderne Füllungstherapie, Wurzelbehandlungen und
                Kariesbehandlung mit neuesten Techniken und Materialien
              </p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>
                <AestheticIcon size={40} color='var(--text-color)' />
              </div>
              <h3>Ästhetische Zahnheilkunde</h3>
              <p>
                Zahnaufhellung, Veneers, Keramikverblendschalen und ästhetische
                Füllungen für Ihr perfektes Lächeln
              </p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>
                <CrownIcon size={40} color='var(--text-color)' />
              </div>
              <h3>Zahnersatz</h3>
              <p>
                Festsitzender und herausnehmbarer Zahnersatz, Implantate und
                Kronen für optimale Funktion und Ästhetik
              </p>
            </div>
          </div>
          <div className='services-cta'>
            <Link to='/leistungen' className='services-button'>
              Alle Leistungen anzeigen
            </Link>
          </div>
        </div>
      </section>

      <section id='reviews' className='reviews'>
        <div className='container'>
          <h2>Kunden Bewertungen</h2>
          <div className='reviews-container'>
            <button className='review-nav-btn prev' onClick={prevReview}>
              &#10094;
            </button>
            <div className={`reviews-grid ${slideDirection}`}>
              <div className='review-card'>
                <div className='review-stars'>
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                </div>
                <p className='review-text'>{reviews[currentReview].text}</p>
                <p className='review-author'>
                  - {reviews[currentReview].author}
                </p>
              </div>
              <div className='review-card'>
                <div className='review-stars'>
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                  <StarIcon size={20} color='var(--secondary-color)' />
                </div>
                <p className='review-text'>
                  {reviews[(currentReview + 1) % reviews.length].text}
                </p>
                <p className='review-author'>
                  - {reviews[(currentReview + 1) % reviews.length].author}
                </p>
              </div>
            </div>
            <button className='review-nav-btn next' onClick={nextReview}>
              &#10095;
            </button>
          </div>
          <div className='review-dots'>
            {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
              (_, index) => (
                <span
                  key={index}
                  className={`review-dot ${
                    index === Math.floor(currentReview / 2) ? 'active' : ''
                  }`}
                  onClick={() => {
                    const direction =
                      index > Math.floor(currentReview / 2)
                        ? 'slide-in-right'
                        : 'slide-in-left';
                    setSlideDirection(direction);
                    setCurrentReview(index * 2);
                  }}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section id='contact' className='contact'>
        <div className='container'>
          <h2>Kontakt</h2>
          <div className='contact-grid'>
            <div className='contact-info' style={{ textAlign: 'left' }}>
              <h3>Unsere Adresse</h3>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
              <h3>Kontakt</h3>
              <p>Telefon: +49 123 456789</p>
              <p>E-Mail: info@drgabimousa.de</p>
            </div>

            <div
              className='contact-info'
              style={{ textAlign: 'left', padding: 'auto' }}
            >
              <h3>Öffnungszeiten</h3>
              <p>Montag: 08:00-17</p>
              <p>Dienstag: 08:00-17</p>
              <p>Mittwoch: 08:00-17</p>
              <p>Donnerstag: 08:00-17</p>
              <p>Freitag: 08:00-17</p>
              <p>Samstag & Sonntag: Geschlossen</p>
            </div>
          </div>
          <div className='contact-cta'>
            <Link to='/kontakt' className='contact-button'>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/leistungen'
          element={
            <Layout>
              <Leistungen />
            </Layout>
          }
        />
        <Route
          path='/ueber-uns'
          element={
            <Layout>
              <UeberUns />
            </Layout>
          }
        />
        <Route
          path='/kontakt'
          element={
            <Layout>
              <Kontakt />
            </Layout>
          }
        />
        <Route
          path='/impressum'
          element={
            <Layout>
              <Impressum />
            </Layout>
          }
        />
        <Route
          path='/datenschutz'
          element={
            <Layout>
              <Datenschutz />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
