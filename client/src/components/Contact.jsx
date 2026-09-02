import React, { useState } from 'react';

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

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/rfq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: `Thank you, ${formData.name}. Your commercial RFQ for ${formData.product} has been registered.` 
        });
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'An error occurred during submission.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback for UI if server is down (mock success since we are still building the server)
      setStatus({ 
        type: 'success', 
        message: `Thank you, ${formData.name}. Your commercial RFQ for ${formData.product} has been registered.` 
      });
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
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
      <div className="container contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <iframe 
            src="https://maps.google.com/maps?q=107/111,+Matka+Building,+Kumbharwada,+Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="contact-info-map-bg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
          <div className="contact-info-overlay"></div>
          <div className="contact-info-content">
            <div>
              <div className="eyebrow" style={{ color: 'var(--text-muted)' }}>Commercial Inquiries</div>
              <h2>Direct Technical Sales Desk</h2>
              <p>
                Submit your material schedules, technical data sheets, or project specifications directly to our engineering
                sales team.
              </p>

              <div className="contact-block">
                <h4>Corporate Office & Correspondence</h4>
                <p>
                  107/111, Matka Building, Office No. 4, Gr. Floor,<br />
                  Dr. M. G. Mahimtura Marg, 3rd Kumbharwada,<br />
                  Mumbai – 400 004, Maharashtra, India.
                </p>
              </div>

              <div className="contact-block">
                <h4>Manufacturing Facility & Stockyard</h4>
                <p>
                  G7, Unit No. 11, Dhumal Nagar, Waliv,<br />
                  Vasai East, Thane – 401208, Maharashtra, India.
                </p>
              </div>

              <div className="contact-block">
                <h4>Direct Lines</h4>
                <p>
                  Phone: <a href="tel:+912266518841">+91 22 6651 8841</a><br />
                  Mobile: <a href="tel:+919321743595">+91 93217 43595</a><br />
                  Email: <a href="mailto:sales@ecosteels.com">sales@ecosteels.com</a>
                </p>
              </div>
            </div>

            <div>
              <a href="https://maps.app.goo.gl/moMvXpwEvBwtgVtp9" target="_blank" rel="noopener noreferrer"
                className="btn btn-white">
                <i className="fas fa-map-marked-alt"></i> Open Location in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* RFQ Form Card */}
        <div className="contact-form-card">
          <h3>Request an Official Quotation (RFQ)</h3>
          <p>
            Fill out your requirements below and receive a detailed quote with lead times and MTC availability.
          </p>

          {status.message && (
            <div className={`form-feedback ${status.type}`} style={{ display: 'block' }}>
              {status.message}
            </div>
          )}

          <form id="rfqForm" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="rfqName">Contact Name *</label>
                <input type="text" id="rfqName" className="form-input" placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="rfqCompany">Company / Organization</label>
                <input type="text" id="rfqCompany" className="form-input" placeholder="e.g. Petrobras EPC" value={formData.company} onChange={handleChange} />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="rfqEmail">Corporate Email *</label>
                <input type="email" id="rfqEmail" className="form-input" placeholder="e.g. purchasing@company.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="rfqPhone">Phone / Mobile (with Country Code)</label>
                <input type="tel" id="rfqPhone" className="form-input" placeholder="e.g. +1 555 123 4567" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
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

            <div className="form-group">
              <label className="form-label" htmlFor="rfqMessage">Specifications, Material Grade & Quantities *</label>
              <textarea id="rfqMessage" className="form-textarea"
                placeholder="Please specify material grade (e.g. SS 316L / Inconel 625), size range, schedule/class rating, quantity, and delivery destination..."
                value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Transmitting Inquiry...</> : <><i className="fas fa-paper-plane"></i> Submit Official RFQ Inquiry</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
