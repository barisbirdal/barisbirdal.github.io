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
        


        <div style={{ minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="animate-fade-in-up" style={{ 
            fontSize: '4.5rem', 
            marginBottom: '1.5rem', 
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            animationDelay: '0.2s', 
            opacity: 0, 
            animationFillMode: 'forwards'
          }}>
            {t('title1')} <br/>
            <span style={{ 
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(90deg, #f39f1c, #ffc76b)',
              WebkitBackgroundClip: 'text'
            }}>{t('title2')}</span>
          </h1>
          
          <p className="animate-fade-in-up" style={{ 
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
        
        <div className="animate-fade-in-up" style={{ 
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
      </div>
    </section>
  );
};

export default Hero;
