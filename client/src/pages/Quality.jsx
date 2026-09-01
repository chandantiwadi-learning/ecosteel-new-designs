import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const Quality = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="eco-quality-page">
      
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
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Quality Assurance</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Zero-Defect Quality Policy</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Certified Quality Assurance
          </h1>
          <p className="text-lead on-dark">
            Our ISO 9001:2015 certified quality management system ensures 100% material traceability, rigorous non-destructive examination (NDE), and complete EN 10204 3.1 Material Test Certificate compliance.
          </p>
        </div>
      </section>

      {/* Quality Credentials Strip */}
      <section className="trust-strip">
        <div className="layout-container">
          <div className="trust-strip-grid">
            <div className="trust-metric-item">
              <div className="trust-metric-val">ISO 9001:2015</div>
              <div className="trust-metric-label">Quality Management</div>
            </div>
            <div className="trust-metric-item">
              <div className="trust-metric-val">PED 2014/68/EU</div>
              <div className="trust-metric-label">Pressure Equipment Directive</div>
            </div>
            <div className="trust-metric-item">
              <div className="trust-metric-val">EN 10204 3.1</div>
              <div className="trust-metric-label">Test Certification</div>
            </div>
            <div className="trust-metric-item">
              <div className="trust-metric-val">100% PMI</div>
              <div className="trust-metric-label">Spectrometric Validation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Methodology Split */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div className="editorial-grid" style={{ marginBottom: '5rem' }}>
            <div>
              <span className="label-eyebrow">Inspection Framework</span>
              <h2 className="heading-section">
                Stringent Testing at Every Manufacturing Stage
              </h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
                At Eco Steel Engineering, quality is not an afterthought—it is engineered into every stage from raw billet sourcing to final export dispatch.
              </p>
              <p style={{ color: 'var(--text-dark-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                We maintain calibrated testing equipment and qualified ASNT Level II certified inspection personnel to conduct non-destructive testing (NDT), hydrostatic burst testing, and microstructural analysis.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', borderTop: '3px solid var(--brand-green)' }}>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-dark-primary)', marginBottom: '0.5rem' }}>Non-Destructive Testing</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                    PMI Spectrometry, Ultrasonic (UT), Radiography (RT), Magnetic Particle (MPI), and Dye Penetrant (DPT).
                  </p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', borderTop: '3px solid var(--brand-blue)' }}>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-dark-primary)', marginBottom: '0.5rem' }}>Destructive & Chemical</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                    Tensile Yield, Charpy V-Notch Impact, Rockwell/Brinell Hardness, and Intergranular Corrosion (ASTM A262).
                  </p>
                </div>
              </div>

              <button className="btn-primary" onClick={() => onOpenRFQ()}>
                <i className="fas fa-file-contract"></i> Request Sample MTC & Testing Plan
              </button>
            </div>

            {/* Quality Timeline */}
            <div style={{ backgroundColor: 'var(--bg-surface)', padding: '3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark-primary)', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
                4-Stage Verification Workflow
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--brand-green)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.875rem' }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-dark-primary)', marginBottom: '0.25rem' }}>Raw Material Receipt & PMI</h4>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                      Verification of primary mill test certificates, optical emission PMI, and heat code correlation.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.875rem' }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-dark-primary)', marginBottom: '0.25rem' }}>In-Process Dimensional Inspection</h4>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                      Caliper, micrometer, wall thickness, and bevel angle checks throughout forging and machining.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f59e0b', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.875rem' }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-dark-primary)', marginBottom: '0.25rem' }}>NDT & Pressure Validation</h4>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                      Hydrostatic test to specified holding pressure, Ultrasonic flaw detection, and surface inspection.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#8b5cf6', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.875rem' }}>
                    4
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-dark-primary)', marginBottom: '0.25rem' }}>TPI Inspection & MTC Dispatch</h4>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: '1.5' }}>
                      Third-party inspection endorsement (TUV/SGS/Lloyd's) and generation of EN 10204 3.1 certificate.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Third-Party Inspection Agencies */}
          <div style={{ backgroundColor: 'var(--bg-dark-900)', color: '#ffffff', padding: '3.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', textAlign: 'center' }}>
            <span className="label-eyebrow on-dark">Independent Verification</span>
            <h2 className="heading-section on-dark" style={{ marginBottom: '1.5rem' }}>Third-Party Inspection (TPI) Partners</h2>
            <p className="text-lead on-dark" style={{ margin: '0 auto 2.5rem', maxWidth: '720px' }}>
              We regularly execute customer purchase orders under the direct scrutiny and stamp of globally accredited inspection authorities:
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['TÜV SÜD', 'SGS India', 'DNV GL', 'Lloyd\'s Register', 'Bureau Veritas', 'Velosi', 'Engineers India Limited (EIL)', 'ABS Marine'].map((agency, i) => (
                <span 
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '0.875rem 1.75rem',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  {agency}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Quality;
