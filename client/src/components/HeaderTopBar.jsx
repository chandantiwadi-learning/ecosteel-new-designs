import React from 'react';

const HeaderTopBar = () => {
  return (
    <div 
      className="eco-utility-bar"
      style={{ 
        backgroundColor: '#060911', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#94a3b8', 
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-display)',
        padding: '0.5rem 0'
      }}
    >
      <div className="layout-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        
        {/* Left Credentials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-green-accent)', fontWeight: '700' }}>
            <i className="fas fa-shield-alt"></i> ISO 9001:2015 CERTIFIED
          </span>
          <span className="hide-mobile" style={{ color: '#64748b' }}>|</span>
          <span className="hide-mobile" style={{ color: '#cbd5e1' }}>
            <i className="fas fa-globe-americas" style={{ color: 'var(--brand-blue)', marginRight: '0.35rem' }}></i> Global Stockholder & Exporter (48+ Nations)
          </span>
          <span className="hide-tablet" style={{ color: '#64748b' }}>|</span>
          <span className="hide-tablet" style={{ color: '#94a3b8' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '0.35rem' }}></i> Mumbai, India
          </span>
        </div>

        {/* Right Contact Quick-Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a 
            href="tel:+912266518841" 
            style={{ color: '#cbd5e1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
            className="hide-mobile"
          >
            <i className="fas fa-phone-alt" style={{ color: 'var(--brand-green-accent)', fontSize: '0.75rem' }}></i> +91 22 6651 8841
          </a>
          <a 
            href="mailto:sales@ecosteels.com" 
            style={{ color: '#cbd5e1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
          >
            <i className="fas fa-envelope" style={{ color: 'var(--brand-blue)', fontSize: '0.75rem' }}></i> sales@ecosteels.com
          </a>
          <a 
            href="https://wa.me/919321743595?text=Hello%20Eco%20Steel%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20piping%20products." 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#22c55e', 
              fontWeight: '700', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem',
              background: 'rgba(34, 197, 94, 0.1)',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp Direct
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hide-tablet { display: none !important; }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .eco-utility-bar { padding: 0.35rem 0; }
        }
      `}</style>
    </div>
  );
};

export default HeaderTopBar;
