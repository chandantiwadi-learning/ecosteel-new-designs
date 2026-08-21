import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { standardsData } from '../data/standards';

const ResourcesPage = () => {
  const { onOpenRFQ } = useOutletContext();
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'What types of Material Test Certificates (MTC) do you provide?',
      a: 'Eco Steel Engineering provides EN 10204 3.1 and 3.2 Material Test Certificates (MTC) with every shipment. Certificates detail heat code chemical composition, mechanical tensile properties, impact test results, hydrostatic test pressure, and non-destructive testing reports.',
    },
    {
      q: 'Can Eco Steel supply third-party inspected (TPA) piping & fittings?',
      a: 'Yes. Our products are routinely inspected and stamped by major international inspection agencies including TUV, Bureau Veritas, DNV GL, Lloyd’s Register, SGS, and Engineers India Limited (EIL).',
    },
    {
      q: 'Do you manufacture custom sizes or non-standard forging dimensions?',
      a: 'Absolutely. In addition to standard ANSI/ASME/DIN dimensions, our machining and forging shop manufactures heavy-wall fittings, custom flange facings, special thread pitch fasteners, and tailored ring joints per customer drawings.',
    },
    {
      q: 'What are your standard export packing and dispatch procedures?',
      a: 'All items are color-coded, hard-stamped with heat numbers, plastic-capped at pipe ends, rust-preventive coated, and packaged in seaworthy wooden cases or steel-banded pallets suitable for ocean and air freight.',
    },
  ];

  return (
    <div className="resources-page">
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs-nav">
            <Link to="/">Home</Link> / <span>Technical Resources</span>
          </div>
          <h1>Technical Information & Standards Library</h1>
          <p>Manufacturing standards, technical FAQs, and certification information for engineering procurement.</p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Standards Table */}
        <div className="resource-section shadow-sm">
          <div className="section-header">
            <h2>Manufacturing & Dimension Standards</h2>
            <div className="title-underline"></div>
            <p>Our piping products, fittings, flanges, and fasteners strictly adhere to global engineering codes.</p>
          </div>

          <div className="table-responsive margin-top-20">
            <table className="engineering-table">
              <thead>
                <tr>
                  <th>Standard Code</th>
                  <th>Standard Title & Scope</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {standardsData.map((std, idx) => (
                  <tr key={idx}>
                    <td><strong>{std.code}</strong></td>
                    <td>{std.title}</td>
                    <td><span className="std-cat-badge">{std.category}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical FAQs Accordion */}
        <div className="resource-section shadow-sm margin-top-40">
          <div className="section-header">
            <h2>Frequently Asked Procurement Questions</h2>
            <div className="title-underline"></div>
          </div>

          <div className="faqs-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <h4>{faq.q}</h4>
                  <i className={`fas ${activeFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                {activeFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certificate Download Section */}
        <div className="resource-section shadow-sm margin-top-40 text-center">
          <h2>Need Quality Compliance Documents or Direct Inquiry?</h2>
          <p className="margin-b-20">Contact our sales engineering desk directly for instant technical datasheet verification.</p>
          <button type="button" className="btn-banner-rfq" onClick={() => onOpenRFQ()}>
            <i className="fas fa-file-signature"></i> Submit Technical RFQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
