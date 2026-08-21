import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

const Footer = ({ onOpenRFQ }) => {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Profile */}
          <div>
            <img src="/img/index-eco-logo.png" alt="Eco Steel Engineering" className="footer-logo" />
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#94a3b8' }}>
              Eco Steel Engineering is a premier ISO 9001:2015 certified manufacturer, stockholder, supplier, and exporter of high-grade Industrial Buttweld Fittings, Forged Fittings, Pipe Flanges, Fasteners, Pipes, Tubes, Plates, and Round Bars.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#f1f5f9', padding: '3px 8px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>ISO 9001:2015</span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#f1f5f9', padding: '3px 8px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>EMS 14001</span>
              <span style={{ background: '#008dd2', color: '#ffffff', padding: '3px 8px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>PED CERTIFIED</span>
            </div>
          </div>

          {/* Column 2: Products System */}
          <div className="footer-col">
            <h4>Products System</h4>
            <ul>
              {productsData.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Materials Directory */}
          <div className="footer-col">
            <h4>Material Alloys</h4>
            <ul>
              <li><Link to="/materials/stainless-steel">Stainless Steel</Link></li>
              <li><Link to="/materials/duplex-steel">Duplex & Super Duplex</Link></li>
              <li><Link to="/materials/carbon-steel">Carbon Steel</Link></li>
              <li><Link to="/materials/alloy-steel">Alloy Steel</Link></li>
              <li><Link to="/materials/inconel">Inconel & Incoloy</Link></li>
              <li><Link to="/materials/monel">Monel Alloys</Link></li>
              <li><Link to="/materials/hastelloy">Hastelloy Alloys</Link></li>
              <li><Link to="/materials/cupro-nickel">Cupro Nickel</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Information */}
          <div className="footer-col">
            <h4>Contact Headquarters</h4>
            <p style={{ fontSize: '13px', margin: '0 0 10px', color: '#cbd5e1' }}>
              <strong>Address:</strong> Ground Floor, 26C, Shop No. 1, Sonarika Building, Chandanwadi, Mirchi Galli, C.P. Tank, Mumbai - 400004, India
            </p>
            <p style={{ fontSize: '13px', margin: '0 0 10px', color: '#cbd5e1' }}>
              <strong>Sales Phone:</strong> <a href="tel:+912266518841" style={{ color: '#38bdf8' }}>+91 22 6651 8841</a> / <a href="tel:+919321743595" style={{ color: '#38bdf8' }}>+91 93217 43595</a>
            </p>
            <p style={{ fontSize: '13px', margin: '0 0 16px', color: '#cbd5e1' }}>
              <strong>Email:</strong> <a href="mailto:sales@ecosteels.com" style={{ color: '#38bdf8' }}>sales@ecosteels.com</a>
            </p>
            <button type="button" className="btn-minimal-rfq" onClick={onOpenRFQ} style={{ width: '100%' }}>
              Submit Official RFQ
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} Eco Steel Engineering. ISO 9001:2015 Manufacturer & Exporter.</span>
          <div>
            <Link to="/resources" style={{ color: '#94a3b8', marginRight: '16px', textDecoration: 'none' }}>Resources</Link>
            <Link to="/quality" style={{ color: '#94a3b8', marginRight: '16px', textDecoration: 'none' }}>Quality Policy</Link>
            <Link to="/contact-us" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
