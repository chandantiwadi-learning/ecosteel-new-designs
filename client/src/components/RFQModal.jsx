import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RFQModal = ({ isOpen, onClose, initialProduct = '' }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(10, 17, 40, 0.6)', backdropFilter: 'blur(5px)', zIndex: 2000 }}
          />
          <motion.div 
            initial={{ opacity: 0, y: '100vh' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100vh' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', top: '5vh', left: '50%', transform: 'translateX(-50%)', 
              width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
              background: 'var(--bg-pure)', borderRadius: 'var(--radius-lg)', zIndex: 2001,
              boxShadow: 'var(--shadow-float)', padding: '3rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <span className="label-eyebrow">Official Inquiry</span>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-navy)', margin: 0 }}>Request a Quote</h2>
              </div>
              <button onClick={onClose} style={{ background: 'var(--bg-surface)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <i className="fas fa-check-circle" style={{ fontSize: '4rem', color: 'var(--accent-blue)', marginBottom: '1.5rem' }}></i>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>RFQ Submitted Successfully</h3>
                <p style={{ color: 'var(--text-slate)' }}>Our technical sales team will review your requirements and respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Company Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" required />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" className="form-input" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Product of Interest</label>
                  <input type="text" className="form-input" defaultValue={initialProduct} />
                </div>

                <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                  <label className="form-label">Technical Requirements (Size, Grade, Quantity) *</label>
                  <textarea className="form-textarea" rows="4" required></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                  <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RFQModal;
