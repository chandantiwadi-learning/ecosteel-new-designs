/**
 * ECOSTEEL — DESIGN 1: STEEL EXECUTIVE
 * Core Client JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 01. PRODUCT DATA ---
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      name: 'Buttweld Pipe Fittings',
      category: 'fittings',
      badge: 'High Pressure',
      image: '../client/public/img/seamless-buttweld-pipe-fitting.jpg',
      desc: 'High-precision seamless & welded buttweld fittings for industrial high-pressure piping systems.',
      longDesc: 'Eco Steel Engineering is a premier manufacturer, supplier, and exporter of high-grade Buttweld Pipe Fittings. Manufactured from top-tier raw materials, our fittings offer zero-defect precision, extreme corrosion resistance, and high structural strength for heavy-duty industrial applications.',
      sizeRange: '1/4" NB to 48" NB',
      schedules: 'SCH 10 to SCH XXS',
      types: 'Seamless, ERW, Welded, Fabricated (Elbows 45°/90°/180°, Tees, Reducers, Caps, Stubends)',
      materials: 'Stainless Steel (304/316/321/904L), Duplex 2205, Super Duplex 2507, Carbon Steel, Inconel 625, Monel 400, Hastelloy C276',
      standards: 'ASME B16.9, ASME B16.28, MSS SP-43, MSS SP-75, ASTM A403'
    },
    {
      id: 'forged-fittings',
      name: 'Forged Fittings',
      category: 'fittings',
      badge: 'Extreme Pressure',
      image: '../client/public/img/forged-elbows.jpg',
      desc: 'Heavy-duty socketweld and screwed-threaded forged fittings for extreme pressure environments.',
      longDesc: 'Eco Steel Engineering manufactures premium quality High Pressure Forged Socketweld & Threaded Fittings. Tested to strict international standards, these fittings deliver maximum tensile strength, leak-proof performance, and superior chemical resistance.',
      sizeRange: '1/2" NB to 4" NB',
      schedules: 'Class 2000, 3000, 6000, 9000 LBS',
      types: 'Socketweld & Screwed-Threaded (Elbows, Tees, Crosses, Couplings, Plugs, Unions, Swage Nipples)',
      materials: 'Stainless Steel, Duplex, Super Duplex, Carbon Steel A105, Alloy Steel F11/F22/F91, Inconel, Monel, Hastelloy',
      standards: 'ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-95, BS 3799'
    },
    {
      id: 'flanges',
      name: 'Pipe Flanges',
      category: 'flanges',
      badge: 'ASME / DIN',
      image: '../client/public/img/product5.jpg',
      desc: 'Precision-engineered industrial pipe flanges, orifice flanges & plate flanges in high-performance alloys.',
      longDesc: 'Eco Steel Engineering is a leading global manufacturer and exporter of Industrial Pipe Flanges. Engineered for leak-proof pipe joints under high temperature and extreme pressure, our flanges conform strictly to ANSI, ASME, DIN, BS, and EN standards.',
      sizeRange: '1/2" to 48" (15 NB to 1200 NB)',
      schedules: 'Class 150#, 300#, 600#, 900#, 1500#, 2500#, PN6 to PN40',
      types: 'Weld Neck, Slip-On, Blind, Socket Weld, Threaded, Lap Joint, Orifice, Plate, RTJ Flanges',
      materials: 'Stainless Steel 304/316/321, Carbon Steel A105/A350 LF2, Alloy Steel, Inconel 625/825, Monel, Cupro Nickel',
      standards: 'ASME B16.5, ASME B16.47 Series A & B, DIN 2527, EN 1092-1'
    },
    {
      id: 'fasteners',
      name: 'Industrial Fasteners',
      category: 'fasteners',
      badge: 'High Tensile',
      image: '../client/public/img/product6.jpg',
      desc: 'High-tensile corrosion-resistant industrial nuts, bolts, screws, washers & stud bolts.',
      longDesc: 'Eco Steel Engineering manufactures and stocks high-strength industrial Fasteners engineered for heavy structural assembly and harsh corrosive environments. Available in metric and imperial threading with custom dimensional tolerances.',
      sizeRange: 'M2 to M80 / 1/8" to 3"',
      schedules: 'Metric & Imperial UNC / UNF / BSW',
      types: 'Hex Bolts, Stud Bolts, Heavy Hex Nuts, Plain/Spring Washers, Socket Head Screws, Anchor Bolts',
      materials: 'ASTM A193 B7/B8/B8M, A194 2H/8/8M, Inconel, Monel, Hastelloy, Duplex 2205',
      standards: 'DIN 931, DIN 933, DIN 934, ASME B18.2.1, ASME B18.2.2'
    },
    {
      id: 'pipes-and-tubes',
      name: 'Pipes & Tubes',
      category: 'pipes',
      badge: 'Seamless & Welded',
      image: '../client/public/img/product1.jpg',
      desc: 'Seamless, ERW, EFW & welded pipes and tubes in round, square, and rectangular profiles.',
      longDesc: 'Eco Steel Engineering is a major stockholder, supplier, and exporter of high-grade Seamless and Welded Pipes & Tubes. Supplied to global industries, our piping products exhibit tight dimensional tolerances, high burst pressure resistance, and flawless surface finish.',
      sizeRange: '1/2" NB to 48" NB & OD (WT: 1mm to 40mm)',
      schedules: 'SCH 10 to SCH XXX',
      types: 'Seamless, ERW, EFW, LSAW, Round, Square, Rectangular, Heat Exchanger U-Tubes',
      materials: 'ASTM A312 TP304/316L/321H, A335 P11/P22/P91, API 5L Gr B/X52/X65, Inconel, Cu-Ni',
      standards: 'ASTM A312, ASTM A213, ASTM A269, ASTM A335, ASTM A53, API 5L'
    },
    {
      id: 'plates-and-sheets',
      name: 'Plates & Sheets',
      category: 'plates',
      badge: 'Cut-to-Size',
      image: '../client/public/img/product2.jpg',
      desc: 'Hot rolled & cold rolled steel sheets, heavy plates, coils and shim sheets.',
      longDesc: 'Eco Steel Engineering stocks and exports a vast range of high-durability Steel Plates, Sheets, and Coils. Available in customizable thicknesses and cut-to-size dimensions, our plates offer supreme flatness, high ductility, and excellent weldability.',
      sizeRange: '1mm to 200mm Thickness (Width up to 3000mm)',
      schedules: 'Custom Profiling & Cutting Available',
      types: 'Hot Rolled (HR), Cold Rolled (CR), Heavy Boiler Plates, Strips, Coils, Shim Sheets, Chequered Plates',
      materials: 'ASTM A240 304/316L/310S/904L, ASTM A516 Gr 70/60, ASTM A387, Inconel, Monel, Duplex 2205',
      standards: 'ASTM A240, ASTM A516, ASTM A387, EN 10088, DIN 17440'
    },
    {
      id: 'rods',
      name: 'Rods & Round Bars',
      category: 'bars',
      badge: 'Precision Machined',
      image: '../client/public/img/product4.jpg',
      desc: 'Solid round, square, hex, and flat bars precision-machined for industrial engineering.',
      longDesc: 'Eco Steel Engineering is a key exporter of high-grade Metal Rods and Round Bars. Supplied with black, bright, polished, or centerless ground finishes, our bars offer exceptional straightness, uniform grain structure, and high machinability.',
      sizeRange: '3.17mm to 350mm Diameter (Length: 1m to 6m)',
      schedules: 'Tolerance: h9, h11, k12',
      types: 'Round Bars, Square Bars, Hex Bars (A/F), Flat Bars, Billets, Forging Bars',
      materials: 'Stainless Steel 304/316/321/410/420/440C, Alloy Steel, Duplex 2205, Inconel, Monel',
      standards: 'ASTM A276, ASTM A479, ASTM A582, EN 10272'
    }
  ];

  // --- 02. MATERIALS DATA ---
  const materials = [
    {
      id: 'stainless-steel',
      name: 'Stainless Steel',
      badge: 'High Corrosion Resistance',
      desc: 'Austenitic, Ferritic, and Martensitic grades combining exceptional corrosion resistance, temperature stability, and clean aesthetic.',
      grades: ['304 / 304L', '316 / 316L', '317L', '321 / 321H', '347 / 347H', '904L', '310S', '410', '420', '440C']
    },
    {
      id: 'duplex-steel',
      name: 'Duplex & Super Duplex',
      badge: 'Dual Phase Strength',
      desc: 'Dual-phase microstructure delivering double the yield strength of standard austenitic stainless steel and superior PREN pitting resistance for seawater and offshore applications.',
      grades: ['UNS S31803 (2205)', 'UNS S32205', 'UNS S32750 (2507)', 'UNS S32760 (Zeron 100)', 'UNS S32950']
    },
    {
      id: 'carbon-steel',
      name: 'Carbon Steel',
      badge: 'Heavy Structural Integrity',
      desc: 'Versatile, high-strength structural material designed for high-pressure boilers, structural piping, oil transmission, and high-temperature service.',
      grades: ['ASTM A105', 'A234 WPB / WPC', 'A350 LF2 / LF3', 'A53 Gr B', 'A106 Gr B', 'API 5L X42-X70', 'A516 Gr 70/60']
    },
    {
      id: 'alloy-steel',
      name: 'Alloy Steel',
      badge: 'Thermal & Pressure Stability',
      desc: 'Chromium-Molybdenum steel alloys engineered specifically for elevated temperature and high-pressure steam boiler installations.',
      grades: ['ASTM A335 P5, P9, P11, P12, P22, P91', 'ASTM A234 WP11, WP22, WP91', 'ASTM A182 F11, F22, F91', 'ASTM A387 Gr 11, 22']
    },
    {
      id: 'inconel',
      name: 'Inconel & Incoloy',
      badge: 'Extreme Temperature & Oxidation',
      desc: 'Austenitic nickel-chromium superalloys engineered for extreme environments subjected to intense heat, oxidation, and severe chemical attack up to 1000°C.',
      grades: ['Inconel 600', 'Inconel 601', 'Inconel 625 (N06625)', 'Inconel 718', 'Incoloy 800 / 825 (N08825)']
    },
    {
      id: 'monel',
      name: 'Monel Alloys',
      badge: 'Seawater & Acid Resistance',
      desc: 'Nickel-copper solid-solution alloy resistant to seawater velocity, hydrofluoric acid, sulfuric acid, and alkalis for marine and offshore systems.',
      grades: ['Monel 400 (UNS N04400)', 'Monel K500 (UNS N05500)']
    },
    {
      id: 'hastelloy',
      name: 'Hastelloy Alloys',
      badge: 'Severe Acid Defense',
      desc: 'Nickel-chromium-molybdenum superalloys famous for unmatched resistance to aggressive acids, wet chlorine gas, and strong oxidizing agents.',
      grades: ['Hastelloy C276 (UNS N10276)', 'Hastelloy C22 (UNS N06022)', 'Hastelloy C4', 'Hastelloy B2 / B3', 'Hastelloy C2000']
    },
    {
      id: 'cupro-nickel',
      name: 'Cupro Nickel (Cu-Ni)',
      badge: 'Marine Bio-Fouling Defense',
      desc: 'Copper-nickel alloys designed for marine bio-fouling resistance, seawater cooling systems, and offshore condenser tubes.',
      grades: ['Cu-Ni 90/10 (UNS C70600)', 'Cu-Ni 70/30 (UNS C71500)']
    }
  ];

  // --- 03. NAVBAR SCROLL & MOBILE MENU ---
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    if (navMenu?.classList.contains('open')) {
      icon?.classList.remove('fa-bars');
      icon?.classList.add('fa-times');
    } else {
      icon?.classList.remove('fa-times');
      icon?.classList.add('fa-bars');
    }
  });

  // Close mobile menu on anchor click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      const icon = navToggle?.querySelector('i');
      icon?.classList.remove('fa-times');
      icon?.classList.add('fa-bars');
    });
  });

  // --- 04. PRODUCT CATALOG RENDERING & FILTERING ---
  const productsContainer = document.getElementById('productsContainer');
  const tabButtons = document.querySelectorAll('.product-tabs .tab-btn');

  function renderProducts(filter = 'all') {
    if (!productsContainer) return;
    
    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => p.category === filter);

    productsContainer.innerHTML = filtered.map(p => `
      <div class="product-card" data-category="${p.category}">
        <div class="product-card-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span class="product-category-tag">${p.badge}</span>
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title">${p.name}</h3>
          <p class="product-card-desc">${p.desc}</p>
          <div class="product-spec-chips">
            <span class="spec-chip"><i class="fas fa-ruler-combined"></i> ${p.sizeRange}</span>
            <span class="spec-chip"><i class="fas fa-layer-group"></i> ${p.schedules}</span>
          </div>
          <div class="product-card-footer">
            <button type="button" class="btn-link view-product-btn" data-id="${p.id}">
              Technical Specs <i class="fas fa-arrow-right"></i>
            </button>
            <button type="button" class="btn btn-primary rfq-quick-btn" data-product="${p.name}" style="padding: 0.5rem 1rem; font-size: 0.8125rem;">
              RFQ
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach modal trigger listeners
    document.querySelectorAll('.view-product-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = btn.getAttribute('data-id');
        openProductModal(prodId);
      });
    });

    // Attach quick RFQ listeners
    document.querySelectorAll('.rfq-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodName = btn.getAttribute('data-product');
        const rfqSelect = document.getElementById('rfqProduct');
        if (rfqSelect) {
          rfqSelect.value = prodName;
        }
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProducts(filter);
    });
  });

  renderProducts('all');

  // --- 05. PRODUCT MODAL HANDLER ---
  const modalOverlay = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openProductModal(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod || !modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 2rem; align-items: start; margin-bottom: 2rem;">
        <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle);">
          <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover;" />
        </div>
        <div>
          <span class="mat-badge">${prod.badge}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.75rem; color: var(--text-navy); margin-bottom: 0.75rem;">${prod.name}</h2>
          <p style="font-size: 0.9375rem; color: var(--text-slate); line-height: 1.6;">${prod.longDesc}</p>
        </div>
      </div>

      <div style="background-color: var(--bg-offwhite); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem; margin-bottom: 2rem;">
        <h4 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-navy); margin-bottom: 1rem; font-weight: 700;">
          <i class="fas fa-cogs" style="color: var(--accent-steel); margin-right: 0.5rem;"></i> Technical Specifications & Compliance
        </h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.875rem;">
          <div><strong>Size Range:</strong> <span style="color: var(--text-slate);">${prod.sizeRange}</span></div>
          <div><strong>Pressure / Class:</strong> <span style="color: var(--text-slate);">${prod.schedules}</span></div>
          <div><strong>Applicable Standards:</strong> <span style="color: var(--text-slate);">${prod.standards}</span></div>
          <div><strong>Available Forms:</strong> <span style="color: var(--text-slate);">${prod.types}</span></div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-navy); margin-bottom: 0.75rem; font-weight: 700;">
          Material Grades Sourced
        </h4>
        <p style="font-size: 0.875rem; color: var(--text-slate); line-height: 1.6; background-color: #ffffff; border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-xs);">
          ${prod.materials}
        </p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn btn-secondary close-modal-btn">Close</button>
        <button type="button" class="btn btn-primary modal-rfq-btn" data-product="${prod.name}">
          Request Formal RFQ for ${prod.name}
        </button>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook inner close & RFQ buttons
    modalContent.querySelector('.close-modal-btn')?.addEventListener('click', closeModal);
    modalContent.querySelector('.modal-rfq-btn')?.addEventListener('click', () => {
      closeModal();
      const rfqSelect = document.getElementById('rfqProduct');
      if (rfqSelect) rfqSelect.value = prod.name;
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 06. MATERIALS MATRIX TAB SWITCHER ---
  const matNavContainer = document.getElementById('matNavContainer');
  const matDetailsContainer = document.getElementById('matDetailsContainer');

  function renderMaterials() {
    if (!matNavContainer || !matDetailsContainer) return;

    matNavContainer.innerHTML = materials.map((m, idx) => `
      <button type="button" class="mat-nav-btn ${idx === 0 ? 'active' : ''}" data-id="${m.id}">
        <span>${m.name}</span>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; opacity: 0.6;"></i>
      </button>
    `).join('');

    renderMaterialDetails(materials[0]);

    document.querySelectorAll('.mat-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mat-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const matId = btn.getAttribute('data-id');
        const selected = materials.find(m => m.id === matId);
        if (selected) renderMaterialDetails(selected);
      });
    });
  }

  function renderMaterialDetails(mat) {
    if (!matDetailsContainer) return;
    matDetailsContainer.innerHTML = `
      <span class="mat-badge">${mat.badge}</span>
      <h3 class="mat-title">${mat.name}</h3>
      <p class="mat-desc">${mat.desc}</p>
      
      <div class="grades-box">
        <h5>Standard Specifications & Popular Grades</h5>
        <div class="grades-pills">
          ${mat.grades.map(g => `<span class="grade-pill">${g}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <button type="button" class="btn btn-primary mat-inquiry-btn" data-mat="${mat.name}">
          Inquire for ${mat.name}
        </button>
        <span style="font-size: 0.8125rem; color: var(--text-muted);"><i class="fas fa-shield-alt" style="color: var(--accent-steel);"></i> Supplied with EN 10204 3.1 MTC</span>
      </div>
    `;

    matDetailsContainer.querySelector('.mat-inquiry-btn')?.addEventListener('click', () => {
      const notesField = document.getElementById('rfqMessage');
      if (notesField) {
        notesField.value = `Inquiry regarding material grade: ${mat.name}\nRequired specs:\nEstimated quantity:`;
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  renderMaterials();

  // --- 07. TESTIMONIALS SLIDER ---
  const testimonials = [
    {
      quote: "We have worked with Eco Steel for the past 8 years. They not only have met the project expectations but, have often brought improvements to both quality and value. These innovative ideas have helped us bring safety in steel erection to the forefront!",
      name: "Anne Pena",
      role: "Company CEO",
      image: "../client/public/img/testim-1.jpg"
    },
    {
      quote: "During the last four years Middiwest Steel Inc. and Eco Steel have cooperated on multiple projects on various sites. As both a supplier to Eco Steel and a Contractor each project has exhibited the highest level of organization, quality and integrity.",
      name: "Barrows A. David",
      role: "Project Manager",
      image: "../client/public/img/testim3.jpg"
    },
    {
      quote: "Whether it is quoting, pricing or help with design, their courtesy and attention to detail has often times led us to winning bids and building projects that have been works we are all proud of.",
      name: "Julie Wright",
      role: "Company CEO",
      image: "../client/public/img/testim-2.jpg"
    },
    {
      quote: "We would like to take an opportunity to first of all thank you for your 5 years of services to our company. We have always appreciated your team efforts and superior quality of stainless steel Products.",
      name: "Mhd Saif Zuber",
      role: "Managing Director",
      image: "../client/public/img/testim-04.jpg"
    }
  ];

  let currentTestimonial = 0;
  const quoteEl = document.getElementById('testimQuote');
  const authorNameEl = document.getElementById('testimName');
  const authorRoleEl = document.getElementById('testimRole');
  const authorAvatarEl = document.getElementById('testimAvatar');
  const dotsContainer = document.getElementById('testimDots');
  const prevBtn = document.getElementById('testimPrev');
  const nextBtn = document.getElementById('testimNext');

  function renderTestimonial(index) {
    if (!quoteEl || !authorNameEl || !authorRoleEl || !authorAvatarEl) return;
    const t = testimonials[index];
    quoteEl.textContent = `"${t.quote}"`;
    authorNameEl.textContent = t.name;
    authorRoleEl.textContent = t.role;
    authorAvatarEl.src = t.image;
    authorAvatarEl.alt = t.name;

    if (dotsContainer) {
      dotsContainer.innerHTML = testimonials.map((_, i) => `
        <div class="slider-dot ${i === index ? 'active' : ''}" data-idx="${i}"></div>
      `).join('');

      dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          currentTestimonial = parseInt(dot.getAttribute('data-idx') || '0', 10);
          renderTestimonial(currentTestimonial);
        });
      });
    }
  }

  prevBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentTestimonial);
  });

  nextBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  });

  // Autoplay testimonials
  let testimInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }, 6000);

  document.querySelector('.testimonials-card')?.addEventListener('mouseenter', () => {
    clearInterval(testimInterval);
  });

  document.querySelector('.testimonials-card')?.addEventListener('mouseleave', () => {
    testimInterval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial(currentTestimonial);
    }, 6000);
  });

  renderTestimonial(0);

  // --- 08. RFQ CONTACT FORM VALIDATION & SIMULATION ---
  const rfqForm = document.getElementById('rfqForm');
  const formFeedback = document.getElementById('formFeedback');

  rfqForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName')?.value.trim();
    const email = document.getElementById('rfqEmail')?.value.trim();
    const phone = document.getElementById('rfqPhone')?.value.trim();
    const company = document.getElementById('rfqCompany')?.value.trim();
    const product = document.getElementById('rfqProduct')?.value;
    const message = document.getElementById('rfqMessage')?.value.trim();

    if (!name || !email || !product || !message) {
      showFeedback('error', 'Please fill in all mandatory fields (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('error', 'Please provide a valid corporate email address.');
      return;
    }

    const submitBtn = rfqForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit RFQ';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Transmitting Inquiry...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      showFeedback('success', `Thank you, ${name}. Your commercial RFQ for ${product} has been registered. Our engineering sales desk (sales@ecosteels.com) will review your specifications and issue an official quotation within 4-6 business hours.`);
      rfqForm.reset();
    }, 1200);
  });

  function showFeedback(type, message) {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.textContent = message;
    formFeedback.style.display = 'block';

    setTimeout(() => {
      if (type === 'success') {
        formFeedback.style.display = 'none';
      }
    }, 8000);
  }
});
