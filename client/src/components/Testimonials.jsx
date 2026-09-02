import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <div className="eyebrow">Client Endorsements</div>
          <h2 className="section-heading">What Industry Leaders Say</h2>
        </div>

        <div className="testimonials-card">
          <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
          <p className="testimonial-quote">"{t.quote}"</p>
          <div className="testimonial-author">
            <img src={t.image} alt={t.name} className="testimonial-avatar" />
            <div className="author-info">
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <button type="button" className="slider-btn" onClick={handlePrev} aria-label="Previous Testimonial">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></div>
            ))}
          </div>
          <button type="button" className="slider-btn" onClick={handleNext} aria-label="Next Testimonial">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
