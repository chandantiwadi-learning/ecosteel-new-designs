import React from 'react';

const Clients = () => {
  return (
    <section className="section section-offwhite" id="clients">
      <div className="container">
        <div className="section-header text-center">
          <div className="eyebrow">Global Trust</div>
          <h2 className="section-heading">Third-Party Inspection & Clientele</h2>
          <p className="section-desc">
            Our products are accepted and approved by the world's most demanding inspection agencies and industrial
            enterprises.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="client-logo-item"><img src="/assets/client1.jpg" alt="Client Logo 1" /></div>
            <div className="client-logo-item"><img src="/assets/client2.jpg" alt="Client Logo 2" /></div>
            <div className="client-logo-item"><img src="/assets/client3.jpg" alt="Client Logo 3" /></div>
            <div className="client-logo-item"><img src="/assets/client4.jpg" alt="Client Logo 4" /></div>
            <div className="client-logo-item"><img src="/assets/client5.jpg" alt="Client Logo 5" /></div>
            <div className="client-logo-item"><img src="/assets/client6.jpg" alt="Client Logo 6" /></div>
            <div className="client-logo-item"><img src="/assets/client7.jpg" alt="Client Logo 7" /></div>
            {/* Duplicate for continuous loop */}
            <div className="client-logo-item"><img src="/assets/client1.jpg" alt="Client Logo 1" /></div>
            <div className="client-logo-item"><img src="/assets/client2.jpg" alt="Client Logo 2" /></div>
            <div className="client-logo-item"><img src="/assets/client3.jpg" alt="Client Logo 3" /></div>
            <div className="client-logo-item"><img src="/assets/client4.jpg" alt="Client Logo 4" /></div>
            <div className="client-logo-item"><img src="/assets/client5.jpg" alt="Client Logo 5" /></div>
            <div className="client-logo-item"><img src="/assets/client6.jpg" alt="Client Logo 6" /></div>
            <div className="client-logo-item"><img src="/assets/client7.jpg" alt="Client Logo 7" /></div>
          </div>
        </div>

        {/* Third Party Inspection Badges */}
        <div className="tpi-badge-list">
          <div className="tpi-badge"><i className="fas fa-check"></i> TÜV SÜD</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> SGS India</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> DNV GL</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> Lloyd's Register</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> Bureau Veritas</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> Velosi</div>
          <div className="tpi-badge"><i className="fas fa-check"></i> Engineers India Limited (EIL)</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
