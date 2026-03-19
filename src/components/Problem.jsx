import React from 'react';
import { EyeOff, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Problem = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'problem', key);

  return (
    <section id="problem" className="problem-section" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.82), rgba(248, 249, 252, 0.88)), url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <EyeOff size={48} color="var(--color-orange)" style={{ margin: '0 auto 1.5rem' }} className="problem-icon" />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '3rem', letterSpacing: '-0.5px', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.3 }} className="problem-title">
          {t('title')}
        </h2>
        
        {t('subtitle') && t('desc') && (
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '3rem', lineHeight: 1.6 }} className="problem-desc">
            <strong>{t('subtitle')}</strong> <br/> {t('desc')}
          </p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }} className="problem-grid">
           {[
             t('q1'),
             t('q2'),
             t('q3'),
             t('q4')
           ].map((q, idx) => (
             <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--color-white)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} className="card-hover problem-card">
               <AlertCircle size={24} color="var(--color-purple)" style={{ flexShrink: 0 }} />
               <p style={{ fontWeight: '500', color: 'var(--color-black)' }}>{q}</p>
             </div>
           ))}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .problem-section { padding: 4rem 0 !important; }
            .problem-icon { width: 32px !important; height: 32px !important; margin-bottom: 1rem !important; }
            .problem-title { font-size: 1.75rem !important; margin-bottom: 2rem !important; }
            .problem-desc { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
            .problem-grid { gap: 1rem !important; grid-template-columns: 1fr !important; }
            .problem-card { padding: 1rem !important; }
          }
        `}} />
      </div>
    </section>
  );
};

export default Problem;
