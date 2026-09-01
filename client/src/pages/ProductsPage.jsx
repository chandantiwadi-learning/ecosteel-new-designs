import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';

const ProductsPage = () => {
  const { onOpenRFQ } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Fittings', 'Flanges', 'Pipes', 'Plates', 'Bars', 'Fasteners'];

  const filteredProducts = productsData.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      (p.materials && p.materials.some((m) => m.toLowerCase().includes(q))) ||
      (p.standards && p.standards.some((s) => s.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="eco-products-page">
      
      {/* Page Header */}
      <section 
        style={{ 
          backgroundColor: 'var(--bg-dark-950)', 
          color: '#ffffff', 
          padding: '5rem 0 4rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Products Catalog</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Full Production & Stockholding Range</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Industrial Product Systems
          </h1>
          <p className="text-lead on-dark">
            Precision-manufactured buttweld fittings, high-pressure forged fittings, ANSI/DIN flanges, heavy fasteners, seamless pipes, and alloy plates engineered to international standards.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '1.5rem 0' }}>
        <div className="layout-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn on-dark ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '0.875rem' }}></i>
            <input
              type="text"
              placeholder="Search products or standards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input on-dark"
              style={{ paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.625rem', paddingBottom: '0.625rem', fontSize: '0.875rem' }}
            />
          </div>

        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.9375rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>
              Showing <strong style={{ color: 'var(--text-dark-primary)' }}>{filteredProducts.length}</strong> Industrial Product Line{filteredProducts.length === 1 ? '' : 's'}
            </div>
            <button 
              className="btn-secondary" 
              onClick={() => onOpenRFQ()}
              style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
            >
              <i className="fas fa-file-contract"></i> Submit Package BOM
            </button>
          </div>

          <motion.div layout className="grid-catalog">
            <AnimatePresence>
              {filteredProducts.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  className="product-card-premium"
                >
                  <div className="product-card-img-wrap">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem', 
                        backgroundColor: '#ffffff', 
                        color: 'var(--brand-green)', 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.75rem', 
                        fontWeight: '700', 
                        padding: '0.25rem 0.6rem', 
                        borderRadius: 'var(--radius-xs)',
                        boxShadow: 'var(--shadow-subtle)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {p.category}
                    </span>
                  </div>

                  <div className="product-card-body">
                    <h3 className="heading-card" style={{ fontSize: '1.375rem', marginBottom: '0.75rem' }}>
                      {p.name}
                    </h3>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                      {p.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem', fontSize: '0.8125rem', color: 'var(--text-dark-secondary)', backgroundColor: 'var(--bg-surface)', padding: '0.875rem', borderRadius: 'var(--radius-xs)' }}>
                      <div><strong>Size Range:</strong> {p.sizeRange ? p.sizeRange.split('(')[0] : 'All sizes'}</div>
                      <div><strong>Standards:</strong> {p.standards ? p.standards.slice(0, 3).join(', ') : 'ASME / ASTM'}</div>
                      {p.classRatings && (
                        <div><strong>Ratings:</strong> {p.classRatings.slice(0, 4).join(', ')}</div>
                      )}
                    </div>

                    <div className="product-card-specs">
                      <Link 
                        to={`/products/${p.slug}`} 
                        className="btn-primary"
                        style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.875rem' }}
                      >
                        Technical Data Sheet <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                      </Link>
                      <button
                        onClick={() => onOpenRFQ(p.name)}
                        className="btn-secondary"
                        style={{ padding: '0.75rem 1rem', fontSize: '0.875rem' }}
                      >
                        RFQ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Bottom Custom Fabrication Banner */}
      <section className="layout-section section-surface" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="label-eyebrow">Custom Engineering & Machining</span>
          <h2 className="heading-section">Require Custom Dimensions or Non-Standard Forgings?</h2>
          <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
            We fabricate special wall thicknesses, custom flange facings (RTJ, Tongue & Groove), bespoke stud lengths, and specialized machining strictly per client engineering drawings.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => onOpenRFQ('Custom Forging & Fabrication')}>
              <i className="fas fa-file-upload"></i> Upload Drawing for Custom Quote
            </button>
            <Link to="/contact-us" className="btn-secondary">
              Contact Engineering Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
