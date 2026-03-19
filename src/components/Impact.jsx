import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const Impact = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const trData = [
    { labelLeft: 'Aylık Satış Görüşmesi', valLeft: '200', labelRight: 'Aylık Satış Görüşmesi', valRight: '200' },
    { labelLeft: 'Mevcut Kapanış Oranı', valLeft: '%28', labelRight: 'Kapanış Oranı', valRight: '%36' },
    { labelLeft: 'Satış', valLeft: '56', labelRight: 'Satış', valRight: '72' },
    { labelLeft: 'Ortalama Satış Değeri', valLeft: '5K', labelRight: 'Ortalama Satış Değeri', valRight: '5K' },
    { labelLeft: 'Aylık Gelir', valLeft: '280K', labelRight: 'Aylık Gelir', valRight: '360K' }
  ];

  const enData = [
    { labelLeft: 'Monthly Sales Calls', valLeft: '200', labelRight: 'Monthly Sales Calls', valRight: '200' },
    { labelLeft: 'Current Close Rate', valLeft: '28%', labelRight: 'Close Rate', valRight: '36%' },
    { labelLeft: 'Sales', valLeft: '56', labelRight: 'Sales', valRight: '72' },
    { labelLeft: 'Avg Sale Value', valLeft: '5K', labelRight: 'Avg Sale Value', valRight: '5K' },
    { labelLeft: 'Monthly Revenue', valLeft: '280K', labelRight: 'Monthly Revenue', valRight: '360K' }
  ];

  const rows = language === 'en' ? enData : trData;

  const titleTr = <>Küçük gelişmeler,<br/><span style={{ textTransform: 'uppercase' }}>BÜYÜK gelir etkisi.</span></>;
  const titleEn = <>Small improvements,<br/><span style={{ textTransform: 'uppercase' }}>LARGE revenue impact.</span></>;

  return (
    <section id="impact" className="impact-section" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(244, 246, 249, 0.92), rgba(255, 255, 255, 0.92)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--color-navy)', marginBottom: '5rem', letterSpacing: '-1px', lineHeight: 1.2 }} className="impact-title">
          {language === 'tr' ? titleTr : titleEn}
        </h2>

        {/* Comparison Chart Component */}
        <div style={{ 
          maxWidth: '1150px', 
          margin: '0 auto', 
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.80)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '4rem 4rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.7) inset'
        }} className="impact-chart-glass">
          
          {/* Headers */}
          <div style={{ position: 'relative', marginBottom: '6rem', zIndex: 2, height: '80px', padding: '0 40px' }} className="impact-chart-headers">
            
            <div style={{ position: 'relative', width: '100%', height: '100%' }} className="headers-container">
              
              {/* Left Side Group */}
              <div className="header-group-left" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', zIndex: 2 }}>
                {/* Left Ribbon Background */}
                <div className="ribbon-left" style={{ 
                  position: 'absolute', inset: 0,
                  backgroundColor: '#5a6577', 
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)'
                }}></div>
                
                {/* Left Icon and Text */}
                <div className="header-node-content" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', zIndex: 3 }}>
                  <div className="header-icon-box" style={{ position: 'absolute', left: '-20px', background: 'white', border: '6px solid #5a6577', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                    <Settings className="icon-svg" size={42} color="#374151" />
                  </div>
                  <div style={{ width: '100%', textAlign: 'center', paddingLeft: '40px' }} className="header-text-box">
                    <span className="header-label-text" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'white' }}>
                      {language === 'tr' ? 'Öncesi' : 'Before'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side Group */}
              <div className="header-group-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', zIndex: 1 }}>
                {/* Right Ribbon Background */}
                <div className="ribbon-right" style={{ 
                  position: 'absolute', inset: 0,
                  backgroundColor: 'var(--color-orange)', 
                  clipPath: 'polygon(30px 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 30px 100%, 0 50%)'
                }}></div>

                {/* Right Icon and Text */}
                <div className="header-node-content" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', zIndex: 3 }}>
                  <div style={{ width: '100%', textAlign: 'center', paddingRight: '40px' }} className="header-text-box">
                    <span className="header-label-text" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'white' }}>
                      {language === 'tr' ? 'LetsSellApp Sonrası' : 'After LetsSellApp'}
                    </span>
                  </div>
                  <div className="header-icon-box" style={{ position: 'absolute', right: '-20px', background: 'white', border: '6px solid var(--color-orange)', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(243, 159, 28, 0.3)' }}>
                    <Lightbulb className="icon-svg" size={42} color="#374151" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Rows Container */}
          <div style={{ position: 'relative', marginBottom: '4rem' }}>
            
            {/* Center Dashed Line */}
            <div className="center-dash mobile-hide" style={{ position: 'absolute', left: '50%', top: '-4rem', bottom: '0', borderLeft: '2px dashed #d1d5db', transform: 'translateX(-50%)', zIndex: 0 }}></div>
            
            {/* VS Badge */}
            <div className="vs-badge" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '0.4rem 1rem', borderRadius: '12px', fontWeight: 800, color: '#9ca3af', border: '1px solid #e5e7eb', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', zIndex: 2 }}>VS</div>

            {/* Connecting dashed lines outside - aligned to circles */}
            <div className="side-dash mobile-hide" style={{ position: 'absolute', left: '68px', top: '-5rem', bottom: '28px', borderLeft: '2px dashed #9ca3af', zIndex: 0 }}></div>
            <div className="side-dash mobile-hide" style={{ position: 'absolute', right: '68px', top: '-5rem', bottom: '28px', borderRight: '2px dashed #9ca3af', zIndex: 0 }}></div>

            <div style={{ position: 'relative', zIndex: 1, padding: '0 40px' }} className="rows-padding">
              {rows.map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', alignItems: 'center' }} className="chart-row">
                  
                  {/* Left Column Data */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1.5rem', paddingRight: '2.5rem' }} className="col-left">
                    <div className="val-circle" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#5a6577', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.15rem', flexShrink: 0, boxShadow: '0 4px 15px rgba(90, 101, 119, 0.3)', position: 'relative', zIndex: 2 }}>
                      {row.valLeft}
                    </div>
                    <span style={{ fontSize: '1.25rem', color: '#4b5563', fontWeight: 600 }}>{row.labelLeft}</span>
                  </div>
                  
                  {/* Right Column Data */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem', paddingLeft: '2.5rem' }} className="col-right">
                    <span style={{ fontSize: '1.25rem', color: '#4b5563', fontWeight: 600, textAlign: 'right' }}>{row.labelRight}</span>
                    <div className="val-circle" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.15rem', flexShrink: 0, boxShadow: '0 4px 15px rgba(243, 159, 28, 0.5)', position: 'relative', zIndex: 2 }}>
                      {row.valRight}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Footer Texts Inside Chart Container */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
            <p style={{ fontSize: '1rem', color: 'var(--color-navy)', fontWeight: 600, margin: 0, fontStyle: 'italic' }}>
              {language === 'tr' ? '*Tanımlı satış süreci kullanan şirketler %28 daha fazla gelir elde eder.' : '*Companies using a defined sales process see a 28% increase in revenue.'}<br/>
              <span style={{ fontWeight: 400, color: 'var(--color-gray)' }}>Harvard Business Review - Sales Process Research</span>
            </p>
          </div>

        </div>

        {/* Conclusion Text Outside the Chart */}
        <div style={{ textAlign: 'center', marginTop: '6rem', maxWidth: '800px', margin: '6rem auto 0' }} className="conclusion-box">
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-orange)', margin: '0 auto 2rem', borderRadius: '4px' }}></div>
          <p style={{ fontSize: '1.8rem', color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.5, letterSpacing: '-0.5px' }} className="conclusion-text">
            {language === 'tr' 
              ? <>LetsSellApp, bu sürecin <span style={{ color: 'var(--color-orange)', position: 'relative' }}>uçtan uca izlenmesini, ölçülmesini</span> ve sürekli geliştirilmesini sağlar.</>
              : <>LetsSellApp enables <span style={{ color: 'var(--color-orange)' }}>end-to-end monitoring, measurement</span>, and continuous improvement of this process.</>
            }
          </p>
        </div>

        {/* Proof Section (Kanıt) - KidZania Real Data */}
        <div style={{ marginTop: '6rem' }}>
          <div className="proof-card" style={{ 
            background: 'linear-gradient(135deg, rgba(28, 43, 75, 0.96), rgba(15, 23, 42, 0.96)), url("https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px', 
            padding: '5rem 6rem', 
            color: 'white', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '6rem', 
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>

            {/* Top Left Badge */}
            <div style={{ position: 'absolute', top: '2.5rem', left: '3rem', backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--color-orange)', padding: '0.4rem 1.2rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)', zIndex: 10 }} className="proof-badge">
              {language === 'tr' ? 'Kanıt' : 'Proof'}
            </div>

            {/* Left Content */}
            <div style={{ flex: '1 1 350px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="proof-content">
              
              <div className="proof-logo-container" style={{ backgroundColor: '#ffffff', padding: '1.5rem 2.5rem', borderRadius: '24px', display: 'inline-flex', marginBottom: '3rem', boxShadow: '0 15px 40px rgba(0,0,0,0.3)' }}>
                <img 
                  src="/kidzania-logo-vertical.png" 
                  alt="KidZania" 
                  style={{ height: '160px', width: 'auto', objectFit: 'contain', display: 'block' }}
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'block'; 
                    e.target.parentElement.style.backgroundColor = 'transparent';
                    e.target.parentElement.style.padding = 0;
                    e.target.parentElement.style.boxShadow = 'none';
                  }}
                />
                <h3 style={{ display: 'none', fontSize: '2.5rem', margin: 0, color: 'var(--color-navy)' }}>KidZania</h3>
              </div>
              
              <div className="proof-title-box">
                <h3 style={{ fontSize: '3.2rem', color: 'white', fontWeight: 800, marginBottom: '0.8rem', lineHeight: 1.1, letterSpacing: '-1.5px' }} className="proof-title">
                  {language === 'tr' ? 'Ne Başardı?' : 'What They Achieved?'}
                </h3>
                <p style={{ fontSize: '1.4rem', color: 'var(--color-orange)', fontWeight: 600, opacity: 0.9, letterSpacing: '0.5px' }} className="proof-subtitle">
                  {language === 'tr' ? 'Gerçek Hayat Sonuçları' : 'Real Life Results'}
                </p>
              </div>

              {/* Left Column CTA */}
              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }} className="proof-cta">
                <p style={{ fontSize: '1.25rem', color: 'white', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.4 }} className="proof-cta-text">
                  {language === 'tr' ? 'Satış performansınızı varsayımlarla değil, gerçek verilerle yönetmeye başlayın.' : 'Start managing your sales performance with real data, not assumptions.'}
                </p>
                <button onClick={() => navigate('/contact')} style={{ backgroundColor: 'var(--color-orange)', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(243, 159, 28, 0.3)', transition: 'transform 0.2s', fontSize: '1.1rem' }} className="btn btn-hover-grow mobile-w-full">
                  {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>

            </div>
            
            {/* Right Stats Grid */}
            <div style={{ flex: '1.2 1 500px', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="proof-stats">
              {[
                { val: '15%', labelTr: 'Satış Artışı', labelEn: 'Sales Increase' },
                { val: '80%', labelTr: 'Kampanyalı Ürün Teklifi', labelEn: 'Campaign Product Offer' },
                { val: '50%', labelTr: 'Eğitim Süresinin Yönetimi', labelEn: 'Training Time Management' },
                { val: '40%', labelTr: 'Tanıtım Tamamlama', labelEn: 'Pitch Completion' }
              ].map((stat, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: '24px', 
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }} className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1rem' }} className="stat-val-box">
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '36px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.2)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                    </div>
                    <span style={{ fontSize: '3rem', color: 'var(--color-white)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1 }} className="stat-value">{stat.val}</span>
                  </div>
                  <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, lineHeight: 1.4, maxWidth: '160px' }} className="stat-label">
                    {language === 'tr' ? stat.labelTr : stat.labelEn}
                  </div>
                </div>
              ))}
              
              {/* Qualitative Impact Row */}
              <div style={{ 
                gridColumn: '1 / -1', 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)', 
                padding: '2rem 3rem', 
                borderRadius: '24px', 
                marginTop: '0.5rem' 
              }} className="proof-qualitative">
                <h4 style={{ color: 'var(--color-orange)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  {language === 'tr' ? 'LetsSellApp ile Ne Değişti?' : 'What Changed with LetsSellApp?'}
                </h4>
                <ul style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.6, paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <li>
                      {language === 'tr' ? 'Görüşme standartlarının yükselmesiyle elde edilen hızlı ve kalıcı dönüşüm oranları.' : 'Rapid and sustainable conversion rates achieved through elevated pitch standards.'}
                    </li>
                    <li>
                      {language === 'tr' ? 'İşe yeni başlayan saha ekiplerinin kuruma ve süreçlere rekor sürede uyum sağlaması (onboarding).' : 'Record-breaking acceleration in the onboarding and field adaptation process for new hires.'}
                    </li>
                    <li>
                      {language === 'tr' ? 'Salt istatistiğin ötesine geçerek tamamen insan davranışını merkeze alan kalıcı bir şirket kültürü.' : 'Moving beyond mere statistics to establish a permanent corporate culture centered around human behavior.'}
                    </li>
                    <li>
                      {language === 'tr' ? 'Belirli bir lokasyona bağımlı kalmayan, her coğrafyada tekrarlanabilen küresel ve ölçeklenebilir satış modeli.' : 'A globally scalable sales workflow that delivers consistent success repeatedly across any geography.'}
                    </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .impact-section { padding: 4rem 0 !important; }
            .impact-title { font-size: 2rem !important; margin-bottom: 3rem !important; }
            .impact-chart-glass { padding: 2.5rem 1.25rem !important; border-radius: 16px !important; }
            
            .impact-chart-headers { height: auto !important; margin-bottom: 2rem !important; padding: 0 !important; }
            .headers-container { display: flex !important; flex-direction: column !important; gap: 0.75rem !important; height: auto !important; }
            .header-group-left, .header-group-right { 
              position: relative !important; width: 100% !important; height: 60px !important; 
              border-radius: 12px !important; overflow: hidden;
            }
            .ribbon-left, .ribbon-right { clip-path: none !important; }
            .header-node-content { padding: 0 1rem !important; }
            .header-icon-box { 
              position: static !important; width: 32px !important; height: 32px !important; 
              border-width: 2px !important; margin-right: 0.75rem !important; box-shadow: none !important;
              display: flex !important;
            }
            .header-icon-box svg { width: 16px !important; height: 16px !important; }
            .header-text-box { padding: 0 !important; text-align: left !important; }
            .header-label-text { font-size: 0.95rem !important; }

            .chart-row { 
              flex-direction: column !important; gap: 1rem !important; 
              align-items: stretch !important; border-bottom: 1px solid #eee; 
              padding-bottom: 1.5rem !important; margin-bottom: 1.5rem !important; 
            }
            .chart-row:last-child { border-bottom: none; }
            .col-left, .col-right { 
              padding: 0 !important; justify-content: flex-start !important; 
              flex-direction: row !important; gap: 1rem !important; 
            }
            .col-right { justify-content: flex-start !important; flex-direction: row-reverse !important; }
            .col-right span { text-align: left !important; }
            .val-circle { width: 44px !important; height: 44px !important; font-size: 0.95rem !important; }
            .col-left span, .col-right span { font-size: 1rem !important; line-height: 1.3; }
            
            .rows-padding { padding: 0 !important; }
            .side-dash, .center-dash { display: none !important; }
            .vs-badge { display: none !important; }
            
            .conclusion-box { margin-top: 4rem !important; padding: 0 1rem !important; }
            .conclusion-text { font-size: 1.35rem !important; }
            
            .proof-card { padding: 3rem 1.25rem !important; gap: 3rem !important; border-radius: 16px !important; }
            .proof-badge { top: 1.5rem !important; left: 1.25rem !important; }
            .proof-logo-container { padding: 1rem 1.75rem !important; margin-bottom: 2rem !important; border-radius: 16px !important; }
            .proof-logo-container img { height: 100px !important; }
            .proof-title { font-size: 2.25rem !important; }
            .proof-subtitle { font-size: 1.1rem !important; }
            .proof-cta { margin-top: 2.5rem !important; padding: 1.5rem !important; }
            .proof-cta-text { font-size: 1.1rem !important; }
            
            .proof-stats { grid-template-columns: 1fr !important; gap: 1rem !important; }
            .stat-card { padding: 2rem 1.5rem !important; border-radius: 16px !important; }
            .stat-value { font-size: 2.25rem !important; }
            .proof-qualitative { padding: 1.5rem !important; border-radius: 16px !important; }
            .proof-qualitative ul { font-size: 1rem !important; }
          }
        `}} />
      </div>
    </section>
  );
};

export default Impact;
