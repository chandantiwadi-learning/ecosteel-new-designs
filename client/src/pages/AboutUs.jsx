import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-pure">
      {/* Page Header */}
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Company Profile</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Eco Steel Engineering</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              We are a premier global manufacturer and stockholder of industrial steel piping products, committed to metallurgical precision and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Split Layout */}
      <section className="layout-section">
        <div className="layout-container">
          <div className="editorial-grid">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
              <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>Our Foundation</span>
              <h2 className="heading-section">Decades of Industrial Reliability.</h2>
              <p className="text-lead" style={{ marginBottom: '2rem' }}>
                Eco Steel Engineering was founded on the principle that critical industries cannot afford material failure. We have built our reputation by supplying zero-defect piping components to the world's most demanding environments.
              </p>
              <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', marginBottom: '1rem' }}>
                <strong>Quality First:</strong> We operate under a strict ISO 9001:2015 certified quality management system.
              </p>
              <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem' }}>
                <strong>Global Reach:</strong> With deep stockholding and robust logistics, we export to over 48 countries across the Middle East, Europe, and Asia.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/img/foundation-editorial.png" alt="Steel Forging Process" style={{ width: '80%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="layout-section bg-surface">
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
              whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(10, 17, 40, 0.12)' }}
              transition={{ duration: 0.3 }}
              style={{ background: 'var(--bg-pure)', padding: '4rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}
            >
              <span className="label-eyebrow">Our Vision</span>
              <h3 className="heading-card" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-navy)' }}>Leading the Global Supply Chain</h3>
              <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0, lineHeight: 1.8 }}>
                To be the most trusted and preferred partner for industrial piping solutions globally, recognized for our metallurgical expertise, unwavering quality, and commitment to sustainable engineering practices.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
              whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(10, 17, 40, 0.12)' }}
              transition={{ duration: 0.3, delay: 0.1 }} 
              style={{ background: 'var(--bg-pure)', padding: '4rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}
            >
              <span className="label-eyebrow">Our Mission</span>
              <h3 className="heading-card" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-navy)' }}>Precision in Every Order</h3>
              <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0, lineHeight: 1.8 }}>
                To consistently deliver defect-free products on time, providing our clients in critical sectors with materials they can trust, backed by complete transparency and technical support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
