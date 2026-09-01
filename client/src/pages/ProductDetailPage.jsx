import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { productsData } from '../data/products';
import NotFound from './NotFound';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { onOpenRFQ } = useOutletContext();
  
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  // Related products (other items in catalog)
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="eco-product-detail-page">
      
      {/* Product Hero Header */}
      <section 
        style={{ 
          backgroundColor: 'var(--bg-dark-950)', 
          color: '#ffffff', 
          padding: '4.5rem 0 3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="layout-container">
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '2rem' }}>
            <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: '#94a3b8' }}>Products</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>{product.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge-tech on-dark-accent">{product.category}</span>
                <span className="badge-tech on-dark">ISO 9001:2015</span>
                <span className="badge-tech on-dark">EN 10204 3.1</span>
              </div>

              <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', marginBottom: '1.25rem' }}>
                {product.name}
              </h1>

              <p className="text-lead on-dark" style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                {product.longDesc || product.shortDesc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  className="btn-primary"
                  onClick={() => onOpenRFQ(product.name)}
                  style={{ padding: '0.9375rem 2rem', fontSize: '0.95rem' }}
                >
                  <i className="fas fa-file-contract"></i> Request Quote For {product.name}
                </button>
                <a 
                  href="#specs" 
                  className="btn-secondary on-dark"
                  style={{ padding: '0.9375rem 1.75rem', fontSize: '0.95rem' }}
                >
                  View Engineering Specifications <i className="fas fa-arrow-down" style={{ fontSize: '0.75rem' }}></i>
                </a>
              </div>
            </div>

            {/* Right Featured Image */}
            <div>
              <div 
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  overflow: 'hidden', 
                  backgroundColor: 'var(--bg-dark-850)', 
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                  position: 'relative'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>

              {/* Secondary thumbnails if available */}
              {product.secondaryImages && product.secondaryImages.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${product.secondaryImages.length}, 1fr)`, gap: '0.75rem', marginTop: '0.75rem' }}>
                  {product.secondaryImages.map((img, idx) => (
                    <div key={idx} style={{ height: '80px', borderRadius: 'var(--radius-xs)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <img src={img} alt={`${product.name} Detail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Quick Spec Metrics Strip */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '2rem 0' }}>
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ borderLeft: '2px solid var(--brand-green-accent)', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.06em' }}>Size & Dimension Range</div>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginTop: '0.2rem' }}>{product.sizeRange || '1/2" to 48" NB'}</div>
            </div>

            {product.classRatings && (
              <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.06em' }}>Pressure Classes</div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginTop: '0.2rem' }}>{product.classRatings.join(', ')}</div>
              </div>
            )}

            {product.schedules && (
              <div style={{ borderLeft: '2px solid #f59e0b', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.06em' }}>Wall Schedules</div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.9375rem', marginTop: '0.2rem' }}>{product.schedules.slice(0, 6).join(', ')}...</div>
              </div>
            )}

            <div style={{ borderLeft: '2px solid #a855f7', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.06em' }}>Governing Standards</div>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginTop: '0.2rem' }}>{product.standards ? product.standards.slice(0, 3).join(', ') : 'ASME / ASTM'}</div>
            </div>

          </div>
        </div>
      </section>

      {/* Deep Technical Specifications & Grades Section */}
      <section className="layout-section section-light" id="specs">
        <div className="layout-container">
          
          <div className="section-header">
            <span className="label-eyebrow">Engineering Specifications</span>
            <h2 className="heading-section">Material Grades & Production Scope</h2>
            <p className="text-lead">
              Review certified metallurgical grades, manufacturing forms, and standard dimensional criteria for {product.name}.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
            
            {/* Grades Table */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="heading-card" style={{ margin: 0 }}>Available Material Grades</h3>
                <span className="badge-tech">ASTM / ASME / DIN</span>
              </div>

              <div className="table-responsive-wrapper">
                <table className="technical-table">
                  <thead>
                    <tr>
                      <th style={{ width: '32%' }}>Material Base</th>
                      <th>Conforming Standard Specification & Grades</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.grades && Object.entries(product.grades).map(([mat, grades], idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: '700', color: 'var(--text-dark-primary)' }}>
                          {mat}
                        </td>
                        <td style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--text-dark-secondary)' }}>
                          {grades}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forms & Types Column */}
            <div>
              {product.forms && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 className="heading-card" style={{ marginBottom: '1rem' }}>Available Forms & Configurations</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {product.forms.map((form, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          backgroundColor: 'var(--bg-surface)', 
                          padding: '0.875rem 1.25rem', 
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.9375rem',
                          fontWeight: '600',
                          color: 'var(--text-dark-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <i className="fas fa-check" style={{ color: 'var(--brand-green)', fontSize: '0.8rem' }}></i>
                        <span>{form}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.types && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 className="heading-card" style={{ marginBottom: '1rem' }}>Manufacturing Types</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product.types.map((t, i) => (
                      <span key={i} className="badge-tech accent" style={{ fontSize: '0.875rem', padding: '0.4rem 0.8rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.applications && (
                <div>
                  <h3 className="heading-card" style={{ marginBottom: '1rem' }}>Target Industrial Applications</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product.applications.map((app, i) => (
                      <span key={i} style={{ backgroundColor: 'var(--bg-pure)', border: '1px solid var(--border-medium)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xs)', fontSize: '0.8125rem', color: 'var(--text-dark-secondary)' }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Quality & Traceability Notice Card */}
          <div style={{ backgroundColor: 'var(--bg-dark-900)', color: '#ffffff', borderRadius: 'var(--radius-md)', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="label-eyebrow on-dark">Zero-Defect Commitment</span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                Certified Testing & EN 10204 3.1 Traceability
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                Every {product.name.toLowerCase()} order is hard-stamped with mill heat numbers, 100% PMI tested for alloy validation, and accompanied by EN 10204 3.1 / 3.2 Material Test Certificates.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onOpenRFQ(product.name)}>
                <i className="fas fa-file-contract"></i> Submit RFQ for {product.name}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Related Products Showcase */}
      <section className="layout-section section-offwhite" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="layout-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div>
              <span className="label-eyebrow">Complementary Inventory</span>
              <h2 className="heading-section" style={{ margin: 0, fontSize: '2rem' }}>Related Piping Components</h2>
            </div>
            <Link to="/products" className="btn-link">View All Products &rarr;</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedProducts.map((p) => (
              <div key={p.id} className="product-card-premium">
                <div className="product-card-img-wrap" style={{ height: '180px' }}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-card-body" style={{ padding: '1.25rem' }}>
                  <span className="badge-tech" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>{p.category}</span>
                  <h4 className="heading-card" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{p.name}</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.8125rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>{p.shortDesc}</p>
                  <Link to={`/products/${p.slug}`} className="btn-link" style={{ fontSize: '0.875rem' }}>
                    View Specifications <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetailPage;
