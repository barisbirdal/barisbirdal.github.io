import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  return (
    <div className="blog-page" style={{ backgroundColor: '#fcfcfc', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Hero Banner inside Blog Page */}
      <div className="blog-hero" style={{
        background: 'linear-gradient(rgba(39, 66, 146, 0.85), rgba(39, 66, 146, 0.85)), url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem 5rem',
        textAlign: 'center',
        color: 'white',
        borderBottomLeftRadius: '50% 10%',
        borderBottomRightRadius: '50% 10%',
        marginBottom: '4rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-1px' }} className="blog-title">
          Blog
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, opacity: 0.9 }} className="blog-desc">
          {language === 'tr'
            ? 'Satış dünyasından en güncel haberler, ipuçları ve içgörüler.'
            : 'The latest news, tips, and insights from the sales world.'}
        </p>
      </div>



      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .blog-hero { padding: 4rem 1.5rem 3rem !important; margin-bottom: 2rem !important; border-bottom-left-radius: 20% 5% !important; border-bottom-right-radius: 20% 5% !important; }
          .blog-title { font-size: 2.5rem !important; }
          .blog-desc { font-size: 1.1rem !important; }
        }
      `}} />
    </div>
  );
};

export default Blog;
