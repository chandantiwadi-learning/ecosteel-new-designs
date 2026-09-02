import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/index-eco-logo.png" alt="Eco Steel Engineering" />
            <p>
              Eco Steel Engineering is an ISO 9001:2015 certified manufacturer, stockholder, supplier, and exporter of
              high-grade buttweld fittings, flanges, fasteners, pipes, and specialty superalloys.
            </p>
            <div>
              <span className="top-badge">ISO 9001:2015</span>
              <span className="top-badge">EMS 14001</span>
              <span className="top-badge">PED 2014/68/EU</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product Lines</h4>
            <ul className="footer-links">
              <li><a href="#products">Buttweld Pipe Fittings</a></li>
              <li><a href="#products">Forged Fittings</a></li>
              <li><a href="#products">Industrial Flanges</a></li>
              <li><a href="#products">High-Tensile Fasteners</a></li>
              <li><a href="#products">Seamless & Welded Pipes</a></li>
              <li><a href="#products">Steel Plates & Sheets</a></li>
              <li><a href="#products">Precision Round Bars</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Material Alloys</h4>
            <ul className="footer-links">
              <li><a href="#materials">Stainless Steel (304/316/321)</a></li>
              <li><a href="#materials">Duplex & Super Duplex (2205/2507)</a></li>
              <li><a href="#materials">Carbon & Alloy Steel</a></li>
              <li><a href="#materials">Inconel & Incoloy Alloys</a></li>
              <li><a href="#materials">Monel 400 / K500</a></li>
              <li><a href="#materials">Hastelloy C276 / C22</a></li>
              <li><a href="#materials">Cupro Nickel (90/10 & 70/30)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Corporate Headquarters</h4>
            <p>
              107/111, Matka Building, Office No. 4, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Mumbai – 400 004, India.
            </p>
            <p>
              <strong>Sales Phone:</strong> <a href="tel:+912266518841">+91 22 6651 8841</a> /
              <a href="tel:+919321743595"> +91 93217 43595</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:sales@ecosteels.com">sales@ecosteels.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Eco Steel Engineering. ISO 9001:2015 Certified Manufacturer & Exporter. All Rights Reserved.</span>
          <div>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#quality">Quality Policy</a>
            <a href="#contact">Contact Desk</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
