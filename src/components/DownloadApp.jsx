import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const DownloadApp = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'downloadApp', key);

  return (
    <section id="download" style={{ 
      background: 'linear-gradient(rgba(255, 255, 255, 0.82), rgba(248, 249, 252, 0.88)), url("https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1920&q=80")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderTop: '1px solid #f0f0f0', 
      borderBottom: '1px solid #f0f0f0', 
      padding: '6rem 0' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '3rem',
          backgroundColor: '#ffffff',
          padding: '3rem 4rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.03)'
        }}>
          
          <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0, letterSpacing: '-0.5px' }}>
              {t('title')}
            </h2>
            <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '400px' }}>
              {t('desc')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            
            <a href="https://mobile.letssell.app/Account/Login?ReturnUrl=%2F" target="_blank" rel="noreferrer" style={{ display: 'block' }}>
              <img src="/btn2.png" alt="Progressive Web App" style={{ height: '55px', objectFit: 'contain', mixBlendMode: 'multiply' }} onError={(e) => e.target.style.display='none'} />
            </a>
            
            <a href="https://apps.apple.com/tr/app/letssellapp/id6746368683?l=tr" target="_blank" rel="noreferrer" style={{ display: 'block' }}>
              <img src="/btn3.png" alt="Download on the App Store" style={{ height: '55px', objectFit: 'contain', mixBlendMode: 'multiply' }} onError={(e) => e.target.style.display='none'} />
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.app.lsa" target="_blank" rel="noreferrer" style={{ display: 'block' }}>
              <img src="/btn1.png" alt="GET IT ON Google Play" style={{ height: '55px', objectFit: 'contain', mixBlendMode: 'multiply' }} onError={(e) => e.target.style.display='none'} />
            </a>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
