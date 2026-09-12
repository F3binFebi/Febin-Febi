import React, { useState } from 'react';
import { socialLinks } from '../data/portfolioData';
import { Mail, Send, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, DiscordIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Map social names to icons
  const getSocialIcon = (name) => {
    switch (name) {
      case 'Email': return <Mail size={18} />;
      case 'GitHub': return <GithubIcon size={18} />;
      case 'LinkedIn': return <LinkedinIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      case 'Discord': return <DiscordIcon size={18} />;
      default: return <Mail size={18} />;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Client-side validation
    if (!name) {
      onShowToast('Please enter your name.');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      onShowToast('Please enter a valid email address.');
      return;
    }

    if (!message) {
      onShowToast('Please enter your message.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send the form data to the Express backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject: formData.subject.trim(),
          message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        onShowToast(data.message || 'Message received successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Server returned an error (e.g., 400 Bad Request)
        onShowToast(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Network failure or backend not running
      onShowToast('Server is unreachable. Please ensure the backend server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('febinjacobponnachan@gmail.com');
    setCopiedEmail(true);
    onShowToast('Copied febinjacobponnachan@gmail.com to clipboard');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 05. GET IN TOUCH</span>
          <h2 className="section-title">Contact & Communication Channels</h2>
          <p className="section-desc">
            Have an internship opening, a project idea, or simply want to connect? Send a direct message or reach out across any channel below.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left: Direct Social & Contact Channels */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                Direct Connections
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Feel free to message me directly. I am prompt to respond regarding academic, full-stack, and software engineering opportunities.
              </p>
            </div>

            {/* Social Channels List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="card-border"
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'var(--bg-card)'
                  }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      textDecoration: 'none',
                      color: 'inherit',
                      flex: 1
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {getSocialIcon(social.name)}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {social.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {social.handle}
                      </div>
                    </div>
                  </a>

                  {social.name === 'Email' ? (
                    <button
                      onClick={handleCopyEmail}
                      className="btn btn-secondary btn-sm"
                      title="Copy email to clipboard"
                      style={{ padding: '6px 10px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}
                    >
                      {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  ) : (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '6px 10px' }}
                      aria-label={`Open ${social.name}`}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Status Pill */}
            <div
              className="card-border"
              style={{
                padding: '18px 20px',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div className="status-dot" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                <strong>Current Status:</strong> Actively exploring Full Stack Developer internship opportunities & technical collaborations.
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
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
                marginBottom: '6px',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}
            >
              Send a Message
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Fill out the form below to reach me directly.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  background: 'var(--bg-subtle)',
                  borderRadius: '4px',
                  border: '1px solid var(--border)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'var(--accent-fg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <Check size={20} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>
                  Message Sent Successfully
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '380px', margin: '0 auto 20px' }}>
                  Thank you for getting in touch. I have received your message and will reply to your email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    Subject (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Internship / Collaboration"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your inquiry, internship proposal, or project details..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px'
                  }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
