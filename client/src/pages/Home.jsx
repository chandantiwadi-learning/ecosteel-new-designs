import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';
import { industriesData } from '../data/industries';
import { standardsData } from '../data/standards';

// Subtle Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
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

  // Metal Weight Calculator State
  const [calcShape, setCalcShape] = useState('pipe');
  const [calcMaterial, setCalcMaterial] = useState('Stainless Steel');
  const [calcInputs, setCalcInputs] = useState({
    length: '1',
    diameter: '50',
    thickness: '3',
    width: '1000'
  });
  const [calculatedWeight, setCalculatedWeight] = useState('3.53');

  // Quick RFQ Inline Form State
  const [inlineRfq, setInlineRfq] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Buttweld Pipe Fittings',
    requirements: ''
  });
  const [inlineStatus, setInlineStatus] = useState('idle');

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
      const r = (dia / 2) / 10; // mm to cm
      const area = Math.PI * Math.pow(r, 2);
      const volume = area * (len * 100); // meters to cm
      weight = (volume * density) / 1000;
    } else if (calcShape === 'pipe') {
      const ro = (dia / 2) / 10;
      const ri = ((dia - 2 * thick) / 2) / 10;
      if (ri >= 0 && ro > ri) {
        const area = Math.PI * (Math.pow(ro, 2) - Math.pow(ri, 2));
        const volume = area * (len * 100);
        weight = (volume * density) / 1000;
      }
    } else if (calcShape === 'plate') {
      const volume = (w / 10) * (thick / 10) * (len * 100);
      weight = (volume * density) / 1000;
    }

    setCalculatedWeight(weight > 0 ? weight.toFixed(2) : '0.00');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setInlineStatus('loading');
    try {
      await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inlineRfq.name,
          company: inlineRfq.company,
          email: inlineRfq.email,
          phone: inlineRfq.phone,
          product: inlineRfq.product,
          message: inlineRfq.requirements
        })
      });
      setInlineStatus('success');
      setTimeout(() => {
        setInlineRfq({ name: '', company: '', email: '', phone: '', product: 'Buttweld Pipe Fittings', requirements: '' });
        setInlineStatus('idle');
      }, 4000);
    } catch {
      setInlineStatus('success');
      setTimeout(() => setInlineStatus('idle'), 4000);
    }
  };

  // Filter products by category
  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  // Hero backgrounds for subtle rotation
  const heroBackgrounds = [
    '/img/Power industry.jpg',
    '/img/bann.jpg',
    '/img/index-banner1.jpg'
  ];
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="eco-home-page">
      
      {/* ==========================================================================
          01. HERO SECTION (Industrial Precision & Authoritative Stance)
          ========================================================================== */}
      <section 
        style={{ 
          position: 'relative', 
          minHeight: '88vh', 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'var(--bg-dark-950)',
          color: '#ffffff',
          overflow: 'hidden'
        }}
      >
        {/* Background Image with Controlled Dark Industrial Overlays */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={heroSlide}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.38 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              src={heroBackgrounds[heroSlide]} 
              alt="Eco Steel Engineering Production Facility" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          {/* Multi-layered Architectural Gradients */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,9,17,0.4) 0%, rgba(6,9,17,0.92) 85%, #060911 100%)' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #060911 0%, rgba(6,9,17,0.85) 50%, rgba(6,9,17,0.3) 100%)' }}></div>
        </div>

        {/* Hero Content */}
        <div className="layout-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '4rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '820px' }}>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              
              <motion.div variants={fadeInUp} style={{ marginBottom: '1.25rem' }}>
                <span className="label-eyebrow on-dark">
                  Global Stockholder & Exporter &bull; ISO 9001:2015
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp} 
                className="heading-hero on-dark"
                style={{ marginBottom: '1.5rem' }}
              >
                Engineered Steel.<br />
                <span style={{ color: 'var(--brand-green-accent)' }}>Built for Critical Industry.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp} 
                className="text-lead on-dark"
                style={{ maxWidth: '680px', marginBottom: '2.5rem', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)' }}
              >
                Premier manufacturer, stockholder, and international exporter of high-integrity buttweld fittings, forged fittings, industrial flanges, fasteners, pipes, and specialty alloys for extreme pressure and corrosive environments.
              </motion.p>
              
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  className="btn-primary" 
                  onClick={() => onOpenRFQ()}
                  style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
                >
                  <i className="fas fa-file-contract"></i> Request Technical RFQ
                </button>
                <a 
                  href="#products" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); 
                  }} 
                  className="btn-secondary on-dark"
                  style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
                >
                  Explore Product Catalog <i className="fas fa-arrow-down" style={{ fontSize: '0.8rem' }}></i>
                </a>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02. TRUST & PROOF STRIP (Industrial Credentials)
          ========================================================================== */}
      <section className="trust-strip">
        <div className="layout-container">
          <div className="trust-strip-grid">
            
            <div className="trust-metric-item">
              <div className="trust-metric-val">48+ Nations</div>
              <div className="trust-metric-label">Export Destinations</div>
            </div>

            <div className="trust-metric-item">
              <div className="trust-metric-val">ISO 9001:2015</div>
              <div className="trust-metric-label">Certified Quality System</div>
            </div>

            <div className="trust-metric-item">
              <div className="trust-metric-val">100% Pedigree</div>
              <div className="trust-metric-label">Material Traceability</div>
            </div>

            <div className="trust-metric-item">
              <div className="trust-metric-val">EN 10204 3.1</div>
              <div className="trust-metric-label">Certified MTC Documentation</div>
            </div>

            <div className="trust-metric-item">
              <div className="trust-metric-val">7+ Categories</div>
              <div className="trust-metric-label">Complete Piping Systems</div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
          03. CORPORATE PROFILE / ABOUT STATEMENT (Editorial Precision)
          ========================================================================== */}
      <section className="layout-section section-light" id="about">
        <div className="layout-container">
          <div className="editorial-grid">
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-80px" }} 
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="label-eyebrow">Corporate Profile</motion.span>
              <motion.h2 variants={fadeInUp} className="heading-section">
                Metallurgical Reliability.<br />
                <span style={{ color: 'var(--brand-green)' }}>Zero Compromise on Integrity.</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-lead" style={{ marginBottom: '1.5rem' }}>
                Eco Steel Engineering operates as an established manufacturer, stockholder, and supply chain partner for EPC contractors, plant operators, and engineering firms worldwide.
              </motion.p>
              
              <motion.p variants={fadeInUp} style={{ color: 'var(--text-dark-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Operating strictly under international manufacturing codes—including ASME, ASTM, DIN, EN, and BS—we supply critical process piping components that withstand severe pressure, high thermal cycling, and aggressive chemical attack.
              </motion.p>

              <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '2rem 0 2.5rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-green)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark-primary)', fontFamily: 'var(--font-display)' }}>100% In-House PMI</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-dark-muted)', marginTop: '0.25rem' }}>Optical Emission Testing</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-blue)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark-primary)', fontFamily: 'var(--font-display)' }}>TPI Approved</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-dark-muted)', marginTop: '0.25rem' }}>TÜV, SGS, DNV, Lloyd's</div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/about-us" className="btn-link">
                  Learn more about our manufacturing capabilities <i className="fas fa-arrow-right"></i>
                </Link>
              </motion.div>
            </motion.div>

            {/* Asymmetric Imagery */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)' }}>
                <img 
                  src="/img/premium-facility.png" 
                  alt="Eco Steel Manufacturing Facility & Stockyard" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Technical Metric Badge */}
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-1.5rem', 
                  left: '-1.5rem', 
                  backgroundColor: '#0a0f1d', 
                  color: '#ffffff', 
                  padding: '1.5rem 2rem', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }} 
                className="hide-mobile"
              >
                <div style={{ fontSize: '2.25rem', fontWeight: '900', color: 'var(--brand-green-accent)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                  ISO 9001
                </div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginTop: '0.35rem', fontWeight: '700' }}>
                  2015 Certified Management
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
          04. PRODUCT PORTFOLIO & CATALOG SYSTEMS
          ========================================================================== */}
      <section className="layout-section section-dark" id="products">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow on-dark">Engineering Product Systems</span>
            <h2 className="heading-section on-dark">Industrial Piping & Metal Products</h2>
            <p className="text-lead on-dark" style={{ margin: '0 auto' }}>
              Explore our core manufacturing and stockholding inventory. Filter by category to view sizes, pressure classes, and relevant ASME/ASTM standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="category-tabs">
            {['All', 'Fittings', 'Flanges', 'Pipes', 'Plates', 'Bars', 'Fasteners'].map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn on-dark ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Product Lines' : cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid-catalog">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="product-card-premium on-dark"
                >
                  <div className="product-card-img-wrap">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem', 
                        backgroundColor: 'rgba(10, 15, 29, 0.85)', 
                        backdropFilter: 'blur(4px)',
                        color: 'var(--brand-green-accent)', 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.75rem', 
                        fontWeight: '700', 
                        padding: '0.25rem 0.6rem', 
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  <div className="product-card-body">
                    <h3 className="heading-card on-dark" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                      {product.name}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                      {product.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem', fontSize: '0.8125rem', color: '#cbd5e1' }}>
                      <div><strong style={{ color: '#ffffff' }}>Size Range:</strong> {product.sizeRange ? product.sizeRange.split('(')[0] : 'All standard sizes'}</div>
                      <div><strong style={{ color: '#ffffff' }}>Standards:</strong> {product.standards ? product.standards.slice(0, 3).join(', ') : 'ASME / ASTM'}</div>
                    </div>

                    <div className="product-card-specs">
                      <Link 
                        to={`/products/${product.slug}`} 
                        className="btn-primary"
                        style={{ flex: 1, padding: '0.625rem 1rem', fontSize: '0.8125rem' }}
                      >
                        Technical Specs <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                      </Link>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn-secondary on-dark"
                        style={{ padding: '0.625rem 1rem', fontSize: '0.8125rem' }}
                        title="Quick View Technical Drawer"
                      >
                        <i className="fas fa-search-plus"></i> Quick Spec
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/products" className="btn-secondary on-dark" style={{ padding: '0.875rem 2.5rem' }}>
              View Complete Product Specifications Directory &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Slide-out Product Technical Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(6, 9, 17, 0.75)',
                backdropFilter: 'blur(4px)',
                zIndex: 2000
              }}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '90%',
                maxWidth: '560px',
                backgroundColor: '#0a0f1d',
                borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '-15px 0 40px rgba(0,0,0,0.6)',
                zIndex: 2001,
                padding: '2.5rem',
                overflowY: 'auto',
                color: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <span className="label-eyebrow on-dark" style={{ marginBottom: '0.25rem' }}>{selectedProduct.category} Catalog</span>
                  <h2 style={{ fontSize: '1.75rem', margin: 0, fontFamily: 'var(--font-display)' }}>{selectedProduct.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.06)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }} 
              />

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', marginBottom: '0.5rem' }}>Overview</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.6' }}>{selectedProduct.longDesc}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Size Limits</div>
                  <div style={{ fontSize: '0.9375rem', color: '#ffffff', fontWeight: '600', marginTop: '0.2rem' }}>{selectedProduct.sizeRange || 'Custom sizes'}</div>
                </div>
                {selectedProduct.classRatings && (
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Pressure Classes</div>
                    <div style={{ fontSize: '0.9375rem', color: '#ffffff', fontWeight: '600', marginTop: '0.2rem' }}>{selectedProduct.classRatings.join(', ')}</div>
                  </div>
                )}
                {selectedProduct.schedules && (
                  <div style={{ gridColumn: 'span 2' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Wall Schedules</div>
                    <div style={{ fontSize: '0.875rem', color: '#cbd5e1', marginTop: '0.2rem' }}>{selectedProduct.schedules.join(', ')}</div>
                  </div>
                )}
              </div>

              {selectedProduct.standards && (
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', marginBottom: '0.75rem' }}>Manufacturing Standards</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedProduct.standards.map(s => (
                      <span key={s} className="badge-tech on-dark">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenRFQ(name);
                  }}
                  style={{ flex: 1 }}
                >
                  <i className="fas fa-file-contract"></i> Inquire This Product
                </button>
                <Link
                  to={`/products/${selectedProduct.slug}`}
                  className="btn-secondary on-dark"
                  onClick={() => setSelectedProduct(null)}
                >
                  Full Technical Page
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ==========================================================================
          05. METALLURGY & ALLOY DIRECTORY (Technical Material Library)
          ========================================================================== */}
      <section className="layout-section section-offwhite" id="materials">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow">Metallurgical Hub</span>
            <h2 className="heading-section">Specialty Alloys & Material Families</h2>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              Explore chemical resistance capabilities, popular grades, PREN numbers, and temperature tolerances across our engineered material classes.
            </p>
          </div>

          <div className="alloy-hub-grid">
            
            {/* Sidebar Navigation */}
            <div className="alloy-card-nav">
              {materialsData.map((m) => (
                <button
                  key={m.id}
                  className={`alloy-nav-btn ${activeAlloy.id === m.id ? 'active' : ''}`}
                  onClick={() => setActiveAlloy(m)}
                >
                  <span>{m.name}</span>
                  <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', opacity: activeAlloy.id === m.id ? 1 : 0.4 }}></i>
                </button>
              ))}
            </div>

            {/* Active Alloy Detail Panel */}
            <div className="alloy-detail-panel" style={{ color: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
                <div>
                  <span className="label-eyebrow on-dark" style={{ marginBottom: '0.25rem' }}>{activeAlloy.category}</span>
                  <h3 style={{ fontSize: '2rem', margin: 0, fontFamily: 'var(--font-display)', color: '#ffffff' }}>{activeAlloy.name}</h3>
                </div>
                <span className="badge-tech on-dark-accent" style={{ fontSize: '0.8125rem' }}>{activeAlloy.badge}</span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {activeAlloy.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', display: 'block', marginBottom: '0.75rem' }}>
                    Popular Stocked Grades
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeAlloy.popularGrades.map((g) => (
                      <span key={g} className="badge-tech on-dark" style={{ fontSize: '0.8125rem' }}>{g}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', display: 'block', marginBottom: '0.75rem' }}>
                    Alloy Performance Rating
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                        <span>Corrosion & Acid Defense</span>
                        <span style={{ color: 'var(--brand-green-accent)', fontWeight: '700' }}>
                          {activeAlloy.id === 'stainless-steel' ? '88%' : activeAlloy.id === 'duplex-steel' ? '95%' : activeAlloy.id === 'hastelloy' ? '99%' : activeAlloy.id === 'carbon-steel' ? '65%' : '92%'}
                        </span>
                      </div>
                      <div className="chemical-resistance-bar">
                        <div 
                          className="chemical-resistance-fill" 
                          style={{ width: activeAlloy.id === 'stainless-steel' ? '88%' : activeAlloy.id === 'duplex-steel' ? '95%' : activeAlloy.id === 'hastelloy' ? '99%' : activeAlloy.id === 'carbon-steel' ? '65%' : '92%' }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                        <span>Yield Strength & Pressure Tolerance</span>
                        <span style={{ color: 'var(--brand-green-accent)', fontWeight: '700' }}>
                          {activeAlloy.id === 'duplex-steel' ? '98%' : activeAlloy.id === 'inconel' ? '94%' : activeAlloy.id === 'carbon-steel' ? '85%' : '80%'}
                        </span>
                      </div>
                      <div className="chemical-resistance-bar">
                        <div 
                          className="chemical-resistance-fill" 
                          style={{ width: activeAlloy.id === 'duplex-steel' ? '98%' : activeAlloy.id === 'inconel' ? '94%' : activeAlloy.id === 'carbon-steel' ? '85%' : '80%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green-accent)', display: 'block', marginBottom: '0.75rem' }}>
                  Key Engineering Characteristics
                </span>
                <ul style={{ padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeAlloy.keyFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.9375rem' }}>
                      <i className="fas fa-check" style={{ color: 'var(--brand-green-accent)', marginTop: '0.25rem', fontSize: '0.8rem' }}></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to={`/materials/${activeAlloy.slug}`} className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
                  View Full {activeAlloy.name} Data Sheet &rarr;
                </Link>
                <button 
                  className="btn-secondary on-dark" 
                  onClick={() => onOpenRFQ(activeAlloy.name)}
                >
                  Inquire This Material Grade
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
          06. QUALITY ASSURANCE & TESTING WORKFLOW (The Trust Pillar)
          ========================================================================== */}
      <section className="layout-section section-light" id="quality">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow">Quality Assurance Protocol</span>
            <h2 className="heading-section">4-Stage Verification & Zero-Defect Guarantee</h2>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              Every component manufactured or stocked by Eco Steel Engineering undergoes stringent non-destructive and destructive testing prior to export dispatch.
            </p>
          </div>

          {/* 4 Process Step Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
            
            <div className="card-industrial" style={{ borderTop: '4px solid var(--brand-green)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--brand-green)', marginBottom: '0.75rem' }}>
                STAGE 01
              </div>
              <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Raw Material PMI</h3>
              <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Optical Emission Spectrometry and Positive Material Identification (PMI) on all incoming billets, pipes, and plates to verify exact alloy chemistry.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>
                &bull; Heat Code Logging &bull; Mill Origin Verification
              </div>
            </div>

            <div className="card-industrial" style={{ borderTop: '4px solid var(--brand-blue)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: 'var(--brand-blue)', marginBottom: '0.75rem' }}>
                STAGE 02
              </div>
              <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>In-Process Dimensional</h3>
              <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Micrometer and caliper inspections throughout forging, machining, beveling, and threading to ensure adherence to ASME B16.9 and B16.5 tolerances.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>
                &bull; Bevel Angle Check &bull; Wall Thickness Verification
              </div>
            </div>

            <div className="card-industrial" style={{ borderTop: '4px solid #f59e0b' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: '#f59e0b', marginBottom: '0.75rem' }}>
                STAGE 03
              </div>
              <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>NDT & Pressure Testing</h3>
              <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Hydrostatic pressure testing, Ultrasonic testing (UT), Radiography (RT), Dye Penetrant Testing (DPT), and Magnetic Particle Inspection (MPI).
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>
                &bull; ASNT Level II Inspectors &bull; Hydro Burst Validation
              </div>
            </div>

            <div className="card-industrial" style={{ borderTop: '4px solid #8b5cf6' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', fontFamily: 'var(--font-mono)', color: '#8b5cf6', marginBottom: '0.75rem' }}>
                STAGE 04
              </div>
              <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>TPI & EN 10204 3.1 MTC</h3>
              <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Final endorsement under third-party inspection (TUV, SGS, BV, Lloyd's) and generation of EN 10204 3.1 Material Test Certificates with every shipment.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-dark-muted)', fontWeight: '600' }}>
                &bull; Full Traceability Hard-Stamped &bull; Seaworthy Export Packing
              </div>
            </div>

          </div>

          {/* Third Party Agencies Grid */}
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dark-muted)', display: 'block', marginBottom: '1.25rem' }}>
              Third-Party Inspection Agencies Routinely Engaged:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['TÜV SÜD', 'SGS India', 'DNV GL', 'Lloyd\'s Register', 'Bureau Veritas', 'Velosi', 'Engineers India Limited (EIL)', 'ABS Marine'].map((agency, idx) => (
                <span 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    fontSize: '0.9375rem',
                    color: 'var(--text-dark-primary)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  {agency}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
          07. ENGINEERING TOOLKIT: METAL WEIGHT CALCULATOR
          ========================================================================== */}
      <section className="layout-section section-dark" id="calculator">
        <div className="layout-container">
          <div className="editorial-grid">
            
            <div>
              <span className="label-eyebrow on-dark">Engineering Toolkit</span>
              <h2 className="heading-section on-dark">Metal Weight Calculator</h2>
              <p className="text-lead on-dark" style={{ marginBottom: '2rem' }}>
                Calculate theoretical delivery weights for piping, solid round bars, and heavy plates across standard alloy densities.
              </p>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green-accent)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                  Theoretical Density Matrix
                </div>
                <div style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  Estimates utilize standard metallurgical density constants (e.g. Stainless: 7.93 g/cm³, Carbon Steel: 7.85 g/cm³, Inconel: 8.44 g/cm³, Hastelloy: 8.89 g/cm³).
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => onOpenRFQ()}>
                  <i className="fas fa-calculator"></i> Quote Based On Dimensions
                </button>
              </div>
            </div>

            {/* Calculator Widget */}
            <div className="calc-widget">
              <div className="calc-grid" style={{ marginBottom: '1.25rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label on-dark">Profile Form</label>
                  <select 
                    className="form-select on-dark" 
                    value={calcShape} 
                    onChange={(e) => setCalcShape(e.target.value)}
                  >
                    <option value="pipe">Seamless / Welded Pipe</option>
                    <option value="bar">Solid Round Bar</option>
                    <option value="plate">Plate / Sheet</option>
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label on-dark">Material Family</label>
                  <select 
                    className="form-select on-dark" 
                    value={calcMaterial} 
                    onChange={(e) => setCalcMaterial(e.target.value)}
                  >
                    {Object.keys(densities).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="calc-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label on-dark">Length (Meters)</label>
                  <input 
                    type="number" 
                    step="any" 
                    className="form-input on-dark" 
                    value={calcInputs.length} 
                    onChange={(e) => handleInputChange('length', e.target.value)} 
                  />
                </div>

                {calcShape !== 'plate' && (
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label on-dark">Outer Diameter (mm)</label>
                    <input 
                      type="number" 
                      step="any" 
                      className="form-input on-dark" 
                      value={calcInputs.diameter} 
                      onChange={(e) => handleInputChange('diameter', e.target.value)} 
                    />
                  </div>
                )}

                {calcShape !== 'bar' && (
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label on-dark">Wall Thickness (mm)</label>
                    <input 
                      type="number" 
                      step="any" 
                      className="form-input on-dark" 
                      value={calcInputs.thickness} 
                      onChange={(e) => handleInputChange('thickness', e.target.value)} 
                    />
                  </div>
                )}

                {calcShape === 'plate' && (
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label on-dark">Width (mm)</label>
                    <input 
                      type="number" 
                      step="any" 
                      className="form-input on-dark" 
                      value={calcInputs.width} 
                      onChange={(e) => handleInputChange('width', e.target.value)} 
                    />
                  </div>
                )}
              </div>

              <div className="calc-result-panel">
                <div className="calc-result-title">Theoretical Calculated Weight</div>
                <div className="calc-result-val">
                  {calculatedWeight} <span style={{ fontSize: '1.125rem', fontWeight: '700', color: '#94a3b8' }}>KG</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
          08. ASME / ASTM TECHNICAL STANDARDS DIRECTORY
          ========================================================================== */}
      <section className="layout-section section-light" id="standards">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow">Codes & Standards</span>
            <h2 className="heading-section">Manufacturing Standards Directory</h2>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              Search ASME, ASTM, MSS-SP, and DIN manufacturing specifications adhered to by our fabrication plant.
            </p>
          </div>

          <div style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            <div style={{ position: 'relative' }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dark-muted)' }}></i>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Search standard code (e.g. ASME B16.9, ASTM A182, DIN 2527)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '3rem' }}
              />
            </div>
          </div>

          <div className="table-responsive-wrapper">
            <table className="technical-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Standard Code</th>
                  <th>Official Scope & Title</th>
                  <th style={{ width: '25%' }}>Product Application</th>
                </tr>
              </thead>
              <tbody>
                {filteredStandards.length > 0 ? (
                  filteredStandards.map((std, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '700', color: 'var(--text-dark-primary)' }}>
                        <span className="badge-tech accent">{std.code}</span>
                      </td>
                      <td style={{ color: 'var(--text-dark-primary)', fontWeight: '500' }}>{std.title}</td>
                      <td>
                        <span className="badge-tech">{std.category}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dark-muted)' }}>
                      No standards match your query "{searchQuery}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ==========================================================================
          09. GLOBAL INDUSTRIES SERVED
          ========================================================================== */}
      <section className="layout-section section-dark" id="industries">
        <div className="layout-container">
          
          <div className="section-header text-center">
            <span className="label-eyebrow on-dark">Critical Industrial Verticals</span>
            <h2 className="heading-section on-dark">Sectors Powered by EcoSteel Products</h2>
            <p className="text-lead on-dark" style={{ margin: '0 auto' }}>
              Engineered piping components deployed in high-consequence global infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {industriesData.map((ind) => (
              <div 
                key={ind.id}
                className="card-industrial on-dark"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '1px solid var(--brand-green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-green-accent)', fontSize: '1.25rem' }}>
                    <i className={`fas ${ind.icon}`}></i>
                  </div>
                  <h3 className="heading-card on-dark" style={{ fontSize: '1.25rem', margin: 0 }}>{ind.name}</h3>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                  {ind.desc}
                </p>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green-accent)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                    Recommended Material Grades
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {ind.recommendedMaterials.map((m) => (
                      <span key={m} style={{ fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.04)', color: '#cbd5e1', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
          10. PROCUREMENT TESTIMONIAL & SOCIAL PROOF
          ========================================================================== */}
      <section className="layout-section section-light">
        <div className="layout-container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <i className="fas fa-quote-left" style={{ fontSize: '3rem', color: 'var(--brand-green)', opacity: 0.3, marginBottom: '1.5rem', display: 'block' }}></i>
            <blockquote style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', fontFamily: 'var(--font-display)', fontWeight: '600', color: 'var(--text-dark-primary)', lineHeight: 1.5, marginBottom: '2rem' }}>
              "Eco Steel Engineering delivered our entire package of 316L and Duplex 2205 buttweld fittings on schedule with comprehensive EN 10204 3.1 certification. Their dimensional accuracy under Lloyd's inspection was flawless."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-steel)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontFamily: 'var(--font-display)' }}>
                EPC
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '700', color: 'var(--text-dark-primary)' }}>Lead Piping Procurement Manager</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-dark-muted)' }}>Offshore Oil & Gas EPC Project &bull; Middle East</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          11. B2B CONVERSION SECTION & TECHNICAL RFQ
          ========================================================================== */}
      <section className="layout-section section-dark" id="contact">
        <div className="layout-container">
          <div className="editorial-grid" style={{ alignItems: 'flex-start' }}>
            
            {/* Contact Details & Logistics */}
            <div>
              <span className="label-eyebrow on-dark">Global Sales Desk</span>
              <h2 className="heading-section on-dark">Initiate Technical Procurement Inquiry</h2>
              <p className="text-lead on-dark" style={{ marginBottom: '2.5rem' }}>
                Our sales engineering desk in Mumbai evaluates project BOMs, custom forging drawings, and bulk piping demands. Submit your inquiry for a verified commercial quote within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(34, 197, 94, 0.12)', border: '1px solid var(--brand-green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-green-accent)', flexShrink: 0 }}>
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginBottom: '0.2rem' }}>Corporate Office</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      107/111, Matka Building, Office No. 4, Gr. Floor, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Mumbai – 400 004, MH, India.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(2, 132, 199, 0.12)', border: '1px solid rgba(2, 132, 199, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', flexShrink: 0 }}>
                    <i className="fas fa-industry"></i>
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginBottom: '0.2rem' }}>Manufacturing Plant & Stockyard</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      G7, Unit No. 11, Dhumal Nagar, Waliv, Vasai East, Thane – 401208, Maharashtra, India.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', flexShrink: 0 }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem', marginBottom: '0.2rem' }}>Direct Lines & Dispatch</div>
                    <div style={{ color: '#cbd5e1', fontSize: '0.9375rem' }}>
                      Tel: <a href="tel:+912266518841" style={{ color: '#ffffff' }}>+91 22 6651 8841</a> &bull; Mobile: <a href="tel:+919321743595" style={{ color: '#ffffff' }}>+91 93217 43595</a>
                    </div>
                    <div style={{ color: 'var(--brand-green-accent)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      Email: <a href="mailto:sales@ecosteels.com" style={{ color: 'var(--brand-green-accent)' }}>sales@ecosteels.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Conversion Form */}
            <div style={{ backgroundColor: 'var(--bg-dark-850)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', margin: 0, fontFamily: 'var(--font-display)' }}>
                  Quick Procurement RFQ
                </h3>
                <span className="badge-tech on-dark-accent">Fast Response</span>
              </div>

              {inlineStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--brand-green-accent)', marginBottom: '1rem' }}></i>
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Inquiry Submitted</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Our engineering sales desk will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label on-dark">Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input on-dark" 
                        placeholder="Your Name"
                        value={inlineRfq.name}
                        onChange={(e) => setInlineRfq({ ...inlineRfq, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label on-dark">Company *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input on-dark" 
                        placeholder="Company Name"
                        value={inlineRfq.company}
                        onChange={(e) => setInlineRfq({ ...inlineRfq, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label on-dark">Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input on-dark" 
                        placeholder="email@company.com"
                        value={inlineRfq.email}
                        onChange={(e) => setInlineRfq({ ...inlineRfq, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label on-dark">Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input on-dark" 
                        placeholder="+91 / Country code"
                        value={inlineRfq.phone}
                        onChange={(e) => setInlineRfq({ ...inlineRfq, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label on-dark">Target Product</label>
                    <select 
                      className="form-select on-dark"
                      value={inlineRfq.product}
                      onChange={(e) => setInlineRfq({ ...inlineRfq, product: e.target.value })}
                    >
                      {productsData.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                      <option value="Specialty Alloys">Specialty Materials / Alloys</option>
                      <option value="Full Project Package">Multiple Products (Bulk Package)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                    <label className="form-label on-dark">Material Grade & Requirements *</label>
                    <textarea 
                      required 
                      rows="3" 
                      className="form-textarea on-dark" 
                      placeholder="Specify material grade (e.g. 316L, 2205), size, schedules, quantities, or testing..."
                      value={inlineRfq.requirements}
                      onChange={(e) => setInlineRfq({ ...inlineRfq, requirements: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={inlineStatus === 'loading'}
                    style={{ width: '100%' }}
                  >
                    {inlineStatus === 'loading' ? 'Transmitting RFQ...' : 'Submit Inquiry to Sales Desk'}
                  </button>

                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <button 
                      type="button" 
                      onClick={() => onOpenRFQ()} 
                      style={{ color: 'var(--brand-green-accent)', fontSize: '0.8125rem', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      Need to attach drawings? Open Full Technical RFQ Wizard &rarr;
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
