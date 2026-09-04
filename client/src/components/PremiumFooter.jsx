import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';

const PremiumFooter = ({ onOpenRFQ }) => {
  return (
    <footer 
      style={{ 
        backgroundColor: '#060911', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#94a3b8',
        fontSize: '0.9375rem'
      }}
    >
      {/* Top Credentials Strip in Footer */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', padding: '2.5rem 0' }}>
        <div className="layout-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid var(--brand-green-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-green-accent)', fontSize: '1.25rem', flexShrink: 0 }}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Certified QMS Management</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', fontSize: '1.25rem', flexShrink: 0 }}>
                <i className="fas fa-file-invoice"></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>EN 10204 3.1 / 3.2</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Complete Material Pedigree</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontSize: '1.25rem', flexShrink: 0 }}>
                <i className="fas fa-globe-asia"></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>48+ Global Markets</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Export Packing & Logistics</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', fontSize: '1.25rem', flexShrink: 0 }}>
                <i className="fas fa-check-double"></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>100% PMI & Hydro Tested</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Zero-Defect Quality Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="layout-container" style={{ padding: '4.5rem var(--container-padding) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3.5rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand & Credentials */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <img 
                src="/img/new-eco_logo.png" 
                alt="Eco Steel Engineering" 
                style={{ height: '46px', width: 'auto' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/img/index-eco-logo.png';
                }}
              />
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Eco Steel Engineering is a premier manufacturer, stockholder, supplier, and global exporter of high-precision industrial piping products, fittings, flanges, fasteners, and specialty alloys.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge-tech on-dark-accent" style={{ fontSize: '0.7rem' }}>ISO 9001:2015</span>
              <span className="badge-tech on-dark" style={{ fontSize: '0.7rem' }}>PED 2014/68/EU</span>
              <span className="badge-tech on-dark" style={{ fontSize: '0.7rem' }}>EN 10204 3.1</span>
            </div>
          </div>

          {/* Column 2: Product Systems */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontFamily: 'var(--font-display)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Product Systems
            </h4>
            <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {productsData.map((p) => (
                <li key={p.id}>
                  <Link 
                    to={`/products/${p.slug}`} 
                    style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-green-accent)'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" style={{ color: 'var(--brand-green-accent)', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.35rem' }}>
                  Full Product Catalog &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Materials & Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontFamily: 'var(--font-display)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Specialty Materials
            </h4>
            <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {materialsData.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <Link 
                    to={`/materials/${m.slug}`} 
                    style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-green-accent)'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/materials" style={{ color: 'var(--brand-green-accent)', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.35rem' }}>
                  Metallurgical Directory &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontFamily: 'var(--font-display)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Global Sales Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.2rem' }}>Corporate Office:</div>
                <div style={{ color: '#94a3b8', lineHeight: '1.5' }}>
                  HEX INDIA - Hot Forge Bolt Nut Manufacturer, Plot No. G4, Forsberry Rd, East, Sewri, Mumbai, Maharashtra 400015
                </div>
              </div>

              <div>
                <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.2rem' }}>Manufacturing Facility:</div>
                <div style={{ color: '#94a3b8', lineHeight: '1.5' }}>
                  HEX INDIA - Hot Forge Bolt Nut Manufacturer, Plot No. G4, Forsberry Rd, East, Sewri, Mumbai, Maharashtra 400015
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <a href="tel:+912266518841" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  <i className="fas fa-phone-alt" style={{ color: 'var(--brand-green-accent)', width: '18px' }}></i> +91 22 6651 8841
                </a>
                <a href="tel:+919321743595" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  <i className="fas fa-mobile-alt" style={{ color: 'var(--brand-green-accent)', width: '18px' }}></i> +91 93217 43595
                </a>
                <a href="mailto:sales@ecosteels.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  <i className="fas fa-envelope" style={{ color: 'var(--brand-blue)', width: '18px' }}></i> sales@ecosteels.com
                </a>
              </div>

              <button 
                className="btn-primary" 
                onClick={() => onOpenRFQ()}
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', fontSize: '0.875rem' }}
              >
                <i className="fas fa-file-contract"></i> Submit Technical RFQ
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Legal & Credits */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1.25rem',
            fontSize: '0.8125rem',
            color: '#64748b'
          }}
        >
          <div>
            &copy; 2026 HEX INDIA FASTENERS. All Rights Reserved. Designed by <a href="https://chandan-tiwadi.pages.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-green-accent)', textDecoration: 'none', fontWeight: '600' }}>Chandan Tiwadi</a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/quality" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quality Policy</Link>
            <Link to="/resources" style={{ color: '#94a3b8', textDecoration: 'none' }}>Manufacturing Standards</Link>
            <Link to="/contact-us" style={{ color: '#94a3b8', textDecoration: 'none' }}>Plant Locations</Link>
            <Link to="/contact-us" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
