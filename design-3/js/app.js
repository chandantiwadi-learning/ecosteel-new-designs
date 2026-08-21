/**
 * ECOSTEEL — DESIGN 3: PRECISION ENGINEERING
 * Blueprint HUD, Hotspot Telemetry & Specification Matrix
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 01. SCHEMATIC HOTSPOT TELEMETRY ---
  const hotspotsData = {
    1: {
      comp: 'Buttweld 90° Long Radius Elbow',
      standard: 'ASME B16.9 / ASTM A403',
      material: 'SS 316L / Dual Certified',
      tolerance: '±0.05mm Outer Diameter',
      schedule: 'SCH 40 / STD (Class 3000 PSI)',
      mtc: 'EN 10204 3.1 Traceable',
      image: './assets/seamless-buttweld-pipe-fitting.jpg'
    },
    2: {
      comp: 'High-Pressure Forged Socketweld Tee',
      standard: 'ASME B16.11 / BS 3799',
      material: 'ASTM A105 / Carbon Steel',
      tolerance: 'Tolerance Class 6000 LBS',
      schedule: 'Class 6000 PSI Working Pressure',
      mtc: '100% Hydrostatic Tested',
      image: './assets/forged-elbows.jpg'
    },
    3: {
      comp: 'Weld Neck Flange (Raised Face)',
      standard: 'ASME B16.5 / MSS SP-44',
      material: 'Duplex 2205 (UNS S31803)',
      tolerance: 'Facing Finish: 125-250 AARH',
      schedule: 'Class 1500# Raised Face',
      mtc: 'Ultrasonic & PMI Verified',
      image: './assets/product5.jpg'
    },
    4: {
      comp: 'ASTM A193 B7 Heavy Stud Bolt & 2H Nut',
      standard: 'ASME B18.2.1 / ASTM A194',
      material: 'Chromium-Molybdenum Alloy',
      tolerance: 'Tensile Strength: 125 ksi min',
      schedule: 'High-Temperature Bolting',
      mtc: 'Charpy V-Notch Impact Tested',
      image: './assets/product6.jpg'
    }
  };

  const hudCompName = document.getElementById('hudCompName');
  const hudStandard = document.getElementById('hudStandard');
  const hudMaterial = document.getElementById('hudMaterial');
  const hudTolerance = document.getElementById('hudTolerance');
  const hudSchedule = document.getElementById('hudSchedule');
  const hudMTC = document.getElementById('hudMTC');
  const hudViewportImg = document.getElementById('hudViewportImg');

  function updateHUD(pinId) {
    const data = hotspotsData[pinId];
    if (!data) return;

    if (hudCompName) hudCompName.textContent = data.comp;
    if (hudStandard) hudStandard.textContent = data.standard;
    if (hudMaterial) hudMaterial.textContent = data.material;
    if (hudTolerance) hudTolerance.textContent = data.tolerance;
    if (hudSchedule) hudSchedule.textContent = data.schedule;
    if (hudMTC) hudMTC.textContent = data.mtc;
    if (hudViewportImg) hudViewportImg.src = data.image;

    document.querySelectorAll('.hotspot-pin').forEach(pin => {
      pin.classList.toggle('active', pin.getAttribute('data-pin') === String(pinId));
    });
  }

  document.querySelectorAll('.hotspot-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const pinId = pin.getAttribute('data-pin');
      updateHUD(pinId);
    });
  });

  // --- 02. TECHNICAL PRODUCTS CATALOG & FILTER ---
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      name: 'Buttweld Pipe Fittings',
      category: 'fittings',
      spec: 'ASME B16.9',
      image: './assets/seamless-buttweld-pipe-fitting.jpg',
      desc: 'Seamless & welded elbows, tees, reducers and caps for high-pressure industrial lines.',
      size: '1/4" NB to 48" NB',
      rating: 'SCH 10 to SCH XXS',
      grades: '304L, 316L, 321H, Duplex 2205, Inconel 625'
    },
    {
      id: 'forged-fittings',
      name: 'High Pressure Forged Fittings',
      category: 'fittings',
      spec: 'ASME B16.11',
      image: './assets/forged-elbows.jpg',
      desc: 'Socketweld and threaded fittings forged for extreme pressure fluid handling.',
      size: '1/2" NB to 4" NB',
      rating: 'Class 2000# to 9000#',
      grades: 'A105, A350 LF2, F316L, F11, Monel 400'
    },
    {
      id: 'flanges',
      name: 'Industrial Pipe Flanges',
      category: 'flanges',
      spec: 'ASME B16.5',
      image: './assets/product5.jpg',
      desc: 'Weld Neck, Slip-On, Blind, RTJ, and Orifice flanges with precision gasket faces.',
      size: '1/2" to 48" NB',
      rating: 'Class 150# to 2500#',
      grades: 'ASTM A182 F304/F316, A105, Super Duplex 2507'
    },
    {
      id: 'fasteners',
      name: 'High-Tensile Fasteners',
      category: 'fasteners',
      spec: 'ASTM A193 / A194',
      image: './assets/product6.jpg',
      desc: 'Heavy hex bolts, stud bolts, nuts, and washers designed for thermal and pressure stress.',
      size: 'M2 to M80 / 1/8" to 3"',
      rating: 'Grade B7, B8, B8M, 2H',
      grades: 'Alloy Steel B7, Stainless Steel B8M, Inconel 718'
    },
    {
      id: 'pipes-and-tubes',
      name: 'Pipes & Tubes',
      category: 'pipes',
      spec: 'ASTM A312 / A335',
      image: './assets/product1.jpg',
      desc: 'Seamless and welded tubulars calibrated for tight dimensional wall tolerance.',
      size: '1/2" NB to 48" NB',
      rating: 'WT 1.0mm to 40.0mm',
      grades: 'TP304L, TP316L, P11, P22, P91, API 5L X65'
    },
    {
      id: 'plates-and-sheets',
      name: 'Plates & Sheets',
      category: 'plates',
      spec: 'ASTM A240 / A516',
      image: './assets/product2.jpg',
      desc: 'Pressure vessel quality hot rolled and cold rolled plates with superior flatness.',
      size: '1mm to 200mm Thickness',
      rating: 'Widths up to 3000mm',
      grades: '304, 316L, 310S, A516 Gr 70, Duplex 2205'
    },
    {
      id: 'rods',
      name: 'Rods & Round Bars',
      category: 'bars',
      spec: 'ASTM A276 / A479',
      image: './assets/product4.jpg',
      desc: 'Precision machined and centerless ground bars for shafts, valves, and tooling.',
      size: '3.17mm to 350mm Dia',
      rating: 'Tolerance: h9, h11',
      grades: 'SS 316L, 410, 420, Monel K500, Inconel 625'
    }
  ];

  const productsContainer = document.getElementById('techProductsContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderTechProducts(filter = 'all') {
    if (!productsContainer) return;
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    productsContainer.innerHTML = filtered.map(p => `
      <div class="tech-product-card" data-category="${p.category}">
        <div class="tech-card-header">
          <span>SPEC: ${p.spec}</span>
          <span>TAG: ECO-${p.id.toUpperCase().slice(0, 4)}</span>
        </div>
        <div class="tech-card-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="tech-card-body">
          <h3 class="tech-card-title">${p.name}</h3>
          <p class="tech-card-desc">${p.desc}</p>
          <table class="spec-table-mini">
            <tr><td>SIZE RANGE</td><td>${p.size}</td></tr>
            <tr><td>RATING/SCH</td><td>${p.rating}</td></tr>
            <tr><td>GRADES</td><td>${p.grades}</td></tr>
          </table>
          <button type="button" class="btn-tech-outline tech-inquire-btn" data-name="${p.name}" style="width: 100%; justify-content: center;">
            Configure RFQ →
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.tech-inquire-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodName = btn.getAttribute('data-name');
        const prodSelect = document.getElementById('rfqCategory');
        if (prodSelect) prodSelect.value = prodName;
        document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderTechProducts(filter);
    });
  });

  renderTechProducts('all');

  // --- 03. MOBILE MENU TOGGLE ---
  const navToggle = document.getElementById('techNavToggle');
  const navMenu = document.getElementById('techNav');

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  document.querySelectorAll('.tech-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });

  // --- 04. TECHNICAL RFQ FORM ---
  const techForm = document.getElementById('techRfqForm');
  const techFeedback = document.getElementById('techFeedback');

  techForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName')?.value.trim();
    const email = document.getElementById('rfqEmail')?.value.trim();
    const product = document.getElementById('rfqCategory')?.value;
    const grade = document.getElementById('rfqGrade')?.value.trim();
    const specs = document.getElementById('rfqSpecs')?.value.trim();

    if (!name || !email || !product || !specs) {
      if (techFeedback) {
        techFeedback.style.display = 'block';
        techFeedback.style.color = '#ef4444';
        techFeedback.textContent = 'ERROR: All required parameters (*) must be provided.';
      }
      return;
    }

    const submitBtn = techForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING METALLURGICAL SCHEDULE...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'TRANSMIT TECHNICAL SPECIFICATION →';
      }
      if (techFeedback) {
        techFeedback.style.display = 'block';
        techFeedback.style.color = '#0284c7';
        techFeedback.innerHTML = `<strong>SPECIFICATION RECEIVED:</strong> RFQ for <em>${product} (${grade || 'Standard'})</em> registered for ${name}. Our engineering desk (sales@ecosteels.com) will issue official technical quotes with MTC availability within 4-6 hours.`;
      }
      techForm.reset();
    }, 1200);
  });
});
