import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import ManagerInsights from './components/ManagerInsights';
import Impact from './components/Impact';
import Contact from './components/Contact';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import Kvkk from './components/Kvkk';
import ExplicitConsent from './components/ExplicitConsent';
import CookiePolicy from './components/CookiePolicy';
import Blog from './components/Blog';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

const Home = () => (
  <>
    <Hero />
    <Problem />
    <HowItWorks />
    <ManagerInsights />
    <UseCases />
    <Impact />
    <DownloadApp />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/kvkk" element={<Kvkk />} />
              <Route path="/acik-riza" element={<ExplicitConsent />} />
              <Route path="/cerez-politikasi" element={<CookiePolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
