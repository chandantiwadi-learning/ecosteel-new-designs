import React from 'react';

const clientImages = [
  '/img/client2.jpg',
  '/img/client3.jpg',
  '/img/client1.jpg',
  '/img/client4.jpg',
  '/img/client5.jpg',
  '/img/client6.jpg',
  '/img/client7.jpg',
];

const ClientSlider = () => {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-title">
          <h2>Our Clients</h2>
          <hr className="divider" />
        </div>
        <div
          className="slider_blog text-left"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {clientImages.map((img, idx) => (
            <div key={idx} className="blog-post">
              <figure className="post-image">
                <img src={img} className="clientimg" alt={`Client ${idx + 1}`} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
