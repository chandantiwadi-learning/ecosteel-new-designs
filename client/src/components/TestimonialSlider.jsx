import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      'We have worked with Eco Steel for the past 8 years. They not only have met the project expectations but, have often brought improvements to both quality and value. These innovative ideas have helped us bring safety in steel erection to the forefront!',
    name: 'Anne Pena',
    role: 'Company CEO',
    image: '/img/testim-1.jpg',
  },
  {
    quote:
      'During the last four years Middiwest Steel Inc. and Eco Steel have cooperated on multiple projects on various sites. As both a supplier to Eco Steel and a Contractor each project has exhibited the highest level of organization, quality and integrity.',
    name: 'Barrows A. David',
    role: 'Project Manager',
    image: '/img/testim3.jpg',
  },
  {
    quote:
      'Whether it is quoting, pricing or help with design, their courtesy and attention to detail has often times led us to winning bids and building projects that have been works we are all proud of.',
    name: 'Julie Wright',
    role: 'Company CEO',
    image: '/img/testim-2.jpg',
  },
  {
    quote:
      'We would like to take an opportunity to first of all thank you for your 5 years of services to our company. We have always appreciated your team efforts and superior quality of stainless steel Products.',
    name: 'Mhd Saif Zuber',
    role: 'Managing Director',
    image: '/img/testim-04.jpg',
  },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section className="section-pad bg-gray">
      <div className="container">
        <div className="section-title">
          <h2>What people say</h2>
          <hr className="divider" />
        </div>
        <div className="slider_1 row">
          {visibleTestimonials.map((item, idx) => (
            <div key={idx} className="col-md-6 testim-block" style={{ marginBottom: '20px' }}>
              <blockquote>
                <span className="side-triangles"></span>
                <q>{item.quote}</q>
              </blockquote>
              <div className="text-right cite-block">
                <cite>
                  {item.name} <span>{item.role}</span>
                </cite>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
