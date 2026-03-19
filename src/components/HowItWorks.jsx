import React, { useState } from 'react';
import { MessagesSquare, Search, BarChart3, TrendingUp, PlayCircle, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'howItWorks', key);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { icon: <MessagesSquare size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s1Title'), desc: t('s1Desc') },
    { icon: <Search size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s2Title'), desc: t('s2Desc') },
    { icon: <BarChart3 size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s3Title'), desc: t('s3Desc') },
    { icon: <TrendingUp size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s4Title'), desc: t('s4Desc') }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.92), rgba(255, 255, 255, 0.92)), url("https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative' 
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginTop: '0', marginBottom: '1.25rem', letterSpacing: '-0.5px', fontWeight: 700 }} className="section-title">{t('title')}</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }} className="section-desc">
            {t('desc')}
          </p>
          <span style={{ color: 'var(--color-orange)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '1.25rem' }}>{t('sub')}</span>
        </div>

        <div className="how-it-works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Video Area */}
          <div 
            className={!isPlaying ? "card-hover" : ""} 
            style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(39,66,146,0.1)', 
              border: '1px solid rgba(0,0,0,0.05)', 
              backgroundColor: '#0f172a', 
              aspectRatio: '16/9', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: isPlaying ? 'default' : 'pointer' 
            }}
            onClick={() => !isPlaying && setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(39,66,146,0.3) 0%, rgba(40,163,189,0.3) 100%)' }}></div>
                <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s', padding: '2rem' }}>
                  <div style={{ 
                    width: '72px', height: '72px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(255,255,255,0.15)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    backdropFilter: 'blur(8px)', 
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}>
                    <PlayCircle size={40} color="#fff" strokeWidth={1.5} style={{ marginLeft: '4px' }} />
                  </div>
                  <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.5px', fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {t('watchVideo')}
                  </span>
                </div>
              </>
            ) : (
              <video 
                src="/tanitim_video.mp4" 
                controls 
                autoPlay 
                style={{ width: '100%', height: '100%', objectFit: 'cover', outline: 'none' }}
              />
            )}
          </div>

          {/* Right: Steps Stacked */}
          <div className="steps-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '1.5rem' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '2rem', 
                alignItems: 'center',
                padding: '1.5rem 2rem',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.05)',
                backgroundColor: 'var(--color-white)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative',
                zIndex: 1
              }} className="card-hover step-card">
                
                {/* Arrow pointing to next step */}
                {idx < steps.length - 1 && (
                  <div className="mobile-hide" style={{
                    position: 'absolute',
                    left: '4rem',
                    bottom: '-1.8rem',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-white)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    borderRadius: '50%',
                    padding: '4px',
                    color: 'var(--color-orange)',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ArrowDown size={16} strokeWidth={2.5} />
                  </div>
                )}

                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', 
                  backgroundColor: 'var(--color-white)', 
                  border: '2px solid var(--color-orange)',
                  boxShadow: '0 4px 15px rgba(243, 159, 28, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2
                }}>
                  {step.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: step.desc ? '0.5rem' : '0', fontWeight: 600 }}>{step.title}</h3>
                  {step.desc && <p style={{ color: 'var(--color-gray)', lineHeight: 1.6, fontSize: '1rem' }}>{step.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .how-it-works-section { padding: 4rem 0 !important; }
            .section-title { font-size: 2rem !important; }
            .section-desc { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
            .how-it-works-grid { gap: 2.5rem !important; grid-template-columns: 1fr !important; }
            .steps-container { padding-left: 0 !important; gap: 1.5rem !important; }
            .timeline-line { display: none !important; }
            .step-card { padding: 1.25rem !important; gap: 1.25rem !important; }
            .step-card div:first-child { width: 48px !important; height: 48px !important; }
            .step-card div:first-child svg { width: 20px !important; height: 20px !important; }
          }
        `}} />
      </div>
    </section>
  );
};

export default HowItWorks;
