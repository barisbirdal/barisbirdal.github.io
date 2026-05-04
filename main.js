document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  const navMenu = document.getElementById('nav-menu');
  const iconOpen = document.querySelector('.icon-open');
  const iconClose = document.querySelector('.icon-close');

  if (hamburgerToggle && navMenu) {
    hamburgerToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isActive = navMenu.classList.contains('active');
      
      if (isActive) {
        if (iconOpen) iconOpen.style.display = 'none';
        if (iconClose) iconClose.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
      } else {
        if (iconOpen) iconOpen.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    const navLinks = navMenu.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (iconOpen) iconOpen.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  // Translation Function
  function updateTranslations(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let translation = translations[lang];
      path.forEach(key => {
        if (translation) translation = translation[key];
      });
      
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.innerHTML = translation;
        }
      }
    });

    // Update Language Toggle UI
    const trSpans = document.querySelectorAll('.lang-tr');
    const enSpans = document.querySelectorAll('.lang-en');
    
    if (lang === 'tr') {
      trSpans.forEach(s => s.classList.remove('inactive'));
      enSpans.forEach(s => s.classList.add('inactive'));
    } else {
      trSpans.forEach(s => s.classList.add('inactive'));
      enSpans.forEach(s => s.classList.remove('inactive'));
    }

    window.dispatchEvent(new CustomEvent('languageChanged'));
  }

  // Language Toggles
  const langToggles = document.querySelectorAll('.lang-toggle');
  langToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem('language') || 'tr';
      const nextLang = currentLang === 'tr' ? 'en' : 'tr';
      updateTranslations(nextLang);
    });
  });

  // Initial Translation
  const savedLang = localStorage.getItem('language') || 'tr';
  updateTranslations(savedLang);
});
