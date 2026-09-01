import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';
import { standardsData } from '../data/standards';

const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Keyboard shortcut: ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setQuery('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const executeSearch = (path) => {
    onClose();
    setQuery('');
    navigate(path);
  };

  const results = [];
  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    // Search Products
    productsData.forEach((p) => {
      if (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(q)) ||
        (p.standards && p.standards.some((s) => s.toLowerCase().includes(q))) ||
        (p.materials && p.materials.some((m) => m.toLowerCase().includes(q)))
      ) {
        results.push({
          type: 'Product',
          name: p.name,
          category: p.category,
          path: `/products/${p.slug}`,
          meta: p.sizeRange ? p.sizeRange.split('&')[0] : 'View Specs'
        });
      }
    });

    // Search Materials
    materialsData.forEach((m) => {
      if (
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        (m.popularGrades && m.popularGrades.some((g) => g.toLowerCase().includes(q))) ||
        (m.desc && m.desc.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'Material',
          name: m.name,
          category: m.category,
          path: `/materials/${m.slug}`,
          meta: m.badge || 'Metallurgy'
        });
      }
    });

    // Search Standards
    standardsData.forEach((s) => {
      if (
        s.code.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Standard',
          name: `${s.code} — ${s.title}`,
          category: s.category,
          path: `/resources`,
          meta: 'Engineering Code'
        });
      }
    });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10vh', paddingLeft: '1rem', paddingRight: '1rem' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(6, 9, 17, 0.8)',
              backdropFilter: 'blur(6px)'
            }}
          />

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '720px',
              backgroundColor: '#0a0f1d',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              color: '#ffffff'
            }}
          >
            {/* Input Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <i className="fas fa-search" style={{ color: 'var(--brand-green-accent)', fontSize: '1.25rem', marginRight: '1rem' }}></i>
              <input
                type="text"
                placeholder="Search products, material grades, or ASME/ASTM standards..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.125rem',
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-display)'
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    marginRight: '0.75rem'
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
              <button
                onClick={onClose}
                aria-label="Close search"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-xs)',
                  color: '#94a3b8',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                ESC
              </button>
            </div>

            {/* Results Area */}
            <div style={{ maxHeight: '55vh', overflowY: 'auto' }}>
              {query.trim().length > 1 ? (
                results.length > 0 ? (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {results.map((res, i) => (
                      <li key={i}>
                        <button
                          onClick={() => executeSearch(res.path)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '1.125rem 1.75rem',
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'background-color 0.15s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.25rem' }}>
                              {res.name}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  fontWeight: '700',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.06em',
                                  padding: '0.15rem 0.4rem',
                                  borderRadius: '2px',
                                  backgroundColor: res.type === 'Product' ? 'rgba(34, 197, 94, 0.15)' : res.type === 'Material' ? 'rgba(2, 132, 199, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                                  color: res.type === 'Product' ? 'var(--brand-green-accent)' : res.type === 'Material' ? 'var(--brand-blue)' : '#f59e0b'
                                }}
                              >
                                {res.type}
                              </span>
                              <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                                {res.category} &bull; {res.meta}
                              </span>
                            </div>
                          </div>
                          <i className="fas fa-arrow-right" style={{ color: '#64748b', fontSize: '0.875rem' }}></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div style={{ padding: '3rem 1.75rem', textAlign: 'center', color: '#94a3b8' }}>
                    <i className="fas fa-search" style={{ fontSize: '2rem', color: '#334155', marginBottom: '1rem', display: 'block' }}></i>
                    No matches found for "<strong style={{ color: '#ffffff' }}>{query}</strong>".
                    <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>
                      Try searching for "Buttweld", "Duplex", "Flanges", or "ASME B16.9".
                    </div>
                  </div>
                )
              ) : (
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                    Frequent Inquiries & Key Catalogs
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Buttweld Fittings', 'Forged Fittings', 'Industrial Flanges', 'Fasteners', 'Pipes & Tubes', 'Stainless Steel 316L', 'Duplex 2205', 'Inconel 625', 'ASME B16.9', 'EN 10204 3.1'].map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(term)}
                        style={{
                          padding: '0.5rem 0.875rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#cbd5e1',
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-display)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = '#cbd5e1';
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearchModal;
