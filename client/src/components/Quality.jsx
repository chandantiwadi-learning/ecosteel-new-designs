import React from 'react';

const Quality = () => {
  return (
    <section className="section section-offwhite" id="quality">
      <div className="container quality-grid">
        <div>
          <div className="eyebrow">Quality Philosophy</div>
          <h2 className="section-heading">Quality You Can Verify.</h2>
          <p className="section-desc">
            Our ISO 9001:2015 certified quality management system governs every single phase of production. We ensure 100%
            material traceability and compliance with international standards before any order leaves our facility.
          </p>
          <div>
            <h4><i className="fas fa-file-certificate"></i> Certification Standards</h4>
            <p>
              All materials are accompanied by complete Material Test Certificates (MTC) conforming to <strong>EN 10204
                3.1 / 3.2</strong>, detailing heat number, chemical composition, and mechanical properties.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            <i className="fas fa-check-double"></i> Request Quality Documentation
          </a>
        </div>

        <div className="quality-steps">
          <div className="quality-step-item">
            <div className="step-num">01</div>
            <div className="step-body">
              <h4>Raw Material Verification (PMI)</h4>
              <p>Raw materials are procured exclusively from ISO-approved prime mills and undergo 100% Positive Material
                Identification upon receipt.</p>
            </div>
          </div>
          <div className="quality-step-item">
            <div className="step-num">02</div>
            <div className="step-body">
              <h4>In-Process Dimensional & Surface Inspection</h4>
              <p>Continuous dimensional verification, bevel angle checking, and surface tolerance monitoring during
                forging, machining, and welding.</p>
            </div>
          </div>
          <div className="quality-step-item">
            <div className="step-num">03</div>
            <div className="step-body">
              <h4>NDT & Pressure Testing</h4>
              <p>Ultrasonic, Radiography (X-Ray), Magnetic Particle (MPI), Dye Penetrant (DPT), and Hydrostatic pressure
                testing up to designated class limits.</p>
            </div>
          </div>
          <div className="quality-step-item">
            <div className="step-num">04</div>
            <div className="step-body">
              <h4>Third-Party Inspection & EN 10204 3.1 Dispatch</h4>
              <p>Final inspection by international agencies (TÜV, SGS, DNV, BV) with seaworthy corrosion-inhibiting
                packaging and full documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
