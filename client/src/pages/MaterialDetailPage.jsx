import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { materialsData } from '../data/materials';
import { productsData } from '../data/products';
import NotFound from './NotFound';

const MaterialDetailPage = () => {
  const { slug } = useParams();
  const { onOpenRFQ } = useOutletContext();

  const material = materialsData.find((m) => m.slug === slug);
  
  if (!material) {
    return <NotFound />;
  }

  const compatibleProducts = productsData.filter((p) => p.materials && p.materials.includes(material.name));

  return (
    <div className="bg-pure">
      {/* Material Hero */}
      <section className="layout-section" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="layout-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-light)' }}>
            <Link to="/" style={{ color: 'var(--text-light)' }}>Home</Link>
            <span>/</span>
            <Link to="/materials" style={{ color: 'var(--text-light)' }}>Materials</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-navy)' }}>{material.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>{material.badge}</span>
              <h1 className="heading-hero" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{material.name}</h1>
              <p className="text-lead" style={{ marginBottom: '3rem' }}>{material.desc}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                <button className="btn-primary" onClick={() => onOpenRFQ(material.name)}>
                  Request Material Quote
                </button>
              </div>

              {/* Quick Details */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '1.5rem' }}>Alloy Characteristics</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {material.keyFeatures && material.keyFeatures.map((char, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <i className="fas fa-check" style={{ color: 'var(--accent-blue)', marginTop: '0.25rem' }}></i>
                      <span style={{ color: 'var(--text-slate)', fontSize: '1.0625rem' }}>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div style={{ background: 'var(--bg-offwhite)', padding: '4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <h3 className="heading-card" style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>Commonly Available Grades</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {material.popularGrades && material.popularGrades.map((grade, i) => (
                    <span key={i} style={{ padding: '0.75rem 1.25rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', fontSize: '0.9375rem', fontWeight: '600', color: 'var(--text-navy)', borderRadius: 'var(--radius-sm)' }}>
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compatible Products Section */}
      <section className="layout-section bg-surface" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="layout-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Product Availability</span>
            <h2 className="heading-section">Products Manufactured in {material.name}</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              {compatibleProducts.map((p) => (
                <Link key={p.id} to={`/products/${p.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} className="hover-lift">
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem', fontWeight: '600' }}>{p.name}</h4>
                      <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>
                        {p.shortDesc}
                      </p>
                      <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--accent-blue)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        View Specifications &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              {compatibleProducts.length === 0 && (
                <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', background: 'var(--bg-pure)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <p style={{ fontSize: '1.125rem', color: 'var(--text-slate)', margin: 0 }}>Please contact our sales team to inquire about manufacturing availability in this specific material grade.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick hover CSS for this page */}
      <style>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-float);
        }
      `}</style>
    </div>
  );
};

export default MaterialDetailPage;
