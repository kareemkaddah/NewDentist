import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [years, setYears] = useState(0);
  const [patients, setPatients] = useState(0);
  const [rating, setRating] = useState(0);
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

  useEffect(() => {
    const duration = 4000;
    const steps = 100;
    const stepDuration = duration / steps;

    // Animate years
    let currentYears = 0;
    const yearsInterval = setInterval(() => {
      currentYears += 15 / steps;
      if (currentYears >= 15) {
        setYears(15);
        clearInterval(yearsInterval);
      } else {
        setYears(Math.floor(currentYears));
      }
    }, stepDuration);

    // Animate patients
    let currentPatients = 0;
    const patientsInterval = setInterval(() => {
      currentPatients += 5000 / steps;
      if (currentPatients >= 5000) {
        setPatients(5000);
        clearInterval(patientsInterval);
      } else {
        setPatients(Math.floor(currentPatients));
      }
    }, stepDuration);

    // Animate rating
    let currentRating = 0;
    const ratingInterval = setInterval(() => {
      currentRating += 4.9 / steps;
      if (currentRating >= 4.9) {
        setRating(4.9);
        clearInterval(ratingInterval);
      } else {
        setRating(Number(currentRating.toFixed(1)));
      }
    }, stepDuration);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(patientsInterval);
      clearInterval(ratingInterval);
    };
  }, []);

  return (
    <>
      <section id='home' className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1>Ihr Lächeln ist Unsere Priorität</h1>
            <p className='subtitle'>
              Erleben Sie außergewöhnliche Zahnpflege mit unserem Team
              erfahrener Fachleute
            </p>
            <p className='hero-description'>
              Wir bieten umfassende zahnärztliche Leistungen in einer
              angenehmen, modernen Umgebung.
            </p>
            <div className='hero-stats'>
              <div className='stat-item'>
                <span className='stat-number'>{years}+</span>
                <span className='stat-label'>Jahre Erfahrung</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>{patients}+</span>
                <span className='stat-label'>Zufriedene Patienten</span>
              </div>
              <div className='stat-item'>
                <span className='stat-number'>{rating}</span>
                <span className='stat-label'>Sterne Bewertung</span>
              </div>
            </div>
            <button className='cta-button'>Termin vereinbaren</button>
          </div>
          <div className='hero-image'>
            <img
              src='/images/Zahnarzt_lächelt.jpg'
              alt='Dr. Gabi Mousa Zahnarztpraxis'
            />
          </div>
        </div>
      </section>

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
            <div className='contact-info'>
              <h3>Unsere Adresse</h3>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
            <div className='contact-info'>
              <h3>Kontakt</h3>
              <p>Telefon: +49 123 456789</p>
              <p>E-Mail: info@drgabimousa.de</p>
            </div>
            <div className='contact-info'>
              <h3>Öffnungszeiten</h3>
              <p>Montag - Freitag: 8:00 - 18:00</p>
              <p>Samstag: 9:00 - 13:00</p>
              <p>Sonntag: Geschlossen</p>
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
