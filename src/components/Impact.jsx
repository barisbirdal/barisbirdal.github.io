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
    { labelLeft: 'Satış Kapama Oranı', valLeft: '%28', labelRight: 'Satış Kapama Oranı', valRight: '%36' },
    { labelLeft: 'Satış Adedi', valLeft: '56', labelRight: 'Satış Adedi', valRight: '72' },
    { labelLeft: 'Ortalama Satış Değeri', valLeft: '5K', labelRight: 'Ortalama Satış Değeri', valRight: '5K' },
    { labelLeft: 'Aylık Gelir', valLeft: '280K', labelRight: 'Aylık Gelir', valRight: '360K' }
  ];

  const enData = [
    { labelLeft: 'Monthly Sales Calls', valLeft: '200', labelRight: 'Monthly Sales Calls', valRight: '200' },
    { labelLeft: 'Sales Close Rate', valLeft: '28%', labelRight: 'Sales Close Rate', valRight: '36%' },
    { labelLeft: 'Number of Sales', valLeft: '56', labelRight: 'Number of Sales', valRight: '72' },
    { labelLeft: 'Avg Sale Value', valLeft: '5K', labelRight: 'Avg Sale Value', valRight: '5K' },
    { labelLeft: 'Monthly Revenue', valLeft: '280K', labelRight: 'Monthly Revenue', valRight: '360K' }
  ];

  const rows = language === 'en' ? enData : trData;

  const titleTr = <>Küçük gelişmeler,<br /><span style={{ textTransform: 'uppercase' }}>BÜYÜK gelir etkisi.</span></>;
  const titleEn = <>Small improvements,<br /><span style={{ textTransform: 'uppercase' }}>LARGE revenue impact.</span></>;

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
                    <img src="/ampulyerineikon.png" alt="LetsSellApp Logo" className="icon-svg" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Rows Container */}
          <div style={{ position: 'relative', marginBottom: '4rem' }}>

            {/* Center Dashed Line */}
            <div className="center-dash mobile-hide" style={{ position: 'absolute', left: '50%', top: '-4rem', bottom: '0', borderLeft: '2px dashed #d1d5db', transform: 'translateX(-50%)', zIndex: 0 }}></div>

            {/* Connecting dashed lines outside - aligned to circles */}
            <div className="side-dash mobile-hide" style={{ position: 'absolute', left: '68px', top: '-5rem', bottom: '28px', borderLeft: '2px dashed #9ca3af', zIndex: 0 }}></div>
            <div className="side-dash mobile-hide" style={{ position: 'absolute', right: '68px', top: '-5rem', bottom: '28px', borderRight: '2px dashed #9ca3af', zIndex: 0 }}></div>

            <div style={{ position: 'relative', zIndex: 1, padding: '0 40px' }} className="rows-padding">
              {rows.map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', alignItems: 'center' }} className="chart-row">

                  {/* Left Column Data (Just Circle) */}
                  <div style={{ display: 'flex', alignItems: 'center' }} className="col-left">
                    <span className="mobile-col-label">{language === 'tr' ? 'Öncesi' : 'Before'}</span>
                    <div className="val-circle" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#5a6577', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.15rem', flexShrink: 0, boxShadow: '0 4px 15px rgba(90, 101, 119, 0.3)', position: 'relative', zIndex: 2 }}>
                      {row.valLeft}
                    </div>
                  </div>

                  {/* Center Label */}
                  <div style={{ flex: 1, textAlign: 'center', zIndex: 3 }} className="center-label">
                    <span style={{ fontSize: '1.25rem', color: '#4b5563', fontWeight: 600, backgroundColor: 'rgba(255,255,255,0.95)', padding: '0.4rem 1.5rem', borderRadius: '100px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{row.labelLeft}</span>
                  </div>

                  {/* Right Column Data (Just Circle) */}
                  <div style={{ display: 'flex', alignItems: 'center' }} className="col-right">
                    <span className="mobile-col-label" style={{ color: 'var(--color-orange)' }}>{language === 'tr' ? 'Sonrası' : 'After'}</span>
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
              {language === 'tr' ? '*Tanımlı satış süreci kullanan şirketler %28 daha fazla gelir elde eder.' : '*Companies using a defined sales process see a 28% increase in revenue.'}<br />
              <a href="https://hbr.org/2015/01/companies-with-a-formal-sales-process-generate-more-revenue?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 400, color: 'var(--color-gray)', textDecoration: 'underline', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.target.style.color = 'var(--color-gray)'}>Harvard Business Review - Sales Process Research</a>
            </p>
          </div>

        </div>

        {/* Conclusion Text Outside the Chart */}
        <div style={{ textAlign: 'center', marginTop: '6rem', maxWidth: '800px', margin: '6rem auto 0' }} className="conclusion-box">
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-orange)', margin: '0 auto 2rem', borderRadius: '4px' }}></div>
          <p style={{ fontSize: '1.8rem', color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.5, letterSpacing: '-0.5px' }} className="conclusion-text">
            {language === 'tr'
              ? <>LetsSellApp, bu sürecin <span style={{ color: 'var(--color-orange)', position: 'relative' }}>uçtan uca izlenmesini, ölçülmesini</span> ve <span style={{ color: 'var(--color-orange)' }}>sürekli geliştirilmesini</span> sağlar.</>
              : <>LetsSellApp enables <span style={{ color: 'var(--color-orange)' }}>end-to-end monitoring, measurement</span>, and <span style={{ color: 'var(--color-orange)' }}>continuous improvement</span> of this process.</>
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
              {language === 'tr' ? 'Müşteri Başarısı' : 'Customer Success'}
            </div>

            {/* Left Content */}
            <div style={{ flex: '1 1 350px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="proof-content">

              <div className="proof-title-box" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '3.2rem', color: 'white', fontWeight: 800, marginBottom: '0.8rem', lineHeight: 1.1, letterSpacing: '-1.5px' }} className="proof-title">
                  {language === 'tr' ? 'Müşterilerimiz Ne Başardı?' : 'What Did Our Customers Achieve?'}
                </h3>
                <p style={{ fontSize: '1.4rem', color: 'var(--color-orange)', fontWeight: 600, opacity: 0.9, letterSpacing: '0.5px' }} className="proof-subtitle">
                  {language === 'tr' ? 'Gerçek Hayat Sonuçları' : 'Real Life Results'}
                </p>
              </div>

              {/* Left Column CTA */}
              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', width: '100%' }} className="proof-cta">
                <p style={{ fontSize: '1.25rem', color: 'white', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.4 }} className="proof-cta-text">
                  {language === 'tr' ? 'Satış performansınızı varsayımlarla değil, gerçek verilerle yönetmeye başlayın.' : 'Start managing your sales performance with real data, not assumptions.'}
                </p>
                <button onClick={() => navigate('/contact')} style={{ backgroundColor: 'var(--color-orange)', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(243, 159, 28, 0.3)', transition: 'transform 0.2s', fontSize: '1.1rem' }} className="btn btn-hover-grow mobile-w-full">
                  {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>

              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.5 }}>
                {language === 'tr' ? '*Sunulan veriler, müşteri etkileşimlerinin analiziyle hazırlanmıştır.' : '*Presented data is prepared through the analysis of customer interactions.'}
              </p>

            </div>

            {/* Right Stats Grid */}
            <div style={{ flex: '1.2 1 500px', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="proof-stats">
              {[
                { val: '15%', labelTr: 'Satış Artışı', labelEn: 'Sales Increase' },
                { val: '80%', labelTr: 'Kampanyalı Ürün Teklifi', labelEn: 'Campaign Product Offer' },
                { val: '50%', labelTr: 'Eğitim Süresinin Yönetimi', labelEn: 'Training Time Management' },
                { val: '40%', labelTr: 'Tanıtım Verimliliği', labelEn: 'Promotional Efficiency' }
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

        <style dangerouslySetInnerHTML={{
          __html: `
          .mobile-col-label { display: none; }
          @media (max-width: 768px) {
            .impact-section { padding: 4rem 0 !important; }
            .impact-title { font-size: 2rem !important; margin-bottom: 3rem !important; }
            .impact-chart-glass { padding: 2.5rem 1.25rem !important; border-radius: 16px !important; }
            
            .impact-chart-headers { display: none !important; }

            .chart-row { 
              flex-direction: column !important; gap: 0.5rem !important; 
              align-items: stretch !important; border-bottom: 2px dashed #eee; 
              padding-bottom: 2.5rem !important; margin-bottom: 2.5rem !important; 
            }
            .chart-row:last-child { border-bottom: none; }
            .center-label { width: 100% !important; margin-bottom: 1.5rem !important; }
            .center-label span { font-size: 1.1rem !important; display: inline-block; }
            .col-left, .col-right { 
              width: 100% !important; justify-content: space-between !important; 
              padding: 0 1rem !important; flex: none !important;
              display: flex !important; flex-direction: row !important;
            }
            .mobile-col-label { display: block !important; font-weight: 700; font-size: 1.1rem; color: #a1a1aa; }
            .val-circle { width: 44px !important; height: 44px !important; font-size: 0.95rem !important; }
            
            .rows-padding { padding: 0 !important; }
            .side-dash, .center-dash { display: none !important; }
            .vs-badge { display: none !important; }
            
            .conclusion-box { margin-top: 4rem !important; padding: 0 1rem !important; }
            .conclusion-text { font-size: 1.35rem !important; }
            
            .proof-card { padding: 3rem 1.25rem !important; gap: 3rem !important; border-radius: 16px !important; }
            .proof-badge { top: 1.5rem !important; left: 1.25rem !important; }
            .proof-logo-container { margin-top: 2rem !important; padding: 1rem 1.75rem !important; margin-bottom: 2rem !important; border-radius: 16px !important; }
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
