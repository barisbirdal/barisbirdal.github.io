import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'hero', key);

  return (
    <section style={{ 
      backgroundColor: 'var(--color-navy)',
      color: 'var(--color-white)', 
      padding: '8rem 0 10rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Absolute Backgrounds */}
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" 
        alt="background" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, zIndex: 0 }} 
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(15, 23, 42, 0.90), rgba(39, 66, 146, 0.90))', zIndex: 0 }}></div>

      <div className="container" style={{ textAlign: 'center', maxWidth: '850px', position: 'relative', zIndex: 1 }}>
        


        <div style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '2rem' }}>
          <h1 className="animate-fade-in-up hero-title" style={{ 
            fontSize: '4.5rem', 
            marginBottom: '1.5rem', 
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            animationDelay: '0.2s', 
            opacity: 0, 
            animationFillMode: 'forwards'
          }}>
            <span style={{ 
              display: 'block', 
              whiteSpace: 'nowrap',
              textAlign: 'center',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'max-content'
            }}>{t('title1')}</span>
            <span style={{ color: 'var(--color-orange)' }}>{t('title2')}</span>
          </h1>
          
          <p className="animate-fade-in-up hero-subtitle" style={{ 
            fontSize: '1.35rem', 
            marginBottom: '3rem', 
            color: 'var(--color-gray-light)', 
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto',
            animationDelay: '0.3s', 
            opacity: 0, 
            animationFillMode: 'forwards'
          }}>
            {t('subtitle')}
          </p>
        </div>
        
        <div className="animate-fade-in-up hero-actions" style={{ 
          display: 'flex', gap: '1.25rem', justifyContent: 'center', 
          animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' 
        }}>
          <Link to="/contact" className="btn btn-primary btn-hover-grow" style={{ 
            textDecoration: 'none', fontSize: '1.1rem', padding: '1.1rem 2.5rem', boxShadow: '0 8px 20px rgba(243, 159, 28, 0.3)' 
          }}>
            {t('pilotCta')}
          </Link>
          <a href="/#how-it-works" className="btn btn-outline btn-hover-glow" style={{ 
            textDecoration: 'none', color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)', 
            fontSize: '1.1rem', padding: '1.1rem 2rem', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center'
          }}>
            <Play size={20} style={{ marginRight: '8px' }} />
            {getTranslation(language, 'header', 'howItWorks')}
          </a>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .hero-title { font-size: 2.75rem !important; letter-spacing: -1px !important; }
            .hero-subtitle { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
            .hero-actions { flex-direction: column !important; align-items: stretch !important; gap: 1rem !important; }
            .hero-actions .btn { width: 100% !important; padding: 1rem !important; }
          }
        `}} />
      </div>
    </section>
  );
};

export default Hero;
