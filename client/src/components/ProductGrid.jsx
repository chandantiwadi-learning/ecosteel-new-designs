import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Pipe Fitting',
    image: '/img/product3.jpg',
    link: '/butt-weld-pipe-fittings',
    category: 'Branding',
  },
  {
    title: 'Flanges',
    image: '/img/product5.jpg',
    link: '/flanges',
    category: 'design',
  },
  {
    title: 'Fasteners',
    image: '/img/product6.jpg',
    link: '/fasteners',
    category: 'Photography Branding',
  },
  {
    title: 'Pipes and Tubes',
    image: '/img/product1.jpg',
    link: '/pipes-and-tubes',
    category: 'Photography design',
  },
  {
    title: 'Sheets and Plates',
    image: '/img/product2.jpg',
    link: '/plates-and-sheets',
    category: 'Photography Branding',
  },
  {
    title: 'Round Bars',
    image: '/img/product4.jpg',
    link: '/rods',
    category: 'Photography design',
  },
];

const ProductGrid = () => {
  return (
    <section className="section-pad bg-gray">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <hr className="divider" />
        </div>
        <div className="iso">
          <div className="grid">
            <div className="all-light" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {products.map((prod, idx) => (
                <article key={idx} className={`${prod.category} col-md-4 col-sm-6`} style={{ marginBottom: '30px' }}>
                  <figure>
                    <img src={prod.image} width="600" height="550" alt={prod.title} className="img-responsive" />
                    <figcaption>
                      <h4 className="project-title">{prod.title}</h4>
                      <div className="img-links">
                        <a href={prod.image} target="_blank" rel="noreferrer" className="icon fa fa-search fancybox"></a>
                        <Link to={prod.link} className="icon fa fa-link"></Link>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
