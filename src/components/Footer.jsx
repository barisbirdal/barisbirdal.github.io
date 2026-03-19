import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'footer', key);

  return (
    <footer className="site-footer" style={{ backgroundColor: '#ffffff', padding: '4rem 0 2rem', borderTop: '1px solid #e2e8f0', fontFamily: 'var(--font-inter)' }}>
      <div className="container footer-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '3rem' }} className="footer-grid">
          
          {/* Column 1: Brand & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '200px', maxWidth: '300px' }} className="footer-brand">
            <img 
              src="/letssellapp-logo-vertical.png" 
              alt="LetsSellApp Logo" 
              style={{ height: '110px', objectFit: 'contain', marginBottom: '1rem', mixBlendMode: 'multiply' }} 
              className="footer-logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
              {t('desc')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="https://instagram.com/letssellapp" target="_blank" rel="noreferrer" style={{ color: '#475569', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/letssellapp" target="_blank" rel="noreferrer" style={{ color: '#475569', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem', minWidth: '140px' }} className="footer-col">
            <a href="/#how-it-works" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{language === 'tr' ? 'Yeni Nesil Satış' : 'Next-Gen Sales'}</a>
            <a href="/#features" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{language === 'tr' ? 'Özellikler' : 'Features'}</a>
            <a href="/#about" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</a>
          </div>

          {/* Column 3: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem', minWidth: '140px' }} className="footer-col">
            <a href="https://letssell.app/blog" target="_blank" rel="noreferrer" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>Blog</a>
            <a href="/contact" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{t('contact')}</a>
            <a href="https://dash.letssell.app/login" target="_blank" rel="noreferrer" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>Dashboard</a>
          </div>

          {/* Column 4: Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem', minWidth: '140px' }} className="footer-col">
            <Link to="/acik-riza" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{t('consent')}</Link>
            <Link to="/cerez-politikasi" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{t('cookie')}</Link>
            <Link to="/kvkk" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>{t('kvkk')}</Link>
          </div>

          {/* Column 5: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem', minWidth: '140px' }} className="footer-col">
            <a href="tel:+905323171605" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>+90 532 317 16 05</a>
            <a href="mailto:info@letssell.app" style={{ color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-navy)'} onMouseOut={(e) => e.target.style.color = '#475569'}>info@letssell.app</a>
            <span style={{ color: '#475569', fontSize: '0.95rem' }}>{language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</span>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', margin: '0 2rem', paddingTop: '2.5rem', borderTop: '1px solid #e2e8f0', color: '#0f172a', fontSize: '0.95rem', fontWeight: 600 }} className="footer-bottom">
          <a href="https://hadisatalim.biz/" target="_blank" rel="noreferrer" style={{ color: '#f39f1c', textDecoration: 'none', fontWeight: 600 }}>Hadisatalim.biz</a> &copy; 2020 - {new Date().getFullYear()}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .site-footer { padding: 3rem 0 1.5rem !important; }
            .footer-grid { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1.5rem !important; }
            .footer-brand { max-width: 100% !important; margin-bottom: 2rem !important; }
            .footer-col { padding-top: 0 !important; align-items: center !important; }
            .footer-bottom { margin-top: 2rem !important; }
          }
        `}} />
      </div>
    </footer>
  );
};

export default Footer;
