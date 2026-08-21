import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

const ProductSidebar = ({ currentProductId, onOpenRFQ }) => {
  return (
    <div style={{ position: 'sticky', top: '100px' }}>
      <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-heading)', margin: '0 0 16px', borderBottom: '2px solid var(--brand-blue)', paddingBottom: '8px', display: 'inline-block' }}>
          Product Categories
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {productsData.map(p => (
            <li key={p.id} style={{ marginBottom: '8px' }}>
              <Link 
                to={`/products/${p.slug}`} 
                style={{ 
                  display: 'block', 
                  padding: '8px 12px', 
                  borderRadius: 'var(--radius-sm)',
                  color: p.id === currentProductId ? 'var(--brand-blue)' : 'var(--text-main)',
                  background: p.id === currentProductId ? 'var(--bg-primary)' : 'transparent',
                  fontWeight: p.id === currentProductId ? '600' : '400',
                  border: p.id === currentProductId ? '1px solid var(--border-light)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ background: 'var(--brand-navy)', padding: '24px', borderRadius: 'var(--radius-lg)', color: 'var(--text-inverse)' }}>
        <h3 style={{ fontSize: '20px', margin: '0 0 16px', color: 'var(--text-inverse)' }}>Need Assistance?</h3>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
          Our engineering team is ready to help you select the right materials and dimensions.
        </p>
        <a href="tel:+919321743595" style={{ display: 'block', color: 'var(--text-inverse)', textDecoration: 'none', fontWeight: '600', fontSize: '18px', marginBottom: '16px' }}>
          <i className="fas fa-phone-alt" style={{ color: 'var(--brand-blue-light)', marginRight: '8px' }}></i> +91 93217 43595
        </a>
        <button onClick={() => onOpenRFQ()} className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--brand-blue)' }}>
          Request a Callback
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;
