import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactUs = () => {
  const { onOpenRFQ } = useOutletContext();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to connect to the inquiry service. Please verify your connection or try again.');
    }
  };

  return (
    <div className="eco-contact-page">
      
      {/* Page Header */}
      <section 
        style={{ 
          backgroundColor: 'var(--bg-dark-950)', 
          color: '#ffffff', 
          padding: '5rem 0 4rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Contact Us</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Global Headquarters & Plant Locations</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Get in Touch with Sales Engineering
          </h1>
          <p className="text-lead on-dark">
            Connect directly with our commercial desk, metallurgical engineers, or plant logistics team for project pricing, technical data verification, or stock availability.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div className="editorial-grid" style={{ alignItems: 'flex-start' }}>
            
            {/* Contact Information & Addresses */}
            <div>
              <span className="label-eyebrow">Direct Coordinates</span>
              <h2 className="heading-section">Corporate Office & Manufacturing Node</h2>
              <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
                Our corporate headquarters and manufacturing stockyards are situated in Mumbai, providing immediate access to port infrastructure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                
                {/* Corporate Office */}
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-green)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-building" style={{ color: 'var(--brand-green)', fontSize: '1.125rem' }}></i>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--text-dark-primary)', margin: 0, fontFamily: 'var(--font-display)' }}>
                      Corporate Office (Mumbai)
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                    HEX INDIA - Hot Forge Bolt Nut Manufacturer,<br />
                    Plot No. G4, Forsberry Rd, East, Sewri,<br />
                    Mumbai, Maharashtra 400015
                  </p>
                </div>

                {/* Manufacturing Facility */}
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-blue)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <i className="fas fa-industry" style={{ color: 'var(--brand-blue)', fontSize: '1.125rem' }}></i>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--text-dark-primary)', margin: 0, fontFamily: 'var(--font-display)' }}>
                      Manufacturing Facility & Stockyard
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-dark-secondary)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                    HEX INDIA - Hot Forge Bolt Nut Manufacturer,<br />
                    Plot No. G4, Forsberry Rd, East, Sewri,<br />
                    Mumbai, Maharashtra 400015
                  </p>
                </div>

                {/* Direct Communications */}
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #f59e0b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <i className="fas fa-phone-alt" style={{ color: '#f59e0b', fontSize: '1.125rem' }}></i>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--text-dark-primary)', margin: 0, fontFamily: 'var(--font-display)' }}>
                      Telephone & Digital Inquiries
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9375rem' }}>
                    <div><strong>Head Office:</strong> <a href="tel:+912266518841" style={{ color: 'var(--text-dark-primary)', fontWeight: '600' }}>+91 22 6651 8841</a></div>
                    <div><strong>Mobile / Urgent:</strong> <a href="tel:+919321743595" style={{ color: 'var(--text-dark-primary)', fontWeight: '600' }}>+91 93217 43595</a></div>
                    <div><strong>Corporate Email:</strong> <a href="mailto:sales@ecosteels.com" style={{ color: 'var(--brand-green)', fontWeight: '700' }}>sales@ecosteels.com</a></div>
                  </div>
                </div>

              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/919321743595?text=Hello%20Eco%20Steel%20Engineering,%20I%20would%20like%20to%20connect%20with%20your%20sales%20desk."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ backgroundColor: '#22c55e', borderColor: '#22c55e' }}
                >
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
                <button className="btn-secondary" onClick={() => onOpenRFQ()}>
                  <i className="fas fa-file-contract"></i> Launch RFQ Wizard
                </button>
              </div>
            </div>

            {/* Official Contact & Inquiry Form */}
            <div style={{ backgroundColor: 'var(--bg-pure)', border: '1px solid var(--border-light)', padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-elevated)' }}>
              <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                <span className="label-eyebrow" style={{ marginBottom: '0.25rem' }}>Direct Transmission</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark-primary)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  Send Commercial or Technical Message
                </h3>
              </div>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(34, 197, 94, 0.15)', color: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.25rem' }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--text-dark-primary)', marginBottom: '0.5rem' }}>Message Transmitted</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    Thank you. A sales representative will respond to your corporate email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status === 'error' && errorMessage && (
                    <div style={{ padding: '0.875rem 1.25rem', marginBottom: '1.25rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--radius-sm, 4px)', color: '#b91c1c', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="fas fa-exclamation-circle"></i>
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Company *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Organization Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Corporate Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Phone / Mobile *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="+91 / Country Code"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Purpose of Inquiry *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Inconel 625 Forged Fittings Tender Specification"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Detailed Requirements & Notes *</label>
                    <textarea 
                      required 
                      rows="4" 
                      className="form-textarea" 
                      placeholder="Detail product type, material grades, size schedule, testing parameters, or destination port..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={status === 'loading'}
                    style={{ width: '100%', padding: '1rem' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Submitting Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> Submit Inquiry to Sales Engineering Desk
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactUs;
