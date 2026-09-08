import React, { useState } from 'react';
import { skillCategories, skillsList } from '../data/skillsData';
import { Code2, Terminal, Cpu, Layers, Server, GitBranch, Laptop, FileCode, Binary, Palette, Check, Copy } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Skills({ onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  // Map icon names to Lucide icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      case 'FileCode': return <FileCode size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Binary': return <Binary size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Server': return <Server size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'Github': return <GithubIcon size={18} />;
      case 'Laptop': return <Laptop size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  const handleCopySnippet = (snippet, skillName, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(skillName);
    if (onShowToast) {
      onShowToast(`Copied snippet for ${skillName}`);
    }
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// 02. TECHNICAL SKILLS</span>
          <h2 className="section-title">Technologies & Development Tools</h2>
          <p className="section-desc">
            Organized by functional domains. Cleanly structured without artificial percentage bars, highlighting practical application and system competence.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px'
          }}
        >
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count = cat.id === 'all' ? skillsList.length : skillsList.filter((s) => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--accent)' : 'var(--border)',
                  background: isSelected ? 'var(--accent)' : 'var(--bg-subtle)',
                  color: isSelected ? 'var(--accent-fg)' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    opacity: 0.8
                  }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px'
          }}
        >
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.name === skill.name;
            const isCopied = copiedSnippet === skill.name;

            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="card-border"
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  borderColor: isSelected ? 'var(--text-primary)' : 'var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  position: 'relative'
                }}
              >
                {/* Top: Icon + Name + Badge */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        background: 'var(--bg-subtle)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {getIcon(skill.icon)}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill.experience}
                  </p>
                </div>

                {/* Bottom: Minimal Code / Command Chip with Copy Action */}
                <div
                  onClick={(e) => handleCopySnippet(skill.codeSnippet, skill.name, e)}
                  title="Click to copy snippet"
                  style={{
                    padding: '8px 10px',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <span
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {skill.codeSnippet}
                  </span>
                  <span style={{ color: 'var(--text-primary)', flexShrink: 0 }}>
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Contextual Inspector Drawer */}
        {selectedSkill && (
          <div
            className="card-border"
            style={{
              marginTop: '28px',
              padding: '24px',
              background: 'var(--bg-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--accent)',
                  color: 'var(--accent-fg)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getIcon(selectedSkill.icon)}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700 }}>{selectedSkill.name}</h4>
                  <span className="badge">{selectedSkill.level}</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {selectedSkill.experience}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  background: 'var(--bg-card)',
                  padding: '6px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  color: 'var(--text-primary)'
                }}
              >
                {selectedSkill.codeSnippet}
              </code>
              <button
                onClick={(e) => handleCopySnippet(selectedSkill.codeSnippet, selectedSkill.name, e)}
                className="btn btn-secondary btn-sm"
                title="Copy code snippet"
              >
                {copiedSnippet === selectedSkill.name ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedSnippet === selectedSkill.name ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
