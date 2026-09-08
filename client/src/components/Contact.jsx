import React, { useState, useRef } from 'react';
import TurnstileWidget from './TurnstileWidget';
import WhatsAppCard from './WhatsAppCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Removing the 'rfq' prefix to match standard state keys
    const key = id.replace('rfq', '').toLowerCase();
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleProductChange = (e) => {
    setFormData((prev) => ({ ...prev, product: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.product || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all mandatory fields (*).' });
      clearStatus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please provide a valid corporate email address.' });
      clearStatus();
      return;
    }

    if (!turnstileToken) {
      setStatus({ type: 'error', message: 'Please complete the security verification (CAPTCHA).' });
      clearStatus();
      return;
    }

    setIsSubmitting(true);

    const apiUrl = import.meta.env.VITE_API_URL || 'https://ecosteel-new-designs.onrender.com';

    try {
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          productInterest: formData.product,
          subject: `RFQ for ${formData.product}`,
          message: formData.message,
          turnstileToken: turnstileToken
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setStatus({
          type: 'success',
          message: data.message || `Thank you, ${formData.name}. Your inquiry has been submitted successfully.`
        });
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
        setTurnstileToken('');
        turnstileRef.current?.reset();
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Security verification failed or something went wrong. Please try again.'
        });
        setTurnstileToken('');
        turnstileRef.current?.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect to the inquiry service. Please verify your connection or try again.'
      });
      setTurnstileToken('');
      turnstileRef.current?.reset();
    }

    setIsSubmitting(false);
    clearStatus();
  };

  const clearStatus = () => {
    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 8000);
  };

  return (
    <section className="section section-offwhite" id="contact">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Equal 50-50 Split Row: Left = Contact Info & WhatsApp, Right = RFQ Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>

          {/* Left Side: Contact Info Card + WhatsApp Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>

            {/* Corporate Address & Contact Info Card */}
            <div
              style={{
                backgroundColor: '#0b1528',
                color: '#ffffff',
                padding: '2rem 2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: 'var(--shadow-lg)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '700' }}>
                  Corporate Office & Correspondence
                </div>
                <h3 style={{ fontSize: '1.375rem', color: '#ffffff', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                  ECO STEEL ENGINEERING
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  <i className="fas fa-map-marker-alt" style={{ color: '#38bdf8', marginRight: '0.5rem' }}></i>
                  Plot No. G4, Forsberry Rd, East, Sewri, Mumbai, Maharashtra 400015
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '700' }}>
                    Direct Lines & Support
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9375rem' }}>
                    <div>
                      <i className="fas fa-phone-alt" style={{ color: '#38bdf8', marginRight: '0.6rem' }}></i>
                      Phone: <a href="tel:+912235346200" style={{ color: '#ffffff', fontWeight: '700', textDecoration: 'none' }}>+91 22 3534 6200</a>
                    </div>
                    <div>
                      <i className="fas fa-envelope" style={{ color: '#38bdf8', marginRight: '0.6rem' }}></i>
                      Email: <a href="mailto:sales@ecosteels.com" style={{ color: '#38bdf8', fontWeight: '600', textDecoration: 'none' }}>sales@ecosteels.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center' }}
                >
                  <i className="fas fa-map-marked-alt"></i> Open Location in Google Maps
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div>
              <WhatsAppCard theme="light" title="DIRECT WHATSAPP DESK" />
            </div>

          </div>

          {/* Right Side: Whole RFQ Contact Form */}
          <div className="contact-form-card" style={{ width: '100%', padding: '2rem 2.25rem', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.375rem', color: 'var(--text-navy)', fontFamily: 'var(--font-display)' }}>
                  Request an Official Quotation (RFQ)
                </h3>
                <p style={{ margin: '0.25rem 0 0', color: 'var(--text-slate)', fontSize: '0.875rem' }}>
                  Fill out your requirements below and receive a detailed quote with lead times and MTC availability.
                </p>
              </div>

              {status.message && (
                <div className={`form-feedback ${status.type}`} style={{ display: 'block', marginBottom: '1rem' }}>
                  {status.message}
                </div>
              )}

              <form id="rfqForm" onSubmit={handleSubmit}>
                <div className="form-grid" style={{ marginBottom: '0.875rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="rfqName">Contact Name *</label>
                    <input type="text" id="rfqName" className="form-input" placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="rfqCompany">Company / Organization</label>
                    <input type="text" id="rfqCompany" className="form-input" placeholder="e.g. Petrobras EPC" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-grid" style={{ marginBottom: '0.875rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="rfqEmail">Corporate Email *</label>
                    <input type="email" id="rfqEmail" className="form-input" placeholder="e.g. purchasing@company.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="rfqPhone">Phone / Mobile</label>
                    <input type="tel" id="rfqPhone" className="form-input" placeholder="e.g. +91 22 3534 6200" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '0.875rem' }}>
                  <label className="form-label" htmlFor="rfqProduct">Primary Product Category *</label>
                  <select id="rfqProduct" className="form-select" value={formData.product} onChange={handleProductChange} required>
                    <option value="">Select a Product Line...</option>
                    <option value="Buttweld Pipe Fittings">Buttweld Pipe Fittings (ASME B16.9)</option>
                    <option value="Forged Fittings">Forged Fittings (3000# / 6000# / 9000#)</option>
                    <option value="Pipe Flanges">Industrial Pipe Flanges (ASME B16.5 / B16.47)</option>
                    <option value="Industrial Fasteners">Industrial Fasteners (Nuts, Bolts, Studs)</option>
                    <option value="Pipes & Tubes">Pipes & Tubes (Seamless / Welded)</option>
                    <option value="Plates & Sheets">Plates & Sheets (Cut to Size)</option>
                    <option value="Rods & Round Bars">Rods & Round Bars (Bright / Peeled)</option>
                    <option value="General Metallurgical Inquiry">General Metallurgical Inquiry</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '0.875rem' }}>
                  <label className="form-label" htmlFor="rfqMessage">Specifications, Material Grade & Quantities *</label>
                  <textarea id="rfqMessage" className="form-textarea" rows={3}
                    placeholder="Please specify material grade (e.g. SS 316L / Inconel 625), size range, schedule/class rating, quantity, and delivery destination..."
                    value={formData.message} onChange={handleChange} required style={{ height: '90px', resize: 'none' }}></textarea>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <TurnstileWidget
                    ref={turnstileRef}
                    onVerify={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => {
                      setTurnstileToken('');
                      setStatus({ type: 'error', message: 'CAPTCHA security check failed. Please try again.' });
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting || !turnstileToken} style={{ width: '100%', padding: '0.875rem' }}>
                  {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Transmitting Inquiry...</> : <><i className="fas fa-paper-plane"></i> Submit Official RFQ Inquiry</>}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Full-Length Google Maps Banner */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontWeight: '700', fontSize: '1.0625rem', color: 'var(--text-navy)', fontFamily: 'var(--font-display)' }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-steel)', marginRight: '0.5rem' }}></i> Plant Location (Mumbai, Maharashtra)
            </div>
            <a href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'var(--accent-steel)', fontWeight: '600', textDecoration: 'none' }}>
              View Full Map &rarr;
            </a>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', height: '380px', width: '100%' }}>
            <iframe
              src="https://maps.google.com/maps?q=HEX+INDIA+-+Hot+Forge+Bolt+Nut+Manufacturer,+Plot+No.+G4,+Forsberry+Rd,+East,+Sewri,+Mumbai,+Maharashtra+400015&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ width: '100%', height: '100%', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eco Steel Google Maps Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
