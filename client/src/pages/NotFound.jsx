import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="eco-notfound-page">
      <section 
        style={{ 
          backgroundColor: 'var(--bg-dark-950)', 
          color: '#ffffff', 
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '6rem', fontWeight: '900', color: 'var(--brand-green-accent)', fontFamily: 'var(--font-mono)', lineHeight: 1, marginBottom: '1.5rem' }}>
            404
          </div>
          <h1 className="heading-section on-dark" style={{ marginBottom: '1rem' }}>
            Specification Page Not Found
          </h1>
          <p className="text-lead on-dark" style={{ marginBottom: '2.5rem' }}>
            The requested technical document, catalog route, or resource URL may have moved or been updated under our standard engineering directory.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>
              <i className="fas fa-home"></i> Return to Homepage
            </Link>
            <Link to="/products" className="btn-secondary on-dark" style={{ padding: '0.875rem 2rem' }}>
              Explore Products Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
