import React, { useState } from 'react';
import { materials } from '../data/mockData';

const Materials = () => {
  const [activeTab, setActiveTab] = useState(materials[0].id);

  const activeMaterial = materials.find(m => m.id === activeTab) || materials[0];

  const handleInquireClick = (matName) => {
    const notesField = document.getElementById('rfqMessage');
    if (notesField) {
      notesField.value = `Inquiry regarding material grade: ${matName}\nRequired specs:\nEstimated quantity:`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="materials">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Metallurgical Directory</div>
          <h2 className="section-heading">Materials Without Limits.</h2>
          <p className="section-desc">
            We stock and manufacture across a broad spectrum of ferrous, non-ferrous, and extreme-environment superalloys.
          </p>
        </div>

        <div className="materials-layout">
          {/* Left Navigation */}
          <div className="materials-nav">
            {materials.map((m) => (
              <button 
                key={m.id}
                type="button" 
                className={`mat-nav-btn ${activeTab === m.id ? 'active' : ''}`}
                onClick={() => setActiveTab(m.id)}
              >
                <span>{m.name}</span>
                <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="materials-content">
            <span className="mat-badge">{activeMaterial.badge}</span>
            <h3 className="mat-title">{activeMaterial.name}</h3>
            <p className="mat-desc">{activeMaterial.desc}</p>
            
            <div className="grades-box">
              <h5>Standard Specifications & Popular Grades</h5>
              <div className="grades-pills">
                {activeMaterial.grades.map(g => (
                  <span key={g} className="grade-pill">{g}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary mat-inquiry-btn" 
                onClick={() => handleInquireClick(activeMaterial.name)}
              >
                Inquire for {activeMaterial.name}
              </button>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                <i className="fas fa-shield-alt" style={{ color: 'var(--accent-steel)' }}></i> Supplied with EN 10204 3.1 MTC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
