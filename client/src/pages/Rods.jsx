import React, { useEffect } from 'react';
import ProductSidebar from '../components/ProductSidebar';

const Rods = () => {
  useEffect(() => {
    document.title = 'Eco-Steel-Rods';
  }, []);

  return (
    <>
      <div className="sub-page-entry2">
        <div className="container all-light">
          <div className="entry-content">
            <h3 className="pt-new">Rods</h3>
          </div>
        </div>
      </div>

      <main className="main-container">
        <br />
        <div className="container">
          <div className="col-sm-9 col-sm-7 col-lg-9">
            <h4 className="margin-h4">Rods</h4>
            <br />
            <p className="pt-margin" align="left">
              We are one of the leading Stockholder, Suppliers & Exporters of Round Bar in different
              shapes and sizes and with different specifications as per the customers’ requirement.
              These Round Bar are characterized by high durability, resistance to corrosion,
              flawless finish and complete reliability in service. Our complete range is
              stringently tested by our well equipped testing unit, to ensure their compliance with
              international quality norms. These are used in various industries like Oil & gas,
              Petrochemical, Pharmaceutical, Fertilizers, Construction, Food, Power and
              Instrumentation.
            </p>

            <div className="row">
              <div className="col-sm-4">
                <div className="t-pipes">
                  <figure className="snip1566">
                    <img src="/img/round-rods.jpg" alt="Round Rods" />
                    <p className="fig"></p>
                    <a href="#"></a>
                  </figure>
                  <h6 className="t-pipe">Round Rods</h6>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="t-pipes">
                  <figure className="snip1566">
                    <img src="/img/square-rods.jpg" alt="Square Rods" />
                    <p className="fig"></p>
                    <a href="#"></a>
                  </figure>
                  <h6 className="t-pipe">Square Rods </h6>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="t-pipes">
                  <figure className="snip1566">
                    <img src="/img/hex-rods.jpg" alt="Hex Rods" />
                    <p className="fig"></p>
                    <a href="#"></a>
                  </figure>
                  <h6 className="t-pipe">Hex Rods</h6>
                </div>
              </div>
            </div>

            <br />
            <div className="ss-margin txt-new">
              <h6>
                <strong>Rods Specification</strong>
              </h6>
              <p>
                <strong>Grade :</strong> ASTM / ASME SA 276 TP 304 , 304L , 309S , 309H, 310S , 316
                , 316L , 316 TI , 317 , 321 , 347 , 410 , 420 , 430 ,431 , 440A ,B & C. , 446
              </p>
              <p>
                <strong>Standard :</strong> ASTM, ASME, AISI A 276 , SA 276, A 479, SA 479
              </p>
              <p>
                <strong>Range :</strong> 3.17 MM TO 350 MM DIA
              </p>
              <p>
                <strong>Form :</strong> Round, Square, Hex (A/F), Rectangle, Wire (Coil Form),
                Wire-mesh, Billet, Ingot, Forging Etc.
              </p>
              <p>
                <strong>Diameter :</strong> 25mm to 152 mm
              </p>
            </div>
            <br />
            <br />
          </div>

          <ProductSidebar />
        </div>
        <br />
      </main>
    </>
  );
};

export default Rods;
