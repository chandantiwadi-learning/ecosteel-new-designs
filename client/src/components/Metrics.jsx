import React from 'react';

const Metrics = () => {
  return (
    <div className="metrics-strip">
      <div className="container metrics-grid">
        <div className="metric-item">
          <div className="metric-number">48<span className="unit">+</span></div>
          <div className="metric-label">Global Export Markets</div>
          <div className="metric-sub">Middle East, Europe, Americas & Asia</div>
        </div>
        <div className="metric-item">
          <div className="metric-number">ISO</div>
          <div className="metric-label">9001:2015 Certified</div>
          <div className="metric-sub">Rigorous QA & EMS 14001 Standards</div>
        </div>
        <div className="metric-item">
          <div className="metric-number">100<span className="unit">%</span></div>
          <div className="metric-label">Material Traceability</div>
          <div className="metric-sub">EN 10204 3.1 Mill Test Certification</div>
        </div>
        <div className="metric-item">
          <div className="metric-number">7<span className="unit">+</span></div>
          <div className="metric-label">Product Categories</div>
          <div className="metric-sub">Fittings, Flanges, Fasteners, Pipes & Bars</div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
