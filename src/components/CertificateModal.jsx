import React, { useEffect } from 'react';
import { X, Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-cert-title">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px', maxWidth: '600px' }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} style={{ color: 'var(--text-primary)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
              DOCUMENT PREVIEW &bull; ID: {cert.credentialId}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              padding: '6px',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Simulated Document Preview Container */}
        <div
          style={{
            border: '2px solid var(--text-primary)',
            padding: '28px 24px',
            background: 'var(--bg-subtle)',
            borderRadius: '4px',
            textAlign: 'center',
            marginBottom: '24px',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}
          >
            <ShieldCheck size={14} />
            <span>Verified Credential &bull; {cert.issuer}</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              marginBottom: '8px'
            }}
          >
            This certifies that
          </div>

          <div
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}
          >
            {cert.previewDetails?.recipient || 'Febin Jacob Ponnachan'}
          </div>

          <div
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '16px'
            }}
          >
            has successfully fulfilled the curriculum requirements for
          </div>

          <h3
            id="modal-cert-title"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              lineHeight: 1.3
            }}
          >
            {cert.title}
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)'
            }}
          >
            <div>
              <span>DATE: </span>
              <strong style={{ color: 'var(--text-primary)' }}>{cert.date}</strong>
            </div>
            <div>
              <span>STATUS: </span>
              <strong style={{ color: 'var(--text-primary)' }}>{cert.previewDetails?.verificationStatus}</strong>
            </div>
            <div>
              <span>RATING: </span>
              <strong style={{ color: 'var(--text-primary)' }}>{cert.previewDetails?.score}</strong>
            </div>
          </div>
        </div>

        {/* Description & Competencies */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
            {cert.description}
          </p>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}
          >
            // Covered Concepts & Competencies
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {cert.skillsLearned.map((skill) => (
              <span key={skill} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)'
          }}
        >
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Verify on Issuer Site</span>
            <ExternalLink size={14} />
          </a>

          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
