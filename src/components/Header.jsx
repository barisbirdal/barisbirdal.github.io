import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = (key) => getTranslation(language, 'header', key);

  return (
    <header className="animate-fade-in-down" style={{
      padding: '1.25rem 0',
      backgroundColor: 'var(--color-white)',
      borderBottom: '1px solid var(--color-gray-light)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1350px' }}>

        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width: '250px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img
            src="/letssellapp-logo.png"
            alt="LetsSellApp"
            style={{ height: '40px', objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'none' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>
              LetsSell<span style={{ color: 'var(--color-orange)' }}>App</span>
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2.5rem', alignItems: 'center', whiteSpace: 'nowrap', padding: '0 1rem' }}>
          <a href="/#how-it-works" className="nav-link" style={{ fontWeight: 600, minWidth: '100px', textAlign: 'center' }}>{t('howItWorks')}</a>
          <a href="/#insights" className="nav-link" style={{ fontWeight: 600, minWidth: '135px', textAlign: 'center' }}>{t('insights')}</a>
          <a href="/#use-cases" className="nav-link" style={{ fontWeight: 600, minWidth: '125px', textAlign: 'center' }}>{t('useCases')}</a>
          <a href="/#download" className="nav-link" style={{ fontWeight: 600, minWidth: '135px', textAlign: 'center' }}>{t('download')}</a>
        </nav>

        {/* Right Actions & Language */}
        <div style={{ width: '400px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', gap: '1.25rem', alignItems: 'center', whiteSpace: 'nowrap' }}>

          <Link to="/contact" className="btn btn-primary btn-hover-grow" style={{ textDecoration: 'none', width: '165px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{t('demo')}</Link>

          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              background: 'transparent', border: '1px solid rgba(39, 66, 146, 0.15)',
              borderRadius: '20px', padding: '6px 10px', cursor: 'pointer',
              fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.85rem',
              transition: 'all 0.2s ease', marginLeft: '0.25rem'
            }}
            className="btn-hover-grow"
            title="Dili Değiştir / Change Language"
          >
            <span style={{ opacity: language === 'tr' ? 1 : 0.4 }}>TR</span>
            <span style={{ opacity: 0.3, margin: '0 2px' }}>|</span>
            <span style={{ opacity: language === 'en' ? 1 : 0.4 }}>EN</span>
          </button>

          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-gray-light)', margin: '0 0.25rem' }}></div>

          <a href="https://dash.letssell.app/login" target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: 'var(--color-navy)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '6px', width: '95px', justifyContent: 'flex-end' }} onMouseOver={(e) => e.target.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.target.style.color = 'var(--color-navy)'}>
            {t('login')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
