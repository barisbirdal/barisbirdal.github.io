export const getTranslation = (lang, section, key) => {
  const val = translations[lang]?.[section]?.[key];
  return val !== undefined ? val : key;
};

export const translations = {
  tr: {
    header: {
      howItWorks: "Nasıl Çalışır?",
      useCases: "Kullanım Alanları",
      insights: "Yönetici İçgörüleri",
      download: "Uygulamayı İndir",
      login: "Giriş Yap",
      demo: "Demo Talep Et"
    },
    hero: {
      badge: "Satış Görüşmesi Analiz Platformu",
      title1: "Satış görüşmesini ölçün,",
      title2: "geliri artırın.",
      subtitle: "LetsSellApp satış görüşmelerini ölçülebilir hale getirir ve satış performansını geliştirmek için gerçek içgörüler sunar.",
      demoCta: "Demo Talep Et",
      pilotCta: "DEMO"
    },
    problem: {
      title: "Çoğu şirket satış sonuçlarını görür. Ancak satışın nasıl gerçekleştiğini bilmez.",
      subtitle: "",
      desc: "",
      q1: "Satış görüşmesi nasıl ilerledi?",
      q2: "Hangi adımlar uygulandı?",
      q3: "Hangi adımlar atlandı?",
      q4: "Görüşme nerede kaybedildi?"
    },
    howItWorks: {
      sub: "Nasıl Çalışır?",
      title: "Satış görüşmelerini ölçülebilir hale getirin.",
      desc: "LetsSellApp satış görüşmelerini analiz ederek satış sürecini görünür hale getirir.",
      watchVideo: "Tanıtım Videosunu İzle",
      s1Title: "Satış görüşmesi gerçekleşir",
      s1Desc: "",
      s2Title: "Görüşme analiz edilir",
      s2Desc: "",
      s3Title: "Performans ölçülür",
      s3Desc: "",
      s4Title: "Yöneticiler içgörü elde eder",
      s4Desc: ""
    },
    useCases: {
      sub: "Kullanım Alanları",
      title: "LetsSellApp şu alanlarda kullanılabilir:",
      desc: "",
      b2b: "B2B (Kurumsal / Endüstriyel satış)",
      b2c: "B2C (Perakende satış)",
      field: "Saha satış ekipleri",
      call: "Çağrı merkezi satış ekipleri",
      promo: "Tanıtım ekipleri",
      contactCta: "Sektörünüzde ve şirketinizde LetsSellApp’in nasıl çalışacağını görmek için bizimle iletişime geçin.",
      contactBtn: "Bize Ulaşın"
    },
    managerInsights: {
      sub: "Yöneticiler Ne Görür?",
      title: "LetsSellApp yöneticilerin;",
      desc: "satış sürecini görmesini, performans farklarını anlamasını ve ekiplerini geliştirmesini sağlar.",
      f1: "Süreç uyumu",
      f2: "Performans skoru",
      f3: "Beceri boşlukları",
      f4: "Gelişim fırsatları"
    },
    downloadApp: {
      title: "Satış görüşmelerinizi ölçmeye başlayın!",
      desc: "LetsSellApp deneyimini telefonunuzda, tabletinizde veya bilgisayarınızda kesintisiz yaşayın."
    },
    impact: {
      sub: "Gelir Etkisi",
      title: "Ölçüm odaklı gelişimin sonuçları.",
      desc: "Satış davranışlarındaki küçük gelişmeler büyük gelir etkisi yaratır.",
      m1: "Kapanış Oranı",
      m2: "Satış Artışı",
      m3: "Teklif Oranı"
    },
    contact: {
      title: "Satış görüşmelerinizi ölçmeye başlayın.",
      desc: "Bir pilot çalışma ile başlayın ve gerçek etkiyi ölçün.",
      name: "Adınız Soyadınız",
      email: "Kurumsal E-posta",
      phone: "Telefon Numarası",
      company: "Şirket Adı",
      message: "Mesajınız (Opsiyonel)",
      send: "Pilot Çözüm İçin Başvur"
    },
    footer: {
      desc: "Satış görüşmelerini ölçen ve analiz eden bir Sales Conversation Intelligence platformudur.",
      solution: "Çözüm",
      contact: "İletişim",
      consent: "Açık Rıza Metni",
      cookie: "Çerez Politikası",
      kvkk: "K.V.K.K Metni",
      rights: "Tüm hakları saklıdır."
    }
  },
  en: {
    header: {
      howItWorks: "How It Works?",
      useCases: "Use Cases",
      insights: "Manager Insights",
      download: "Download App",
      login: "Log In",
      demo: "Request Demo"
    },
    hero: {
      badge: "Sales Conversation Intelligence Platform",
      title1: "Measure the sales conversation.",
      title2: "Grow revenue.",
      subtitle: "LetsSellApp makes sales conversations measurable and provides real insights to improve sales performance.",
      demoCta: "Request Demo",
      pilotCta: "DEMO"
    },
    problem: {
      title: "Most companies see sales results. Few understand how sales actually happen.",
      subtitle: "",
      desc: "",
      q1: "How did the conversation progress?",
      q2: "Which steps were applied?",
      q3: "Which steps were skipped?",
      q4: "Where was the sale lost?"
    },
    howItWorks: {
      sub: "How It Works?",
      title: "Make sales conversations measurable.",
      desc: "LetsSellApp analyzes sales conversations, making the sales process visible.",
      watchVideo: "Watch Demo Video",
      s1Title: "Sales conversation happens",
      s1Desc: "",
      s2Title: "Conversation is analyzed",
      s2Desc: "",
      s3Title: "Performance is measured",
      s3Desc: "",
      s4Title: "Managers gain insights",
      s4Desc: ""
    },
    useCases: {
      sub: "Use Cases",
      title: "LetsSellApp can be used in:",
      desc: "",
      b2b: "B2B (Corporate / Industrial sales)",
      b2c: "B2C (Retail sales)",
      field: "Field sales teams",
      call: "Call center sales teams",
      promo: "Promoter teams",
      contactCta: "Contact us to see how LetsSellApp works in your sector and company.",
      contactBtn: "Contact Us"
    },
    managerInsights: {
      sub: "What Managers See",
      title: "LetsSellApp enables managers to;",
      desc: "see the sales process, understand performance gaps, and develop their teams.",
      f1: "Process compliance",
      f2: "Performance score",
      f3: "Skill gaps",
      f4: "Improvement opportunities"
    },
    downloadApp: {
      title: "Start measuring your sales conversations!",
      desc: "Experience LetsSellApp seamlessly on your phone, tablet, or computer."
    },
    impact: {
      sub: "Revenue Impact & Proof",
      title: "Results of measurement-driven improvement.",
      desc: "Small improvements in sales behavior create a large revenue impact.",
      m1: "Close Rate",
      m2: "Sales Increase",
      m3: "Offer Rate"
    },
    contact: {
      title: "Start measuring your sales conversations.",
      desc: "Start with a pilot and measure the real impact.",
      name: "Full Name",
      email: "Corporate Email",
      phone: "Phone Number",
      company: "Company Name",
      message: "Your Message (Optional)",
      send: "Apply for Pilot Solution"
    },
    footer: {
      desc: "A Sales Conversation Intelligence platform that measures and analyzes sales conversations.",
      solution: "Solution",
      contact: "Contact",
      consent: "Explicit Consent",
      cookie: "Cookie Policy",
      kvkk: "PDPL Text",
      rights: "All rights reserved."
    }
  }
};
