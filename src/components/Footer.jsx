import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '48px 0 36px',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '36px'
          }}
        >
          {/* Colophon & Identity */}
          <div style={{ maxWidth: '400px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px'
              }}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'var(--accent)',
                  color: 'var(--accent-fg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '2px'
                }}
              >
                F
              </div>
              <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </span>
            </div>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
              Aspiring Full Stack Developer & BCA student. Designed with an authentic, strictly monochrome aesthetic. Built with React and clean architectural CSS.
            </p>
          </div>

          {/* Quick Index Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}
              >
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
                <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills</a>
                <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a>
                <a href="#certificates" style={{ color: 'var(--text-secondary)' }}>Certificates</a>
                <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}
              >
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                <a href="mailto:febinjacobponnachan@gmail.com" style={{ color: 'var(--text-secondary)' }}>Email</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Scroll back to top of page"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px'
              }}
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Hairline & Copyright */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Febin Jacob Ponnachan &bull; All Rights Reserved
          </div>
          <div>
            Built with React &bull; Minimal Black & White
          </div>
        </div>
      </div>
    </footer>
  );
}
