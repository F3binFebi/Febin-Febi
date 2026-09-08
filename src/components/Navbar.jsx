import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'skills', label: 'Skills', num: '02' },
    { id: 'projects', label: 'Projects', num: '03' },
    { id: 'certificates', label: 'Certificates', num: '04' },
    { id: 'contact', label: 'Contact', num: '05' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 900,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}
      >
        {/* Brand / Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-primary)'
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              background: 'var(--accent)',
              color: 'var(--accent-fg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              borderRadius: '3px'
            }}
          >
            F
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {personalInfo.name}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Full Stack Dev &bull; BCA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.15s ease'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)'
                  }}
                >
                  {item.num}.
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Quick Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-subtle)',
              transition: 'all 0.15s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Quick Contact Link (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="btn btn-secondary btn-sm desktop-contact-btn"
            style={{
              display: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px'
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="mobile-menu-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-subtle)'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-lg)',
            animation: 'modal-fade-in 0.15s ease-out'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                fontSize: '15px',
                fontWeight: activeSection === item.id ? 700 : 500,
                color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                {item.num}
              </span>
            </a>
          ))}

          <div style={{ paddingTop: '8px', display: 'flex', gap: '12px' }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-contact-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
