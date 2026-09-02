import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">ISO 9001:2015 Certified Manufacturer & Exporter</div>
          <h1 className="hero-title">
            Industrial Excellence in <span className="accent">Steel & Alloy</span> Engineering.
          </h1>
          <p className="hero-lead">
            Eco Steel Engineering supplies certified high-pressure buttweld fittings, forged fittings, flanges, fasteners,
            pipes, and plates to critical energy, petrochemical, and infrastructure sectors worldwide.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Request Official RFQ
            </a>
            <a href="#products" className="btn btn-secondary">
              <i className="fas fa-th-large"></i> Explore Products
            </a>
          </div>
          <div className="hero-trust-bar">
            <div className="trust-item">
              <i className="fas fa-check-circle"></i>
              <span>48+ Export Markets</span>
            </div>
            <div className="trust-item">
              <i className="fas fa-check-circle"></i>
              <span>100% PMI Inspected</span>
            </div>
            <div className="trust-item">
              <i className="fas fa-check-circle"></i>
              <span>EN 10204 3.1 Traceability</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-image-card">
            <img src="/assets/power-industry.jpg" alt="Eco Steel Industrial Engineering Facility" />
          </div>
          <div className="hero-floating-badge">
            <i className="fas fa-shield-alt"></i>
            <div>
              <h5>Mission-Critical Supply</h5>
              <p>Zero-defect metallurgical supply for refineries, nuclear plants, and offshore platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
