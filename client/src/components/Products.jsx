import React, { useState } from 'react';
import { products } from '../data/mockData';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };

  const handleRfqClick = (productName) => {
    closeModal();
    // Assuming the contact form has an ID 'contact' and the select input has ID 'rfqProduct'
    const contactSection = document.getElementById('contact');
    const rfqSelect = document.getElementById('rfqProduct');
    if (rfqSelect) {
      rfqSelect.value = productName;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="section section-offwhite" id="products">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">Complete Catalogue</div>
            <h2 className="section-heading">Engineered Product Portfolio</h2>
            <p className="section-desc">
              Manufactured from prime-quality certified raw materials to withstand aggressive pressures, elevated
              temperatures, and corrosive environments.
            </p>
          </div>

          <div className="product-tabs">
            <button type="button" className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Products (7)</button>
            <button type="button" className={`tab-btn ${filter === 'fittings' ? 'active' : ''}`} onClick={() => setFilter('fittings')}>Fittings</button>
            <button type="button" className={`tab-btn ${filter === 'flanges' ? 'active' : ''}`} onClick={() => setFilter('flanges')}>Flanges</button>
            <button type="button" className={`tab-btn ${filter === 'fasteners' ? 'active' : ''}`} onClick={() => setFilter('fasteners')}>Fasteners</button>
            <button type="button" className={`tab-btn ${filter === 'pipes' ? 'active' : ''}`} onClick={() => setFilter('pipes')}>Pipes & Tubes</button>
            <button type="button" className={`tab-btn ${filter === 'plates' ? 'active' : ''}`} onClick={() => setFilter('plates')}>Plates & Sheets</button>
            <button type="button" className={`tab-btn ${filter === 'bars' ? 'active' : ''}`} onClick={() => setFilter('bars')}>Rods & Bars</button>
          </div>

          <div className="products-grid">
            {filteredProducts.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-card-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="product-category-tag">{p.badge}</span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <div className="product-spec-chips">
                    <span className="spec-chip"><i className="fas fa-ruler-combined"></i> {p.sizeRange}</span>
                    <span className="spec-chip"><i className="fas fa-layer-group"></i> {p.schedules}</span>
                  </div>
                  <div className="product-card-footer">
                    <button type="button" className="btn-link view-product-btn" onClick={() => openModal(p)}>
                      Technical Specs <i className="fas fa-arrow-right"></i>
                    </button>
                    <button type="button" className="btn btn-primary rfq-quick-btn" onClick={() => handleRfqClick(p.name)} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
                      RFQ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SPECIFICATION MODAL */}
      <div className={`modal-overlay ${selectedProduct ? 'open' : ''}`} role="dialog" aria-modal="true" onClick={(e) => { if (e.target.classList.contains('modal-overlay')) closeModal(); }}>
        <div className="modal-card">
          <button type="button" className="modal-close-btn" onClick={closeModal} aria-label="Close Modal">
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-body">
            {selectedProduct && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '2rem', alignItems: 'start', marginBottom: '2rem' }}>
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                    <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <span className="mat-badge">{selectedProduct.badge}</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-navy)', marginBottom: '0.75rem' }}>{selectedProduct.name}</h2>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-slate)', lineHeight: '1.6' }}>{selectedProduct.longDesc}</p>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-offwhite)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-navy)', marginBottom: '1rem', fontWeight: '700' }}>
                    <i className="fas fa-cogs" style={{ color: 'var(--accent-steel)', marginRight: '0.5rem' }}></i> Technical Specifications & Compliance
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.875rem' }}>
                    <div><strong>Size Range:</strong> <span style={{ color: 'var(--text-slate)' }}>{selectedProduct.sizeRange}</span></div>
                    <div><strong>Pressure / Class:</strong> <span style={{ color: 'var(--text-slate)' }}>{selectedProduct.schedules}</span></div>
                    <div><strong>Applicable Standards:</strong> <span style={{ color: 'var(--text-slate)' }}>{selectedProduct.standards}</span></div>
                    <div><strong>Available Forms:</strong> <span style={{ color: 'var(--text-slate)' }}>{selectedProduct.types}</span></div>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-navy)', marginBottom: '0.75rem', fontWeight: '700' }}>
                    Material Grades Sourced
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-slate)', lineHeight: '1.6', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '1rem', borderRadius: 'var(--radius-xs)' }}>
                    {selectedProduct.materials}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button type="button" className="btn btn-secondary close-modal-btn" onClick={closeModal}>Close</button>
                  <button type="button" className="btn btn-primary modal-rfq-btn" onClick={() => handleRfqClick(selectedProduct.name)}>
                    Request Formal RFQ for {selectedProduct.name}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
