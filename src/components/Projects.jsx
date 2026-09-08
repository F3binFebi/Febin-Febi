import React, { useState } from 'react';
import { projectsList } from '../data/projectsData';
import { ExternalLink, ArrowRight, Eye, Code, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Minimal monochrome architectural preview visualizer
  const renderPreviewVisual = (project) => {
    switch (project.previewType) {
      case 'kanban':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', height: '100%' }}>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border-subtle)', padding: '8px', borderRadius: '3px' }}>
              <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>TODO (3)</div>
              <div style={{ height: '12px', background: 'var(--bg-subtle)', borderRadius: '2px', marginBottom: '4px' }} />
              <div style={{ height: '12px', background: 'var(--bg-subtle)', borderRadius: '2px' }} />
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border-subtle)', padding: '8px', borderRadius: '3px' }}>
              <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>IN PROGRESS</div>
              <div style={{ height: '18px', background: 'var(--border)', borderRadius: '2px', marginBottom: '4px' }} />
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border-subtle)', padding: '8px', borderRadius: '3px' }}>
              <div style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>DONE (8)</div>
              <div style={{ height: '12px', background: 'var(--bg-subtle)', borderRadius: '2px' }} />
            </div>
          </div>
        );
      case 'editor':
        return (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--border-strong)' }}>1</span>
              <span>import &#123; createEngine &#125; from 'vault-core';</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--border-strong)' }}>2</span>
              <span>const vault = new CodeVault(&#123; mode: 'strict' &#125;);</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--border-strong)' }}>3</span>
              <span style={{ color: 'var(--text-primary)' }}>vault.indexSnippets(['py', 'js', 'cpp']);</span>
            </div>
          </div>
        );
      case 'portal':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', height: '100%' }}>
            <div style={{ borderRight: '1px solid var(--border-subtle)', paddingRight: '8px' }}>
              <div style={{ width: '80%', height: '8px', background: 'var(--border)', marginBottom: '6px' }} />
              <div style={{ width: '60%', height: '6px', background: 'var(--bg-subtle)', marginBottom: '4px' }} />
              <div style={{ width: '70%', height: '6px', background: 'var(--bg-subtle)' }} />
            </div>
            <div>
              <div style={{ width: '100%', height: '14px', background: 'var(--bg-subtle)', marginBottom: '6px', borderRadius: '2px' }} />
              <div style={{ width: '90%', height: '10px', background: 'var(--bg-subtle)', marginBottom: '4px', borderRadius: '2px' }} />
              <div style={{ width: '75%', height: '10px', background: 'var(--bg-subtle)', borderRadius: '2px' }} />
            </div>
          </div>
        );
      case 'graph':
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%' }}>
            <div style={{ padding: '4px 8px', border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '9px', background: 'var(--bg)' }}>
              *head [0x7ffe]
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>&rarr;</span>
            <div style={{ padding: '4px 8px', border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '9px', background: 'var(--bg)' }}>
              node_01 [val: 42]
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>&rarr;</span>
            <div style={{ padding: '4px 8px', border: '1px dashed var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: '9px' }}>
              NULL
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 03. PROJECTS & CODE</span>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-desc">
            A curated collection of full-stack web applications, developer utilities, and academic software implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="card-border"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              {/* Project Preview Box */}
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  borderBottom: '1px solid var(--border)',
                  padding: '16px',
                  minHeight: '130px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Simulated Wireframe Window Chrome */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border-strong)' }} />
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border)' }} />
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--border)' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        marginLeft: '4px'
                      }}
                    >
                      {project.id}.app
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Visual Representation */}
                <div style={{ padding: '6px 0' }}>
                  {renderPreviewVisual(project)}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      marginBottom: '16px'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '24px'
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          borderRadius: '2px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
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
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub repository"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View Live Demonstration"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    title="View Project Specifications"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
