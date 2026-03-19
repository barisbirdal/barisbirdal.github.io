import React from 'react';
import { ArrowUpRight, Award, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Impact = () => {
  const { language } = useLanguage();

  return (
    <section id="impact" style={{ 
      padding: '8rem 0', 
      background: 'linear-gradient(rgba(248, 249, 252, 0.90), rgba(255, 255, 255, 0.90)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span style={{ color: 'var(--color-orange)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          {language === 'tr' ? 'Gelir Etkisi' : 'Revenue Impact'}
        </span>
        <h2 style={{ fontSize: '3rem', color: 'var(--color-navy)', marginTop: '0.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          {language === 'tr' ? 'Küçük gelişmeler,' : 'Small improvements,'}<br/>{language === 'tr' ? 'büyük gelir etkisi.' : 'large revenue impact.'}
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          {language === 'tr' 
            ? 'Satış davranışlarındaki ufak iyileştirmeler şirket geliriniz üzerinde ölçülebilir bir etki yaratır. Satış görüşmesi ölçüldüğünde satış performansı kalıcı olarak gelişir.'
            : 'Small improvements in sales behavior create a measurable impact on your company\'s revenue. When the sales conversation is measured, sales performance improves permanently.'}
        </p>

        {/* Impact Numbers */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '6rem' }}>
          <div className="card-hover" style={{ padding: '3rem', border: '1px solid var(--color-gray-light)', borderRadius: '16px', minWidth: '300px', backgroundColor: '#fafafa' }}>
            <p style={{ color: 'var(--color-gray)', marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>
              {language === 'tr' ? 'LetsSellApp Öncesi' : 'Before LetsSellApp'}
            </p>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>%28 <span style={{ fontSize: '1.2rem', fontWeight: 400 }}>{language === 'tr' ? 'Kapama Oranı' : 'Close Rate'}</span></h3>
          </div>
          <div className="card-hover" style={{ padding: '3rem', border: `2px solid var(--color-orange)`, borderRadius: '16px', minWidth: '300px', backgroundColor: 'var(--color-white)', position: 'relative', boxShadow: '0 20px 40px rgba(243, 159, 28, 0.1)' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', backgroundColor: 'var(--color-green)', color: 'white', padding: '0.75rem', borderRadius: '50%', boxShadow: '0 8px 16px rgba(40, 163, 189, 0.3)' }}>
              <ArrowUpRight size={28} />
            </div>
            <p style={{ color: 'var(--color-orange)', marginBottom: '1rem', fontWeight: 700, fontSize: '1.1rem' }}>
              {language === 'tr' ? 'LetsSellApp Sonrası' : 'After LetsSellApp'}
            </p>
            <h3 style={{ fontSize: '3rem', color: 'var(--color-green)', marginBottom: '0.5rem', lineHeight: 1 }}>%32 <span style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-navy)' }}>{language === 'tr' ? 'Kapama Oranı' : 'Close Rate'}</span></h3>
          </div>
        </div>

        {/* Case Study */}
        <div style={{ 
          background: 'linear-gradient(rgba(15, 23, 42, 0.90), rgba(39, 66, 146, 0.90)), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '24px', 
          padding: '5rem 4rem', 
          color: 'white', 
          textAlign: 'left', 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          gap: '4rem', 
          position: 'relative', 
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(39, 66, 146, 0.3)'
        }}>
          {/* Subtle background decoration */}
          <div style={{ position: 'absolute', right: '-50px', bottom: '-100px', opacity: 0.1 }}>
            <Award size={500} color="var(--color-orange)" />
          </div>

          <div style={{ flex: '1 1 400px', zIndex: 1 }}>
            <div style={{ backgroundColor: 'rgba(243, 159, 28, 0.2)', color: 'var(--color-orange)', display: 'inline-block', padding: '0.6rem 1.25rem', borderRadius: '100px', marginBottom: '2.5rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', border: '1px solid rgba(243, 159, 28, 0.3)' }}>
              {language === 'tr' ? 'Vaka Çalışması' : 'Case Study'}
            </div>
            
            <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem 2rem', borderRadius: '16px', display: 'inline-flex', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                <img 
                  src="/kidzania-logo.png" 
                  alt="KidZania" 
                  style={{ height: '55px', objectFit: 'contain' }}
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'block'; 
                    e.target.parentElement.style.backgroundColor = 'transparent';
                    e.target.parentElement.style.boxShadow = 'none';
                  }}
                />
                <h3 style={{ display: 'none', fontSize: '2.5rem', margin: 0, color: 'var(--color-white)' }}>KidZania</h3>
              </div>
            </div>
            
            <p style={{ fontSize: '1.35rem', opacity: 0.95, lineHeight: 1.6, marginBottom: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {language === 'tr' 
                ? 'LetsSellApp kullanmaya başladıktan sonra satış ekipleri sürecin kör noktalarını keşfetti ve eğitimlerini anında veriyle güçlendirdi.'
                : 'After adopting LetsSellApp, sales teams discovered blind spots in the process and reinforced their training with data.'}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.75rem', borderRadius: '16px', backdropFilter: 'blur(10px)', transition: 'transform 0.3s' }} className="card-hover">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(40, 163, 189, 0.2)', padding: '0.5rem', borderRadius: '8px' }}>
                    <TrendingUp size={22} color="var(--color-green)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {language === 'tr' ? 'Satış Adedi' : 'Sales Volume'}
                  </span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-white)' }}>
                  {language === 'tr' ? 'Kalıcı Artış' : 'Permanent Increase'}
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.75rem', borderRadius: '16px', backdropFilter: 'blur(10px)', transition: 'transform 0.3s' }} className="card-hover">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(243, 159, 28, 0.2)', padding: '0.5rem', borderRadius: '8px' }}>
                    <TrendingUp size={22} color="var(--color-orange)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {language === 'tr' ? 'Kampanya Teklifi' : 'Campaign Offer'}
                  </span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-white)' }}>
                  {language === 'tr' ? 'Yüksek Başarı' : 'High Success'}
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.75rem', borderRadius: '16px', backdropFilter: 'blur(10px)', transition: 'transform 0.3s', gridColumn: '1 / -1' }} className="card-hover">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(110, 103, 139, 0.2)', padding: '0.5rem', borderRadius: '8px' }}>
                    <TrendingUp size={22} color="#b1a8d9" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {language === 'tr' ? 'Eğitim Etkinliği' : 'Training Efficiency'}
                  </span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-white)' }}>
                  {language === 'tr' ? 'Ölçülebilir İyileşme' : 'Measurable Improvement'}
                </div>
              </div>

            </div>
          </div>
          
          <div style={{ flex: '1 1 300px', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.08)', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}>
              <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', fontWeight: 600, lineHeight: 1.4, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                {language === 'tr' ? 'Satış görüşmelerinizi veriyle ölçmeye başlayın.' : 'Start measuring your sales conversations with data.'}
              </p>
              <Link to="/contact" className="btn btn-primary btn-hover-grow" style={{ textDecoration: 'none', fontSize: '1.15rem', padding: '1.25rem 3rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 10px 25px rgba(243, 159, 28, 0.4)' }}>
                {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'} <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
