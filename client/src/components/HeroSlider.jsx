import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/img/banner2.jpg',
    captionHeading: (
      <>
        We are Premiums <span className="spancol"> Manufacturer</span> of Industrial{' '}
        <span className="spancol"> Flanges</span>
      </>
    ),
    captionSubheading: 'Manufacturer, Supplier, Exporter, stockist',
    subClass: 'slide-right small-new',
  },
  {
    image: '/img/banner1.jpg',
    captionHeading: (
      <>
        We Keep <span className="spancol">Huge Stock</span> Of Pipes, Fittings, Flanges that are
        of the best quality.
      </>
    ),
    captionSubheading: 'Contact Us at Eco Steel Engineering',
    subClass: 'slide-right small-new1',
  },
  {
    image: '/img/banner4.jpg',
    captionHeading: (
      <>
        Eco Steel Engineering is one of the professional{' '}
        <span className="spancol"> Manufacturers, Exporters and Suppliers</span> of
      </>
    ),
    captionSubheading: 'Flanges, Pipe fittings, Fasteners, Forged Fittings',
    subClass: 'slide-right',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <section id="one" style={{ backgroundPosition: 'center' }}>
      <div className="slider-back">
        <div id="myCarousel" className="carousel slide">
          {/* Indicators */}
          <ol className="carousel-indicators">
            {slides.map((_, idx) => (
              <li
                key={idx}
                className={idx === activeIndex ? 'active' : ''}
                onClick={() => goToSlide(idx)}
                style={{ cursor: 'pointer' }}
              ></li>
            ))}
          </ol>

          {/* Wrapper for slides */}
          <div className="slider-blk all-light">
            <div className="carousel-inner">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`item ${idx === activeIndex ? 'active' : ''}`}
                  style={{ display: idx === activeIndex ? 'block' : 'none' }}
                >
                  <img src={slide.image} alt="Slider-image" style={{ width: '100%' }} />
                  <div className="opacity"></div>
                  <div className="carousel-caption">
                    <h3 className="slide-left">{slide.captionHeading}</h3>
                    <br />
                    <h4 className={slide.subClass}>{slide.captionSubheading}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
