import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useActiveSection } from './utils/useActiveSection';

export default function App() {
  // Active Section Spy
  const activeSection = useActiveSection(['about', 'skills', 'projects', 'certificates', 'contact'], 120);

  // Theme Management (Default to dark for sleek monochrome aesthetic)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('fjp-portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('fjp-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toast System
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="portfolio-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Architectural Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onShowToast={showToast} />
        <About />
        <Skills onShowToast={showToast} />
        <Projects />
        <Certificates />
        <Contact onShowToast={showToast} />
      </main>

      {/* Architectural Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
