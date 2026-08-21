import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';
import { industriesData } from '../data/industries';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Home = () => {
  const { onOpenRFQ } = useOutletContext();
  const [activeMaterial, setActiveMaterial] = useState(materialsData[0]);
  const [activeIndustry, setActiveIndustry] = useState(industriesData[0]);

  return (
    <div className="premium-home">
      
      {/* ==========================================================================
          01. HERO (80-90vh Editorial Scale)
          ========================================================================== */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background Image filling right 60% */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60%', zIndex: 0 }}>
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src="/img/Power industry.jpg" 
            alt="Eco Steel Engineering Facility" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Subtle gradient to blend image into white background */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)' }}></div>
        </div>

        <div className="layout-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ maxWidth: '650px', background: 'rgba(255,255,255,0.85)', padding: '3rem 3rem 3rem 0', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          >
            <motion.span variants={fadeUp} className="label-eyebrow">Eco Steel Engineering</motion.span>
            <motion.h1 variants={fadeUp} className="heading-hero">
              Precision In <br/>
              Every Connection.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lead" style={{ marginBottom: '3rem' }}>
              Manufacturer, stockholder, supplier and exporter of industrial steel piping products and specialty alloys for critical applications worldwide.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onOpenRFQ()}>
                Request a Quote
              </button>
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          02. BRAND STATEMENT (Whitespace & Typography)
          ========================================================================== */}
      <section className="layout-section bg-pure">
        <div className="layout-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="editorial-grid"
          >
            <div>
              <motion.h2 variants={fadeUp} className="heading-section" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--text-navy)', marginBottom: 0 }}>
                ENGINEERED FOR QUALITY.<br/>
                <span style={{ color: 'var(--text-light)' }}>BUILT FOR INDUSTRY.</span>
              </motion.h2>
            </div>
            <div>
              <motion.p variants={fadeUp} className="text-lead" style={{ margin: 0 }}>
                Eco Steel Engineering operates with a simple philosophy: precision is not optional. Every fitting, flange, and pipe we supply is manufactured to strict global standards, ensuring the structural integrity of your most aggressive industrial environments.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '3rem', marginTop: '3rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-navy)', lineHeight: 1 }}>ISO</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-slate)', fontWeight: '600', marginTop: '0.5rem' }}>9001:2015 CERTIFIED</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-navy)', lineHeight: 1 }}>48+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-slate)', fontWeight: '600', marginTop: '0.5rem' }}>GLOBAL MARKETS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          03. COMPANY OVERVIEW (Split Layout)
          ========================================================================== */}
      <section className="layout-section bg-offwhite">
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="editorial-grid">
            <motion.div variants={fadeUp}>
              <img src="/img/premium-facility.png" alt="Manufacturing Facility" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
            </motion.div>
            <motion.div variants={fadeUp} style={{ paddingLeft: '2rem' }}>
              <span className="label-eyebrow">About Eco Steel</span>
              <h2 className="heading-section">Experience.<br/>Expertise.<br/>Reliability.</h2>
              <p className="text-lead">
                With deep metallurgical knowledge and extensive stockholding capabilities, we serve the most demanding sectors including Oil & Gas, Petrochemicals, Power Generation, and Marine engineering.
              </p>
              <p style={{ color: 'var(--text-slate)', marginBottom: '3rem' }}>
                We are dedicated to delivering zero-defect products on time, every time.
              </p>
              <Link to="/about-us" className="btn-link" style={{ fontSize: '1.125rem' }}>
                Learn More About Us <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          04. PRODUCT SHOWCASE (Editorial Layout, No small cards)
          ========================================================================== */}
      <section className="layout-section bg-pure">
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
              <div>
                <span className="label-eyebrow">Our Catalog</span>
                <h2 className="heading-section" style={{ marginBottom: 0 }}>Industrial Products</h2>
              </div>
              <Link to="/products" className="btn-secondary" style={{ display: 'none' /* Hide on mobile via css later if needed */ }}>
                View Full Catalog
              </Link>
            </div>

            {/* Editorial Product Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              {/* Featured Large */}
              <Link to="/products/butt-weld-pipe-fittings" style={{ display: 'block', position: 'relative', height: '500px', overflow: 'hidden', group: 'true' }} className="product-showcase-item">
                <img src="/img/seamless-buttweld-pipe-fitting.jpg" alt="Buttweld Fittings" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                  <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem' }}>Buttweld Fittings</h3>
                  <p style={{ opacity: 0.8, fontSize: '1.125rem' }}>Seamless & Welded Elbows, Tees, Reducers</p>
                </div>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Link to="/products/flanges" style={{ display: 'block', position: 'relative', height: 'calc(250px - 1rem)', overflow: 'hidden' }} className="product-showcase-item">
                  <img src="/img/product5.jpg" alt="Flanges" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                    <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: 0 }}>Pipe Flanges</h3>
                  </div>
                </Link>
                
                <Link to="/products/fasteners" style={{ display: 'block', position: 'relative', height: 'calc(250px - 1rem)', overflow: 'hidden' }} className="product-showcase-item">
                  <img src="/img/product6.jpg" alt="Fasteners" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                    <h3 style={{ fontSize: '1.75rem', color: '#fff', margin: 0 }}>High Tensile Fasteners</h3>
                  </div>
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              <Link to="/products/pipes-and-tubes" style={{ display: 'block', position: 'relative', height: '300px', overflow: 'hidden' }} className="product-showcase-item">
                <img src="/img/product1.jpg" alt="Pipes & Tubes" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Pipes & Tubes</h3>
                </div>
              </Link>
              <Link to="/products/plates-and-sheets" style={{ display: 'block', position: 'relative', height: '300px', overflow: 'hidden' }} className="product-showcase-item">
                <img src="/img/product2.jpg" alt="Plates & Sheets" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Plates & Sheets</h3>
                </div>
              </Link>
              <Link to="/products/rods" style={{ display: 'block', position: 'relative', height: '300px', overflow: 'hidden' }} className="product-showcase-item">
                <img src="/img/product4.jpg" alt="Rods & Bars" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="showcase-img" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.8) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Rods & Round Bars</h3>
                </div>
              </Link>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/products" className="btn-link" style={{ fontSize: '1.125rem' }}>View Full Catalog <i className="fas fa-arrow-right"></i></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          05. MATERIAL EXPERTISE (Sophisticated Horizontal Selector)
          ========================================================================== */}
      <section className="layout-section bg-offwhite">
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="label-eyebrow">Metallurgy</span>
            <h2 className="heading-section">Materials Without Limits.</h2>
            
            <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: '300px 1fr', minHeight: '500px' }}>
              
              {/* Interactive List */}
              <div style={{ borderRight: '1px solid var(--border-subtle)', padding: '2rem 0' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
                  {materialsData.map(mat => (
                    <li key={mat.id}>
                      <button 
                        onClick={() => setActiveMaterial(mat)}
                        onMouseEnter={() => setActiveMaterial(mat)}
                        style={{ 
                          width: '100%', textAlign: 'left', padding: '1rem 2rem', background: 'transparent', border: 'none', 
                          fontSize: '1.125rem', fontWeight: activeMaterial.id === mat.id ? '700' : '400',
                          color: activeMaterial.id === mat.id ? 'var(--text-navy)' : 'var(--text-slate)',
                          cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative'
                        }}
                      >
                        {mat.name}
                        {activeMaterial.id === mat.id && (
                          <motion.div layoutId="material-active-indicator" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '3px', background: 'var(--text-navy)' }} />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Content */}
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeMaterial.id}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                  >
                    <span className="label-eyebrow" style={{ color: 'var(--accent-blue)' }}>{activeMaterial.badge}</span>
                    <h3 style={{ fontSize: '2.5rem', color: 'var(--text-navy)', marginBottom: '1.5rem', fontWeight: '700' }}>{activeMaterial.name}</h3>
                    <p className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '600px' }}>{activeMaterial.desc}</p>
                    
                    <div style={{ marginBottom: '3rem' }}>
                      <span className="label-eyebrow" style={{ color: 'var(--text-navy)', marginBottom: '1rem' }}>Available Grades</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {activeMaterial.popularGrades.map((grade, i) => (
                          <span key={i} style={{ border: '1px solid var(--border-subtle)', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-navy)' }}>
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to={`/materials/${activeMaterial.slug}`} className="btn-link">
                      View Material Specifications <i className="fas fa-arrow-right"></i>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          06. QUALITY (Vertical Process)
          ========================================================================== */}
      <section className="layout-section bg-pure">
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="editorial-grid">
              <div>
                <span className="label-eyebrow">Quality Assurance</span>
                <h2 className="heading-section">
                  QUALITY<br/>
                  YOU CAN<br/>
                  VERIFY.
                </h2>
                <p className="text-lead" style={{ marginBottom: '3rem' }}>
                  Every product undergoes rigorous mechanical and chemical testing. We provide complete material traceability with EN 10204 3.1 certification.
                </p>
                <Link to="/quality" className="btn-primary">View Quality Policy</Link>
              </div>

              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '3rem' }}>
                  
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-3rem', width: '1rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>01 / SOURCE</span>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>Premium Raw Materials</h4>
                    <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>Sourced only from internationally approved mills.</p>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-3rem', width: '1rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>02 / INSPECT</span>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>Rigorous Testing</h4>
                    <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>PMI, Ultrasonic, Hydrostatic, and Tensile testing performed on every batch.</p>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-3rem', width: '1rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>03 / DOCUMENT</span>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>100% Traceability</h4>
                    <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>MTC (Material Test Certificates) EN 10204 3.1 provided with all dispatches.</p>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-3rem', width: '1rem', height: '1px', background: 'var(--text-navy)', top: '1.25rem' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>04 / DELIVER</span>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '0.5rem' }}>Third-Party Acceptance</h4>
                    <p style={{ color: 'var(--text-slate)', fontSize: '0.9375rem', margin: 0 }}>Open to inspection by TUV, SGS, DNV, and Lloyd's.</p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          07. INDUSTRIES (Image + List interaction)
          ========================================================================== */}
      <section className="layout-section bg-offwhite">
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="label-eyebrow">Global Applications</span>
            <h2 className="heading-section">Sectors We Supply.</h2>

            <div className="editorial-grid" style={{ alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {industriesData.slice(0, 6).map((ind, index) => (
                  <div 
                    key={ind.id} 
                    onMouseEnter={() => setActiveIndustry(ind)}
                    style={{ 
                      padding: '2rem 0', 
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '2rem',
                      cursor: 'pointer',
                      color: activeIndustry.id === ind.id ? 'var(--text-navy)' : 'var(--text-light)'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', fontWeight: '300' }}>0{index + 1}</span>
                    <h3 style={{ fontSize: '2rem', margin: 0, fontWeight: activeIndustry.id === ind.id ? '700' : '500', transition: 'color 0.3s' }}>{ind.name}</h3>
                  </div>
                ))}
              </div>

              <div style={{ position: 'relative', height: '600px', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--bg-surface)' }}
                  >
                    {/* Placeholder for industry images. We will use a generic industrial texture if specific images aren't present. */}
                    <img src={`/img/industrial-valves-banner.jpg`} alt={activeIndustry.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', background: 'linear-gradient(0deg, rgba(10,17,40,0.9) 0%, rgba(10,17,40,0) 100%)', color: '#fff' }}>
                      <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.6 }}>{activeIndustry.desc}</p>
                      <Link to="/industries" className="btn-link" style={{ color: '#fff', borderBottomColor: '#fff', marginTop: '1.5rem', display: 'inline-flex' }}>Explore Industry <i className="fas fa-arrow-right"></i></Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
          08. FINAL CTA (Soft grey background, large typography)
          ========================================================================== */}
      <section className="layout-section bg-surface" style={{ textAlign: 'center', padding: '150px 0' }}>
        <div className="layout-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="label-eyebrow">Commercial Inquiry</span>
            <h2 className="heading-section" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>
              HAVE A REQUIREMENT?
            </h2>
            <p className="text-lead" style={{ margin: '0 auto 4rem', textAlign: 'center' }}>
              Tell us what you need and our technical sales team will provide a detailed quotation including lead times and material test certificate availability.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => onOpenRFQ()} style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
                Request a Quote
              </button>
              <Link to="/contact-us" className="btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick CSS for Showcase Hover effects */}
      <style>{`
        .product-showcase-item .showcase-img { transition: transform 0.8s var(--ease-out-expo); }
        .product-showcase-item:hover .showcase-img { transform: scale(1.05); }
      `}</style>

    </div>
  );
};

export default Home;
