/**
 * ECOSTEEL — DESIGN 2: INDUSTRIAL EDITORIAL
 * Core Application & Editorial Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update live year & date in masthead
  const mastheadDate = document.getElementById('mastheadDate');
  if (mastheadDate) {
    const now = new Date();
    const options = { month: 'long', year: 'numeric' };
    mastheadDate.textContent = `ISSUE ${now.getFullYear()} — ${now.toLocaleDateString('en-US', options).toUpperCase()}`;
  }

  // --- 01. PRODUCT DATA FOR EDITORIAL DRAWER ---
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      num: '01',
      name: 'Buttweld Pipe Fittings',
      subtitle: 'Seamless & Welded Elbows, Tees, Reducers, Stubends',
      image: '../client/public/img/seamless-buttweld-pipe-fitting.jpg',
      desc: 'Engineered for seamless fluid distribution in aggressive hydrocarbon, steam, and chemical pipelines under extreme pressure and elevated temperature.',
      sizeRange: '1/4" NB to 48" NB',
      schedules: 'SCH 10 through SCH XXS',
      grades: 'Stainless Steel (304/304L, 316/316L, 321H, 904L), Duplex 2205, Super Duplex 2507, Carbon Steel A234 WPB, Alloy Steel P11/P22/P91, Inconel 625, Monel 400, Hastelloy C276',
      standards: 'ASME B16.9, ASME B16.28, MSS SP-43, MSS SP-75, ASTM A403'
    },
    {
      id: 'forged-fittings',
      num: '02',
      name: 'Forged High-Pressure Fittings',
      subtitle: 'Socketweld & Threaded 3000# / 6000# / 9000#',
      image: '../client/public/img/forged-elbows.jpg',
      desc: 'Solid-forged high-integrity fittings engineered for severe pressure instrumentation, hydraulic manifolds, and nuclear power loops.',
      sizeRange: '1/2" NB to 4" NB',
      schedules: 'Class 2000, 3000, 6000, 9000 LBS',
      grades: 'ASTM A182 F304/F316/F321, ASTM A105, A350 LF2, Alloy Steel F5/F11/F22/F91, Inconel 600/625, Monel 400, Duplex S31803',
      standards: 'ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-95, BS 3799'
    },
    {
      id: 'flanges',
      num: '03',
      name: 'Industrial Pipe Flanges',
      subtitle: 'Weld Neck, Slip-On, Blind, RTJ, Orifice & Plate Flanges',
      image: '../client/public/img/product5.jpg',
      desc: 'Precision-machined jointing interfaces manufactured to eliminate flanged connection leakage in offshore pipelines and refinery distillation columns.',
      sizeRange: '1/2" to 48" (15 NB to 1200 NB)',
      schedules: 'Class 150# to 2500#, PN6 to PN40',
      grades: 'Stainless Steel 304L/316L/316Ti/310S, A105 Carbon Steel, A182 F11/F22/F91, Inconel 625/825, Monel K500, Cupro Nickel 70/30',
      standards: 'ASME B16.5, ASME B16.47 Series A & B, DIN 2527, EN 1092-1'
    },
    {
      id: 'fasteners',
      num: '04',
      name: 'High-Tensile Fasteners',
      subtitle: 'Hex Bolts, Stud Bolts, Heavy Hex Nuts, Plain & Spring Washers',
      image: '../client/public/img/product6.jpg',
      desc: 'High-strength structural bolting engineered for thermal expansion resistance, offshore saline exposure, and high-vibration applications.',
      sizeRange: 'M2 to M80 / 1/8" to 3" Diameter',
      schedules: 'Metric & Imperial UNC / UNF / BSW Threading',
      grades: 'ASTM A193 B7/B7M/B8/B8M/B16, ASTM A194 2H/7/8/8M, Inconel 718, Monel 400, Duplex 2205',
      standards: 'DIN 931, DIN 933, DIN 934, ASME B18.2.1, ASME B18.2.2'
    },
    {
      id: 'pipes-and-tubes',
      num: '05',
      name: 'Pipes & Tubes',
      subtitle: 'Seamless, ERW, EFW, LSAW & Heat Exchanger Tubing',
      image: '../client/public/img/product1.jpg',
      desc: 'Uniform wall thickness tubulars with calibrated burst pressure and superior surface smoothness for cross-country transmission and heat recovery systems.',
      sizeRange: '1/2" NB to 48" NB & OD',
      schedules: 'SCH 10 through SCH XXX (WT: 1mm to 40mm)',
      grades: 'ASTM A312 TP304/316L/321H/904L, ASTM A335 P11/P22/P91, API 5L X42-X70, Inconel 600/800, Cupro Nickel',
      standards: 'ASTM A312, ASTM A213, ASTM A269, ASTM A335, API 5L'
    },
    {
      id: 'plates-and-sheets',
      num: '06',
      name: 'Plates, Sheets & Coils',
      subtitle: 'Hot Rolled & Cold Rolled Pressure Vessel Quality Plates',
      image: '../client/public/img/product2.jpg',
      desc: 'High-flatness mill plates and coil stock manufactured for boiler construction, storage tank fabrication, and structural engineering.',
      sizeRange: '1mm to 200mm Thickness (Widths up to 3000mm)',
      schedules: 'Custom Profiling & CNC Plasma Cutting Available',
      grades: 'ASTM A240 304/316L/317L/310S/904L, ASTM A516 Gr 60/70, ASTM A387, Inconel, Monel, Duplex 2205',
      standards: 'ASTM A240, ASTM A516, ASTM A387, EN 10088, DIN 17440'
    },
    {
      id: 'rods',
      num: '07',
      name: 'Rods & Round Bars',
      subtitle: 'Bright, Peeled, Polished & Centerless Ground Solid Bars',
      image: '../client/public/img/product4.jpg',
      desc: 'Precision bar stock with uniform microstructural grain, tight straightness tolerances, and exceptional machinability for shafts, valves, and precision fasteners.',
      sizeRange: '3.17mm to 350mm Diameter (Lengths up to 6m)',
      schedules: 'Tolerance: h9, h11, k12 Precision',
      grades: 'Stainless Steel 304/316/321/410/420/440C, Duplex S31803, Inconel 625, Monel K500',
      standards: 'ASTM A276, ASTM A479, ASTM A582, EN 10272'
    }
  ];

  // --- 02. EDITORIAL DRAWER INTERACTION ---
  const drawerOverlay = document.getElementById('editorialDrawer');
  const drawerContent = document.getElementById('drawerBody');
  const drawerClose = document.getElementById('drawerClose');

  function openEditorialDrawer(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod || !drawerContent || !drawerOverlay) return;

    drawerContent.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em;">
        Entry ${prod.num} — Anthology Record
      </div>
      <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--text-ebony); line-height: 1.1; margin-bottom: 0.5rem;">
        ${prod.name}
      </h2>
      <p style="font-family: var(--font-sans); font-size: 0.9375rem; color: var(--text-muted); margin-bottom: 2rem;">
        ${prod.subtitle}
      </p>

      <div style="margin-bottom: 2rem;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover; border: 1px solid var(--divider-subtle);" />
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.5rem;">
          Metallurgical Purpose
        </h4>
        <p style="font-size: 1.0625rem; line-height: 1.6; color: var(--text-charcoal);">
          ${prod.desc}
        </p>
      </div>

      <div style="border-top: 1px solid var(--divider-strong); border-bottom: 1px solid var(--divider-strong); padding: 1.5rem 0; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 1rem; font-family: var(--font-mono); font-size: 0.8125rem;">
        <div><strong>SIZE RANGE:</strong> <span style="color: var(--text-muted);">${prod.sizeRange}</span></div>
        <div><strong>PRESSURE / SCHEDULE:</strong> <span style="color: var(--text-muted);">${prod.schedules}</span></div>
        <div><strong>INTERNATIONAL STANDARDS:</strong> <span style="color: var(--text-muted);">${prod.standards}</span></div>
      </div>

      <div style="margin-bottom: 2.5rem;">
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.75rem;">
          Alloy Sourcing Matrix
        </h4>
        <p style="font-size: 0.875rem; color: var(--text-charcoal); line-height: 1.6; background-color: var(--bg-surface); padding: 1rem; border-left: 2px solid var(--text-ebony);">
          ${prod.grades}
        </p>
      </div>

      <div>
        <button type="button" class="btn-editorial drawer-rfq-btn" data-prod="${prod.name}" style="width: 100%; justify-content: center;">
          Initiate Specification Inquiry for ${prod.name}
        </button>
      </div>
    `;

    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    drawerContent.querySelector('.drawer-rfq-btn')?.addEventListener('click', () => {
      closeEditorialDrawer();
      const itemField = document.getElementById('dialogueItem');
      if (itemField) itemField.value = prod.name;
      document.getElementById('dialogue')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function closeEditorialDrawer() {
    if (!drawerOverlay) return;
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  drawerClose?.addEventListener('click', closeEditorialDrawer);
  drawerOverlay?.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeEditorialDrawer();
  });

  document.querySelectorAll('.open-drawer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-id');
      if (prodId) openEditorialDrawer(prodId);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOverlay?.classList.contains('open')) {
      closeEditorialDrawer();
    }
  });

  // --- 03. MOBILE MENU TOGGLE ---
  const navToggle = document.getElementById('navToggleEditorial');
  const navMenu = document.getElementById('navMenuEditorial');

  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  document.querySelectorAll('.nav-editorial a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });

  // --- 04. COMMERCIAL DIALOGUE (FORM) ---
  const dialogueForm = document.getElementById('dialogueForm');
  const dialogueFeedback = document.getElementById('dialogueFeedback');

  dialogueForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('dialogueName')?.value.trim();
    const email = document.getElementById('dialogueEmail')?.value.trim();
    const item = document.getElementById('dialogueItem')?.value;
    const message = document.getElementById('dialogueMessage')?.value.trim();

    if (!name || !email || !item || !message) {
      if (dialogueFeedback) {
        dialogueFeedback.style.display = 'block';
        dialogueFeedback.style.color = '#c2410c';
        dialogueFeedback.textContent = 'Please complete all required fields.';
      }
      return;
    }

    const submitBtn = dialogueForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'TRANSMITTING SPECIFICATION...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'DISPATCH COMMERCIAL INQUIRY';
      }
      if (dialogueFeedback) {
        dialogueFeedback.style.display = 'block';
        dialogueFeedback.style.color = '#121316';
        dialogueFeedback.innerHTML = `<strong>Inquiry Dispatched.</strong> Thank you, ${name}. Your requirements for <em>${item}</em> have been queued. Our senior metallurgist desk (sales@ecosteels.com) will review your parameters and respond promptly.`;
      }
      dialogueForm.reset();
    }, 1200);
  });
});
