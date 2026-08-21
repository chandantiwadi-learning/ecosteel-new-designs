import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const QualityPage = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="premium-page bg-secondary">
      {/* Page Header */}
      <div className="premium-section bg-navy" style={{ padding: '100px 0 80px', textAlign: 'center' }}>
        <div className="premium-container">
          <span className="heading-eyebrow inverse">Quality Assurance</span>
          <h1 className="heading-display inverse" style={{ marginBottom: '16px' }}>Quality You Can Verify.</h1>
          <p className="text-lead inverse" style={{ margin: '0 auto' }}>
            We adhere to the highest global standards, ensuring structural integrity and precise material traceability for critical engineering applications.
          </p>
        </div>
      </div>

      <div className="premium-section bg-white">
        <div className="premium-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="heading-eyebrow">Certification & Traceability</span>
              <h2 className="heading-section">Material Test Certificates (MTC)</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                Every product dispatched from our facility is accompanied by detailed Material Test Certificates in accordance with EN 10204 3.1 or 3.2. We maintain 100% traceability from raw material ingot to final forged or machined component.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', color: 'var(--text-main)', fontSize: '15px' }}>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--brand-blue)', marginTop: '4px' }}></i>
                  <div>
                    <strong>Chemical Analysis</strong>
                    <div style={{ color: 'var(--text-muted)' }}>Positive Material Identification (PMI) confirming exact alloy composition.</div>
                  </div>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--brand-blue)', marginTop: '4px' }}></i>
                  <div>
                    <strong>Mechanical Testing</strong>
                    <div style={{ color: 'var(--text-muted)' }}>Tensile strength, yield strength, elongation, and hardness testing.</div>
                  </div>
                </li>
                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--brand-blue)', marginTop: '4px' }}></i>
                  <div>
                    <strong>Non-Destructive Testing (NDT)</strong>
                    <div style={{ color: 'var(--text-muted)' }}>Ultrasonic, radiographic, magnetic particle, and liquid penetrant inspection.</div>
                  </div>
                </li>
              </ul>
              
              <button className="btn-primary" onClick={() => onOpenRFQ()}>
                Request Quote with MTC Requirement
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <img src="/img/industrial-valves-banner.jpg" alt="Quality Testing Facility" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
              
              <div style={{ background: 'var(--bg-secondary)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <i className="fas fa-certificate" style={{ fontSize: '48px', color: 'var(--brand-blue)' }}></i>
                <div>
                  <h3 style={{ margin: '0 0 8px', color: 'var(--text-heading)', fontSize: '20px' }}>Third-Party Inspection (TPI)</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px' }}>
                    We welcome inspection by TUV, SGS, Bureau Veritas, DNV GL, Lloyd's Register, and EIL for all critical orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPage;
