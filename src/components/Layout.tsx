import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          </div>
        </div>
      </section>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
