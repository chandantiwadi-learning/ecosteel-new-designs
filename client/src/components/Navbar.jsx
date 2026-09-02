import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="logo-brand">
          <img src="/assets/index-eco-logo.png" alt="Eco Steel Engineering Logo" />
        </a>

        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="navMenu">
            <li className="nav-item"><a href="#home" className="nav-link active" onClick={closeMenu}>Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>Company</a></li>
            <li className="nav-item">
              <a href="#products" className="nav-link">Products <i className="fas fa-chevron-down"></i></a>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-menu-col">
                    <h4>Piping & Fastening Components</h4>
                    <ul className="mega-menu-links">
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Buttweld Pipe Fittings</span> <span className="badge">ASME B16.9</span></a></li>
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Forged Fittings</span> <span className="badge">3000# - 9000#</span></a></li>
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Industrial Pipe Flanges</span> <span className="badge">ASME B16.5</span></a></li>
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>High-Tensile Fasteners</span> <span className="badge">B7 / B8 / 2H</span></a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h4>Mill Forms & Structural</h4>
                    <ul className="mega-menu-links">
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Pipes & Tubes</span> <span className="badge">Seamless / Welded</span></a></li>
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Plates, Sheets & Coils</span> <span className="badge">1mm - 200mm</span></a></li>
                      <li><a href="#products" className="mega-link" onClick={closeMenu}><span>Rods & Round Bars</span> <span className="badge">Precision Ground</span></a></li>
                      <li><a href="#materials" className="mega-link" onClick={closeMenu}><span>Specialty Alloys & Superalloys</span> <span className="badge">Inconel / Monel</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item"><a href="#materials" className="nav-link" onClick={closeMenu}>Materials</a></li>
            <li className="nav-item"><a href="#quality" className="nav-link" onClick={closeMenu}>Quality Assurance</a></li>
            <li className="nav-item"><a href="#industries" className="nav-link" onClick={closeMenu}>Industries</a></li>
            <li className="nav-item"><a href="#clients" className="nav-link" onClick={closeMenu}>Clients</a></li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-file-invoice"></i> Contact Us
          </a>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle Navigation" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
