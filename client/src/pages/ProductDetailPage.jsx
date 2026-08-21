import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsData } from '../data/products';
import NotFound from './NotFound';

const ProductDetailPage = () => {
  const { slug: productSlug } = useParams();
  const { onOpenRFQ } = useOutletContext();
  
  const product = productsData.find(p => p.slug === productSlug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="bg-pure">
      {/* Product Hero */}
      <section className="layout-section" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="layout-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-light)' }}>
            <Link to="/" style={{ color: 'var(--text-light)' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: 'var(--text-light)' }}>Products</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-navy)' }}>{product.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ position: 'sticky', top: '120px' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>{product.category}</span>
              <h1 className="heading-hero" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{product.name}</h1>
              <p className="text-lead" style={{ marginBottom: '3rem' }}>{product.longDesc}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                <button className="btn-primary" onClick={() => onOpenRFQ(product.name)}>
                  Request Official Quote
                </button>
              </div>

              {/* Quick Specs */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '1.5rem' }}>Product Overview</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', fontSize: '0.9375rem' }}>
                  <div style={{ color: 'var(--text-slate)', fontWeight: '600' }}>Size Range</div>
                  <div style={{ color: 'var(--text-navy)' }}>{product.sizeRange}</div>
                  
                  {product.classRatings && (
                    <>
                      <div style={{ color: 'var(--text-slate)', fontWeight: '600' }}>Class Rating</div>
                      <div style={{ color: 'var(--text-navy)' }}>{product.classRatings.join(', ')}</div>
                    </>
                  )}
                  {product.schedules && (
                    <>
                      <div style={{ color: 'var(--text-slate)', fontWeight: '600' }}>Schedules</div>
                      <div style={{ color: 'var(--text-navy)' }}>{product.schedules.join(', ')}</div>
                    </>
                  )}
                  
                  <div style={{ color: 'var(--text-slate)', fontWeight: '600' }}>Standards</div>
                  <div style={{ color: 'var(--text-navy)' }}>{product.standards.join(', ')}</div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Technical Specs */}
      <section className="layout-section bg-offwhite" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="layout-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Engineering Specifications</span>
            <h2 className="heading-section">Material Grades & Technical Data</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
              <div>
                <h3 className="heading-card" style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--text-navy)' }}>Available Grades</h3>
                <table className="technical-table">
                  <tbody>
                    {Object.entries(product.grades).map(([mat, grades], idx) => (
                      <tr key={idx}>
                        <th style={{ width: '30%', borderBottom: '1px solid var(--border-subtle)', background: 'transparent', padding: '1.25rem 0' }}>{mat}</th>
                        <td style={{ padding: '1.25rem 0 1.25rem 1.5rem' }}>{grades}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="heading-card" style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--text-navy)' }}>Available Forms</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.forms ? product.forms.map((form, i) => (
                    <li key={i} style={{ padding: '1rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', color: 'var(--text-navy)', fontSize: '0.9375rem', fontWeight: '500' }}>
                      {form}
                    </li>
                  )) : product.types && product.types.map((type, i) => (
                    <li key={i} style={{ padding: '1rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', color: 'var(--text-navy)', fontSize: '0.9375rem', fontWeight: '500' }}>
                      {type}
                    </li>
                  ))}
                </ul>

                <h3 className="heading-card" style={{ marginTop: '3rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--text-navy)' }}>Key Applications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {product.applications.map((app, i) => (
                    <span key={i} style={{ padding: '0.5rem 1rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', fontSize: '0.875rem', color: 'var(--text-slate)' }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="layout-section bg-pure" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="layout-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 className="heading-section" style={{ marginBottom: '0.5rem' }}>Need this product?</h2>
              <p className="text-lead" style={{ margin: 0 }}>Our technical sales team is ready to provide a detailed quote.</p>
            </div>
            <button className="btn-primary" onClick={() => onOpenRFQ(product.name)} style={{ padding: '1.25rem 3rem' }}>
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
