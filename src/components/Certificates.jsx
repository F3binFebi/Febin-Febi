import React, { useState } from 'react';
import { certificatesList } from '../data/certificatesData';
import { Award, ExternalLink, Eye, ShieldCheck, Calendar } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 04. CERTIFICATES</span>
          <h2 className="section-title">Verified Certifications & Accreditations</h2>
          <p className="section-desc">
            Formal technical certifications, computer science accreditations, and specialized coursework verifications.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="card-border"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px'
              }}
            >
              {/* Top metadata */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {cert.issuer}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    lineHeight: 1.35
                  }}
                >
                  {cert.title}
                </h3>

                {/* Minimalist Document Preview Box */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  title="Click to preview certificate"
                  style={{
                    border: '1px dashed var(--border-strong)',
                    background: 'var(--bg-subtle)',
                    padding: '16px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '16px',
                    transition: 'border-color 0.15s ease, background 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <ShieldCheck size={14} />
                      <span>{cert.previewDetails?.type || 'Certificate of Completion'}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      <Eye size={13} />
                    </span>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)' }}>
                    Recipient: {cert.previewDetails?.recipient || 'Febin Jacob Ponnachan'}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    <span>ID: {cert.credentialId}</span>
                    <span style={{ color: 'var(--text-primary)' }}>Verified</span>
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.skillsLearned.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 7px',
                        borderRadius: '2px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsLearned.length > 3 && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 7px',
                        color: 'var(--text-muted)'
                      }}
                    >
                      +{cert.skillsLearned.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  gap: '8px'
                }}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={14} />
                  <span>View Certificate</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="Verify on original issuing portal"
                  aria-label={`Verify ${cert.title} on issuer website`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
