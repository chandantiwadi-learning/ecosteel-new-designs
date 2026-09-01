import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const AboutUs = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="eco-about-page">
      
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
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>About Us</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Decades of Metallurgical Excellence</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Eco Steel Engineering
          </h1>
          <p className="text-lead on-dark">
            A trusted international manufacturer, stockholder, supplier, and exporter of high-integrity piping components, flanges, fittings, and specialty alloys for critical industrial infrastructure.
          </p>
        </div>
      </section>

      {/* Foundation & Heritage Split */}
      <section className="layout-section section-light">
        <div className="layout-container">
          <div className="editorial-grid">
            
            <div>
              <span className="label-eyebrow">Our Foundation</span>
              <h2 className="heading-section">
                Engineering Precision.<br />
                <span style={{ color: 'var(--brand-green)' }}>Built for Harsh Environments.</span>
              </h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
                Eco Steel Engineering was established with a singular objective: to eliminate component failure in high-pressure, extreme-temperature, and corrosive industrial applications.
              </p>
              <p style={{ color: 'var(--text-dark-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                From our corporate headquarters in Mumbai and manufacturing facilities in Vasai, Maharashtra, we manage extensive stockholding of raw billets, forgings, seamless pipes, and plates. Every item is traceable to its primary heat number and verified via in-house PMI optical emission spectrometry.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-green)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-dark-primary)', fontFamily: 'var(--font-display)' }}>48+</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>Export Destinations</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-blue)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-dark-primary)', fontFamily: 'var(--font-display)' }}>ISO 9001</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>2015 Certified QMS</div>
                </div>
              </div>

              <button className="btn-primary" onClick={() => onOpenRFQ()}>
                <i className="fas fa-file-contract"></i> Contact Engineering Sales Desk
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)', border: '1px solid var(--border-light)' }}>
                <img 
                  src="/img/foundation-editorial.png" 
                  alt="Eco Steel Engineering Forging and Stockholding" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities & Capabilities */}
      <section className="layout-section section-dark">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow on-dark">Operational Infrastructure</span>
            <h2 className="heading-section on-dark">Manufacturing & Stockholding Facilities</h2>
            <p className="text-lead on-dark" style={{ margin: '0 auto' }}>
              Strategic manufacturing and warehouse nodes ensuring rapid dispatch to international seaports and airports.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            <div className="card-industrial on-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(34, 197, 94, 0.12)', color: 'var(--brand-green-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-industry"></i>
              </div>
              <h3 className="heading-card on-dark" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Manufacturing Plant (Vasai, Thane)
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Equipped with heavy forging hammers, CNC lathes, beveling stations, heat-treatment furnaces, and hydrostatic testing apparatus.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                Location: G7, Unit 11, Dhumal Nagar, Waliv, Vasai East, Thane – 401208, Maharashtra.
              </div>
            </div>

            <div className="card-industrial on-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(2, 132, 199, 0.12)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-building"></i>
              </div>
              <h3 className="heading-card on-dark" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Corporate Office (Mumbai)
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Commercial headquarters managing international contracts, technical sales, tender documentation, export logistics, and client coordination.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                Location: 107/111, Matka Building, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Mumbai – 400 004.
              </div>
            </div>

            <div className="card-industrial on-dark">
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-boxes"></i>
              </div>
              <h3 className="heading-card on-dark" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Export Packaging & Stockyard
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Specialized fumigated wooden crating, plastic end caps, rust-preventive oil coating, and steel strapping for secure sea and air freight.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                Proximity to JNPT Port and Mumbai International Airport.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="layout-section section-surface">
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            
            <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)' }}>
              <span className="label-eyebrow">Strategic Vision</span>
              <h3 className="heading-card" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Global Supply Chain Benchmark</h3>
              <p style={{ color: 'var(--text-dark-secondary)', lineHeight: '1.8', margin: 0 }}>
                To be recognized worldwide as the most dependable and technically proficient partner for industrial steel piping solutions, setting industry standards for metallurgical precision, transparent certification, and ethical business conduct.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-card)' }}>
              <span className="label-eyebrow">Corporate Mission</span>
              <h3 className="heading-card" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Zero-Defect Delivery On Time</h3>
              <p style={{ color: 'var(--text-dark-secondary)', lineHeight: '1.8', margin: 0 }}>
                To consistently supply defect-free, rigorously tested piping components that empower global industries to operate safely and efficiently, backed by complete material traceability, technical expertise, and rapid responsive logistics.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
