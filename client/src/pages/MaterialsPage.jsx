import React from 'react';
import { motion } from 'framer-motion';
import { materialsData } from '../data/materials';
import { Link, useOutletContext } from 'react-router-dom';

const MaterialsPage = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="bg-pure">
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Metallurgy Hub</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Specialty Materials</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              Our extensive metallurgical expertise covers everything from standard Austenitic Stainless Steel to High-Performance Nickel Alloys and Titanium.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="layout-section">
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {materialsData.map((mat, idx) => (
              <motion.div 
                key={mat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ 
                  background: 'var(--bg-pure)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: 'var(--radius-sm)',
                  padding: '4rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>{mat.badge}</span>
                  <h2 className="heading-section" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{mat.name}</h2>
                  <p className="text-lead" style={{ marginBottom: '2.5rem' }}>{mat.desc}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-navy)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Popular Grades</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {mat.popularGrades.map((grade, i) => (
                        <span key={i} style={{ padding: '0.5rem 1rem', background: 'var(--bg-surface)', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-navy)' }}>
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn-secondary" onClick={() => onOpenRFQ()}>Inquire Material</button>
                </div>

                <div style={{ background: 'var(--bg-offwhite)', padding: '3rem', borderRadius: 'var(--radius-sm)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-navy)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Characteristics</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {mat.keyFeatures && mat.keyFeatures.map((char, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <i className="fas fa-check" style={{ color: 'var(--accent-blue)', marginTop: '0.25rem' }}></i>
                        <span style={{ color: 'var(--text-slate)', fontSize: '1.125rem' }}>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialsPage;
