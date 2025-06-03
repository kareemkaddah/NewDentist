import React from 'react';
import { Link } from 'react-router-dom';
import {
  ToothIcon,
  TreatmentIcon,
  AestheticIcon,
  CrownIcon,
  PeriodontIcon,
  ChildIcon,
} from '../components/Icons';
import '../styles/Leistungen.css';

const Leistungen = () => {
  const services = [
    {
      category: 'Vorsorge & Prophylaxe',
      icon: <ToothIcon size={40} color='var(--text-color)' />,
      services: [
        'Professionelle Zahnreinigung',
        'Kariesfrüherkennung',
        'Mundhygieneberatung',
        'Fluoridierung',
        'Fissurenversiegelung',
        'Zahnsteinentfernung',
      ],
    },
    {
      category: 'Zahnbehandlung',
      icon: <TreatmentIcon size={40} color='var(--text-color)' />,
      services: [
        'Füllungstherapie',
        'Wurzelbehandlung',
        'Kariesbehandlung',
        'Zahnschmerzen',
        'Zahnabszess-Behandlung',
        'Notfallbehandlung',
      ],
    },
    {
      category: 'Ästhetische Zahnheilkunde',
      icon: <AestheticIcon size={40} color='var(--text-color)' />,
      services: [
        'Zahnaufhellung',
        'Veneers',
        'Keramikverblendschalen',
        'Ästhetische Füllungen',
        'Zahnformkorrektur',
        'Lachlinienkorrektur',
      ],
    },
    {
      category: 'Zahnersatz',
      icon: <CrownIcon size={40} color='var(--text-color)' />,
      services: [
        'Zahnkronen',
        'Zahnbrücken',
        'Zahnimplantate',
        'Teilprothesen',
        'Vollprothesen',
        'Implantatgetragene Prothesen',
      ],
    },
    {
      category: 'Parodontologie',
      icon: <PeriodontIcon size={40} color='var(--text-color)' />,
      services: [
        'Parodontitis-Behandlung',
        'Zahnfleischbehandlung',
        'Gingivitis-Behandlung',
        'Parodontale Chirurgie',
        'Geweberegeneration',
        'Zahnfleischrückbildung',
      ],
    },
    {
      category: 'Kinderzahnheilkunde',
      icon: <ChildIcon size={40} color='var(--text-color)' />,
      services: [
        'Kinderprophylaxe',
        'Milchzahnbehandlung',
        'Fissurenversiegelung',
        'Zahnputzschulung',
        'Frühbehandlung',
        'Zahnunfallbehandlung',
      ],
    },
    {
      category: 'Kieferorthopädie',
      icon: <ToothIcon size={40} color='var(--text-color)' />,
      services: [
        'Zahnfehlstellungen',
        'Kieferfehlstellungen',
        'Zahnspangen',
        'Invisalign',
        'Retainer',
        'Funktionskieferorthopädie',
      ],
    },
    {
      category: 'Zahnchirurgie',
      icon: <TreatmentIcon size={40} color='var(--text-color)' />,
      services: [
        'Weisheitszahnentfernung',
        'Zahnextraktion',
        'Wurzelspitzenresektion',
        'Zystenentfernung',
        'Biopsien',
        'Kieferchirurgie',
      ],
    },
  ];

  return (
    <div className='leistungen-page'>
      <header className='leistungen-header'>
        <div className='container'>
          <Link to='/' className='back-button'>
            ← Zurück zur Startseite
          </Link>
          <h1>Unsere Leistungen</h1>
          <p className='subtitle'>
            Umfassende zahnärztliche Versorgung für Ihre optimale Zahngesundheit
          </p>
        </div>
      </header>

      <main className='leistungen-content'>
        <div className='container'>
          <div className='services-grid'>
            {services.map((category, index) => (
              <div key={index} className='service-category'>
                <div className='category-header'>
                  <div className='category-icon'>{category.icon}</div>
                  <h2>{category.category}</h2>
                </div>
                <ul className='service-list'>
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leistungen;
