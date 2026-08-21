/**
 * ECOSTEEL — DESIGN 4: MODERN STEELHOUSE
 * Modern Interactive B2B Interactions & Product Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 01. PRODUCT DATA ---
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      name: 'Buttweld Pipe Fittings',
      category: 'fittings',
      badge: 'High Pressure Flow',
      image: './assets/seamless-buttweld-pipe-fitting.jpg',
      desc: 'Seamless & welded buttweld elbows, tees, reducers, and caps engineered for zero-defect piping integrity.',
      sizeRange: '1/4" NB to 48" NB',
      schedules: 'SCH 10 to SCH XXS',
      grades: 'Stainless Steel (304/316/321/904L), Duplex 2205, Inconel 625, Monel 400',
      standards: 'ASME B16.9 / MSS SP-43 / ASTM A403'
    },
    {
      id: 'forged-fittings',
      name: 'Forged High-Pressure Fittings',
      category: 'fittings',
      badge: '3000# - 9000# Class',
      image: './assets/forged-elbows.jpg',
      desc: 'Socketweld & threaded elbows, tees, unions, and swage nipples forged for severe pressure conditions.',
      sizeRange: '1/2" NB to 4" NB',
      schedules: 'Class 2000, 3000, 6000, 9000 LBS',
      grades: 'ASTM A105, A350 LF2, F304, F316L, Alloy F11/F22/F91',
      standards: 'ASME B16.11 / BS 3799'
    },
    {
      id: 'flanges',
      name: 'Industrial Pipe Flanges',
      category: 'flanges',
      badge: 'Precision Machined',
      image: './assets/product5.jpg',
      desc: 'Weld Neck, Slip-On, Blind, RTJ, and Orifice flanges engineered to eliminate joint leakage.',
      sizeRange: '1/2" to 48" (15 NB to 1200 NB)',
      schedules: 'Class 150# to 2500#, PN6 to PN40',
      grades: 'Stainless Steel, Carbon Steel A105, Inconel 625/825, Duplex 2205',
      standards: 'ASME B16.5 / ASME B16.47 / DIN 2527'
    },
    {
      id: 'fasteners',
      name: 'High-Tensile Fasteners',
      category: 'fasteners',
      badge: 'Heavy Structural',
      image: './assets/product6.jpg',
      desc: 'Hex bolts, stud bolts, heavy hex nuts, and washers built for thermal cycling and corrosive offshore rigs.',
      sizeRange: 'M2 to M80 / 1/8" to 3"',
      schedules: 'Metric & Imperial UNC / UNF',
      grades: 'ASTM A193 B7/B8/B8M, A194 2H/8/8M, Inconel 718',
      standards: 'DIN 931 / DIN 934 / ASME B18.2.1'
    },
    {
      id: 'pipes-and-tubes',
      name: 'Pipes & Tubes',
      category: 'pipes',
      badge: 'Seamless & Welded',
      image: './assets/product1.jpg',
      desc: 'High-calibrated tubulars with superior burst pressure resistance and uniform wall thickness.',
      sizeRange: '1/2" NB to 48" NB & OD',
      schedules: 'SCH 10 to SCH XXX (WT: 1mm - 40mm)',
      grades: 'ASTM A312 TP304/316L, A335 P11/P22/P91, API 5L',
      standards: 'ASTM A312 / ASTM A269 / API 5L'
    },
    {
      id: 'plates-and-sheets',
      name: 'Plates & Sheets',
      category: 'plates',
      badge: 'Pressure Vessel Grade',
      image: './assets/product2.jpg',
      desc: 'Hot rolled and cold rolled pressure vessel plates, coils, and shim sheets with supreme flatness.',
      sizeRange: '1mm to 200mm Thickness',
      schedules: 'Custom CNC Cutting & Profiling',
      grades: 'ASTM A240 304/316L/310S, A516 Gr 70/60, Inconel',
      standards: 'ASTM A240 / ASTM A516 / EN 10088'
    },
    {
      id: 'rods',
      name: 'Rods & Round Bars',
      category: 'bars',
      badge: 'Centerless Ground',
      image: './assets/product4.jpg',
      desc: 'Bright, peeled, polished, and ground solid metal bars for shafts, valves, and precision tooling.',
      sizeRange: '3.17mm to 350mm Diameter',
      schedules: 'Tolerance: h9, h11, k12',
      grades: 'Stainless Steel 304/316/321/410/420, Monel K500',
      standards: 'ASTM A276 / ASTM A479 / EN 10272'
    }
  ];

  // --- 02. MATERIALS DATA ---
  const materials = [
    {
      id: 'stainless-steel',
      name: 'Stainless Steel',
      badge: 'High Corrosion Resistance',
      desc: 'Austenitic, Ferritic, and Martensitic grades combining exceptional corrosion resistance, temperature stability, and clean aesthetic.',
      grades: ['304 / 304L', '316 / 316L', '317L', '321 / 321H', '347 / 347H', '904L', '310S']
    },
    {
      id: 'duplex-steel',
      name: 'Duplex & Super Duplex',
      badge: 'Dual Phase High Strength',
      desc: 'Microstructure delivering double the mechanical yield strength of standard austenitic steel with high pitting resistance (PREN > 40).',
      grades: ['UNS S31803 (2205)', 'UNS S32205', 'UNS S32750 (2507)', 'UNS S32760']
    },
    {
      id: 'inconel',
      name: 'Inconel & Incoloy',
      badge: 'Extreme Thermal Endurance',
      desc: 'Austenitic nickel-chromium superalloys engineered for intense heat, oxidation, and severe chemical attack up to 1000°C.',
      grades: ['Inconel 600', 'Inconel 601', 'Inconel 625', 'Inconel 718', 'Incoloy 825']
    },
    {
      id: 'hastelloy-monel',
      name: 'Hastelloy & Monel',
      badge: 'Severe Acid Defense',
      desc: 'Unmatched resistance to wet chlorine gas, hydrochloric acid, and rapid seawater velocity in marine systems.',
      grades: ['Hastelloy C276', 'Hastelloy C22', 'Monel 400', 'Monel K500']
    }
  ];

  // --- 03. PRODUCT GRID & PILL FILTERING ---
  const productsContainer = document.getElementById('modernProductsGrid');
  const filterPills = document.querySelectorAll('.modern-pill-btn');

  function renderModernProducts(filter = 'all') {
    if (!productsContainer) return;
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    productsContainer.innerHTML = filtered.map(p => `
      <div class="modern-prod-card" data-category="${p.category}">
        <div class="modern-prod-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span style="position: absolute; top: 1rem; left: 1rem; background: rgba(10,15,29,0.85); color: #fff; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.6875rem; font-weight: 700; backdrop-filter: blur(4px);">
            ${p.badge}
          </span>
        </div>
        <div class="modern-prod-body">
          <h3 class="modern-prod-title">${p.name}</h3>
          <p class="modern-prod-desc">${p.desc}</p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            <span style="background: var(--bg-muted); padding: 0.25rem 0.5rem; border-radius: var(--radius-xs); font-size: 0.75rem; font-weight: 600;">
              <i class="fas fa-ruler-combined"></i> ${p.sizeRange}
            </span>
            <span style="background: var(--bg-muted); padding: 0.25rem 0.5rem; border-radius: var(--radius-xs); font-size: 0.75rem; font-weight: 600;">
              <i class="fas fa-layer-group"></i> ${p.schedules}
            </span>
          </div>
          <div class="modern-prod-footer">
            <button type="button" class="btn-modern btn-modern-ghost modern-view-btn" data-id="${p.id}" style="padding: 0.5rem 1rem; font-size: 0.8125rem;">
              Full Specs →
            </button>
            <button type="button" class="btn-modern btn-modern-primary modern-rfq-btn" data-prod="${p.name}" style="padding: 0.5rem 1.25rem; font-size: 0.8125rem;">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach event listeners
    document.querySelectorAll('.modern-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openModernModal(id);
      });
    });

    document.querySelectorAll('.modern-rfq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-prod');
        const prodSelect = document.getElementById('modernRfqProduct');
        if (prodSelect) prodSelect.value = name;
        document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderModernProducts(filter);
    });
  });

  renderModernProducts('all');

  // --- 04. MODERN MODAL ---
  const modalOverlay = document.getElementById('modernModal');
  const modalBody = document.getElementById('modernModalBody');
  const modalClose = document.getElementById('modernModalClose');

  function openModernModal(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod || !modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start; margin-bottom: 2rem;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-md);" />
        <div>
          <span class="modern-badge">${prod.badge}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.75rem; color: var(--text-dark); margin-bottom: 0.75rem;">${prod.name}</h2>
          <p style="font-size: 0.9375rem; color: var(--text-slate); line-height: 1.6;">${prod.desc}</p>
        </div>
      </div>

      <div style="background: var(--bg-muted); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">
        <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.75rem;">Technical Compliance</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.875rem;">
          <div><strong>Size Range:</strong> ${prod.sizeRange}</div>
          <div><strong>Schedules / Rating:</strong> ${prod.schedules}</div>
          <div><strong>Standards:</strong> ${prod.standards}</div>
          <div><strong>Traceability:</strong> EN 10204 3.1 Certified</div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">Supported Material Alloys</h4>
        <p style="font-size: 0.875rem; color: var(--text-slate);">${prod.grades}</p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn-modern btn-modern-ghost" id="modalInnerClose">Close</button>
        <button type="button" class="btn-modern btn-modern-primary" id="modalInnerRfq" data-prod="${prod.name}">
          Request RFQ for ${prod.name}
        </button>
      </div>
    `;

    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.getElementById('modalInnerClose')?.addEventListener('click', closeModernModal);
    document.getElementById('modalInnerRfq')?.addEventListener('click', () => {
      closeModernModal();
      const prodSelect = document.getElementById('modernRfqProduct');
      if (prodSelect) prodSelect.value = prod.name;
      document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function closeModernModal() {
    if (!modalOverlay) return;
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModernModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModernModal();
  });

  // --- 05. ALLOY MATRIX TABS ---
  const alloyNav = document.getElementById('modernAlloyNav');
  const alloyDetail = document.getElementById('modernAlloyDetail');

  function renderAlloys() {
    if (!alloyNav || !alloyDetail) return;

    alloyNav.innerHTML = materials.map((m, idx) => `
      <button type="button" class="modern-alloy-nav-btn ${idx === 0 ? 'active' : ''}" data-id="${m.id}">
        <span>${m.name}</span>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; opacity: 0.5;"></i>
      </button>
    `).join('');

    renderAlloyDetail(materials[0]);

    document.querySelectorAll('.modern-alloy-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modern-alloy-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const id = btn.getAttribute('data-id');
        const mat = materials.find(m => m.id === id);
        if (mat) renderAlloyDetail(mat);
      });
    });
  }

  function renderAlloyDetail(mat) {
    if (!alloyDetail) return;
    alloyDetail.innerHTML = `
      <span class="modern-badge">${mat.badge}</span>
      <h3 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--text-dark); margin-bottom: 1rem;">
        ${mat.name}
      </h3>
      <p style="font-size: 1.0625rem; color: var(--text-slate); line-height: 1.6; margin-bottom: 2rem;">
        ${mat.desc}
      </p>

      <div style="margin-bottom: 2rem;">
        <h5 style="font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">
          Popular Engineering Grades
        </h5>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${mat.grades.map(g => `<span style="background: var(--bg-muted); border: 1px solid var(--border-subtle); padding: 0.375rem 0.75rem; border-radius: var(--radius-xs); font-size: 0.8125rem; font-weight: 600; color: var(--text-dark);">${g}</span>`).join('')}
        </div>
      </div>

      <div>
        <a href="#rfq" class="btn-modern btn-modern-primary">
          Inquire for ${mat.name} →
        </a>
      </div>
    `;
  }

  renderAlloys();

  // --- 06. MOBILE MENU ---
  const navToggle = document.getElementById('modernNavToggle');
  const navLinks = document.getElementById('modernNavLinks');

  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  document.querySelectorAll('.modern-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
    });
  });

  // --- 07. RFQ BUILDER FORM ---
  const rfqForm = document.getElementById('modernRfqForm');
  const rfqFeedback = document.getElementById('modernRfqFeedback');

  rfqForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName')?.value.trim();
    const email = document.getElementById('rfqEmail')?.value.trim();
    const product = document.getElementById('modernRfqProduct')?.value;
    const message = document.getElementById('rfqMessage')?.value.trim();

    if (!name || !email || !product || !message) {
      if (rfqFeedback) {
        rfqFeedback.style.display = 'block';
        rfqFeedback.style.color = '#ef4444';
        rfqFeedback.textContent = 'Please fill in all mandatory fields (*).';
      }
      return;
    }

    const submitBtn = rfqForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send RFQ Request →';
      }
      if (rfqFeedback) {
        rfqFeedback.style.display = 'block';
        rfqFeedback.style.color = '#15803d';
        rfqFeedback.innerHTML = `<strong>Inquiry Received.</strong> Thank you, ${name}. Your quote request for <em>${product}</em> has been dispatched to our engineering desk (sales@ecosteels.com). We will get back to you shortly.`;
      }
      rfqForm.reset();
    }, 1200);
  });
});
