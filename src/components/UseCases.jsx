import React from 'react';
import { Briefcase, ShoppingBag, Headset, Users, SearchX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const UseCases = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'useCases', key);

  const cases = [
    { icon: <Briefcase size={28} color="var(--color-white)" />, title: t('b2b') },
    { icon: <ShoppingBag size={28} color="var(--color-white)" />, title: t('b2c') },
    { icon: <Users size={28} color="var(--color-white)" />, title: t('field') },
    { icon: <Headset size={28} color="var(--color-white)" />, title: t('call') },
    { icon: <SearchX size={28} color="var(--color-white)" />, title: t('promo') }
  ];

  return (
    <section id="use-cases" style={{
      padding: '8rem 0',
      background: 'linear-gradient(rgba(15, 23, 42, 0.90), rgba(39, 66, 146, 0.90)), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'var(--color-white)'
    }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-green)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('sub')}</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-white)', marginTop: '0.75rem', marginBottom: t('desc') ? '1.5rem' : '0', letterSpacing: '-1px' }}>{t('title')}</h2>
          {t('desc') && (
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              {t('desc')}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
          {cases.map((c, idx) => (
            <div key={idx} className="card-hover" style={{ flex: '1 1 300px', maxWidth: '350px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '12px',
                backgroundColor: 'rgba(40, 163, 189, 0.2)', // Green tinted
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-white)', margin: 0, fontWeight: 600 }}>{c.title}</h3>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default UseCases;
