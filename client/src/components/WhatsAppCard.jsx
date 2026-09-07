import React from 'react';

/**
 * WhatsApp Chat Now Card Component
 * Replicates the "Connect & Download / WhatsApp Chat" card shown in reference design
 * 
 * @param {Object} props
 * @param {string} [props.phoneNumber="919321743595"] - WhatsApp phone number with country code
 * @param {string} [props.defaultMessage="Hello Eco Steel Engineering, I would like to inquire about your products."] - Pre-filled default message
 * @param {string} [props.theme="auto"] - "light" | "dark" | "auto"
 * @param {string} [props.title="CONNECT & DOWNLOAD"] - Header text above the card
 */
const WhatsAppCard = ({
  phoneNumber = "912235346200",
  defaultMessage = "Hello ECO STEEL, I came across your website and would like to learn more about your products and services. Please share more information with me.",
  theme = "auto",
  title = "CONNECT & DOWNLOAD"
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="whatsapp-card-container">
      {title && (
        <h4 
          style={{ 
            color: theme === 'dark' ? '#ffffff' : 'inherit', 
            fontSize: '0.9375rem', 
            fontFamily: 'var(--font-display, sans-serif)', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            marginBottom: '1.25rem' 
          }}
        >
          {title}
        </h4>
      )}

      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(34, 197, 94, 0.06)' : '#f0fdf4',
          border: theme === 'dark' ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid #bbf7d0',
          borderRadius: '16px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        {/* Large Centered WhatsApp Icon */}
        <div
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '20px',
            backgroundColor: '#25D366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
            marginBottom: '1.25rem'
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </div>

        {/* Subtitle Caption */}
        <div
          style={{
            color: theme === 'dark' ? '#a7f3d0' : '#15803d',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            lineHeight: '1.4'
          }}
        >
          (CLICK HERE TO CHAT ON WHATSAPP)
        </div>

        {/* Chat Now Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            backgroundColor: '#25D366',
            color: '#ffffff',
            padding: '0.75rem 1.25rem',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '0.9375rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#16a34a';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#25D366';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '1.125rem' }}></i> Chat Now
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCard;
