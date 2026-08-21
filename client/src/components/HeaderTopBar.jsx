import React from 'react';

const HeaderTopBar = () => {
  return (
    <div className="eco-top-bar" style={{ background: '#0a0f1d', color: '#cbd5e1', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '6px 15px' }}>
        <div className="iso-badges" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: '#008dd2', fontWeight: '700' }}><i className="fas fa-certificate"></i> ISO 9001:2015</span>
          <span className="hidden-xs">QMS ISO 9001:2015</span>
          <span className="hidden-xs">EMS ISO 14001:2015</span>
          <span className="hidden-xs">OHSAS 18001:2007</span>
          <span style={{ background: '#008dd2', color: '#fff', padding: '1px 6px', borderRadius: '3px', fontSize: '11px', fontWeight: 'bold' }}>PED CERTIFIED</span>
        </div>
        <div className="top-contacts" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="mailto:sales@ecosteels.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
            <i className="fas fa-envelope" style={{ color: '#008dd2' }}></i> sales@ecosteels.com
          </a>
          <a href="tel:+912266518841" style={{ color: '#cbd5e1', textDecoration: 'none' }} className="hidden-xs">
            <i className="fas fa-phone-alt" style={{ color: '#008dd2' }}></i> +91 22 6651 8841
          </a>
          <a href="https://wa.me/919321743595" target="_blank" rel="noreferrer" style={{ color: '#22c55e', fontWeight: '600', textDecoration: 'none' }}>
            <i className="fab fa-whatsapp"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
