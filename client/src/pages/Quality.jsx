import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Quality = () => {
  return (
    <div className="bg-pure">
      {/* Page Header */}
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Assurance</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Quality Control.</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              We maintain an uncompromising approach to quality, ensuring every product meets strict international metallurgical standards before dispatch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vertical Quality Timeline (Editorial) */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="editorial-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>Methodology</span>
              <h2 className="heading-section">The Eco Steel Process.</h2>
              <p className="text-lead" style={{ marginBottom: '3rem' }}>
                Our ISO 9001:2015 certified quality management system governs every step of our supply chain, from raw material procurement to final packaging.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>Non-Destructive Testing</h4>
                  <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>Ultrasonic, Radiography, Magnetic Particle, and PMI testing.</p>
                </div>
                <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>Destructive Testing</h4>
                  <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>Tensile, Hardness, Impact, and Microstructure analysis.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ paddingLeft: '4rem', borderLeft: '1px solid var(--border-subtle)' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-4rem', width: '2rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>01 / RAW MATERIAL VERIFICATION</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Source & Inspect</h3>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0 }}>We procure raw materials exclusively from approved international mills. Every batch undergoes Positive Material Identification (PMI) upon arrival.</p>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-4rem', width: '2rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>02 / IN-PROCESS CONTROL</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Machining & Fabrication</h3>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0 }}>Strict dimensional checks and visual inspections are conducted continuously during the forging, cutting, and welding processes.</p>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-4rem', width: '2rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>03 / FINAL TESTING</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Hydrostatic & NDT</h3>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0 }}>Completed products are subjected to required pressure testing (Hydrostatic) and defect scanning (Ultrasonic/Radiography).</p>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-4rem', width: '2rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>04 / CERTIFICATION</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>EN 10204 3.1 MTC</h3>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0 }}>100% material traceability is guaranteed. We supply detailed Material Test Certificates conforming to EN 10204 3.1 with every order.</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Party Agencies */}
      <section className="layout-section bg-surface">
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <span className="label-eyebrow">Independent Verification</span>
          <h2 className="heading-section" style={{ marginBottom: '3rem' }}>Third Party Inspection</h2>
          <p className="text-lead" style={{ margin: '0 auto 4rem', maxWidth: '800px' }}>
            We regularly execute orders under the scrutiny of globally recognized Third Party Inspection (TPI) agencies, ensuring absolute compliance with client specifications.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {['TÜV SÜD', 'SGS', 'DNV', 'Lloyd\'s Register', 'Bureau Veritas', 'Velosi', 'EIL'].map((agency, i) => (
              <span key={i} style={{ padding: '1rem 2rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-navy)' }}>
                {agency}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
