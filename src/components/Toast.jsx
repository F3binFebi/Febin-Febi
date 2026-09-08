import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'var(--accent)',
        color: 'var(--accent-fg)',
        padding: '12px 18px',
        borderRadius: '4px',
        fontSize: '13px',
        fontWeight: 500,
        boxShadow: 'var(--shadow-lg)',
        fontFamily: 'var(--font-sans)',
        maxWidth: 'calc(100vw - 48px)',
        animation: 'modal-fade-in 0.2s ease-out'
      }}
    >
      <CheckCircle2 size={16} aria-hidden="true" />
      <span>{message}</span>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        style={{
          marginLeft: '8px',
          color: 'inherit',
          opacity: 0.7,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={14} />
      </button>
    </aside>
  );
}
