import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = (key) => getTranslation(language, 'header', key);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="animate-fade-in-down" style={{
      padding: '1rem 0',
      backgroundColor: 'var(--color-white)',
      borderBottom: '1px solid var(--color-gray-light)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1350px',
        position: 'relative'
      }}>

        {/* Logo */}
        <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <img
            src="/letssellapp-logo-header.png"
            alt="LetsSellApp"
            style={{ height: '45px', objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'none' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>
              LetsSell<span style={{ color: 'var(--color-orange)' }}>App</span>
            </span>
          </div>
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button 
          onClick={toggleMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-navy)',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 1001
          }}
          className="mobile-show-flex"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Overlay Navigation (Desktop & Mobile) */}
        <nav style={{ 
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--color-white)',
          padding: '80px 2rem 2rem',
          gap: '2rem',
          alignItems: 'center',
          zIndex: 1000
        }} className="desktop-flex-row">
          <a href="/#how-it-works" onClick={closeMenu} className="nav-link" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('howItWorks')}</a>
          <a href="/#insights" onClick={closeMenu} className="nav-link" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('insights')}</a>
          <a href="/#use-cases" onClick={closeMenu} className="nav-link" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('useCases')}</a>
          <a href="/#download" onClick={closeMenu} className="nav-link" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('download')}</a>
          
          <div className="mobile-show" style={{ display: 'none', width: '100%', height: '1px', backgroundColor: 'var(--color-gray-light)', margin: '1rem 0' }}></div>
          
          {/* Mobile Language Toggle */}
          <div className="mobile-show" style={{ display: 'none', marginBottom: '1rem' }} onClick={toggleLanguage}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)', cursor: 'pointer' }}>
              <span style={{ color: language === 'tr' ? 'var(--color-navy)' : 'var(--color-gray-light)', opacity: language === 'tr' ? 1 : 0.6 }}>TR</span>
              <span style={{ color: 'var(--color-gray-light)', fontWeight: 400 }}>|</span>
              <span style={{ color: language === 'en' ? 'var(--color-navy)' : 'var(--color-gray-light)', opacity: language === 'en' ? 1 : 0.6 }}>EN</span>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu} className="mobile-show btn btn-primary" style={{ display: 'none', width: '100%', textDecoration: 'none', textAlign: 'center' }}>{t('demo')}</Link>
          <a href="https://dash.letssell.app/login" className="mobile-show nav-link" style={{ display: 'none', fontWeight: 700, color: 'var(--color-navy)', marginTop: '1rem', fontSize: '1.1rem' }}>{t('login')}</a>
        </nav>

        {/* Right Actions (Desktop Only) */}
        <div className="mobile-hide header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: 'auto' }}>
          <Link to="/contact" className="btn btn-primary btn-hover-grow" style={{ 
            textDecoration: 'none', 
            borderRadius: '8px',
            padding: '0.6rem 1.75rem',
            fontSize: '0.95rem',
            fontWeight: 700
          }}>
            {t('demo')}
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', cursor: 'pointer' }} onClick={toggleLanguage}>
            <span style={{ color: language === 'tr' ? 'var(--color-navy)' : 'var(--color-gray-light)', opacity: language === 'tr' ? 1 : 0.6 }}>TR</span>
            <span style={{ color: 'var(--color-gray-light)', fontWeight: 400 }}>|</span>
            <span style={{ color: language === 'en' ? 'var(--color-navy)' : 'var(--color-gray-light)', opacity: language === 'en' ? 1 : 0.6 }}>EN</span>
          </div>

          <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0' }}></div>

          <a href="https://dash.letssell.app/login" target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-link">
            {t('login')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
          </a>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 769px) {
            .desktop-flex-row { 
              display: flex !important; 
              flex-direction: row !important; 
              position: static !important; 
              width: auto !important; 
              height: auto !important; 
              background: none !important; 
              padding: 0 !important; 
              gap: 2.25rem !important;
              margin-left: 3rem !important;
            }
            .mobile-show-flex { display: none !important; }
            .header-actions { margin-left: 2rem !important; }
          }
          @media (max-width: 768px) {
            .mobile-show-flex { display: flex !important; }
            .mobile-hide { display: none !important; }
            .mobile-show { display: block !important; }
            .desktop-flex-row { gap: 2rem !important; height: 100vh !important; }
          }
        `}} />

      </div>
    </header>
  );
};

export default Header;
