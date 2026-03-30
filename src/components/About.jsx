import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="about-page" style={{ backgroundColor: '#fcfcfc', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Hero Banner inside About Page */}
      <div className="about-hero" style={{
        background: 'linear-gradient(rgba(39, 66, 146, 0.85), rgba(39, 66, 146, 0.85)), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem 5rem',
        textAlign: 'center',
        color: 'white',
        borderBottomLeftRadius: '50% 10%',
        borderBottomRightRadius: '50% 10%',
        marginBottom: '4rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-1px' }} className="about-title">
          {language === 'tr' ? 'Hakkımızda' : 'About Us'}
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, opacity: 0.9 }} className="about-desc">
          {language === 'tr'
            ? 'Hikayemiz ve vizyonumuz.'
            : 'Our story and vision.'}
        </p>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ padding: '4rem', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.03)', maxWidth: '900px', width: '100%' }}>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {language === 'tr' 
              ? 'Dünyada milyarlarca dolar satış eğitimlerine harcanırken, LetsSellApp, işte bu düşünceden yola çıkarak, hadisatalim.biz alt markası olarak hayat buldu.' 
              : 'While billions of dollars are spent on sales training globally, LetsSellApp was born from this thought as a sub-brand of hadisatalim.biz.'}
          </p>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8 }}>
            {language === 'tr'
              ? 'Kurucu ortağımız Dr. Melik Karabıyıkoğlu’nun satış, pazarlama ve perakende eğitimleri ve danışmanlıklarında aldığı ihtiyaç ve beklentiler, 2020 yılından itibaren de Hadisatalim.biz’in tedarikçileri ve satıcıları ile yaptığı iş birlikteliklerinde gözlemlediğimiz durum, bize firmaların satışı kapamada ne kadar desteğe ihtiyacı olduğunu gösterdi.'
              : 'The needs and expectations our co-founder Dr. Melik Karabıyıkoğlu received during his sales, marketing, and retail trainings and consultancies, along with the situation we observed in our collaborations with Hadisatalim.biz\'s suppliers and sellers since 2020, showed us how much support companies need in closing sales.'}
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .about-hero { padding: 4rem 1.5rem 3rem !important; margin-bottom: 2rem !important; border-bottom-left-radius: 20% 5% !important; border-bottom-right-radius: 20% 5% !important; }
          .about-title { font-size: 2.5rem !important; }
          .about-desc { font-size: 1.1rem !important; }
        }
      `}} />
    </div>
  );
};

export default About;
