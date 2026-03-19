import React, { useState } from 'react';
import { Shuffle, Search, BarChart3, TrendingUp, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'howItWorks', key);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { icon: <Shuffle size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s1Title'), desc: t('s1Desc') },
    { icon: <Search size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s2Title'), desc: t('s2Desc') },
    { icon: <BarChart3 size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s3Title'), desc: t('s3Desc') },
    { icon: <TrendingUp size={24} color="var(--color-orange)" strokeWidth={2.5} />, title: t('s4Title'), desc: t('s4Desc') }
  ];

  return (
    <section id="how-it-works" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.90), rgba(255, 255, 255, 0.90)), url("https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative' 
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginTop: '0', marginBottom: '1.25rem', letterSpacing: '-0.5px', fontWeight: 700 }}>{t('title')}</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            {t('desc')}
          </p>
          <span style={{ color: 'var(--color-orange)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '1.25rem' }}>{t('sub')}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
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
                {/* Dark/Gradient Background to simulate a loaded thumbnail */}
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
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '1.5rem' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', top: '2rem', bottom: '2rem', left: '3.35rem', width: '2px', backgroundColor: 'rgba(243, 159, 28, 0.2)', zIndex: 0 }}></div>

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
              }} className="card-hover">
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

      </div>
    </section>
  );
};

export default HowItWorks;
