import React from 'react';
import { Target, Activity, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const ManagerInsights = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, 'managerInsights', key);

  const insights = [
    { icon: <Activity size={22} color="var(--color-green)" />, title: t('f1') },
    { icon: <Target size={22} color="var(--color-navy)" />, title: t('f2') },
    { icon: <Zap size={22} color="var(--color-orange)" />, title: t('f3') },
    { icon: <TrendingUp size={22} color="var(--color-purple)" />, title: t('f4') }
  ];

  return (
    <section id="insights" className="manager-insights-section" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.90), rgba(255, 255, 255, 0.90)), url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      borderTop: '1px solid var(--color-gray-light)', 
      overflow: 'hidden' 
    }}>
      <div className="container manager-insights-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <div style={{ flex: '1 1 400px' }} className="insights-text">
          <span style={{ color: 'var(--color-orange)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('sub')}</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-navy)', marginTop: '0.5rem', marginBottom: '1.5rem', letterSpacing: '-1px', lineHeight: 1.1 }} className="insights-title">
            {t('title')}
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '3rem', lineHeight: 1.6 }} className="insights-desc">
            {t('desc')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {insights.map((item, idx) => (
              <div key={idx} className="card-hover insight-card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.25rem', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'rgba(39, 66, 146, 0.04)', borderRadius: '10px', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Dashboard UI Mockup */}
        <div style={{ flex: '1 1 450px', position: 'relative' }} className="insights-mockup">
          <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'linear-gradient(45deg, var(--color-green), var(--color-purple))', filter: 'blur(80px)', opacity: 0.15, borderRadius: '50%' }}></div>
          
          <div className="floating-element dashboard-card" style={{ 
            backgroundColor: 'var(--color-white)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.02)',
            border: '1px solid rgba(255,255,255,0.5)',
            position: 'relative',
            zIndex: 1,
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-gray-light)' }} className="dashboard-header">
              <div>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '1.25rem', fontWeight: 600 }}>{language === 'tr' ? 'Ekip Performansı' : 'Team Performance'}</h3>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.85rem' }}>{language === 'tr' ? 'Son 30 gün verileri' : 'Last 30 days data'}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(40, 163, 189, 0.1)', padding: '0.5rem 1rem', borderRadius: '100px', color: 'var(--color-green)', fontWeight: 600, fontSize: '0.9rem' }}>
                <TrendingUp size={16} /> +12.4%
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }} className="dashboard-chart-area">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--color-gray)', fontWeight: 500 }}>{language === 'tr' ? 'Satış Süreci Uyumu' : 'Sales Process Compliance'}</h4>
                <span style={{ color: 'var(--color-navy)', fontWeight: 700 }}>82/100</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem', height: '140px' }} className="bar-chart">
                {[40, 55, 65, 82].map((height, i) => (
                  <div key={i} style={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ 
                      width: '100%', 
                      height: `${height}%`, 
                      backgroundColor: i === 3 ? 'var(--color-orange)' : (i === 2 ? 'var(--color-green)' : (i === 1 ? 'var(--color-purple)' : 'var(--color-gray-light)')), 
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 1s ease'
                    }}></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="dashboard-skills">
              <h4 style={{ color: 'var(--color-gray)', marginBottom: '1.5rem', fontWeight: 500 }}>{language === 'tr' ? 'Temel Beceri Analizi' : 'Core Skill Analysis'}</h4>
              {[
                { name: language === 'tr' ? 'İtiraz Yönetimi' : 'Objection Handling', score: 85, color: 'var(--color-green)' },
                { name: language === 'tr' ? 'Çapraz Satış' : 'Cross-Sell', score: 62, color: 'var(--color-purple)' },
                { name: language === 'tr' ? 'Kapanış Becerisi' : 'Closing Skill', score: 78, color: 'var(--color-navy)' }
              ].map((skill, i) => (
                <div key={i} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-navy)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={14} color={skill.color} /> {skill.name}
                    </span>
                    <span style={{ color: skill.color, fontWeight: 700 }}>{skill.score}%</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: 'var(--color-gray-light)', height: '8px', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: `${skill.score}%`, backgroundColor: skill.color, height: '100%', borderRadius: '100px' }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .manager-insights-section { padding: 4rem 0 !important; }
            .manager-insights-container { gap: 3rem !important; }
            .insights-text { flex: 1 1 100% !important; order: 1; }
            .insights-title { font-size: 2rem !important; }
            .insights-desc { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
            .insights-mockup { flex: 1 1 100% !important; order: 2; overflow: hidden; }
            .dashboard-card { padding: 1.5rem !important; }
            .dashboard-header { margin-bottom: 1.5rem !important; }
            .dashboard-chart-area { margin-bottom: 2rem !important; }
            .bar-chart { height: 100px !important; }
          }
        `}} />
      </div>
    </section>
  );
};

export default ManagerInsights;
