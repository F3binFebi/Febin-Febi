import { X, ExternalLink, CheckCircle, Star, GitFork } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px' }}
      >
        {/* Modal Top Bar */}
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
            <span className="badge">{project.category}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)'
              }}
            >
              // ID: {project.id}
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

        {/* Project Header */}
        <h3
          id="modal-project-title"
          style={{
            fontSize: '24px',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}
        >
          {project.description}
        </p>

        {/* Key Highlights */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            // Key Engineering Highlights
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)'
                }}
              >
                <CheckCircle size={15} style={{ color: 'var(--text-primary)', marginTop: '2px', flexShrink: 0 }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            // Technologies Used
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
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
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)'
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
