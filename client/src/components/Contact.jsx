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
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Full-Width Horizontal Rectangle RFQ Form Card */}
        <div className="contact-form-card" style={{ width: '100%', padding: '2.5rem 3rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-navy)', fontFamily: 'var(--font-display)' }}>
              Request an Official Quotation (RFQ)
            </h3>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--text-slate)', fontSize: '0.9375rem' }}>
              Fill out your requirements below and receive a detailed quote with lead times and MTC availability.
            </p>
          </div>

          {status.message && (
            <div className={`form-feedback ${status.type}`} style={{ display: 'block', marginBottom: '1.25rem' }}>
              {status.message}
            </div>
          )}

          <form id="rfqForm" onSubmit={handleSubmit}>
            {/* Row 1: Name & Company */}
            <div className="form-grid" style={{ marginBottom: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="rfqName">Contact Name *</label>
                <input type="text" id="rfqName" className="form-input" placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="rfqCompany">Company / Organization</label>
                <input type="text" id="rfqCompany" className="form-input" placeholder="e.g. Petrobras EPC" value={formData.company} onChange={handleChange} />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="form-grid" style={{ marginBottom: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="rfqEmail">Corporate Email *</label>
                <input type="email" id="rfqEmail" className="form-input" placeholder="e.g. purchasing@company.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="rfqPhone">Phone / Mobile (with Country Code)</label>
                <input type="tel" id="rfqPhone" className="form-input" placeholder="e.g. +91 22 3534 6200" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            {/* Row 3: Product Category (+ Captcha) & Specifications side-by-side */}
            <div className="form-grid" style={{ marginBottom: '1rem', alignItems: 'start' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
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

                <div style={{ marginTop: '0.75rem' }}>
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
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="rfqMessage">Specifications, Material Grade & Quantities *</label>
                <textarea id="rfqMessage" className="form-textarea" rows={4}
                  placeholder="Please specify material grade (e.g. SS 316L / Inconel 625), size range, schedule/class rating, quantity, and delivery destination..."
                  value={formData.message} onChange={handleChange} required style={{ height: '115px', resize: 'none' }}></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting || !turnstileToken} style={{ minWidth: '260px', padding: '0.875rem 1.75rem' }}>
                {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Transmitting Inquiry...</> : <><i className="fas fa-paper-plane"></i> Submit Official RFQ Inquiry</>}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Row (Below Form): Compact Google Maps Banner + WhatsApp Chat Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* Compact Google Maps Banner */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '1.25rem', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: '700', fontSize: '0.9375rem', color: 'var(--text-navy)', fontFamily: 'var(--font-display)' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-steel)', marginRight: '0.5rem' }}></i> Plant Location (Mumbai)
              </div>
              <a href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'var(--accent-steel)', fontWeight: '600', textDecoration: 'none' }}>
                Open in Maps &rarr;
              </a>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', flex: 1, minHeight: '260px' }}>
              <iframe
                src="https://maps.google.com/maps?q=HEX+INDIA+-+Hot+Forge+Bolt+Nut+Manufacturer,+Plot+No.+G4,+Forsberry+Rd,+East,+Sewri,+Mumbai,+Maharashtra+400015&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ width: '100%', height: '100%', minHeight: '260px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eco Steel Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* WhatsApp Chat Now Card */}
          <div>
            <WhatsAppCard theme="light" title="DIRECT WHATSAPP DESK" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
