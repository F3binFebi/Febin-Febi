import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Terminal, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [activeTab, setActiveTab] = useState('status'); // 'status' | 'terminal'
  const [terminalHistory, setTerminalHistory] = useState([
    { cmd: 'whoami', output: 'Febin Jacob Ponnachan — A Full Stack Developer & BCA Student' },
    { cmd: 'cat focus.txt', output: 'Full-Stack Architecture, REST APIs, System Fundamentals' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  // Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata'
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('febinfebi003@gmail.com');
    setCopied(true);
    onShowToast('Copied febinfebi003@gmail.com to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = '';
    switch (cleanCmd) {
      case 'help':
        output = 'Available commands: whoami, skills, projects, contact, clear, date';
        break;
      case 'whoami':
        output = `${personalInfo.name} | ${personalInfo.role} | BCA Student`;
        break;
      case 'skills':
        output = 'Core: JavaScript, Python, C, C++, HTML, CSS, Node.js, Git, VS Code';
        break;
      case 'projects':
        output = 'Recent builds: Ontheway (Full Stack), Ontheway (Code Vault), Ontheway (BCA Portal)';
        break;
      case 'contact':
        output = 'Email: febinfebi003@gmail.com | Open for internships & projects';
        break;
      case 'date':
        output = `System Time: ${localTime}`;
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: "${cleanCmd}". Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '80px',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Status & Timestamp Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          <div className="status-indicator">
            <span className="status-dot" />
            <span>{personalInfo.status}</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>LOCAL TIME:</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{localTime || '11:30:00 AM IST'}</span>
          </div>
        </div>

        {/* Hero Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Bold Typography & CTAs */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                marginBottom: '12px',
                textTransform: 'uppercase'
              }}
            >
              // PORTFOLIO &bull;
            </div>

            <h1
              style={{
                fontSize: 'clamp(36px, 5.2vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}
            >
              {personalInfo.name}
            </h1>

            <h2
              style={{
                fontSize: 'clamp(20px, 2.8vw, 26px)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.02em',
                marginBottom: '20px'
              }}
            >
              {personalInfo.role} &bull; BCA Student
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                marginBottom: '32px'
              }}
            >
              Building a strong foundation in coding, creating user-friendly websites and software, working on projects, and exploring new technologies.

            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                title="Copy email to clipboard"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  padding: '11px 16px'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Minimal Interactive Terminal & System Widget */}
          <div>
            <div
              className="card-border"
              style={{
                background: 'var(--bg-subtle)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden'
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  padding: '10px 16px',
                  background: 'var(--bg-card)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--border)' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--border)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      marginLeft: '6px'
                    }}
                  >
                    system_console ~ v2.4
                  </span>
                </div>

                {/* Tab Switcher */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => setActiveTab('status')}
                    style={{
                      padding: '3px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '2px',
                      background: activeTab === 'status' ? 'var(--accent)' : 'transparent',
                      color: activeTab === 'status' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                    }}
                  >
                    sys_info
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    style={{
                      padding: '3px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '2px',
                      background: activeTab === 'terminal' ? 'var(--accent)' : 'transparent',
                      color: activeTab === 'terminal' ? 'var(--accent-fg)' : 'var(--text-secondary)'
                    }}
                  >
                    interactive_cli
                  </button>
                </div>
              </div>

              {/* Tab Content: System Info */}
              {activeTab === 'status' ? (
                <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px 16px', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--text-muted)' }}>developer:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Febin Jacob Ponnachan</span>

                    <span style={{ color: 'var(--text-muted)' }}>degree:</span>
                    <span style={{ color: 'var(--text-primary)' }}>Bachelor of Computer Applications (BCA)</span>

                    <span style={{ color: 'var(--text-muted)' }}>specialization:</span>
                    <span style={{ color: 'var(--text-primary)' }}>Full Stack Web & Systems</span>

                    <span style={{ color: 'var(--text-muted)' }}>core_stack:</span>
                    <span style={{ color: 'var(--text-primary)' }}>JavaScript, Python, Node.js, C/C++</span>

                    <span style={{ color: 'var(--text-muted)' }}>environment:</span>
                    <span style={{ color: 'var(--text-primary)' }}>Git, GitHub, VS Code, Linux/Windows</span>

                    <span style={{ color: 'var(--text-muted)' }}>status:</span>
                    <span style={{ color: 'var(--text-primary)' }}>Ready for internships & collaboration</span>
                  </div>

                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--text-muted)',
                      fontSize: '11px'
                    }}
                  >
                    <span>Click "interactive_cli" tab to run developer commands</span>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      style={{
                        color: 'var(--text-primary)',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      Open CLI &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                /* Tab Content: Interactive Terminal */
                <div
                  style={{
                    padding: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ overflowY: 'auto', maxHeight: '180px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ color: 'var(--text-muted)' }}>
                      Antigravity Terminal v1.0 &bull; Type 'help' for available commands.
                    </div>
                    {terminalHistory.map((item, index) => (
                      <div key={index} style={{ marginBottom: '4px' }}>
                        <div style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>guest@portfolio:~$ </span>
                          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.cmd}</span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', paddingLeft: '14px', marginTop: '2px' }}>
                          {item.output}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleTerminalSubmit} style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="type 'skills', 'whoami', 'projects'..."
                      style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        outline: 'none'
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        borderRadius: '2px'
                      }}
                    >
                      Run
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
