import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="contact-page" style={{ backgroundColor: '#fcfcfc', paddingBottom: '5rem' }}>

      {/* Hero Banner inside Contact Page */}
      <div className="contact-hero" style={{
        background: 'linear-gradient(rgba(39, 66, 146, 0.85), rgba(39, 66, 146, 0.85)), url("https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem 5rem',
        textAlign: 'center',
        color: 'white',
        borderBottomLeftRadius: '50% 10%',
        borderBottomRightRadius: '50% 10%',
        marginBottom: '4rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-1px' }} className="contact-title">
          {language === 'tr' ? 'Satış Yolculuğunuzda' : 'We Are By Your Side'}<br />
          {language === 'tr' ? 'Yanınızdayız.' : 'On Your Sales Journey.'}
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, opacity: 0.9 }} className="contact-desc">
          {language === 'tr'
            ? 'Her zaman sizden haber almak isteriz! Size nasıl en iyi şekilde yardımcı olabileceğimizi bize bildirin, ve başarınızı desteklemek için elimizden geleni yapalım.'
            : 'We always love hearing from you! Let us know how we can best assist you, and we will do our best to support your success.'}
        </p>
      </div>

      {/* Contact Quick Links */}
      <div className="container contact-links-container" style={{ marginBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.03)'
        }} className="contact-links-grid">
          <div className="contact-link-item">
            <h4 style={{ color: 'var(--color-gray)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {language === 'tr' ? 'BİZE ULAŞIN' : 'CONTACT US'}
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'var(--color-navy)', fontSize: '1.4rem', fontWeight: 500 }}>
                {language === 'tr' ? 'Sohbete başlayın!' : 'Start chatting!'}
              </span>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=905323171605&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="btn btn-hover-grow" style={{ backgroundColor: '#25D366', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '100px', fontSize: '1.05rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>

          <div style={{ borderLeft: '1px solid var(--color-gray-light)', borderRight: '1px solid var(--color-gray-light)' }} className="contact-link-item middle-col">
            <h4 style={{ color: 'var(--color-gray)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {language === 'tr' ? 'HER ZAMAN ARAYIN' : 'CALL US ANYTIME'}
            </h4>
            <a href="tel:+905323171605" style={{ color: 'var(--color-navy)', fontSize: '1.4rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.target.style.color = 'var(--color-navy)'}>
              +90 (532) 317 16 05
            </a>
          </div>

          <div className="contact-link-item">
            <h4 style={{ color: 'var(--color-gray)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {language === 'tr' ? 'BİZE E-POSTA GÖNDERİN' : 'EMAIL US'}
            </h4>
            <a href="mailto:melik@letssell.app" style={{ color: 'var(--color-navy)', fontSize: '1.4rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.target.style.color = 'var(--color-navy)'}>
              melik@letssell.app
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container contact-form-container" style={{ paddingBottom: '6rem', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '3rem', fontWeight: 600 }}>
          {language === 'tr' ? 'Sorularınızı Bize İletin!' : 'Send Us Your Questions!'}
        </h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="form-row">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 500 }}>
                {language === 'tr' ? 'Adınız' : 'Your Name'}
              </label>
              <input type="text" placeholder={language === 'tr' ? 'Adınız' : 'Your Name'} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #edf2f7', fontSize: '1rem', color: '#1e293b', outline: 'none', transition: 'border-color 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-navy)'} onBlur={(e) => e.target.style.borderColor = '#edf2f7'} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 500 }}>
                {language === 'tr' ? 'Firma Adı' : 'Company Name'}
              </label>
              <input type="text" placeholder={language === 'tr' ? 'Firma Adı' : 'Company Name'} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #edf2f7', fontSize: '1rem', color: '#1e293b', outline: 'none', transition: 'border-color 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-navy)'} onBlur={(e) => e.target.style.borderColor = '#edf2f7'} required />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="form-row">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 500 }}>
                {language === 'tr' ? 'Email Adresiniz' : 'Email Address'}
              </label>
              <input type="email" placeholder={language === 'tr' ? 'Email Adresiniz' : 'Email Address'} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #edf2f7', fontSize: '1rem', color: '#1e293b', outline: 'none', transition: 'border-color 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-navy)'} onBlur={(e) => e.target.style.borderColor = '#edf2f7'} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 500 }}>
                {language === 'tr' ? 'Telefon Numaranız' : 'Phone Number'}
              </label>
              <input type="tel" placeholder={language === 'tr' ? 'Telefon Numaranız' : 'Phone Number'} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #edf2f7', fontSize: '1rem', color: '#1e293b', outline: 'none', transition: 'border-color 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-navy)'} onBlur={(e) => e.target.style.borderColor = '#edf2f7'} required />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 500 }}>
              {language === 'tr' ? 'Size nasıl yardımcı olabiliriz?' : 'How can we help you?'}
            </label>
            <textarea placeholder="..." rows="6" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #edf2f7', fontSize: '1rem', color: '#1e293b', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-navy)'} onBlur={(e) => e.target.style.borderColor = '#edf2f7'} required></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-hover-grow" style={{ backgroundColor: '#7d75a6', color: 'white', padding: '1rem 3rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(125, 117, 166, 0.4)' }}>
              {language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Company Information Table */}
      <div className="container contact-info-container" style={{ paddingBottom: '4rem' }}>
        <div style={{
          backgroundColor: 'white',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '16px',
          maxWidth: '850px',
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
          overflow: 'hidden'
        }} className="info-table-card">
          <div style={{ padding: '2.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }} className="info-header">
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 700, margin: 0 }}>
              {language === 'tr' ? 'Şirket Bilgileri' : 'Company Information'}
            </h3>
          </div>

          <div style={{ padding: '0 3rem' }} className="info-body">

            <div style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }} className="info-row">
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{language === 'tr' ? 'Şirket Adı' : 'Company Name'}</h4>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: 0 }}>HADİSATALIM BİZ ELEKTRONİK TİCARET VE PAZARLAMA HİZMETLERİ ANONİM ŞİRKETİ</p>
            </div>

            <div style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }} className="info-row">
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{language === 'tr' ? 'Şirket Adresi' : 'Company Address'}</h4>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                Emniyet Evleri Mahallesi Eski Büyükdere Cad. Sapphire Apt. No:1/1/1b01 Kağıthane / İstanbul / Türkiye, 34415
              </p>
            </div>

            <div style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }} className="info-row">
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{language === 'tr' ? 'Vergi Numarası' : 'Tax Number'} <span style={{ fontWeight: 400, color: 'var(--color-gray)' }}>4541670699</span></h4>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', margin: 0, fontWeight: 600 }}>{language === 'tr' ? 'Vergi Dairesi' : 'Tax Office'} <span style={{ fontWeight: 400, color: 'var(--color-gray)' }}>Zincirlikuyu VD</span></h4>
            </div>

            <div style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }} className="info-row">
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{language === 'tr' ? 'Mersis Numarası' : 'Mersis Number'}</h4>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: 0 }}>0454-1670-6990-0001</p>
            </div>

            <div style={{ padding: '2rem 0' }} className="info-row no-border">
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 600 }}>{language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}</h4>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: '0 0 0.25rem 0' }}>Melik Karabıyıkoğlu</p>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: '0 0 0.25rem 0' }}><a href="mailto:melik@letssell.app" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>melik@letssell.app</a></p>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: 0 }}><a href="tel:+905323171605" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>+90 532 317 16 05</a></p>
            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .contact-hero { padding: 4rem 1.5rem 3rem !important; margin-bottom: 2rem !important; }
            .contact-title { font-size: 2rem !important; }
            .contact-desc { font-size: 1.1rem !important; }
            .contact-links-grid { padding: 2rem 1.5rem !important; gap: 2rem !important; }
            .middle-col { border-left: none !important; border-right: none !important; border-top: 1px solid var(--color-gray-light) !important; border-bottom: 1px solid var(--color-gray-light) !important; padding: 2rem 0 !important; }
            .contact-link-item a { font-size: 1.25rem !important; }
            .info-table-card { border-radius: 12px !important; }
            .info-header { padding: 1.5rem !important; }
            .info-body { padding: 0 1.5rem !important; }
            .info-row { padding: 1.5rem 0 !important; }
            .form-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          }
        `}} />
      </div>

    </div>
  );
};

export default Contact;
