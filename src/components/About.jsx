import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Code, Compass, Terminal, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">Academic Foundation & Development Focus</h2>
          <p className="section-desc">
            A brief overview of my education, coding interests, and approach to development
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left: Concise Biography & Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              className="card-border"
              style={{
                padding: '32px',
                background: 'var(--bg-card)'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <GraduationCap size={20} />
                <span>BCA Student & Full Stack Aspirant</span>
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}
              >
                I am currently pursuing a <strong>Bachelor of Computer Applications (BCA)</strong>, Learning, building, and exploring the endless possibilities of technology
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px'
                }}
              >
                Beyond coursework, I enjoy building <strong>full-stack web applications, exploring software technologies,</strong> — and turning ideas into reality.
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge">BCA Student</span>
                <span className="badge">Full Stack Developer</span>
                <span className="badge">Web Systems</span>
                <span className="badge">Clean Code</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}
            >
              {personalInfo.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="card-border"
                  style={{
                    padding: '16px 20px',
                    background: 'var(--bg-subtle)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '14px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engineering Principles & Core Interests */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              // Core Focus & Interests
            </div>

            {personalInfo.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="card-border"
                style={{
                  padding: '24px',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  gap: '18px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    lineHeight: 1
                  }}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="card-border"
              style={{
                padding: '20px 24px',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Looking for an internship or project collaborator?
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Available for remote & hybrid technical opportunities.
                </div>
              </div>

              <a href="#contact" className="btn btn-primary btn-sm">
                <span>Contact Febin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
