import React from 'react';

const Industries = () => {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header text-center">
          <div className="eyebrow">Critical Infrastructure</div>
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-desc">
            Supplying heavy-duty piping and engineered components to major global industrial installations.
          </p>
        </div>

        <div className="industries-grid">
          <div className="industry-card">
            <img src="/assets/power-industry.jpg" alt="Oil and Gas Piping" />
            <div className="industry-card-overlay">
              <i className="fas fa-fire sector-icon"></i>
              <h3>Oil & Gas Extraction</h3>
              <p>High-pressure, sour-gas (H2S) resistant piping, heavy flanges, and ASTM A193 B7 fasteners for offshore
                rigs and transmission lines.</p>
            </div>
          </div>

          <div className="industry-card">
            <img src="/assets/bann.jpg" alt="Petrochemical and Refining" />
            <div className="industry-card-overlay">
              <i className="fas fa-industry sector-icon"></i>
              <h3>Petrochemical & Refining</h3>
              <p>Thermal fatigue resistant chrome-moly alloy pipes (P11/P22/P91) and pressure vessel plates (A516 Gr 70)
                for catalytic cracking units.</p>
            </div>
          </div>

          <div className="industry-card">
            <img src="/assets/industrial-valves-banner.jpg" alt="Power Generation" />
            <div className="industry-card-overlay">
              <i className="fas fa-bolt sector-icon"></i>
              <h3>Power Generation & Nuclear</h3>
              <p>High-temperature boiler tubes, steam line forged fittings, and high-strength alloy rods for fossil,
                hydro, and nuclear facilities.</p>
            </div>
          </div>

          <div className="industry-card">
            <img src="/assets/pipe-fittings-banner.jpg" alt="Marine and Offshore" />
            <div className="industry-card-overlay">
              <i className="fas fa-ship sector-icon"></i>
              <h3>Marine & Offshore</h3>
              <p>Anti-biofouling Cupro-Nickel piping systems, seawater pump flanges, and Monel propeller shafting
                engineered for high-velocity marine environments.</p>
            </div>
          </div>

          <div className="industry-card">
            <img src="/assets/about-us.jpg" alt="Chemical Processing" />
            <div className="industry-card-overlay">
              <i className="fas fa-flask sector-icon"></i>
              <h3>Chemical & Pharmaceutical</h3>
              <p>Sanitary polished stainless steel tubes, high-purity Hastelloy reactors, and corrosion-proof fittings for
                aggressive acid handling.</p>
            </div>
          </div>

          <div className="industry-card">
            <img src="/assets/foundation-editorial.png" alt="Heavy Infrastructure" />
            <div className="industry-card-overlay">
              <i className="fas fa-building-columns sector-icon"></i>
              <h3>Construction & Defense</h3>
              <p>Heavy structural carbon plates, high-tensile anchor bolts, custom forgings, and round bars for heavy
                infrastructure and defense applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
