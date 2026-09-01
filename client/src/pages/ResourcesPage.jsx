import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { standardsData } from '../data/standards';

const ResourcesPage = () => {
  const { onOpenRFQ } = useOutletContext();
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchStandard, setSearchStandard] = useState('');

  const faqs = [
    {
      q: 'What types of Material Test Certificates (MTC) do you provide?',
      a: 'Eco Steel Engineering supplies EN 10204 3.1 Material Test Certificates with every shipment as standard. For critical client requirements, we also facilitate EN 10204 3.2 inspection with independent third-party inspection endorsement (TÜV SÜD, SGS, Lloyd\'s Register, Bureau Veritas, DNV GL, EIL). Certificates detail melt heat numbers, exact chemical spectrometry, tensile yield strength, elongation, Charpy impact toughness, hardness, and non-destructive examination results.'
    },
    {
      q: 'Can Eco Steel supply third-party inspected (TPI) piping & fittings?',
      a: 'Yes. Our products are routinely inspected, tested, and hard-stamped under the witness of internationally recognized third-party agencies including TÜV, Bureau Veritas, DNV GL, Lloyd’s Register, SGS, and Engineers India Limited (EIL).'
    },
    {
      q: 'Do you manufacture custom sizes, non-standard wall thicknesses, or special forgings?',
      a: 'Absolutely. In addition to standard ANSI/ASME/DIN dimensions, our machining and forging facility manufactures heavy-wall fittings (up to SCH XXS), custom flange facings (RTJ, Tongue & Groove), bespoke thread pitches, and special forgings per customer engineering drawings.'
    },
    {
      q: 'What are your standard export packing and dispatch procedures?',
      a: 'All piping products and fittings are color-coded, hard-stamped with heat and grade identification, fitted with heavy plastic end caps/bevel protectors, coated with rust-preventive oil, and packaged in seaworthy wooden crates or steel-banded pallets suitable for ocean and air freight.'
    },
    {
      q: 'What is the lead time for standard vs. custom specialty alloy orders?',
      a: 'Standard stocked items (Stainless 304L/316L, Carbon Steel A105/A234, Duplex 2205) are available for immediate dispatch within 24 to 72 hours. Custom forging and specialty nickel alloys (Inconel 625/718, Hastelloy C276, Monel 400) are typically dispatched within 2 to 4 weeks depending on batch size and third-party inspection schedules.'
    }
  ];

  const filteredStandards = standardsData.filter((s) => {
    const q = searchStandard.toLowerCase().trim();
    if (q === '') return true;
    return s.code.toLowerCase().includes(q) || s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
  });

  return (
    <div className="eco-resources-page">
      
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
            <span style={{ color: 'var(--brand-green-accent)', fontWeight: '600' }}>Resources</span>
          </div>

          <span className="label-eyebrow on-dark" style={{ marginBottom: '0.5rem' }}>Technical Information & Knowledge Base</span>
          <h1 className="heading-hero on-dark" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Engineering Standards & Technical FAQs
          </h1>
          <p className="text-lead on-dark">
            Manufacturing standards directory, quality certification requirements, and procurement guidelines for international EPC engineering teams.
          </p>
        </div>
      </section>

      {/* Standards Section */}
      <section className="layout-section section-light">
        <div className="layout-container">
          
          <div className="section-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="label-eyebrow">Codes & Standards</span>
                <h2 className="heading-section" style={{ margin: 0 }}>Manufacturing Standards Directory</h2>
              </div>

              {/* Search Filter */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                <i className="fas fa-search" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dark-muted)' }}></i>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Filter standards (e.g. B16.9, A403)..."
                  value={searchStandard}
                  onChange={(e) => setSearchStandard(e.target.value)}
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
          </div>

          <div className="table-responsive-wrapper" style={{ marginBottom: '5rem' }}>
            <table className="technical-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Standard Code</th>
                  <th>Standard Scope & Description</th>
                  <th style={{ width: '25%' }}>Product Application</th>
                </tr>
              </thead>
              <tbody>
                {filteredStandards.map((std, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '700', color: 'var(--text-dark-primary)' }}>
                      <span className="badge-tech accent">{std.code}</span>
                    </td>
                    <td style={{ fontWeight: '500' }}>{std.title}</td>
                    <td><span className="badge-tech">{std.category}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQs Accordion */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="section-header text-center">
              <span className="label-eyebrow">Procurement Guidance</span>
              <h2 className="heading-section">Frequently Asked Technical Questions</h2>
              <p className="text-lead" style={{ margin: '0 auto' }}>
                Key technical questions answered by our engineering and quality assurance department.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-pure)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        backgroundColor: isOpen ? 'var(--bg-surface)' : 'transparent',
                        fontFamily: 'var(--font-display)',
                        fontWeight: '700',
                        fontSize: '1.0625rem',
                        color: 'var(--text-dark-primary)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <span>{faq.q}</span>
                      <i className={`fas fa-${isOpen ? 'minus' : 'plus'}`} style={{ color: 'var(--brand-green)', fontSize: '0.875rem' }}></i>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderTop: '1px solid var(--border-light)', color: 'var(--text-dark-secondary)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Quality Compliance Action Banner */}
      <section className="layout-section section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="layout-container" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="label-eyebrow on-dark">Technical Support</span>
          <h2 className="heading-section on-dark">Need Specific Chemical Analysis or Datasheets?</h2>
          <p className="text-lead on-dark" style={{ marginBottom: '2rem' }}>
            Our engineering desk can provide certified dimensional drawings, PREN calculation formulas, and material compliance certificates for tender submissions.
          </p>
          <button className="btn-primary" onClick={() => onOpenRFQ()}>
            <i className="fas fa-file-contract"></i> Submit Technical Request
          </button>
        </div>
      </section>

    </div>
  );
};

export default ResourcesPage;
