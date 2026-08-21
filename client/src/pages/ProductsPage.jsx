import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsData } from '../data/products';

const ProductsPage = () => {
  return (
    <div className="bg-pure">
      {/* Page Header */}
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Product Catalog</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Premium Industrial Products</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              We manufacture and supply a comprehensive range of piping components designed for high-pressure, extreme temperature, and corrosive environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Editorial Product List */}
      <section className="layout-section">
        <div className="layout-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {productsData.map((prod, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={prod.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '6rem', 
                    alignItems: 'center',
                    direction: isEven ? 'ltr' : 'rtl' // Quick trick for alternating layout
                  }}
                >
                  {/* Image Column */}
                  <div style={{ direction: 'ltr', position: 'relative', height: '600px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-surface)' }}></div>
                    <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
                  </div>

                  {/* Text Column */}
                  <div style={{ direction: 'ltr' }}>
                    <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>{prod.category}</span>
                    <h2 className="heading-section" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{prod.name}</h2>
                    <p className="text-lead" style={{ marginBottom: '2.5rem' }}>{prod.longDesc || prod.shortDesc}</p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                      {prod.materials && prod.materials.slice(0, 4).map((mat, mIdx) => (
                        <span key={mIdx} style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-subtle)', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-navy)' }}>
                          {mat}
                        </span>
                      ))}
                      {prod.materials && prod.materials.length > 4 && (
                        <span style={{ padding: '0.5rem 1rem', border: '1px solid transparent', fontSize: '0.875rem', color: 'var(--text-slate)' }}>
                          +{prod.materials.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link to={`/products/${prod.slug}`} className="btn-link" style={{ fontSize: '1.125rem' }}>
                      Explore Technical Specifications <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="layout-section bg-surface" style={{ textAlign: 'center', padding: '100px 0' }}>
        <div className="layout-container">
          <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>Require Custom Dimensions?</h2>
          <p className="text-lead" style={{ margin: '0 auto 3rem' }}>We provide bespoke manufacturing services tailored to specific drawing requirements.</p>
          <Link to="/contact-us" className="btn-primary">Contact Engineering Team</Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
