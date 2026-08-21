import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MegaMenuNavbar = ({ onOpenRFQ, onOpenSearch }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setIsMobileOpen(false);
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="minimal-navbar">
      <div className="editorial-container minimal-nav-flex">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand-link" onClick={closeMobile}>
          <img src="/img/index-eco-logo.png" alt="Eco Steel Engineering" className="brand-logo-img" />
        </Link>

        {/* Desktop Editorial Navigation Links */}
        <ul className="nav-links-editorial">
          <li>
            <Link to="/" className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={`nav-link-item ${isActive('/about-us') ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className={`nav-link-item ${isActive('/products') ? 'active' : ''}`}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/materials" className={`nav-link-item ${isActive('/materials') ? 'active' : ''}`}>
              Materials
            </Link>
          </li>
          <li>
            <Link to="/industries" className={`nav-link-item ${isActive('/industries') ? 'active' : ''}`}>
              Industries
            </Link>
          </li>
          <li>
            <Link to="/quality" className={`nav-link-item ${isActive('/quality') ? 'active' : ''}`}>
              Quality
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={`nav-link-item ${isActive('/contact-us') ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Controls */}
        <div className="nav-actions-flex">
          <button type="button" className="btn-search-trigger" onClick={onOpenSearch} title="Search Products & Alloys (Ctrl + K)">
            <i className="fas fa-search"></i>
          </button>

          <button type="button" className="btn-minimal-rfq" onClick={() => onOpenRFQ()}>
            Request Quote
          </button>

          <button type="button" className="btn-mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)} style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '20px' }}>
            <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Accordion Drawer */}
      {isMobileOpen && (
        <div className="mobile-drawer" style={{ background: '#0a0f1d', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <ul className="mobile-menu-list">
            <li><Link to="/" onClick={closeMobile} style={{ color: '#ffffff' }}>Home</Link></li>
            <li><Link to="/about-us" onClick={closeMobile} style={{ color: '#ffffff' }}>About Us</Link></li>
            <li><Link to="/products" onClick={closeMobile} style={{ color: '#ffffff' }}>Products System</Link></li>
            <li><Link to="/materials" onClick={closeMobile} style={{ color: '#ffffff' }}>Materials Directory</Link></li>
            <li><Link to="/industries" onClick={closeMobile} style={{ color: '#ffffff' }}>Industries Served</Link></li>
            <li><Link to="/quality" onClick={closeMobile} style={{ color: '#ffffff' }}>Quality & Testing</Link></li>
            <li><Link to="/resources" onClick={closeMobile} style={{ color: '#ffffff' }}>Resources & Standards</Link></li>
            <li><Link to="/contact-us" onClick={closeMobile} style={{ color: '#ffffff' }}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MegaMenuNavbar;
