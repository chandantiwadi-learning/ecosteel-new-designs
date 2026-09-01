import React, { useState } from 'react';

const WhatsAppFloating = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {/* Tooltip on Hover */}
      {isHovered && (
        <div
          style={{
            backgroundColor: '#0a0f1d',
            color: '#ffffff',
            padding: '0.5rem 0.875rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '600',
            whiteSpace: 'nowrap'
          }}
        >
          Direct Sales Desk
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/919321743595?text=Hello%20Eco%20Steel%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Eco Steel on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.75rem',
          boxShadow: '0 6px 20px rgba(34, 197, 94, 0.4)',
          textDecoration: 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.4)';
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
