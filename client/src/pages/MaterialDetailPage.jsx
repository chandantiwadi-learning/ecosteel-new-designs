import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
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

  // Compatible Products mapped from data
  const compatibleProducts = productsData.filter((p) => {
    if (material.supportedProducts && material.supportedProducts.includes(p.slug)) return true;
    if (p.materials && p.materials.some(mat => mat.toLowerCase().includes(material.name.toLowerCase().split(' ')[0]))) return true;
    return false;
  });

  return (
    <div className="eco-material-detail-page">
      
      {/* Material Hero */}
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
            <Link to="/materials" style={{ color: '#94a3b8' }}>Materials</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>{material.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge-tech on-dark-accent">{material.badge}</span>
                <span className="badge-tech on-dark">{material.category}</span>
              </div>

              <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', marginBottom: '1.25rem' }}>
                {material.name}
              </h1>

              <p className="text-lead on-dark" style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                {material.desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  className="btn-primary"
                  onClick={() => onOpenRFQ(material.name)}
                  style={{ padding: '0.9375rem 2rem', fontSize: '0.95rem' }}
                >
                  <i className="fas fa-file-contract"></i> Request Quote For {material.name}
                </button>
                <Link 
                  to="/materials" 
                  className="btn-secondary on-dark"
                  style={{ padding: '0.9375rem 1.75rem', fontSize: '0.95rem' }}
                >
                  &larr; Back to Materials
                </Link>
              </div>
            </div>

            {/* Right Card: Popular Grades */}
            <div style={{ backgroundColor: 'var(--bg-dark-850)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-dark)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', marginBottom: '1rem' }}>
                Stocked Grade Specifications
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2rem' }}>
                {material.popularGrades.map((g, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: 'var(--radius-xs)', fontSize: '0.875rem', fontWeight: '600' }}>
                    {g}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.75rem' }}>
                  Testing Standards Included
                </div>
                <div style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                  Positive Material Identification (PMI), Intergranular Corrosion Testing (IGC per ASTM A262), Hydrostatic, Tensile, and Hardness per EN 10204 3.1.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Key Characteristics & Compatible Products */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div style={{ marginBottom: '4rem' }}>
            <span className="label-eyebrow">Metallurgical Attributes</span>
            <h2 className="heading-section">Engineering Characteristics of {material.name}</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {material.keyFeatures.map((feat, idx) => (
                <div key={idx} className="card-industrial" style={{ borderLeft: '4px solid var(--brand-green)' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--text-dark-primary)', marginBottom: '0.5rem' }}>
                    Feature 0{idx + 1}
                  </div>
                  <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.9375rem', margin: 0, lineHeight: '1.6' }}>
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Manufactured Products in this Alloy */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="label-eyebrow">Product Availability</span>
                <h2 className="heading-section" style={{ margin: 0 }}>Products Supplied in {material.name}</h2>
              </div>
              <button className="btn-primary" onClick={() => onOpenRFQ(material.name)}>
                <i className="fas fa-file-contract"></i> Inquire Full Package in {material.name}
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {compatibleProducts.map((p) => (
                <Link key={p.id} to={`/products/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="product-card-premium">
                    <div className="product-card-img-wrap">
                      <img src={p.image} alt={p.name} loading="lazy" />
                    </div>
                    <div className="product-card-body">
                      <span className="badge-tech" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>{p.category}</span>
                      <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                      <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>{p.shortDesc}</p>
                      <span className="btn-link" style={{ fontSize: '0.875rem' }}>
                        View Technical Specifications <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default MaterialDetailPage;
