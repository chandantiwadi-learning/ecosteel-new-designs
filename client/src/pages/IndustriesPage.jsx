import React from 'react';
import { motion } from 'framer-motion';
import { industriesData } from '../data/industries';
import { Link, useOutletContext } from 'react-router-dom';

const IndustriesPage = () => {
  const { onOpenRFQ } = useOutletContext();

  return (
    <div className="bg-pure">
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Sectors Served</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Global Industries</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              We supply high-integrity steel piping components to the world's most critical and demanding industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="layout-section">
        <div className="layout-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {industriesData.map((ind, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={ind.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '6rem', 
                    alignItems: 'center',
                    direction: isEven ? 'ltr' : 'rtl'
                  }}
                >
                  {/* Image Column */}
                  <div style={{ direction: 'ltr', position: 'relative', height: '400px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-surface)' }}></div>
                    <img src="/img/industrial-valves-banner.jpg" alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
                  </div>

                  {/* Text Column */}
                  <div style={{ direction: 'ltr' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '300', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>0{idx + 1}</span>
                    <h2 className="heading-section" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{ind.name}</h2>
                    <p className="text-lead" style={{ marginBottom: '2.5rem' }}>{ind.desc}</p>
                    <button className="btn-secondary" onClick={() => onOpenRFQ()}>Request Project Quote</button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
