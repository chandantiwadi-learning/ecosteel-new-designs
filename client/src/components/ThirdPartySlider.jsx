import React from 'react';

const partyImages = [
  '/img/party1.jpg',
  '/img/party2.jpg',
  '/img/party3.jpg',
  '/img/party4.jpg',
  '/img/party5.jpg',
  '/img/party6.jpg',
  '/img/party7.jpg',
  '/img/party8.jpg',
];

const ThirdPartySlider = () => {
  return (
    <section className="section-pad-small bg-gray">
      <div className="container">
        <div className="section-title">
          <h2>Third Party Inspection</h2>
          <hr className="divider" />
        </div>
        <div
          className="slider-brand"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            alignItems: 'center',
          }}
        >
          {partyImages.map((img, idx) => (
            <div key={idx} style={{ padding: '5px' }}>
              <a href="#">
                <img src={img} alt={`Third Party Inspection ${idx + 1}`} style={{ maxHeight: '60px' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdPartySlider;
