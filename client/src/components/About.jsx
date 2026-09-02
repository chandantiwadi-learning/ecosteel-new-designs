import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container overview-grid">
        <div className="overview-media">
          <div className="overview-img-main">
            <img src="/assets/premium-facility.png" alt="Eco Steel Facility & Stockyard" />
          </div>
        </div>

        <div className="overview-content">
          <div className="eyebrow">Corporate Profile</div>
          <h2 className="section-heading">Decades of Industrial Reliability.</h2>
          <p className="section-desc">
            Eco Steel Engineering was established on the foundation that mission-critical industrial installations cannot
            afford component failure. We have built an uncompromising international reputation by supplying certified,
            zero-defect piping systems and precision alloy components to demanding engineering projects.
          </p>
          <div className="overview-feature-list">
            <div className="overview-feature">
              <i className="fas fa-award"></i>
              <h4>Certified Quality</h4>
              <p>Full adherence to ASME, ASTM, DIN, EN, and BS dimensional and metallurgical standards.</p>
            </div>
            <div className="overview-feature">
              <i className="fas fa-warehouse"></i>
              <h4>Extensive Stockholding</h4>
              <p>Comprehensive inventory of stainless steel, duplex, super duplex, and nickel alloys for fast dispatch.</p>
            </div>
            <div className="overview-feature">
              <i className="fas fa-microscope"></i>
              <h4>In-House Testing</h4>
              <p>Advanced PMI spectroscopy, ultrasonic scanning, and hydrostatic testing before dispatch.</p>
            </div>
            <div className="overview-feature">
              <i className="fas fa-truck-fast"></i>
              <h4>Global Logistics</h4>
              <p>Seamless export logistics with seaworthy packaging to over 48 international destinations.</p>
            </div>
          </div>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-building"></i> Inquire with Our Engineering Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
