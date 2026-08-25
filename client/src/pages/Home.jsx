import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'react-router-dom'; // Using local motion if framer-motion is imported
import { motion as framerMotion } from 'framer-motion';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';
import { industriesData } from '../data/industries';
import { standardsData } from '../data/standards';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Home = () => {
  const { onOpenRFQ } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Metallurgy Hub State
  const [activeAlloy, setActiveAlloy] = useState(materialsData[0]);

  // Standards Lookup State
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStandards, setFilteredStandards] = useState(standardsData);

  // Calculator State
  const [calcShape, setCalcShape] = useState('pipe');
  const [calcMaterial, setCalcMaterial] = useState('Stainless Steel');
  const [calcInputs, setCalcInputs] = useState({
    length: '1',
    diameter: '50',
    thickness: '3',
    width: '1000'
  });
  const [calculatedWeight, setCalculatedWeight] = useState(0);

  // Density lookup (g/cm3)
  const densities = {
    'Stainless Steel': 7.93,
    'Carbon Steel': 7.85,
    'Alloy Steel': 7.85,
    'Duplex & Super Duplex Steel': 7.80,
    'Inconel & Incoloy Alloys': 8.44,
    'Monel Alloys': 8.80,
    'Hastelloy Alloys': 8.89,
    'Cupro Nickel (Cu-Ni)': 8.94
  };

  // Run calculation when shape, material, or inputs change
  useEffect(() => {
    const density = densities[calcMaterial] || 7.85;
    const len = parseFloat(calcInputs.length) || 0;
    const dia = parseFloat(calcInputs.diameter) || 0;
    const thick = parseFloat(calcInputs.thickness) || 0;
    const w = parseFloat(calcInputs.width) || 0;
    
    let weight = 0;

    if (calcShape === 'bar') {
      // Round Bar: pi * r^2 * L * density
      // r in cm, L in cm, density in g/cm3 -> weight in g / 1000 -> kg
      const r = (dia / 2) / 10; // mm to cm
      const area = Math.PI * Math.pow(r, 2);
      const volume = area * (len * 100); // meters to cm
      weight = (volume * density) / 1000;
    } else if (calcShape === 'pipe') {
      // Pipe: pi * (Ro^2 - Ri^2) * L * density
      const ro = (dia / 2) / 10;
      const ri = ((dia - 2 * thick) / 2) / 10;
      if (ri >= 0) {
        const area = Math.PI * (Math.pow(ro, 2) - Math.pow(ri, 2));
        const volume = area * (len * 100);
        weight = (volume * density) / 1000;
      }
    } else if (calcShape === 'plate') {
      // Plate: W (mm) * t (mm) * L (m) * density
      // convert to cm: W/10 * t/10 * L*100 * density / 1000
      const volume = (w / 10) * (thick / 10) * (len * 100);
      weight = (volume * density) / 1000;
    }

    setCalculatedWeight(weight.toFixed(2));
  }, [calcShape, calcMaterial, calcInputs]);

  // Search standards
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStandards(standardsData);
    } else {
      const q = searchQuery.toLowerCase();
      const filtered = standardsData.filter(s => 
        s.code.toLowerCase().includes(q) || 
        s.title.toLowerCase().includes(q) || 
        s.category.toLowerCase().includes(q)
      );
      setFilteredStandards(filtered);
    }
  }, [searchQuery]);

  const handleInputChange = (field, val) => {
    setCalcInputs(prev => ({ ...prev, [field]: val }));
  };

  // Filter products by category
  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  // Hero backgrounds
  const heroBackgrounds = [
    '/img/Power industry.jpg',
    '/img/bann.jpg',
    '/img/index-banner1.jpg'
  ];
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="premium-home-spa" style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-primary-dark)' }}>
      
      {/* ==========================================================================
          01. HERO (Dynamic Immersive Section)
          ========================================================================== */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Parallax Slide Images */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <AnimatePresence mode="wait">
            <framerMotion.img 
              key={heroSlide}
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              src={heroBackgrounds[heroSlide]} 
              alt="EcoSteel Facility" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          {/* Bottom Dark Gradient Fade */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,10,19,0.3) 0%, rgba(7,10,19,0.95) 100%)' }}></div>
          {/* Side Blend */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40%', background: 'linear-gradient(90deg, rgba(7,10,19,0.85) 0%, rgba(7,10,19,0) 100%)' }}></div>
        </div>

        <div className="layout-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <framerMotion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ maxWidth: '750px' }}
          >
            <framerMotion.span variants={fadeInUp} className="label-eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              EcoSteel Engineering &bull; Global Stockholder & Exporter
            </framerMotion.span>
            
            <framerMotion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3rem, 7vw, 5.25rem)', fontWeight: 900, fontFamily: 'var(--font-headings)', lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
              Precision In <br/>
              <span style={{ background: 'linear-gradient(90deg, #ffffff 30%, var(--accent-cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Every Connection
              </span>
            </framerMotion.h1>
            
            <framerMotion.p variants={fadeInUp} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-secondary-dark)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
              High-performance industrial piping products, heavy duty flanges, forged fittings, and custom specialty alloys engineered to withstand severe environments worldwide.
            </framerMotion.p>
            
            <framerMotion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onOpenRFQ()}>
                Quotation Wizard
              </button>
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary">
                Technical Catalog
              </a>
            </framerMotion.div>
          </framerMotion.div>
        </div>

        {/* Absolute Stats Indicator on bottom */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: 0, right: 0, zIndex: 2 }} className="desktop-nav">
          <div className="layout-container">
            <div style={{ display: 'flex', gap: '5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-headings)' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: '700', marginTop: '0.25rem', letterSpacing: '0.05em' }}>Quality Certified</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-headings)' }}>48+ countries</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: '700', marginTop: '0.25rem', letterSpacing: '0.05em' }}>Global Logistics</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-headings)' }}>100% Pedigree</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: '700', marginTop: '0.25rem', letterSpacing: '0.05em' }}>Material Traceability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02. ABOUT & EDITORIAL STATEMENT (Whitespace & Visual Focus)
          ========================================================================== */}
      <section id="about" className="layout-section section-light" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="layout-container">
          <framerMotion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}
          >
            <div>
              <framerMotion.span variants={fadeInUp} className="label-eyebrow" style={{ color: 'var(--text-secondary-light)' }}>Who We Are</framerMotion.span>
              <framerMotion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text-primary-light)', fontFamily: 'var(--font-headings)', marginBottom: '2rem' }}>
                Engineered For Integrity.<br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Built For Scale.</span>
              </framerMotion.h2>
              <framerMotion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary-light)', marginBottom: '2rem' }}>
                EcoSteel Engineering operates under standard metallurgical parameters. Our facility fabricates products designed to perform in high-pressure oil lines, chemical reactors, subsea structures, and thermal power lines.
              </framerMotion.p>
              <framerMotion.p variants={fadeInUp} style={{ color: 'var(--text-secondary-light)', marginBottom: '2rem' }}>
                Every element from raw billets to final threads is subjected to rigorous nondestructive examination (NDE) and PMI testing to verify complete alloy specification compliance.
              </framerMotion.p>
            </div>

            <framerMotion.div variants={fadeInUp} style={{ position: 'relative' }}>
              <img src="/img/premium-facility.png" alt="Facility" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: '0 30px 60px rgba(15,23,42,0.1)' }} />
              <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', width: '220px', padding: '2rem', background: '#070a13', color: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }} className="desktop-nav">
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-cyan)', lineHeight: 1, fontFamily: 'var(--font-headings)' }}>100%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary-dark)', marginTop: '0.5rem' }}>PMI & Hydro Tested</div>
              </div>
            </framerMotion.div>
          </framerMotion.div>
        </div>
      </section>

      {/* ==========================================================================
          03. PRODUCT CATALOG (Interactive Tabs & Slide-over Detail Drawer)
          ========================================================================== */}
      <section id="products" className="layout-section section-dark" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="layout-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-eyebrow" style={{ color: 'var(--accent-cyan)' }}>Our Catalog Systems</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-headings)', margin: '0 0 1rem' }}>Industrial Products</h2>
            <p style={{ color: 'var(--text-secondary-dark)', maxWidth: '600px', margin: '0 auto' }}>
              Filter by engineering category to view specifications, grades, size ranges, and forms. Click a card to view complete specifications.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="category-tabs">
            {['All', 'Fittings', 'Flanges', 'Pipes', 'Plates', 'Bars', 'Fasteners'].map(cat => (
              <button 
                key={cat} 
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Systems' : cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <framerMotion.div 
            layout
            className="grid-catalog"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(p => (
                <framerMotion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={p.id}
                  className="product-card-premium"
                  onClick={() => setSelectedProduct(p)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-img-container">
                    <img src={p.image} alt={p.name} className="card-img-premium" />
                    <div className="card-overlay-gradient"></div>
                  </div>
                  <div className="card-body-premium">
                    <div className="badge-tech" style={{ marginBottom: '0.75rem' }}>{p.category}</div>
                    <h3 className="card-title-premium">{p.name}</h3>
                    <p className="card-desc-premium">{p.shortDesc}</p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Analyze Specs <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                    </span>
                  </div>
                </framerMotion.div>
              ))}
            </AnimatePresence>
          </framerMotion.div>
        </div>
      </section>

      {/* Slide-out Product Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <framerMotion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="detail-drawer-overlay"
            />
            {/* Drawer */}
            <framerMotion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="detail-drawer-container"
            >
              <button className="drawer-close-btn" onClick={() => setSelectedProduct(null)}>
                <i className="fas fa-times"></i>
              </button>

              <div style={{ marginBottom: '2.5rem' }}>
                <span className="label-eyebrow" style={{ color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>Technical Specification Sheets</span>
                <h2 style={{ fontSize: '2.5rem', color: '#ffffff', margin: 0, fontFamily: 'var(--font-headings)' }}>{selectedProduct.name}</h2>
              </div>

              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '2.5rem' }} />

              <div style={{ marginBottom: '2.5rem' }}>
                <div className="drawer-section-title">Overview</div>
                <p style={{ color: 'var(--text-secondary-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedProduct.longDesc}</p>
              </div>

              <div className="drawer-grid-meta">
                <div className="drawer-meta-item">
                  <span className="drawer-meta-label">Dimension / Size</span>
                  <span className="drawer-meta-val">{selectedProduct.sizeRange || 'N/A'}</span>
                </div>
                {selectedProduct.schedules && (
                  <div className="drawer-meta-item">
                    <span className="drawer-meta-label">Supported Schedules</span>
                    <span className="drawer-meta-val">{selectedProduct.schedules.join(', ')}</span>
                  </div>
                )}
                {selectedProduct.classRatings && (
                  <div className="drawer-meta-item">
                    <span className="drawer-meta-label">Pressure Ratings</span>
                    <span className="drawer-meta-val">{selectedProduct.classRatings.join(', ')}</span>
                  </div>
                )}
              </div>

              {selectedProduct.types && (
                <div style={{ marginBottom: '2rem' }}>
                  <div className="drawer-section-title">Production Types</div>
                  <div className="drawer-pill-list">
                    {selectedProduct.types.map(t => <span key={t} className="drawer-pill">{t}</span>)}
                  </div>
                </div>
              )}

              {selectedProduct.forms && (
                <div style={{ marginBottom: '2rem' }}>
                  <div className="drawer-section-title">Standard Forms</div>
                  <div className="drawer-pill-list">
                    {selectedProduct.forms.map(f => <span key={f} className="drawer-pill">{f}</span>)}
                  </div>
                </div>
              )}

              {selectedProduct.standards && (
                <div style={{ marginBottom: '2rem' }}>
                  <div className="drawer-section-title">Technical Standards</div>
                  <div className="drawer-pill-list">
                    {selectedProduct.standards.map(s => <span key={s} className="drawer-pill" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>{s}</span>)}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button 
                  className="btn-primary" 
                  onClick={() => { setSelectedProduct(null); onOpenRFQ(selectedProduct.name); }}
                  style={{ flex: 1 }}
                >
                  Request Quote
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </framerMotion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==========================================================================
          04. WEIGHT CALCULATOR (Engineering Utility)
          ========================================================================== */}
      <section id="calculator" className="layout-section section-light" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <span className="label-eyebrow" style={{ color: 'var(--text-secondary-light)' }}>Engineering Toolkit</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary-light)', fontFamily: 'var(--font-headings)', marginBottom: '2rem' }}>
                Metal Weight<br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Calculator</span>
              </h2>
              <p style={{ color: 'var(--text-secondary-light)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Use our real-time dimensional weight calculator to estimate theoretical delivery loads. Simply select the profile, alloy base, and input the dimensions.
              </p>
              <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-cyan)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-primary-light)', display: 'block', marginBottom: '0.5rem' }}>Calculation Note</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)', margin: 0 }}>
                  Estimates are calculated using theoretical material densities. Actual structural weights may vary based on rolling tolerances.
                </p>
              </div>
            </div>

            <div className="calc-widget bg-metallic-panel" style={{ color: '#ffffff' }}>
              <div className="calc-grid">
                <div className="calc-form-group">
                  <label className="calc-label">Profile Shape</label>
                  <select className="calc-select" value={calcShape} onChange={e => setCalcShape(e.target.value)}>
                    <option value="pipe">Pipe & Round Tube</option>
                    <option value="bar">Round Rod / Bar</option>
                    <option value="plate">Plate / Sheet / Strip</option>
                  </select>
                </div>

                <div className="calc-form-group">
                  <label className="calc-label">Material Alloy</label>
                  <select className="calc-select" value={calcMaterial} onChange={e => setCalcMaterial(e.target.value)}>
                    {Object.keys(densities).map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="calc-grid" style={{ marginBottom: '2.5rem' }}>
                <div className="calc-form-group">
                  <label className="calc-label">Length (meters)</label>
                  <input type="number" step="any" className="calc-input" value={calcInputs.length} onChange={e => handleInputChange('length', e.target.value)} />
                </div>

                {calcShape !== 'plate' && (
                  <div className="calc-form-group">
                    <label className="calc-label">Outer Diameter (mm)</label>
                    <input type="number" step="any" className="calc-input" value={calcInputs.diameter} onChange={e => handleInputChange('diameter', e.target.value)} />
                  </div>
                )}

                {calcShape !== 'bar' && (
                  <div className="calc-form-group">
                    <label className="calc-label">Wall Thickness (mm)</label>
                    <input type="number" step="any" className="calc-input" value={calcInputs.thickness} onChange={e => handleInputChange('thickness', e.target.value)} />
                  </div>
                )}

                {calcShape === 'plate' && (
                  <div className="calc-form-group">
                    <label className="calc-label">Width (mm)</label>
                    <input type="number" step="any" className="calc-input" value={calcInputs.width} onChange={e => handleInputChange('width', e.target.value)} />
                  </div>
                )}
              </div>

              <div className="calc-result-panel">
                <div className="calc-result-title">Theoretical Structural Weight</div>
                <div className="calc-result-val">{calculatedWeight} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>KGS</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
          05. ASME STANDARDS DIRECTORY (BigBoltNut Style searchable standards)
          ========================================================================== */}
      <section id="standards" className="layout-section section-dark" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="layout-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-eyebrow" style={{ color: 'var(--accent-cyan)' }}>Standards Database</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-headings)', margin: '0 0 1rem' }}>Technical Standards</h2>
            <p style={{ color: 'var(--text-secondary-dark)', maxWidth: '600px', margin: '0 auto' }}>
              Query ASME, ASTM, MSS, and DIN codes directly. Retrieve engineering titles and categories.
            </p>
          </div>

          <div className="search-bar-container" style={{ maxWidth: '500px', margin: '0 auto 3rem' }}>
            <input 
              type="text" 
              className="search-input-premium" 
              placeholder="Search Standards (e.g. ASME B16.9, ASTM A312)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="table-responsive-wrapper">
            <table className="premium-tech-table">
              <thead>
                <tr>
                  <th>Standard Code</th>
                  <th>Official Standard Title</th>
                  <th>Product Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredStandards.length > 0 ? (
                  filteredStandards.map((std, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: '700', color: '#ffffff' }}>
                        <span className="badge-tech">{std.code}</span>
                      </td>
                      <td>{std.title}</td>
                      <td>{std.category}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary-dark)' }}>
                      No standards match your search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          06. METALLURGY ALLOY HUB (Interactive split alloy details)
          ========================================================================== */}
      <section id="materials" className="layout-section section-light" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="layout-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-eyebrow" style={{ color: 'var(--text-secondary-light)' }}>Metallurgy Hub</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary-light)', fontFamily: 'var(--font-headings)', margin: '0 0 1rem' }}>Specialty Alloys</h2>
            <p style={{ color: 'var(--text-secondary-light)', maxWidth: '600px', margin: '0 auto' }}>
              Explore chemical resistance capabilities, popular grades, and key features of high-performance piping alloys.
            </p>
          </div>

          <div className="alloy-hub-grid">
            {/* Sidebar nav */}
            <div className="alloy-card-nav">
              {materialsData.map(m => (
                <button 
                  key={m.id} 
                  className={`alloy-nav-btn ${activeAlloy.id === m.id ? 'active' : ''}`}
                  onClick={() => setActiveAlloy(m)}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* Detail area */}
            <div className="alloy-detail-panel" style={{ color: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <span className="label-eyebrow" style={{ color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>{activeAlloy.category}</span>
                  <h3 style={{ fontSize: '2rem', margin: 0, fontFamily: 'var(--font-headings)', color: '#ffffff' }}>{activeAlloy.name}</h3>
                </div>
                <span className="badge-tech" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>{activeAlloy.badge}</span>
              </div>

              <p style={{ color: 'var(--text-secondary-dark)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                {activeAlloy.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                <div>
                  <span className="drawer-meta-label" style={{ color: 'var(--accent-cyan)' }}>Popular Grades</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {activeAlloy.popularGrades.map(g => (
                      <span key={g} className="drawer-pill" style={{ background: 'rgba(255,255,255,0.03)', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>{g}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="drawer-meta-label" style={{ color: 'var(--accent-cyan)' }}>Chemical & Physical Metrics</span>
                  <div style={{ marginTop: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Corrosion Resistance</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>{activeAlloy.id === 'stainless-steel' ? '85%' : activeAlloy.id === 'duplex-steel' ? '92%' : activeAlloy.id === 'carbon-steel' ? '45%' : '98%'}</span>
                    </div>
                    <div className="chemical-resistance-bar">
                      <div className="chemical-resistance-fill" style={{ width: activeAlloy.id === 'stainless-steel' ? '85%' : activeAlloy.id === 'duplex-steel' ? '92%' : activeAlloy.id === 'carbon-steel' ? '45%' : '98%' }}></div>
                    </div>
                  </div>
                  <div style={{ marginTop: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Tensile Yield Strength</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>{activeAlloy.id === 'stainless-steel' ? '70%' : activeAlloy.id === 'duplex-steel' ? '95%' : activeAlloy.id === 'carbon-steel' ? '80%' : '85%'}</span>
                    </div>
                    <div className="chemical-resistance-bar">
                      <div className="chemical-resistance-fill" style={{ width: activeAlloy.id === 'stainless-steel' ? '70%' : activeAlloy.id === 'duplex-steel' ? '95%' : activeAlloy.id === 'carbon-steel' ? '80%' : '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="drawer-meta-label" style={{ color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.5rem' }}>Metallurgical Features</span>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary-dark)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeAlloy.keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          07. INDUSTRIES GRID
          ========================================================================== */}
      <section className="layout-section section-dark" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="layout-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-eyebrow" style={{ color: 'var(--accent-cyan)' }}>Sectors Served</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-headings)', margin: '0 0 1rem' }}>Industrial Verticals</h2>
            <p style={{ color: 'var(--text-secondary-dark)', maxWidth: '600px', margin: '0 auto' }}>
              Supplying critical process industries with high integrity steel components.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {industriesData.map(ind => (
              <div 
                key={ind.id} 
                className="bg-metallic-panel" 
                style={{ borderRadius: 'var(--radius-md)', padding: '2.5rem', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255, 255, 255, 0.05)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas ${ind.icon}`} style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)' }}></i>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, fontFamily: 'var(--font-headings)', color: '#ffffff' }}>{ind.name}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary-dark)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>{ind.desc}</p>
                <div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: '700', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Recommended Materials</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {ind.recommendedMaterials.map(m => (
                      <span key={m} style={{ fontSize: '0.75rem', color: '#ffffff', padding: '0.2rem 0.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          08. DYNAMIC CONTACT & RFQ (Wizard Entry Point)
          ========================================================================== */}
      <section id="contact" className="layout-section section-light">
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <span className="label-eyebrow" style={{ color: 'var(--text-secondary-light)' }}>Global Supply Network</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary-light)', fontFamily: 'var(--font-headings)', marginBottom: '2rem' }}>
                Initiate Official<br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Inquiry</span>
              </h2>
              <p style={{ color: 'var(--text-secondary-light)', lineHeight: '1.7', marginBottom: '3rem' }}>
                Our corporate sales desk reviews global procurement demands. Initiate an inquiry to discuss custom sizes, packaging specifications, chemical analysis sheets, and lead times.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-cyan)' }}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary-light)', display: 'block', letterSpacing: '0.05em' }}>Headquarters</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary-light)', fontWeight: '600' }}>Mumbai, Maharashtra, India</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-phone-alt" style={{ color: 'var(--accent-cyan)' }}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary-light)', display: 'block', letterSpacing: '0.05em' }}>Telephones</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary-light)', fontWeight: '600' }}>+91 93217 43595 / +91 22 6651 8841</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-envelope" style={{ color: 'var(--accent-cyan)' }}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary-light)', display: 'block', letterSpacing: '0.05em' }}>Email Contacts</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary-light)', fontWeight: '600' }}>sales@ecosteels.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div style={{ background: 'var(--bg-surface)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 30px 60px rgba(15,23,42,0.08)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary-light)', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>Quick Quote Wizard</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label className="calc-label" style={{ color: 'var(--text-secondary-light)' }}>First Name</label>
                    <input type="text" className="calc-input" style={{ width: '100%', background: '#ffffff', color: 'var(--text-primary-light)', borderColor: '#cbd5e1' }} placeholder="John" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="calc-label" style={{ color: 'var(--text-secondary-light)' }}>Company</label>
                    <input type="text" className="calc-input" style={{ width: '100%', background: '#ffffff', color: 'var(--text-primary-light)', borderColor: '#cbd5e1' }} placeholder="Corporate Ltd" />
                  </div>
                </div>
                <div>
                  <label className="calc-label" style={{ color: 'var(--text-secondary-light)' }}>Business Email</label>
                  <input type="email" className="calc-input" style={{ width: '100%', background: '#ffffff', color: 'var(--text-primary-light)', borderColor: '#cbd5e1' }} placeholder="john@company.com" />
                </div>
                <div>
                  <label className="calc-label" style={{ color: 'var(--text-secondary-light)' }}>Requirements Remarks</label>
                  <textarea className="calc-input" rows="3" style={{ width: '100%', background: '#ffffff', color: 'var(--text-primary-light)', borderColor: '#cbd5e1' }} placeholder="Enter size range, material standard grades, schedules..."></textarea>
                </div>
              </div>

              <button className="btn-primary" onClick={() => onOpenRFQ()} style={{ width: '100%' }}>
                Launch Multi-Step RFQ Wizard
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
