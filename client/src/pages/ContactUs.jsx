import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-pure">
      <section className="layout-section bg-offwhite" style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label-eyebrow">Contact Us</span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>Global Headquarters</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>
              Our technical sales and engineering teams are available to discuss your specific material requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="layout-section">
        <div className="layout-container">
          <div className="editorial-grid" style={{ alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="heading-section" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Get in Touch.</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Corporate Office</h4>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0, lineHeight: 1.6 }}>
                    107/111, Matka Building,<br/>
                    Office No. 4, Gr. Floor,<br/>
                    Dr. M. G. Mahimtura Marg,<br/>
                    3rd Kumbharwada, Mumbai – 400 004,<br/>
                    Maharashtra, India.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Manufacturing Unit</h4>
                  <p style={{ color: 'var(--text-slate)', fontSize: '1.125rem', margin: 0, lineHeight: 1.6 }}>
                    G7, Unit No. 11, Dhumal Nagar,<br/>
                    Waliv, Vasai East,<br/>
                    Thane – 401208,<br/>
                    Maharashtra, India.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-navy)', marginBottom: '1rem' }}>Direct Lines</h4>
                  <p style={{ margin: '0 0 0.5rem 0' }}><a href="tel:+919321743595" style={{ color: 'var(--text-slate)', fontSize: '1.125rem', textDecoration: 'none' }}>+91 93217 43595</a></p>
                  <p style={{ margin: '0 0 0.5rem 0' }}><a href="tel:+912266518841" style={{ color: 'var(--text-slate)', fontSize: '1.125rem', textDecoration: 'none' }}>+91 22 6651 8841</a></p>
                  <p style={{ margin: 0 }}><a href="mailto:sales@ecosteels.com" style={{ color: 'var(--accent-blue)', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}>sales@ecosteels.com</a></p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-navy)', marginBottom: '2rem' }}>Send an Inquiry</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-input" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-input" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows="5" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ width: '100%', padding: '1.25rem' }}>
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent Successfully' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
