import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

const PremiumFooter = ({ onOpenRFQ }) => {
  return (
    <footer className="bg-offwhite" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="layout-container" style={{ padding: '80px 2rem 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div>
            <Link to="/">
              <img src="/img/index-eco-logo.png" alt="Eco Steel Engineering" style={{ height: '48px', marginBottom: '2rem' }} />
            </Link>
            <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Premium manufacturer, stockholder, supplier, and exporter of high-grade industrial piping components and specialty alloys for critical global sectors.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="label-eyebrow" style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: 0 }}>ISO 9001:2015</span>
              <span className="label-eyebrow" style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: 0 }}>EMS 14001</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-navy)', marginBottom: '1.5rem', fontWeight: '700' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/about-us" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>About Eco Steel</Link></li>
              <li><Link to="/quality" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>Quality Assurance</Link></li>
              <li><Link to="/industries" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>Industries Served</Link></li>
              <li><Link to="/materials" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>Materials Hub</Link></li>
              <li><Link to="/contact-us" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>Contact Headquarters</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-navy)', marginBottom: '1.5rem', fontWeight: '700' }}>Product Systems</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {productsData.slice(0, 5).map(p => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`} style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>
                    {p.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/products" className="btn-link" style={{ marginTop: '0.5rem', display: 'inline-block' }}>View All Products <i className="fas fa-arrow-right"></i></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-navy)', marginBottom: '1.5rem', fontWeight: '700' }}>Sales & Enquiries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--text-light)', marginTop: '0.25rem' }}></i>
                <span style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', lineHeight: '1.6' }}>Mumbai - 400004, Maharashtra, India</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--text-light)', marginTop: '0.25rem' }}></i>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+919321743595" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', textDecoration: 'none' }}>+91 93217 43595</a>
                  <a href="tel:+912266518841" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', textDecoration: 'none' }}>+91 22 6651 8841</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginTop: '0.25rem' }}></i>
                <a href="mailto:sales@ecosteels.com" style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', textDecoration: 'none' }}>sales@ecosteels.com</a>
              </div>
              
              <button className="btn-primary" onClick={onOpenRFQ} style={{ width: '100%', marginTop: '1rem', padding: '0.875rem' }}>
                Submit Official RFQ
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Eco Steel Engineering. All rights reserved.
            <br />
            Designed and Developed By <a href="https://chandan-tiwadi.pages.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>Chandan Tiwadi</a>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/quality" style={{ color: 'var(--text-light)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-navy)'} onMouseLeave={e => e.target.style.color = 'var(--text-light)'}>Quality Policy</Link>
            <Link to="/contact-us" style={{ color: 'var(--text-light)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-navy)'} onMouseLeave={e => e.target.style.color = 'var(--text-light)'}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
