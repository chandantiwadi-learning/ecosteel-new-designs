import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="layout-section bg-offwhite" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="layout-container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-eyebrow" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>Error 404</span>
            <h1 className="heading-hero" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Page Not Found</h1>
            <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
              The page you are looking for doesn't exist or has been moved. Let's get you back to exploring our industrial solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/" className="btn-primary">
                Return to Homepage
              </Link>
              <Link to="/products" className="btn-secondary">
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
