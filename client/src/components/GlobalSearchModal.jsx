import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';

const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const executeSearch = (path) => {
    onClose();
    setQuery('');
    navigate(path);
  };

  const results = [];
  if (query.length > 1) {
    const q = query.toLowerCase();
    productsData.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)) {
        results.push({ type: 'Product', name: p.name, path: `/products/${p.slug}` });
      }
    });
    materialsData.forEach(m => {
      if (m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)) {
        results.push({ type: 'Material', name: m.name, path: `/materials/${m.slug}` });
      }
    });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)', zIndex: 2000 }}
          />
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }}
            style={{ 
              position: 'fixed', top: '10vh', left: '50%', transform: 'translateX(-50%)', 
              width: '90%', maxWidth: '700px', background: 'var(--bg-pure)', 
              borderRadius: 'var(--radius-lg)', zIndex: 2001, boxShadow: 'var(--shadow-float)', overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <i className="fas fa-search" style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginRight: '1rem' }}></i>
              <input 
                type="text" 
                placeholder="Search products, materials, or grades..." 
                value={query}
                onChange={handleSearch}
                autoFocus
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.25rem', color: 'var(--text-navy)', background: 'transparent', fontFamily: 'var(--font-primary)' }}
              />
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', fontSize: '1.25rem' }}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {query.length > 1 ? (
                results.length > 0 ? (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {results.map((res, i) => (
                      <li key={i}>
                        <button 
                          onClick={() => executeSearch(res.path)}
                          style={{ width: '100%', textAlign: 'left', padding: '1rem 2rem', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                          <div>
                            <span style={{ fontSize: '1.125rem', color: 'var(--text-navy)', fontWeight: '500', display: 'block' }}>{res.name}</span>
                            <span style={{ fontSize: '0.8125rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>{res.type}</span>
                          </div>
                          <i className="fas fa-arrow-right" style={{ color: 'var(--text-light)' }}></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-slate)' }}>
                    No results found for "{query}". Try searching for "Flanges" or "Stainless Steel".
                  </div>
                )
              ) : (
                <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span className="label-eyebrow" style={{ width: '100%', marginBottom: '0.5rem' }}>Quick Links</span>
                  {['Buttweld Fittings', 'Flanges', 'Stainless Steel', 'Duplex'].map((term, i) => (
                    <button key={i} onClick={() => setQuery(term)} style={{ padding: '0.5rem 1rem', background: 'var(--bg-surface)', border: 'none', borderRadius: 'var(--radius-sm)', color: 'var(--text-navy)', cursor: 'pointer', fontSize: '0.9375rem' }}>
                      {term}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearchModal;
