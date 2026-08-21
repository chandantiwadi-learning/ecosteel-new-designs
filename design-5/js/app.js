/**
 * ECOSTEEL — DESIGN 5: ROYAL INDUSTRIAL
 * Grand Corporate Interactions, Master Collection Modal & Inquiry Processing
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 01. MASTER PRODUCT COLLECTION DATA ---
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      name: 'Buttweld Pipe Fittings',
      category: 'fittings',
      spec: 'ASME B16.9 / MSS SP-43',
      image: '../client/public/img/seamless-buttweld-pipe-fitting.jpg',
      desc: 'Seamless and welded buttweld fittings offering zero-defect precision, high burst strength, and extreme corrosion resistance.',
      sizeRange: '1/4" NB to 48" NB',
      schedules: 'SCH 10 through SCH XXS',
      grades: 'Stainless Steel (304/316/321/904L), Duplex 2205, Super Duplex 2507, Carbon Steel, Inconel 625, Monel 400, Hastelloy C276'
    },
    {
      id: 'forged-fittings',
      name: 'High-Pressure Forged Fittings',
      category: 'fittings',
      spec: 'ASME B16.11 / BS 3799',
      image: '../client/public/img/forged-elbows.jpg',
      desc: 'Heavy-duty socketweld and threaded fittings forged for extreme pressure and high-integrity fluid networks.',
      sizeRange: '1/2" NB to 4" NB',
      schedules: 'Class 2000, 3000, 6000, 9000 LBS',
      grades: 'ASTM A105, A350 LF2, F304, F316L, F11, F22, F91, Inconel, Monel'
    },
    {
      id: 'flanges',
      name: 'Industrial Pipe Flanges',
      category: 'flanges',
      spec: 'ASME B16.5 / ASME B16.47',
      image: '../client/public/img/product5.jpg',
      desc: 'Weld Neck, Slip-On, Blind, RTJ, and Orifice flanges precision-machined to eliminate joint leakage.',
      sizeRange: '1/2" to 48" (15 NB to 1200 NB)',
      schedules: 'Class 150# to 2500#, PN6 to PN40',
      grades: 'Stainless Steel, Carbon Steel A105, Alloy Steel, Inconel 625/825, Duplex 2205'
    },
    {
      id: 'fasteners',
      name: 'High-Tensile Fasteners',
      category: 'fasteners',
      spec: 'ASTM A193 / ASTM A194',
      image: '../client/public/img/product6.jpg',
      desc: 'High-strength industrial nuts, bolts, stud bolts, and washers engineered for structural integrity.',
      sizeRange: 'M2 to M80 / 1/8" to 3"',
      schedules: 'Metric & Imperial Threading',
      grades: 'ASTM A193 B7/B8/B8M, A194 2H/8/8M, Inconel 718, Monel 400'
    },
    {
      id: 'pipes-and-tubes',
      name: 'Seamless & Welded Tubulars',
      category: 'pipes',
      spec: 'ASTM A312 / ASTM A335',
      image: '../client/public/img/product1.jpg',
      desc: 'Precision round, square, and rectangular pipes and tubes with high burst resistance and smooth finish.',
      sizeRange: '1/2" NB to 48" NB & OD',
      schedules: 'SCH 10 to SCH XXX (WT: 1mm - 40mm)',
      grades: 'ASTM A312 TP304/316L/321H, A335 P11/P22/P91, API 5L Gr B/X52/X65'
    },
    {
      id: 'plates-and-sheets',
      name: 'Pressure Vessel Plates',
      category: 'plates',
      spec: 'ASTM A240 / ASTM A516',
      image: '../client/public/img/product2.jpg',
      desc: 'Hot rolled and cold rolled steel sheets, heavy boiler plates, and coils with supreme flatness.',
      sizeRange: '1mm to 200mm Thickness',
      schedules: 'Custom Widths up to 3000mm & Cut Profiles',
      grades: 'ASTM A240 304/316L/310S/904L, ASTM A516 Gr 70/60, ASTM A387'
    },
    {
      id: 'rods',
      name: 'Precision Machined Bars',
      category: 'bars',
      spec: 'ASTM A276 / ASTM A479',
      image: '../client/public/img/product4.jpg',
      desc: 'Solid round, square, hex, and flat bars with centerless ground and polished surface finishes.',
      sizeRange: '3.17mm to 350mm Diameter',
      schedules: 'Length: 1m to 6m (Tolerance: h9, h11)',
      grades: 'Stainless Steel 304/316/321/410/420/440C, Duplex 2205, Monel K500'
    }
  ];

  // --- 02. RENDER MASTER COLLECTION ---
  const royalGrid = document.getElementById('royalProductsGrid');
  if (royalGrid) {
    royalGrid.innerHTML = products.map(p => `
      <div class="royal-prod-card">
        <div class="royal-prod-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="royal-prod-body">
          <span style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; color: var(--accent-gold-subtle); letter-spacing: 0.1em; margin-bottom: 0.5rem; font-weight: 700;">
            ${p.spec}
          </span>
          <h3 class="royal-prod-title">${p.name}</h3>
          <p class="royal-prod-desc">${p.desc}</p>
          <div class="royal-prod-specs">
            <div><strong>SIZE RANGE:</strong> ${p.sizeRange}</div>
            <div><strong>SCHEDULE:</strong> ${p.schedules}</div>
          </div>
          <div style="display: flex; gap: 0.75rem;">
            <button type="button" class="btn-royal-outline open-royal-modal" data-id="${p.id}" style="padding: 0.625rem 1.25rem; font-size: 0.75rem; width: 100%;">
              Specification Record →
            </button>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.open-royal-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openRoyalModal(id);
      });
    });
  }

  // --- 03. ROYAL SPECIFICATION MODAL ---
  const royalModal = document.getElementById('royalModal');
  const royalModalBody = document.getElementById('royalModalBody');
  const royalModalClose = document.getElementById('royalModalClose');

  function openRoyalModal(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod || !royalModal || !royalModalBody) return;

    royalModalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 2.5rem; align-items: start; margin-bottom: 2rem;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-strong);" />
        <div>
          <div class="royal-crest-badge">${prod.spec}</div>
          <h2 style="font-family: var(--font-royal); font-size: 2rem; color: var(--text-dark); margin-bottom: 0.75rem;">${prod.name}</h2>
          <p style="font-size: 1rem; color: var(--text-slate); line-height: 1.7;">${prod.desc}</p>
        </div>
      </div>

      <div style="background-color: var(--bg-royal-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem; margin-bottom: 2rem;">
        <h4 style="font-family: var(--font-royal); font-size: 1rem; color: var(--text-dark); margin-bottom: 0.75rem;">Sovereign Technical Parameters</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.875rem; font-family: var(--font-mono);">
          <div><strong>SIZE RANGE:</strong> ${prod.sizeRange}</div>
          <div><strong>PRESSURE / SCHEDULE:</strong> ${prod.schedules}</div>
          <div><strong>STANDARD CODES:</strong> ${prod.spec}</div>
          <div><strong>CERTIFICATION:</strong> EN 10204 3.1 Traceable</div>
        </div>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <h4 style="font-family: var(--font-royal); font-size: 1rem; color: var(--text-dark); margin-bottom: 0.5rem;">Metallurgical Alloy Matrix</h4>
        <p style="font-size: 0.875rem; color: var(--text-slate); line-height: 1.6; background-color: #ffffff; padding: 1rem; border-left: 3px solid var(--text-dark);">
          ${prod.grades}
        </p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button type="button" class="btn-royal-outline" id="royalInnerClose">Close Record</button>
        <button type="button" class="btn-royal" id="royalInnerRfq" data-prod="${prod.name}">
          Inquire for ${prod.name}
        </button>
      </div>
    `;

    royalModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.getElementById('royalInnerClose')?.addEventListener('click', closeRoyalModal);
    document.getElementById('royalInnerRfq')?.addEventListener('click', () => {
      closeRoyalModal();
      const catSelect = document.getElementById('royalRfqProduct');
      if (catSelect) catSelect.value = prod.name;
      document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function closeRoyalModal() {
    if (!royalModal) return;
    royalModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  royalModalClose?.addEventListener('click', closeRoyalModal);
  royalModal?.addEventListener('click', (e) => {
    if (e.target === royalModal) closeRoyalModal();
  });

  // --- 04. MOBILE MENU ---
  const navToggle = document.getElementById('royalNavToggle');
  const navMenu = document.getElementById('royalNav');

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  document.querySelectorAll('.royal-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });

  // --- 05. ROYAL RFQ FORM ---
  const rfqForm = document.getElementById('royalRfqForm');
  const rfqFeedback = document.getElementById('royalRfqFeedback');

  rfqForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName')?.value.trim();
    const email = document.getElementById('rfqEmail')?.value.trim();
    const product = document.getElementById('royalRfqProduct')?.value;
    const message = document.getElementById('rfqMessage')?.value.trim();

    if (!name || !email || !product || !message) {
      if (rfqFeedback) {
        rfqFeedback.style.display = 'block';
        rfqFeedback.style.color = '#ef4444';
        rfqFeedback.textContent = 'Please complete all required fields (*).';
      }
      return;
    }

    const submitBtn = rfqForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'DISPATCHING INQUIRY...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'DISPATCH COMMERCIAL INQUIRY';
      }
      if (rfqFeedback) {
        rfqFeedback.style.display = 'block';
        rfqFeedback.style.color = '#0c0e14';
        rfqFeedback.innerHTML = `<strong>Inquiry Dispatched.</strong> Thank you, ${name}. Your requirements for <em>${product}</em> have been registered with our senior engineering desk (sales@ecosteels.com). An official quotation with MTC availability will be returned within 4-6 business hours.`;
      }
      rfqForm.reset();
    }, 1200);
  });
});
