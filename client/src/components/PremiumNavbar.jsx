import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';

const PremiumHeader = ({ onOpenRFQ, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--text-navy)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease-out'
      }}
    >
      <div className="layout-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: isScrolled ? '70px' : '90px', transition: 'height 0.3s ease-out' }}>
          
          {/* Logo */}
          <Link to="/" onClick={closeMobile} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/img/index-eco-logo.png" alt="Eco Steel Engineering" style={{ height: isScrolled ? '40px' : '48px', transition: 'height 0.3s ease-out' }} />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', gap: '2.5rem' }} className="desktop-nav">
            <Link to="/" style={{ color: location.pathname === '/' ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: location.pathname === '/' ? '600' : '500', fontSize: '0.9375rem' }}>Home</Link>
            <Link to="/about-us" style={{ color: isActive('/about-us') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/about-us') ? '600' : '500', fontSize: '0.9375rem' }}>About</Link>
            
            {/* Products Dropdown */}
            <div 
              onMouseEnter={() => setActiveDropdown('products')} 
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <Link to="/products" style={{ color: isActive('/products') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/products') ? '600' : '500', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Products <i className="fas fa-chevron-down" style={{ fontSize: '0.75rem', marginTop: '2px' }}></i>
              </Link>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                    style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--bg-pure)', minWidth: '240px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-float)', padding: '1rem 0', border: '1px solid var(--border-subtle)', zIndex: 1100 }}
                  >
                    {productsData.map(p => (
                      <Link key={p.id} to={`/products/${p.slug}`} style={{ display: 'block', padding: '0.5rem 1.5rem', color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'background 0.2s', fontWeight: '500' }} onMouseEnter={e => { e.target.style.background = 'var(--bg-offwhite)'; e.target.style.color = 'var(--text-navy)' }} onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-slate)' }}>
                        {p.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Materials Dropdown */}
            <div 
              onMouseEnter={() => setActiveDropdown('materials')} 
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <Link to="/materials" style={{ color: isActive('/materials') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/materials') ? '600' : '500', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Materials <i className="fas fa-chevron-down" style={{ fontSize: '0.75rem', marginTop: '2px' }}></i>
              </Link>
              <AnimatePresence>
                {activeDropdown === 'materials' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                    style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--bg-pure)', minWidth: '240px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-float)', padding: '1rem 0', border: '1px solid var(--border-subtle)', zIndex: 1100 }}
                  >
                    {materialsData.map(m => (
                      <Link key={m.id} to={`/materials/${m.slug}`} style={{ display: 'block', padding: '0.5rem 1.5rem', color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'background 0.2s', fontWeight: '500' }} onMouseEnter={e => { e.target.style.background = 'var(--bg-offwhite)'; e.target.style.color = 'var(--text-navy)' }} onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-slate)' }}>
                        {m.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/industries" style={{ color: isActive('/industries') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/industries') ? '600' : '500', fontSize: '0.9375rem' }}>Industries</Link>
            <Link to="/quality" style={{ color: isActive('/quality') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/quality') ? '600' : '500', fontSize: '0.9375rem' }}>Quality</Link>
            <Link to="/contact-us" style={{ color: isActive('/contact-us') ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: isActive('/contact-us') ? '600' : '500', fontSize: '0.9375rem' }}>Contact</Link>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button 
              onClick={onOpenSearch} 
              aria-label="Search" 
              style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.1rem', cursor: 'pointer', padding: '0.5rem' }}
            >
              <i className="fas fa-search"></i>
            </button>
            <button 
              className="btn-primary desktop-nav" 
              onClick={() => onOpenRFQ()} 
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
            >
              Request a Quote
            </button>
            
            <button 
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: '#ffffff', cursor: 'pointer', display: 'none' }}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: 'var(--bg-pure)', borderBottom: '1px solid var(--border-subtle)' }}
          >
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link to="/" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Home</Link>
              <Link to="/about-us" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>About</Link>
              <Link to="/products" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Products</Link>
              <Link to="/materials" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Materials</Link>
              <Link to="/industries" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Industries</Link>
              <Link to="/quality" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Quality</Link>
              <Link to="/contact-us" onClick={closeMobile} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-navy)' }}>Contact</Link>
              <button className="btn-primary" onClick={() => { closeMobile(); onOpenRFQ(); }} style={{ marginTop: '1rem' }}>
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quick CSS for the nav toggles in this component */}
      <style>{`
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default PremiumHeader;
