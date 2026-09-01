import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { materialsData } from '../data/materials';

const MaterialsPage = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="eco-materials-page">
      
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
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Materials Hub</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Metallurgical Directory & Alloy Systems</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Specialty Materials & Alloys
          </h1>
          <p className="text-lead on-dark">
            Our comprehensive metallurgical inventory spans Austenitic & Super Austenitic Stainless Steels, Duplex & Super Duplex, High-Nickel Superalloys (Inconel, Monel, Hastelloy), and Marine Cupro-Nickel.
          </p>
        </div>
      </section>

      {/* Materials List */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {materialsData.map((mat) => (
              <div 
                key={mat.id}
                className="card-industrial"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '3rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span className="badge-tech accent">{mat.badge}</span>
                    <span className="badge-tech">{mat.category}</span>
                  </div>

                  <h2 className="heading-section" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    {mat.name}
                  </h2>

                  <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {mat.desc}
                  </p>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand-green)', marginBottom: '0.5rem' }}>
                      Popular Stocked Grades
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {mat.popularGrades.map((g) => (
                        <span key={g} className="badge-tech" style={{ fontSize: '0.8125rem', backgroundColor: 'var(--bg-surface)' }}>
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link to={`/materials/${mat.slug}`} className="btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
                      Full Alloy Data Sheet <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                    <button 
                      className="btn-secondary" 
                      onClick={() => onOpenRFQ(mat.name)}
                      style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
                    >
                      Inquire Material
                    </button>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dark-primary)', marginBottom: '1rem' }}>
                    Key Engineering Attributes
                  </h3>
                  <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {mat.keyFeatures && mat.keyFeatures.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-dark-secondary)' }}>
                        <i className="fas fa-check-circle" style={{ color: 'var(--brand-green)', marginTop: '0.2rem' }}></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default MaterialsPage;
