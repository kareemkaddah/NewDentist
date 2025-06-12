import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [years, setYears] = useState(0);
  const [patients, setPatients] = useState(0);
  const [rating, setRating] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (location.pathname === '/') {
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
    }
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Ihr Lächeln ist Unsere Priorität';
      case '/leistungen':
        return 'Unsere Leistungen';
      case '/ueber-uns':
        return 'Über Uns';
      case '/kontakt':
        return 'Kontakt';
      case '/impressum':
        return 'Impressum';
      case '/datenschutz':
        return 'Datenschutz';
      default:
        return 'Dr. Gabi Mousa';
    }
  };

  const getPageDescription = () => {
    switch (location.pathname) {
      case '/':
        return 'Erleben Sie außergewöhnliche Zahnpflege mit unserem Team erfahrener Fachleute';
      case '/leistungen':
        return 'Entdecken Sie unser umfassendes Angebot an zahnärztlichen Leistungen';
      case '/ueber-uns':
        return 'Lernen Sie unser Team und unsere Praxis kennen';
      case '/kontakt':
        return 'Kontaktieren Sie uns für einen Termin oder weitere Informationen';
      case '/impressum':
        return 'Rechtliche Informationen über unsere Praxis';
      case '/datenschutz':
        return 'Informationen zum Datenschutz in unserer Praxis';
      default:
        return '';
    }
  };

  return (
    <div className='app'>
      <header className='header'>
        <nav className='nav'>
          <div className='logo'>Dr. Gabi Mousa</div>
          <button
            className='burger-menu'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                Startseite
              </Link>
            </li>
            <li>
              <Link to='/leistungen' onClick={() => setIsMenuOpen(false)}>
                Leistungen
              </Link>
            </li>
            <li>
              <Link to='/ueber-uns' onClick={() => setIsMenuOpen(false)}>
                Über uns
              </Link>
            </li>
            <li>
              <Link to='/kontakt' onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1>{getPageTitle()}</h1>
            <p className='subtitle'>{getPageDescription()}</p>
            {location.pathname === '/' && (
              <>
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
              </>
            )}
          </div>
          {location.pathname === '/' && (
            <div className='hero-image'>
              <img
                src='/images/Zahnarzt_lächelt.jpg'
                alt='Dr. Gabi Mousa Zahnarztpraxis'
              />
            </div>
          )}
        </div>
      </section>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
