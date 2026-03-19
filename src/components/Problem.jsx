import React from 'react';
import { EyeOff, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Problem = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'problem', key);

  return (
    <section id="problem" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.82), rgba(248, 249, 252, 0.88)), url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <EyeOff size={48} color="var(--color-orange)" style={{ margin: '0 auto 1.5rem' }} />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '3rem', letterSpacing: '-0.5px', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.3 }}>
          {t('title')}
        </h2>
        
        {t('subtitle') && t('desc') && (
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '3rem', lineHeight: 1.6 }}>
            <strong>{t('subtitle')}</strong> <br/> {t('desc')}
          </p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
           {[
             t('q1'),
             t('q2'),
             t('q3'),
             t('q4')
           ].map((q, idx) => (
             <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--color-white)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
               <AlertCircle size={24} color="var(--color-purple)" style={{ flexShrink: 0 }} />
               <p style={{ fontWeight: '500', color: 'var(--color-black)' }}>{q}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
