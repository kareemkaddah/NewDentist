import React from 'react';
import '../styles/UeberUns.css';

const UeberUns = () => {
  return (
    <div className='ueber-uns-page'>
      <section className='hero-section'>
        <div className='container'>
          <h1>Über Uns</h1>
          <p className='subtitle'>
            Ihr vertrauenswürdiger Partner für Zahngesundheit
          </p>
        </div>
      </section>

      <section className='team-section'>
        <div className='container'>
          <div className='team-content'>
            <div className='team-text'>
              <h2>Unser Team</h2>
              <p>
                In unserer Zahnarztpraxis arbeiten erfahrene Fachleute, die sich
                Ihrer bestmöglichen Versorgung verschrieben haben. Unser Team
                besteht aus:
              </p>
              <ul>
                <li>Dr. Gabi Mousa - Zahnärztin</li>
                <li>Dr. Sarah Schmidt - Zahnärztin</li>
                <li>Maria Weber - Zahnmedizinische Fachangestellte</li>
                <li>Lisa Müller - Zahnmedizinische Fachangestellte</li>
              </ul>
            </div>
            <div className='team-image'>
              <img src='/images/team.jpg' alt='Unser Team' />
            </div>
          </div>
        </div>
      </section>

      <section className='philosophy-section'>
        <div className='container'>
          <h2>Unsere Philosophie</h2>
          <div className='philosophy-grid'>
            <div className='philosophy-card'>
              <h3>Patientenorientierung</h3>
              <p>
                Wir legen größten Wert auf Ihre individuellen Bedürfnisse und
                Wünsche. Jeder Patient erhält bei uns eine maßgeschneiderte
                Behandlung.
              </p>
            </div>
            <div className='philosophy-card'>
              <h3>Modernste Technologie</h3>
              <p>
                Unsere Praxis ist mit neuester Technologie ausgestattet, um
                Ihnen die bestmögliche Behandlung zu bieten.
              </p>
            </div>
            <div className='philosophy-card'>
              <h3>Kontinuierliche Weiterbildung</h3>
              <p>
                Unser Team bildet sich regelmäßig fort, um stets auf dem
                neuesten Stand der Zahnmedizin zu sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='practice-section'>
        <div className='container'>
          <h2>Unsere Praxis</h2>
          <div className='practice-content'>
            <div className='practice-image'>
              <img src='/images/praxis.jpg' alt='Unsere Praxis' />
            </div>
            <div className='practice-text'>
              <p>
                Unsere moderne Praxis bietet Ihnen ein angenehmes und
                entspanntes Behandlungsumfeld. Wir haben uns zum Ziel gesetzt,
                Ihnen eine stressfreie und schmerzarme Behandlung zu
                ermöglichen.
              </p>
              <p>
                Mit unserer zentralen Lage und den modernen
                Behandlungseinrichtungen sind wir bestens für Ihre zahnärztliche
                Versorgung gerüstet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UeberUns;
