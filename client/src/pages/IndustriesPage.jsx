import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { industriesData } from '../data/industries';

const IndustriesPage = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="eco-industries-page">
      
      {/* Page Header */}
      <section 
        style={{ 
          backgroundColor: 'var(--bg-dark-950)', 
          color: '#ffffff', 
          padding: '5rem 0 4rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Industries</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Global Sector Applications</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Critical Industrial Sectors
          </h1>
          <p className="text-lead on-dark">
            Eco Steel Engineering manufactures and exports certified piping systems, heavy flanges, and corrosion-resistant alloys engineered for high-consequence energy, chemical, and infrastructure projects worldwide.
          </p>
        </div>
      </section>

      {/* Industries Showcase List */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {industriesData.map((ind, idx) => (
              <div 
                key={ind.id}
                className="card-industrial"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '3rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span className="badge-tech accent">Sector 0{idx + 1}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-green)', fontSize: '1.25rem' }}>
                      <i className={`fas ${ind.icon}`}></i>
                    </div>
                    <h2 className="heading-section" style={{ fontSize: '1.875rem', margin: 0 }}>
                      {ind.name}
                    </h2>
                  </div>

                  <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                    {ind.desc}
                  </p>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand-green)', marginBottom: '0.5rem' }}>
                      Recommended Material Grades
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {ind.recommendedMaterials.map((m) => (
                        <span key={m} className="badge-tech" style={{ backgroundColor: 'var(--bg-surface)' }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                      className="btn-primary" 
                      onClick={() => onOpenRFQ(ind.name)}
                      style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
                    >
                      <i className="fas fa-file-contract"></i> Request Quote for {ind.name}
                    </button>
                    <Link to="/products" className="btn-secondary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
                      Browse Products
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '280px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)' }}>
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/img/Power industry.jpg';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Supply & Turnkey Package Banner */}
      <section className="layout-section section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="label-eyebrow on-dark">Full Project Packages</span>
          <h2 className="heading-section on-dark">Consolidated EPC Piping Procurement</h2>
          <p className="text-lead on-dark" style={{ marginBottom: '2.5rem' }}>
            We provide consolidated packages combining pipes, fittings, flanges, fasteners, and specialty gaskets under a single purchase order with unified EN 10204 3.1 certification.
          </p>
          <button className="btn-primary" onClick={() => onOpenRFQ('Consolidated EPC Package')}>
            <i className="fas fa-file-contract"></i> Submit Project Package BOM
          </button>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
