import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
