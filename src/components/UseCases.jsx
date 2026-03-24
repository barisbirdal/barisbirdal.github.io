import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShoppingBag, Headset, Users, SearchX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const UseCases = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'useCases', key);

  const cases = [
    { icon: <Briefcase size={28} color="var(--color-white)" />, title: t('b2b') },
    { icon: <ShoppingBag size={28} color="var(--color-white)" />, title: t('b2c') },
    { icon: <Users size={28} color="var(--color-white)" />, title: t('field') },
    { icon: <SearchX size={28} color="var(--color-white)" />, title: t('promo') },
    { icon: <Headset size={28} color="var(--color-white)" />, title: t('call') }
  ];

  return (
    <section id="use-cases" className="use-cases-section" style={{
      padding: '8rem 0',
      background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(39, 66, 146, 0.85)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'var(--color-white)'
    }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="use-cases-header">
          <span style={{ color: 'var(--color-green)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('sub')}</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', marginTop: '0.75rem', marginBottom: t('desc') ? '1.5rem' : '0', letterSpacing: '-1px' }} className="use-cases-title">{t('title')}</h2>
          {t('desc') && (
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }} className="use-cases-desc">
              {t('desc')}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }} className="use-cases-grid">
          {cases.map((c, idx) => (
            <div key={idx} className="card-hover use-case-card" style={{ flex: '1 1 300px', maxWidth: '350px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '12px',
                backgroundColor: 'rgba(40, 163, 189, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-white)', margin: 0, fontWeight: 600 }}>{c.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Highlighted CTA Banner */}
        <div style={{ 
          marginTop: '6rem', 
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '24px',
          padding: '4rem 2.5rem',
          maxWidth: '850px',
          margin: '5rem auto 0',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          position: 'relative'
        }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '2.5rem', fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.5px' }}>
            {t('contactCta')}
          </h3>
          <Link to="/contact" className="btn btn-primary btn-hover-grow" style={{ 
            padding: '1.25rem 3.5rem', 
            fontSize: '1.15rem', 
            boxShadow: '0 10px 25px rgba(243, 159, 28, 0.35)',
            position: 'relative',
            zIndex: 1,
            display: 'inline-block'
          }}>
            {t('contactBtn')}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
