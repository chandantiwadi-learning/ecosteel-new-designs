import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderTopBar from './HeaderTopBar';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';

const PremiumNavbar = ({ onOpenRFQ, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({ products: false, materials: false });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const closeMobile = () => setMobileMenuOpen(false);

  // Group products for Mega Menu
  const pipingProducts = productsData.filter(p => p.category === 'Fittings' || p.category === 'Flanges' || p.category === 'Fasteners');
  const millProducts = productsData.filter(p => p.category === 'Pipes' || p.category === 'Plates' || p.category === 'Bars');

  return (
    <div className="eco-header-wrapper" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Top Utility Bar */}
      <HeaderTopBar />

      {/* Main Navigation Bar */}
      <header
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 15, 29, 0.96)' : 'var(--bg-dark-900)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        <div className="layout-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: isScrolled ? '72px' : '84px',
              transition: 'height 0.3s ease'
            }}
          >
            {/* EcoSteel Brand Logo */}
            <Link
              to="/"
              onClick={closeMobile}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              aria-label="Eco Steel Engineering Home"
            >
              <img
                src="/img/new-eco_logo.png"
                alt="Eco Steel Engineering Logo"
                style={{
                  height: isScrolled ? '42px' : '48px',
                  width: 'auto',
                  transition: 'height 0.3s ease'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/img/index-eco-logo.png';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="desktop-navigation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
                height: '100%'
              }}
            >
              <Link
                to="/"
                className={`nav-item-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className={`nav-item-link ${isActive('/about-us') ? 'active' : ''}`}
              >
                About
              </Link>

              {/* Products with Structured Mega Menu */}
              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              >
                <Link
                  to="/products"
                  className={`nav-item-link ${isActive('/products') ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  Products <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem', marginTop: '1px' }}></i>
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="mega-menu-dropdown"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-150px',
                        width: '780px',
                        backgroundColor: '#0a0f1d',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        padding: '2rem',
                        zIndex: 1100
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr 0.9fr', gap: '2rem' }}>
                        
                        {/* Column 1: Piping & Fittings */}
                        <div>
                          <div className="mega-menu-heading">
                            <i className="fas fa-layer-group" style={{ color: 'var(--brand-green-accent)' }}></i> Piping & Fittings
                          </div>
                          <ul className="mega-menu-list">
                            {pipingProducts.map((p) => (
                              <li key={p.id}>
                                <Link to={`/products/${p.slug}`} className="mega-menu-link">
                                  <span className="link-title">{p.name}</span>
                                  <span className="link-meta">{p.sizeRange ? p.sizeRange.split('&')[0] : 'All sizes'}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Mill Forms & Tubing */}
                        <div>
                          <div className="mega-menu-heading">
                            <i className="fas fa-industry" style={{ color: 'var(--brand-blue)' }}></i> Mill Forms & Tubing
                          </div>
                          <ul className="mega-menu-list">
                            {millProducts.map((p) => (
                              <li key={p.id}>
                                <Link to={`/products/${p.slug}`} className="mega-menu-link">
                                  <span className="link-title">{p.name}</span>
                                  <span className="link-meta">{p.sizeRange ? p.sizeRange.split('(')[0] : 'Custom thickness'}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Quality & Catalog Action */}
                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--brand-green-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                            100% Traceability
                          </div>
                          <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.75rem' }}>Full Specification Catalog</h4>
                          <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                            All items dispatched with EN 10204 3.1 MTC documentation and PMI testing.
                          </p>
                          <Link to="/products" className="btn-primary" style={{ width: '100%', padding: '0.625rem 1rem', fontSize: '0.8125rem' }}>
                            View All Products <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materials Dropdown */}
              <div
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setActiveDropdown('materials')}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              >
                <Link
                  to="/materials"
                  className={`nav-item-link ${isActive('/materials') ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  Materials <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem', marginTop: '1px' }}></i>
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'materials' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '320px',
                        backgroundColor: '#0a0f1d',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        padding: '1.25rem 0',
                        zIndex: 1100
                      }}
                    >
                      <div style={{ padding: '0 1.5rem 0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green-accent)', letterSpacing: '0.08em' }}>Metallurgical Hub</span>
                      </div>
                      <ul style={{ margin: 0, padding: 0 }}>
                        {materialsData.map((m) => (
                          <li key={m.id}>
                            <Link
                              to={`/materials/${m.slug}`}
                              style={{
                                display: 'block',
                                padding: '0.625rem 1.5rem',
                                color: '#cbd5e1',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                textDecoration: 'none',
                                transition: 'all 0.15s'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.paddingLeft = '1.75rem';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#cbd5e1';
                                e.currentTarget.style.paddingLeft = '1.5rem';
                              }}
                            >
                              {m.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div style={{ padding: '0.75rem 1.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', marginTop: '0.5rem' }}>
                        <Link to="/materials" style={{ fontSize: '0.8125rem', color: 'var(--brand-green-accent)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          View All Materials &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/quality"
                className={`nav-item-link ${isActive('/quality') ? 'active' : ''}`}
              >
                Quality
              </Link>

              <Link
                to="/industries"
                className={`nav-item-link ${isActive('/industries') ? 'active' : ''}`}
              >
                Industries
              </Link>

              <Link
                to="/resources"
                className={`nav-item-link ${isActive('/resources') ? 'active' : ''}`}
              >
                Resources
              </Link>

              <Link
                to="/contact-us"
                className={`nav-item-link ${isActive('/contact-us') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Header Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Search Modal Trigger */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Products and Standards"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <i className="fas fa-search"></i>
              </button>

              {/* Primary RFQ CTA */}
              <button
                className="btn-primary desktop-cta"
                onClick={() => onOpenRFQ()}
                style={{
                  padding: '0.75rem 1.625rem',
                  fontSize: '0.875rem'
                }}
              >
                <i className="fas fa-file-contract" style={{ fontSize: '0.8rem' }}></i> Request RFQ
              </button>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-nav-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                style={{
                  display: 'none',
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  cursor: 'pointer'
                }}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Featured Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(6, 9, 17, 0.75)',
                backdropFilter: 'blur(4px)',
                zIndex: 1998
              }}
            />

            {/* Slide-out Drawer */}
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
                width: '88%',
                maxWidth: '400px',
                backgroundColor: '#0a0f1d',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                zIndex: 1999,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
              }}
            >
              {/* Drawer Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <img
                  src="/img/new-eco_logo.png"
                  alt="Eco Steel"
                  style={{ height: '36px', width: 'auto' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/img/index-eco-logo.png';
                  }}
                />
                <button
                  onClick={closeMobile}
                  aria-label="Close menu"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem'
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Drawer Links */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <Link to="/" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-home" style={{ width: '20px', color: 'var(--brand-green-accent)' }}></i> Home
                </Link>
                <Link to="/about-us" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-building" style={{ width: '20px', color: 'var(--brand-blue)' }}></i> About Us
                </Link>

                {/* Expandable Products */}
                <div>
                  <div
                    onClick={() => setMobileExpanded(prev => ({ ...prev, products: !prev.products }))}
                    className="mobile-drawer-link"
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <i className="fas fa-cubes" style={{ width: '20px', color: 'var(--brand-green-accent)' }}></i> Products
                    </span>
                    <i className={`fas fa-chevron-${mobileExpanded.products ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }}></i>
                  </div>
                  {mobileExpanded.products && (
                    <div style={{ paddingLeft: '2.5rem', paddingBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {productsData.map(p => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          onClick={closeMobile}
                          style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', padding: '0.35rem 0' }}
                        >
                          {p.name}
                        </Link>
                      ))}
                      <Link
                        to="/products"
                        onClick={closeMobile}
                        style={{ color: 'var(--brand-green-accent)', fontSize: '0.875rem', fontWeight: '700', textDecoration: 'none', paddingTop: '0.5rem' }}
                      >
                        All Products Catalog &rarr;
                      </Link>
                    </div>
                  )}
                </div>

                {/* Expandable Materials */}
                <div>
                  <div
                    onClick={() => setMobileExpanded(prev => ({ ...prev, materials: !prev.materials }))}
                    className="mobile-drawer-link"
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <i className="fas fa-atom" style={{ width: '20px', color: 'var(--brand-blue)' }}></i> Materials
                    </span>
                    <i className={`fas fa-chevron-${mobileExpanded.materials ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }}></i>
                  </div>
                  {mobileExpanded.materials && (
                    <div style={{ paddingLeft: '2.5rem', paddingBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {materialsData.map(m => (
                        <Link
                          key={m.id}
                          to={`/materials/${m.slug}`}
                          onClick={closeMobile}
                          style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', padding: '0.35rem 0' }}
                        >
                          {m.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/quality" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-certificate" style={{ width: '20px', color: 'var(--brand-green-accent)' }}></i> Quality Assurance
                </Link>
                <Link to="/industries" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-industry" style={{ width: '20px', color: 'var(--brand-blue)' }}></i> Industries
                </Link>
                <Link to="/resources" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-book" style={{ width: '20px', color: 'var(--brand-green-accent)' }}></i> Technical Resources
                </Link>
                <Link to="/contact-us" onClick={closeMobile} className="mobile-drawer-link">
                  <i className="fas fa-phone-alt" style={{ width: '20px', color: 'var(--brand-blue)' }}></i> Contact Us
                </Link>

                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    className="btn-primary"
                    onClick={() => { closeMobile(); onOpenRFQ(); }}
                    style={{ width: '100%', padding: '0.875rem' }}
                  >
                    <i className="fas fa-file-contract"></i> Request Official RFQ
                  </button>
                  <a
                    href="https://wa.me/919321743595"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem',
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: '700',
                      textDecoration: 'none',
                      fontSize: '0.9375rem'
                    }}
                  >
                    <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.8125rem',
                  color: '#64748b'
                }}
              >
                <div>Eco Steel Engineering &bull; Mumbai, India</div>
                <div style={{ marginTop: '0.25rem' }}>sales@ecosteels.com</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-item-link {
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 0;
          position: relative;
          transition: color var(--transition-fast);
        }
        .nav-item-link:hover, .nav-item-link.active {
          color: #ffffff;
        }
        .nav-item-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--brand-green-accent);
          border-radius: 1px;
        }

        .mega-menu-heading {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #ffffff;
          padding-bottom: 0.75rem;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mega-menu-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0;
          margin: 0;
        }

        .mega-menu-link {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-xs);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .mega-menu-link:hover {
          background-color: rgba(255, 255, 255, 0.06);
        }
        .mega-menu-link .link-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #cbd5e1;
        }
        .mega-menu-link:hover .link-title {
          color: var(--brand-green-accent);
        }
        .mega-menu-link .link-meta {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.15rem;
        }

        .mobile-drawer-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          color: #cbd5e1;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .mobile-drawer-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        @media (max-width: 1080px) {
          .desktop-navigation, .desktop-cta {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumNavbar;
