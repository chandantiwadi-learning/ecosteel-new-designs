import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isHome = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path || location.pathname === `${path}.html`;

  return (
    <header className="main-header">
      <div className={`k-nav all-light ${isScrolled ? 'k-nav-fixed' : ''} ${isOpen ? 'k-nav-open' : ''}`}>
        <div className="k-nav-toggle" onClick={toggleNav}>
          <span></span>
        </div>
        <div className={`k-nav-outside ${isOpen ? 'show' : ''}`}>
          <div className={`k-nav-inside ${isOpen ? 'show' : ''}`} id="k-nav-inside">
            <div className="col-md-3">
              <Link to="/" className="k-nav-logo" onClick={closeNav}>
                <img
                  src={isHome ? '/img/index-eco-logo.png' : '/img/1new-eco_logo.png'}
                  alt="Eco Steel Logo"
                  className="img-responsive logo-light"
                />
                <img
                  src="/img/new-eco_logo.png"
                  alt="Eco Steel Logo"
                  className="img-responsive logo-dark"
                />
              </Link>
            </div>

            <div className="col-md-9">
              <div className="container">
                <div className="std1" style={{ color: !isHome || isScrolled ? '#444' : undefined }}>
                  <span>ISO 9001:2015 EMS & OHSAS</span> |{' '}
                  <span>QMS ISO 9001:2015</span> |{' '}
                  <span>EMS ISO 14001:2015</span> |{' '}
                  <span>OHSAS ISO 18001:2007</span> |{' '}
                  <span>PED CERTIFIED</span>
                </div>

                <ul className={`k-nav-links ${isHome ? 'index-pg' : ''}`}>
                  <li>
                    <Link
                      to="/"
                      style={{ color: !isHome || isScrolled ? '#444' : undefined }}
                      id={isActive('/') ? 'hover-menu3' : undefined}
                      className={isActive('/') ? '' : 'hover-menu'}
                      onClick={closeNav}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      style={{ color: !isHome || isScrolled ? '#444' : undefined }}
                      id={isActive('/about-us') ? 'hover-menu3' : undefined}
                      className={isActive('/about-us') ? '' : 'hover-menu'}
                      onClick={closeNav}
                    >
                      About
                    </Link>
                  </li>
                  <li
                    className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href="#products"
                      style={{ color: !isHome || isScrolled ? '#444' : undefined }}
                      className="dropdown-toggle hover-menu"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                      }}
                    >
                      Products
                    </a>
                    <ul className="dropdown-menu" style={{ display: isDropdownOpen ? 'block' : undefined }}>
                      <li>
                        <Link to="/butt-weld-pipe-fittings" onClick={closeNav}>
                          Buttweld Pipe Fittings
                        </Link>
                      </li>
                      <li>
                        <Link to="/forged-fittings" onClick={closeNav}>
                          Forged Fittings
                        </Link>
                      </li>
                      <li>
                        <Link to="/flanges" onClick={closeNav}>
                          Flanges
                        </Link>
                      </li>
                      <li>
                        <Link to="/fasteners" onClick={closeNav}>
                          Fasteners
                        </Link>
                      </li>
                      <li>
                        <Link to="/pipes-and-tubes" onClick={closeNav}>
                          Pipes & Tubes
                        </Link>
                      </li>
                      <li>
                        <Link to="/rods" onClick={closeNav}>
                          Rods
                        </Link>
                      </li>
                      <li>
                        <Link to="/plates-and-sheets" onClick={closeNav}>
                          Plates & Sheets
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/quality"
                      style={{ color: !isHome || isScrolled ? '#444' : undefined }}
                      id={isActive('/quality') ? 'hover-menu3' : undefined}
                      className={isActive('/quality') ? '' : 'hover-menu'}
                      onClick={closeNav}
                    >
                      Quality
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      style={{ color: !isHome || isScrolled ? '#444' : undefined }}
                      id={isActive('/contact-us') ? 'hover-menu3' : undefined}
                      className={isActive('/contact-us') ? '' : 'hover-menu'}
                      onClick={closeNav}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
