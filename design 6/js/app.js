/**
 * ECOSTEEL ENGINEERING — DESIGN 6
 * Core JavaScript Single Page Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. STATIC DATASETS
     ========================================================================== */

  // Products Dataset
  const products = [
    {
      id: 'butt-weld-pipe-fittings',
      name: 'Buttweld Pipe Fittings',
      category: 'Fittings',
      spec: 'ASME B16.9 / MSS SP-43',
      image: './assets/seamless-buttweld-pipe-fitting.jpg',
      shortDesc: 'High-precision seamless & welded buttweld fittings for industrial piping networks.',
      longDesc: 'EcoSteel Engineering is a premier global manufacturer, supplier, and exporter of high-grade buttweld fittings. Engineered from selected premium alloy steel billets, our fittings offer zero-defect tolerances, exceptional structural integrity, and maximum hydraulic flow efficiency under elevated pressure conditions.',
      sizeRange: '1/4" NB to 48" NB',
      schedules: 'SCH 10 through SCH XXS',
      types: ['Seamless', 'Welded (100% X-Ray)', 'ERW', 'Fabricated'],
      forms: [
        '90° Long Radius & Short Radius Elbow',
        '45° Long Radius Elbow',
        '180° Return Bend (LR & SR)',
        'Equal Tee & Reducing Tee',
        'Concentric Reducer & Eccentric Reducer',
        'Equal Cross & Reducing Cross',
        'Stubends (Long & Short Pattern)',
        'Welded Pipe Cap',
        'Custom Pipelining Bends (3D, 5D)'
      ],
      materials: ['Stainless Steel', 'Duplex & Super Duplex Steel', 'Carbon Steel', 'Alloy Steel', 'Inconel', 'Monel', 'Hastelloy', 'Cupro Nickel'],
      grades: {
        'Stainless Steel': 'ASTM / ASME A403 WP 304, 304L, 304H, 316, 316L, 316H, 317, 317L, 321, 321H, 347, 347H, 904L',
        'Duplex Steel': 'ASTM / ASME A815 UNS S31803, S32205, S32750, S32760',
        'Carbon Steel': 'ASTM A234 WPB, WPC, WPHY 42, 46, 52, 60, 65, 70',
        'Alloy Steel': 'ASTM A234 WP1, WP5, WP9, WP11, WP12, WP22, WP91',
        'Nickel / Inconel': 'Inconel 600, 601, 625, 718, Incoloy 800H, 825, Monel 400, Hastelloy C276, C22',
        'Cupro Nickel': 'UNS No. C70600 (Cu-Ni 90/10), C71500 (Cu-Ni 70/30)'
      },
      standards: ['ASME B16.9', 'ASME B16.28', 'MSS SP-43', 'MSS SP-75', 'EN 10253'],
      applications: ['Offshore Piping', 'Petrochemical Processing', 'High-Pressure Steam Loops', 'Aggressive Acid Infrastructure']
    },
    {
      id: 'forged-fittings',
      name: 'Forged High-Pressure Fittings',
      category: 'Fittings',
      spec: 'ASME B16.11 / BS 3799',
      image: './assets/forged-elbows.jpg',
      shortDesc: 'Socketweld and threaded fittings forged for severe pressure systems.',
      longDesc: 'EcoSteel high-pressure forged fittings are engineered to withstand extreme mechanical stress and thermal fatigue. Precision forged and machined from high-grade raw blocks, they ensure absolute pressure containment in hydraulic loops, oil manifolds, and chemical reactors.',
      sizeRange: '1/2" NB to 4" NB',
      schedules: 'Class 2000, 3000, 6000, 9000 LBS',
      types: ['Socketweld', 'Threaded (NPT / BSP / BSPT)'],
      forms: [
        '90° Forged Elbow (Socketweld & Threaded)',
        '45° Forged Elbow',
        'Equal Tee & Reducing Tee',
        'Forged Cross',
        'Full Coupling, Half Coupling & Reducing Coupling',
        'Hex Nipple, Swage Nipple & Barrel Nipple',
        'Threaded Cap & Round Head Plug',
        'High-Pressure Union (MSS SP-83)',
        'Weldolet, Sockolet, Threadolet (MSS SP-97)'
      ],
      materials: ['Stainless Steel', 'Duplex & Super Duplex Steel', 'Carbon Steel', 'Alloy Steel', 'Inconel', 'Monel', 'Hastelloy', 'Cupro Nickel'],
      grades: {
        'Stainless Steel': 'ASTM A182 F304, F304L, F316, F316L, F321, F347, F904L',
        'Duplex Steel': 'ASTM A182 F51, F53, F55, F60',
        'Carbon Steel': 'ASTM A105, A350 LF2, LF3, A694 F42 to F70',
        'Alloy Steel': 'ASTM A182 F5, F9, F11, F12, F22, F91',
        'Nickel / Inconel': 'Inconel 600, 625, 800H, 825, Monel 400, Hastelloy C276',
        'Cupro Nickel': 'UNS C70600 (90/10), C71500 (70/30)'
      },
      standards: ['ASME B16.11', 'MSS SP-79', 'MSS SP-83', 'MSS SP-95', 'MSS SP-97', 'BS 3799'],
      applications: ['High Pressure Hydraulics', 'Boiler Steam Connections', 'Sour-Gas Lines', 'Defense & Ship Assembly']
    },
    {
      id: 'flanges',
      name: 'Industrial Pipe Flanges',
      category: 'Flanges',
      spec: 'ASME B16.5 / B16.47',
      image: './assets/product5.jpg',
      shortDesc: 'Weld Neck, Slip-On, Blind, and RTJ flanges engineered to eliminate joint leakage.',
      longDesc: 'Our line of heavy industrial flanges offers exceptional dimensional tolerance, precise bolt-hole alignment, and high seal integrity. Ideal for joining piping systems, valves, vessels, and pumps under volatile temperatures and pressure variations.',
      sizeRange: '1/2" to 48" (15 NB to 1200 NB)',
      schedules: 'Class 150# to 2500#, PN6 to PN64',
      types: ['Weld Neck (WNF)', 'Slip-On (SOF)', 'Blind (BF)', 'Socket Weld (SWF)', 'Threaded Flange', 'Lap Joint Flange (LJF)', 'Orifice Flange', 'Ring Type Joint (RTJ) Flange'],
      forms: ['Raised Face (RF)', 'Flat Face (FF)', 'Ring Type Joint (RTJ) Grooves', 'Male & Female Face (M&F)'],
      materials: ['Stainless Steel', 'Duplex & Super Duplex Steel', 'Carbon Steel', 'Alloy Steel', 'Inconel', 'Monel', 'Hastelloy', 'Cupro Nickel'],
      grades: {
        'Stainless Steel': 'ASTM A182 F304, F304L, F316, F316L, F317L, F321, F347, F904L',
        'Duplex Steel': 'ASTM A182 F51 (UNS S31803), F53 (UNS S32750), F55 (UNS S32760)',
        'Carbon Steel': 'ASTM A105, A350 LF2, A694 F42/52/60/65/70',
        'Alloy Steel': 'ASTM A182 F5, F9, F11, F22, F91',
        'Nickel / Inconel': 'Inconel 600, 625, 800, 825, Monel 400, Hastelloy C276, Nickel 200/201'
      },
      standards: ['ASME B16.5', 'ASME B16.47 Series A & B', 'API 6A', 'DIN 2527', 'EN 1092-1'],
      applications: ['Refinery Manifolds', 'Water Pipeline Infrastructure', 'Offshore Oil Pipelines', 'Boiler Headers']
    },
    {
      id: 'fasteners',
      name: 'High-Tensile Fasteners',
      category: 'Fasteners',
      spec: 'ASTM A193 / A194',
      image: './assets/product6.jpg',
      shortDesc: 'Corrosion-resistant industrial studs, nuts, bolts, and custom industrial fastenings.',
      longDesc: 'EcoSteel high-strength bolting elements are fabricated to meet stringent heavy infrastructure assembly guidelines. Featuring anti-galling thread profiles, structural creep resistance, and optional specialty coatings for subsea and deep-well environments.',
      sizeRange: 'M3 to M100 / 1/8" to 4" Diameter',
      schedules: 'Standard & Custom Thread Profiles (Metric, UNC, UNF)',
      types: ['Hex Head Bolts', 'Continuous Thread Stud Bolts', 'Heavy Hex Nuts', 'Threaded Rods', 'Spring Washers & Flat Washers', 'Socket Head Cap Screws', 'Anchor/J-Bolts'],
      forms: ['Plain Finish', 'Hot-Dip Galvanized', 'PTFE coated', 'Cadmium Plating'],
      materials: ['Alloy Steel', 'Stainless Steel', 'Inconel', 'Monel', 'Duplex Steel', 'Carbon Steel'],
      grades: {
        'Alloy Steel': 'ASTM A193 Grade B7, B7M, B16, ASTM A320 Grade L7, L7M',
        'Stainless Steel': 'ASTM A193 B8 (SS 304), B8M (SS 316), B8 Class 2, B8M Class 2, ASTM A453 Gr 660',
        'Duplex Steel': 'UNS S31803 (2205), S32750 (2507) / F53 / F55',
        'Nuts': 'ASTM A194 Grade 2H, 2HM, 7, 7M, 8, 8M, G8',
        'Superalloys': 'Inconel 718, 625, Monel 400, Monel K500, Hastelloy C276'
      },
      standards: ['ASME B18.2.1', 'ASME B18.2.2', 'DIN 931 / 933 / 934', 'ISO 4014 / 4017 / 4032'],
      applications: ['Heavy Machinery Foundation', 'Flange Gasket Assembly', 'Subsea Structural Jointing', 'High Temperature Vessel Closure']
    },
    {
      id: 'pipes-and-tubes',
      name: 'Seamless & Welded Tubulars',
      category: 'Pipes',
      spec: 'ASTM A312 / ASTM A335',
      image: './assets/product1.jpg',
      shortDesc: 'High-burst-resistance steel pipes and tubing in round and square profiles.',
      longDesc: 'We supply certified seamless, ERW, and welded pipes for oil, gas, steam, and chemical fluids. Manufactured from raw stock tested for volumetric soundness, our tubular products exhibit immaculate bore finishes, exact wall-thickness uniformity, and zero cracks.',
      sizeRange: '1/8" NB to 64" NB & OD',
      schedules: 'SCH 5S to SCH XXS (Wall thickness up to 50mm)',
      types: ['Seamless (Hot Rolled / Cold Drawn)', 'Welded (ERW, EFW, LSAW, DSAW)'],
      forms: ['Round Pipe & Tube', 'Square & Rectangular Structural Tubing', 'Heat Exchanger U-Tubes', 'Coiled Tubing'],
      materials: ['Stainless Steel', 'Duplex & Super Duplex Steel', 'Carbon Steel', 'Alloy Steel', 'Inconel', 'Monel', 'Hastelloy', 'Cupro Nickel'],
      grades: {
        'Stainless Steel': 'ASTM A312 TP304, 304L, 304H, 316, 316L, 316H, 317L, 321, 321H, 347, 904L',
        'Duplex Steel': 'ASTM A790 UNS S31803, S32205, S32750, S32760',
        'Carbon Steel': 'ASTM A106 Gr B, A53 Gr B, API 5L Gr B, X42, X52, X60, X65, X70 (PSL1 & PSL2), ASTM A333 Grade 6',
        'Alloy Steel': 'ASTM A335 P5, P9, P11, P22, P91, P92',
        'Nickel / Inconel': 'ASTM B163/B167 Inconel 600, 625, 800H, 825, Monel 400, Hastelloy C276'
      },
      standards: ['ANSI / ASME B36.10M', 'ANSI / ASME B36.19M', 'ASTM A312', 'ASTM A335', 'ASTM A213', 'API 5L'],
      applications: ['Steam Boiler Circuits', 'Petroleum Product Transport', 'Desalination Plants', 'Offshore Jacket Piles']
    },
    {
      id: 'plates-and-sheets',
      name: 'Boiler & Pressure Vessel Plates',
      category: 'Plates',
      spec: 'ASTM A240 / A516',
      image: './assets/product2.jpg',
      shortDesc: 'Boiler quality and structural heavy steel plates with supreme flatness.',
      longDesc: 'EcoSteel stocks heavy-gauge pressure vessel plates designed to perform in high-temperature boilers and storage tanks. Every plate is heat-treated and certified with ultrasonic testing to ensure complete resistance to structural tearing under immense steam and gas loading.',
      sizeRange: '0.5mm to 250mm Thickness',
      schedules: 'Custom Widths up to 3500mm & Profiles',
      types: ['Hot Rolled (HR)', 'Cold Rolled (CR)', 'Boiler Quality (BQ)', 'NACE MR0175 compliant'],
      forms: ['Steel Plates', 'Sheets & Strips', 'Coiled Roll Stock', 'Profile-Cut Rings & Blanks'],
      materials: ['Carbon Steel', 'Stainless Steel', 'Alloy Steel', 'Duplex & Super Duplex Steel', 'Inconel', 'Monel', 'Hastelloy'],
      grades: {
        'Carbon Steel': 'ASTM A516 Grade 60, 70, ASTM A285, ASTM A387, ASTM A36, IS 2062',
        'Stainless Steel': 'ASTM A240 304, 304L, 316, 316L, 317L, 321, 347, 310S, 904L',
        'Duplex Steel': 'ASTM A240 UNS S31803, S32205, S32750, S32760',
        'Superalloys': 'Inconel 625, 825, Monel 400, Hastelloy C276'
      },
      standards: ['ASTM A240', 'ASTM A516', 'ASME SA240', 'ASME SA516', 'EN 10028'],
      applications: ['Boiler Drum Fabrication', 'Petrochemical Reactor Shells', 'Cryogenic Storage Tanks', 'Subsea Structural Liners']
    },
    {
      id: 'rods',
      name: 'Precision Solid Bars',
      category: 'Bars',
      spec: 'ASTM A276 / A479',
      image: './assets/product4.jpg',
      shortDesc: 'Centerless-ground round, square, hex, and flat bars with polished finish.',
      longDesc: 'High-yield precision bars produced with strict surface finish tolerances. Ideal for turning, CNC machining, component forging, and manufacturing pump shafts, valves, pistons, and fasteners for marine and process environments.',
      sizeRange: '2.5mm to 450mm Diameter',
      schedules: 'Tolerance Class: h8, h9, h11, h12',
      types: ['Bright Drawn', 'Centerless Ground & Polished', 'Black Hot-Rolled', 'Forged Rough Peeled'],
      forms: ['Round Bar', 'Hexagon Bar', 'Square Bar', 'Flat Bar'],
      materials: ['Stainless Steel', 'Duplex & Super Duplex Steel', 'Alloy Steel', 'Inconel', 'Monel', 'Hastelloy', 'Cupro Nickel'],
      grades: {
        'Stainless Steel': 'ASTM A276 / A479 303, 304, 304L, 316, 316L, 321, 347, 410, 420, 430, 440C, 904L',
        'Duplex Steel': 'ASTM A276 F51, F53, F55, UNS S31803, S32205, S32750',
        'Alloy Steel': 'ASTM A182 F11, F22, F91, AISI 4140, 8620',
        'Superalloys': 'Inconel 625, 718, Monel 400, Monel K500, Hastelloy C276',
        'Cupro Nickel': 'UNS C70600 (90/10), UNS C71500 (70/30)'
      },
      standards: ['ASTM A276', 'ASTM A479', 'ASTM A582', 'DIN 1013', 'EN 10058'],
      applications: ['Propeller Shafting', 'CNC Machined Pump Parts', 'Valves & Stems', 'Downhole Drilling Tools']
    }
  ];

  // Alloys Dataset (Metallurgy Hub)
  const alloys = [
    {
      id: 'stainless-steel',
      name: 'Stainless Steel',
      category: 'Ferrous Alloys',
      badge: 'Corrosion Shielding & Cleanliness',
      desc: 'Austenitic, ferritic, and martensitic grades designed for universal corrosion shielding, high-temperature oxidation resistance, and hygienic cleanability. The addition of chromium (>10.5%) forms a passive self-healing chromium oxide layer.',
      features: [
        'Excellent resistance to general rust and environmental pitting',
        'Robust tensile toughness from cryogenic to high steam environments',
        'Highly hygienic surface structure (preferred in food, pharma, and hospitals)',
        'Great ductility allowing seamless bending, forming, and welding'
      ],
      grades: ['304 / 304L', '316 / 316L', '321 / 321H', '347 / 347H', '904L (Super Austenitic)', '310S (High Temp)'],
      applications: 'Piping systems, chemical tanks, heat exchangers, food processing machinery.'
    },
    {
      id: 'duplex-steel',
      name: 'Duplex & Super Duplex',
      category: 'High Alloy Steel',
      badge: 'Exceptional Mechanical Strength & PREN',
      desc: 'Featuring a balanced 50:50 dual-phase micro-structure of austenite and ferrite. Delivers twice the mechanical yield strength of standard austenitic stainless steels, and superior pitting resistance in severe seawater and chloride fluids.',
      features: [
        'Yield strength over 450 MPa allows lighter piping wall designs',
        'High PREN (Pitting Resistance Equivalent Number > 40) in Super Duplex',
        'Total immunity to chloride-ion stress corrosion cracking (SCC)',
        'High resistance to erosion, cavitation, and friction fatigue'
      ],
      grades: ['Duplex 2205 (UNS S31803 / S32205)', 'Super Duplex 2507 (UNS S32750)', 'Zeron 100 (UNS S32760)', 'F51 / F53 / F55'],
      applications: 'Offshore oil platforms, subsea pipelines, marine desalination, chemical cargo tankers.'
    },
    {
      id: 'carbon-steel',
      name: 'Carbon Steel',
      category: 'Structural Alloys',
      badge: 'Heavy Mechanical Strength & Cost-Efficiency',
      desc: 'High-strength structural carbon-iron alloy. Formulated for heavy structural frameworks, high-pressure boiler manifolds, steam transport, and underground oil pipeline transport due to its high weldability and load-bearing performance.',
      features: [
        'Unmatched mechanical strength and impact toughness',
        'Exceptional field weldability and ease of machining',
        'Boiler quality grades (LF2/LF3) impact tested for freezing service',
        'Extremely cost-effective for large-scale distribution lines'
      ],
      grades: ['ASTM A105 (Forged)', 'A234 WPB (Fittings)', 'A350 LF2 (Low Temp)', 'A106 Gr B (Seamless Pipe)', 'API 5L X52/X65/X70'],
      applications: 'Natural gas pipelines, process steam distribution, structural frames, boiler headers.'
    },
    {
      id: 'alloy-steel',
      name: 'Alloy Steel (Chrome-Moly)',
      category: 'High Temp Steel',
      badge: 'Creep Rupture Strength & Heat Resistance',
      desc: 'Chromium-Molybdenum steel alloys specialized for high-temperature and high-pressure steam distribution. The addition of chrome improves oxidation resistance, and molybdenum increases tensile creep strength up to 650°C.',
      features: [
        'Zero thermal deformation or creep elongation under persistent heat',
        'Excellent resistance to internal steam oxidation and scaling',
        'Increased mechanical strength at elevated temperatures',
        'Crucial for heat recovery steam generators (HRSG)'
      ],
      grades: ['ASTM A335 P11', 'ASTM A335 P22', 'ASTM A335 P91 (Grade 91)', 'ASTM A234 WP11 / WP22', 'ASTM A182 F91'],
      applications: 'Thermal power plants, coal firing stations, petrochemical refinery cracking towers.'
    },
    {
      id: 'inconel',
      name: 'Inconel & Incoloy',
      category: 'Nickel Superalloys',
      badge: 'Extreme Thermal & Oxidation Shield',
      desc: 'Nickel-Chromium superalloys engineered to perform in the absolute harshest environments on Earth. When heated, Inconel forms a thick, stable, protecting passivating oxide layer that protects the underlying metal from severe thermal degradation.',
      features: [
        'Maintains massive tensile strength at extreme heat up to 1000°C',
        'Virtually immune to chloride SCC and pitting',
        'Excellent resistance to carburization, oxidation, and sulfidation',
        'Engineered for jet turbines, flare lines, and nuclear reactors'
      ],
      grades: ['Inconel 600 (UNS N06600)', 'Inconel 625 (UNS N06625)', 'Inconel 718 (Age-Hardened)', 'Incoloy 800 / 825'],
      applications: 'Turbine exhausts, petrochemical furnace tubes, acid gas processing, nuclear control rods.'
    },
    {
      id: 'monel',
      name: 'Monel Alloys',
      category: 'Nickel-Copper Alloys',
      badge: 'Marine Seawater & Hydrofluoric Acid Shield',
      desc: 'A solid-solution Nickel-Copper alloy that is binary-alloyed for marine seawater service. Extremely resistant to rapidly flowing seawater, and corrosion-resistant against hydrofluoric acid, sulfuric acid, and concentrated alkalis.',
      features: [
        'Superb resistance to velocity-induced marine seawater corrosion',
        'Excellent protection in non-oxidizing acids (HF, HCl)',
        'Retains high strength and duct toughness down to cryogenic temperatures',
        'NACE MR0175 compliant for aggressive oilfield service'
      ],
      grades: ['Monel 400 (UNS N04400)', 'Monel K500 (UNS N05500 - Age Hardened)'],
      applications: 'Marine propeller shafts, seawater valves, splash-zone cladding, alkylation piping.'
    },
    {
      id: 'hastelloy',
      name: 'Hastelloy Alloys',
      category: 'Corrosion Superalloys',
      badge: 'Severe Acid Defense & Wet Chlorine Resistance',
      desc: 'Nickel-Chromium-Molybdenum alloys designed for absolute defense against the most aggressive corrosive chemicals. Possesses high resistance to strong oxidizers, active reducing acids, wet chlorine gas, and hypochlorite solutions.',
      features: [
        'Unparalleled pitting and crevice corrosion resistance in hot chlorides',
        'Excellent protection against oxidizing salts (ferric/cupric chloride)',
        'Resistant to severe local corrosion during welding processes',
        'Maximum durability in flue gas desulfurization (FGD) scrubbers'
      ],
      grades: ['Hastelloy C276 (UNS N10276)', 'Hastelloy C22 (UNS N06022)', 'Hastelloy C4', 'Hastelloy B2 / B3'],
      applications: 'Pharmaceutical reactors, fertilizer acid plants, chemical waste treatment, gas scrubbers.'
    },
    {
      id: 'cupro-nickel',
      name: 'Cupro Nickel (Cu-Ni)',
      category: 'Copper-Nickel Alloys',
      badge: 'Marine Bio-Fouling & Barnacle Defense',
      desc: 'Copper-based alloy containing nickel and iron. Famously known for its inherent resistance to marine bio-fouling and barnacle attachment, alongside excellent thermal conductivity and resistance to seawater erosion-corrosion.',
      features: [
        'Naturally prevents marine bio-growth without chemical dosing',
        'Excellent heat transfer rate (vital for heat exchangers)',
        'High resistance to shear stress erosion in flowing seawater',
        'Superb ductile weldability and ease of cold fabrication'
      ],
      grades: ['Cu-Ni 90/10 (UNS C70600)', 'Cu-Ni 70/30 (UNS C71500)', 'DIN 2.0872 / 2.0882'],
      applications: 'Marine condenser tubes, offshore piping systems, ship hull plating, cooling water pipes.'
    }
  ];

  // International Engineering Standards Dataset (Standards Lookup)
  const standards = [
    { code: 'ASME B16.9', title: 'Factory-Made Wrought Buttweld Piping Fittings', category: 'Fittings', scope: 'Governs dimensions, tolerances, pressure ratings, testing methods, and markings for buttweld elbows, tees, reducers, caps, and cross fittings.' },
    { code: 'ASME B16.11', title: 'Forged Fittings, Socket-Welding and Threaded', category: 'Fittings', scope: 'Standard for socket weld and NPT/BSP threaded forged elbows, tees, unions, coupling boxes, and plugs in pressure classes 2k, 3k, 6k, and 9k.' },
    { code: 'ASME B16.5', title: 'Pipe Flanges and Flanged Fittings (NPS 1/2 through NPS 24)', category: 'Flanges', scope: 'Standard for dimensions, bolt patterns, pressure-temperature ratings, and testing for Weld Neck, Slip-On, Blind, SW, and RTJ flanges.' },
    { code: 'ASME B16.47', title: 'Large Diameter Steel Flanges (NPS 26 through NPS 60)', category: 'Flanges', scope: 'Covers pressure-temperature ratings, materials, dimensions, and tolerances for series A and B large-size industrial flanges.' },
    { code: 'ASTM A312', title: 'Seamless, Welded, and Cold Worked Austenitic Stainless Pipes', category: 'Pipes', scope: 'Specification standard for stainless steel pipes TP304, TP316L, TP321, and TP347 intended for high-temperature and general corrosive service.' },
    { code: 'ASTM A335', title: 'Seamless Ferritic Alloy-Steel Pipe for High-Temp Service', category: 'Pipes', scope: 'Standard specification for chromium-molybdenum alloy steel pipes (Grades P11, P22, P91) utilized in power boilers and process furnaces.' },
    { code: 'ASTM A240', title: 'Stainless Steel Plate, Sheet, and Strip for Pressure Vessels', category: 'Plates', scope: 'Chromium and chromium-nickel stainless steel plate, sheet, and strip used for constructing pressure vessels, chemical boilers, and reactors.' },
    { code: 'ASTM A276', title: 'Stainless Steel Solid Bars and Structural Shapes', category: 'Bars', scope: 'Covers hot-finished or cold-finished solid round, square, hexagon, and flat bars in common stainless steel alloys.' },
    { code: 'ASTM A193', title: 'Alloy & Stainless Steel Bolting Materials for High Temp/Pressure', category: 'Fasteners', scope: 'Covers high-strength studs, bolts, and fasteners (Grade B7, B8, B8M) designed for valves, flanges, and piping fittings.' },
    { code: 'ASTM A194', title: 'Carbon and Alloy Steel Nuts for Bolts for High Pressure/Temp', category: 'Fasteners', scope: 'Specifies chemical, mechanical, and hardness requirements for nuts (Grades 2H, 7, 8, 8M) matching high-tensile stud bolts.' },
    { code: 'MSS SP-75', title: 'Specification for High Test Wrought Butt-Welding Fittings', category: 'Fittings', scope: 'Applies to high-test wrought butt-welding fittings, primarily for gas transmission pipelines.' },
    { code: 'MSS SP-97', title: 'Integrally Reinforced Forged Branch Outlet Fittings', category: 'Fittings', scope: 'Governs design, dimensions, and testing for Weldolets, Sockolets, and Threadolets branch outlet connections.' },
    { code: 'DIN 2527', title: 'Blind Flanges Dimensions and Materials Specification', category: 'Flanges', scope: 'German national standard specifying dimensions and pressure grades for blind steel flanges (PN6 to PN100).' },
    { code: 'EN 10204 3.1', title: 'Metal Materials Inspection Documents type 3.1 Certified', category: 'Quality', scope: 'Inspection certificate type 3.1 verifying that material chemical heat and tensile mechanical values match target standard specifications.' },
    { code: 'ISO 9001:2015', title: 'Quality Management Systems Standard Accreditation', category: 'Quality', scope: 'International standard for quality management systems ensuring consistent traceability, material inspection, and process documentation.' }
  ];

  // Material Densities Map (for Calculator)
  const densities = {
    'stainless-steel': 7.93,
    'duplex-steel': 7.80,
    'carbon-steel': 7.85,
    'alloy-steel': 7.85,
    'inconel': 8.44,
    'monel': 8.80,
    'hastelloy': 8.89,
    'cupro-nickel': 8.94
  };

  /* ==========================================================================
     02. STICKY HEADER & SCROLL EFFECTS
     ========================================================================== */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Toggle header height & background on scroll
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Dynamic Navigation Active Link on Scroll
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  navToggle?.addEventListener('click', () => {
    navList?.classList.toggle('open');
    // Change menu icon between bars and times
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // 100% Reliable Smooth Scroll click handler for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Ensure targetId starts with # and refers to an anchor on the page
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const headerHeight = header?.offsetHeight || 80;
          const targetOffset = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }
      }

      // Close mobile navigation drawer if open
      navList?.classList.remove('open');
      const icon = navToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });

  /* ==========================================================================
     02B. LIGHT / DARK THEME TOGGLER
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  
  // Apply saved theme state on load
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    const icon = themeToggle?.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-sun';
    }
  }

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  });

  /* ==========================================================================
     03. IMMERSIVE HERO SLIDER
     ========================================================================== */
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlideIndex = 0;

  function rotateHeroSlides() {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
    heroSlides[currentSlideIndex].classList.add('active');
  }

  // Rotate every 6 seconds
  if (heroSlides.length > 1) {
    setInterval(rotateHeroSlides, 6000);
  }

  /* ==========================================================================
     04. MASTER PRODUCT CATALOG STATE & RENDER
     ========================================================================== */
  const catalogGrid = document.getElementById('catalogGrid');
  const categoryButtons = document.querySelectorAll('#catalogTabs .tab-btn');

  function renderCatalog(categoryFilter = 'All') {
    if (!catalogGrid) return;

    // Filter data
    const filtered = categoryFilter === 'All' 
      ? products 
      : products.filter(p => p.category === categoryFilter);

    // Render HTML
    catalogGrid.innerHTML = filtered.map(p => `
      <div class="prod-card glass-card">
        <div class="prod-media">
          <span class="prod-spec-badge">${p.spec}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <div class="prod-media-overlay"></div>
        </div>
        <div class="prod-body">
          <h3 class="prod-title">${p.name}</h3>
          <p class="prod-desc">${p.shortDesc}</p>
          <div class="prod-meta">
            <div class="prod-meta-row">
              <span class="prod-meta-lbl">Size Range</span>
              <span class="prod-meta-val">${p.sizeRange}</span>
            </div>
            <div class="prod-meta-row">
              <span class="prod-meta-lbl">Standard Specs</span>
              <span class="prod-meta-val">${p.standards.slice(0, 3).join(', ')}</span>
            </div>
          </div>
          <button type="button" class="btn btn-accent-outline open-drawer-btn" data-product-id="${p.id}" style="width: 100%; margin-top: auto;">
            Specification Record <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Bind click events to product drawer buttons
    document.querySelectorAll('.open-drawer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-product-id');
        openProductDrawer(prodId);
      });
    });
  }

  // Handle Tab Click
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderCatalog(cat);
    });
  });

  // Initial catalog draw
  renderCatalog();

  /* ==========================================================================
     05. PRODUCT DETAIL SLIDE-OVER DRAWER (MODAL)
     ========================================================================== */
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerBody = document.getElementById('drawerBody');
  const drawerCloseBtn = document.getElementById('drawerClose');

  function openProductDrawer(prodId) {
    const p = products.find(prod => prod.id === prodId);
    if (!p || !drawerOverlay || !drawerBody) return;

    // Build lists
    const formsListHtml = p.forms.map(f => `<li>${f}</li>`).join('');
    const materialsListHtml = p.materials.map(m => `<li>${m}</li>`).join('');
    
    // Build grades matrix string
    let gradesHtml = '';
    for (const [mat, gradesList] of Object.entries(p.grades)) {
      gradesHtml += `<div style="margin-bottom: 0.75rem;">
        <strong style="color: var(--accent-cyan); text-transform: uppercase; font-size: 0.75rem;">${mat}</strong>: 
        <span style="color: var(--text-primary);">${gradesList}</span>
      </div>`;
    }

    drawerBody.innerHTML = `
      <div class="drawer-header">
        <span class="label-eyebrow" style="margin-bottom: 0.5rem;">${p.spec}</span>
        <h2 style="font-size: 2.25rem; font-weight: 800;">${p.name}</h2>
      </div>

      <div class="drawer-body">
        <div class="drawer-top-grid">
          <div class="drawer-media">
            <img src="${p.image}" alt="${p.name}" />
          </div>
          <div class="drawer-quick-specs">
            <div>
              <span>Size Range:</span>
              <span>${p.sizeRange}</span>
            </div>
            <div>
              <span>Schedules/Rating:</span>
              <span>${p.schedules}</span>
            </div>
            <div>
              <span>Standards:</span>
              <span>${p.standards.join(', ')}</span>
            </div>
            <div>
              <span>Testing Standard:</span>
              <span>EN 10204 3.1 Traceable</span>
            </div>
          </div>
        </div>

        <div class="drawer-detail-section">
          <h4>Technical Statement</h4>
          <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">${p.longDesc}</p>
        </div>

        <div class="drawer-detail-section">
          <h4>Product Forms & Geometry</h4>
          <ul class="drawer-list">
            ${formsListHtml}
          </ul>
        </div>

        <div class="drawer-detail-section">
          <h4>Supported Metallurgy Range</h4>
          <ul class="drawer-list" style="margin-bottom: 1.25rem;">
            ${materialsListHtml}
          </ul>
          <div class="drawer-grades-box">
            <h5 style="color: var(--text-white); font-family: var(--font-heading); font-size: 0.875rem; margin-bottom: 0.75rem; font-weight: 700;">Metallurgical Alloy Matrix</h5>
            ${gradesHtml}
          </div>
        </div>

        <div class="drawer-detail-section">
          <h4>Target Applications</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">${p.applications.join(', ')}</p>
        </div>
      </div>

      <div class="drawer-footer">
        <button type="button" class="btn btn-secondary close-drawer-action">Close Record</button>
        <button type="button" class="btn btn-primary rfq-prefill-btn" data-product-name="${p.name}">Inquire Product</button>
      </div>
    `;

    // Display overlay
    drawerOverlay.style.display = 'flex';
    setTimeout(() => {
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    }, 10);

    // Bind close events
    drawerBody.querySelectorAll('.close-drawer-action').forEach(el => {
      el.addEventListener('click', closeProductDrawer);
    });

    // Prefill RFQ handler
    const prefillBtn = drawerBody.querySelector('.rfq-prefill-btn');
    prefillBtn?.addEventListener('click', () => {
      const pName = prefillBtn.getAttribute('data-product-name');
      const rfqProductSelect = document.getElementById('rfqProduct');
      
      if (rfqProductSelect) {
        rfqProductSelect.value = pName;
      }
      
      closeProductDrawer();
      
      // Scroll to RFQ section
      const rfqSection = document.getElementById('rfq');
      if (rfqSection) {
        rfqSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function closeProductDrawer() {
    if (!drawerOverlay) return;
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Resume background scrolling
    setTimeout(() => {
      drawerOverlay.style.display = 'none';
    }, 400);
  }

  drawerCloseBtn?.addEventListener('click', closeProductDrawer);
  drawerOverlay?.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeProductDrawer();
  });

  /* ==========================================================================
     06. METALLURGICAL ALLOY HUB STATE MANAGER
     ========================================================================== */
  const alloyMenu = document.getElementById('alloyMenu');
  const alloyDetailsPanel = document.getElementById('alloyDetailsPanel');

  function renderAlloyMenu() {
    if (!alloyMenu) return;

    alloyMenu.innerHTML = alloys.map((a, index) => `
      <button type="button" class="alloy-menu-btn ${index === 0 ? 'active' : ''}" data-alloy-id="${a.id}">
        <div>
          <div class="alloy-menu-name">${a.name}</div>
          <div class="alloy-menu-cat">${a.category}</div>
        </div>
        <div class="alloy-menu-indicator"></div>
      </button>
    `).join('');

    // Bind click handlers
    document.querySelectorAll('.alloy-menu-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.alloy-menu-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const alloyId = btn.getAttribute('data-alloy-id');
        displayAlloyDetails(alloyId);
      });
    });

    // Initial render detail
    if (alloys.length > 0) {
      displayAlloyDetails(alloys[0].id);
    }
  }

  function displayAlloyDetails(alloyId) {
    const a = alloys.find(alloy => alloy.id === alloyId);
    if (!a || !alloyDetailsPanel) return;

    const featuresHtml = a.features.map(f => `<li>${f}</li>`).join('');
    const gradesHtml = a.grades.map(g => `<span class="alloy-grade-badge">${g}</span>`).join('');

    // Fade out and in animation
    alloyDetailsPanel.style.opacity = 0;
    alloyDetailsPanel.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      alloyDetailsPanel.innerHTML = `
        <span class="alloy-badge-pill">${a.badge}</span>
        <h3 class="alloy-title">${a.name}</h3>
        <p class="alloy-desc">${a.desc}</p>
        
        <div class="alloy-grid">
          <div class="alloy-features-col">
            <h4>Key Characteristics</h4>
            <ul class="alloy-features-list">
              ${featuresHtml}
            </ul>
          </div>
          <div class="alloy-grades-col">
            <h4>Common Specifications</h4>
            <div class="alloy-grades-grid" style="margin-bottom: 1.5rem;">
              ${gradesHtml}
            </div>
            
            <h4>Primary Applications</h4>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${a.applications}</p>
          </div>
        </div>
      `;
      
      alloyDetailsPanel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      alloyDetailsPanel.style.opacity = 1;
      alloyDetailsPanel.style.transform = 'translateY(0)';
    }, 150);
  }

  // Draw Metallurgy Hub Menu
  renderAlloyMenu();

  /* ==========================================================================
     07. TECHNICAL STANDARDS SEARCH ENGINE
     ========================================================================== */
  const standardsSearchInput = document.getElementById('standardsSearch');
  const standardsTableBody = document.getElementById('standardsTableBody');
  const stdCategoryButtons = document.querySelectorAll('.std-cat-btn');
  let currentSearchQuery = '';
  let activeStandardsCategory = 'All';

  function filterAndRenderStandards() {
    if (!standardsTableBody) return;

    let filtered = standards;

    // Filter by Category
    if (activeStandardsCategory !== 'All') {
      filtered = filtered.filter(s => s.category === activeStandardsCategory);
    }

    // Filter by Search Query
    if (currentSearchQuery.trim() !== '') {
      const q = currentSearchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.code.toLowerCase().includes(q) || 
        s.title.toLowerCase().includes(q) ||
        s.scope.toLowerCase().includes(q)
      );
    }

    // Render Table
    if (filtered.length === 0) {
      standardsTableBody.innerHTML = `
        <tr>
          <td colspan="4" class="standards-no-results">
            <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 1rem; display: block; color: var(--text-muted);"></i>
            No international standards matched your query "${currentSearchQuery}".
          </td>
        </tr>
      `;
      return;
    }

    standardsTableBody.innerHTML = filtered.map(s => `
      <tr>
        <td class="std-code-cell">${s.code}</td>
        <td style="color: var(--text-white); font-weight: 500;">${s.title}</td>
        <td><span class="std-cat-badge">${s.category}</span></td>
        <td style="font-size: 0.8125rem; line-height: 1.5; color: var(--text-secondary); max-width: 400px;">${s.scope}</td>
      </tr>
    `).join('');
  }

  // Input listener
  standardsSearchInput?.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    filterAndRenderStandards();
  });

  // Category buttons listener
  stdCategoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      stdCategoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStandardsCategory = btn.getAttribute('data-category');
      filterAndRenderStandards();
    });
  });

  // Initial draw
  filterAndRenderStandards();

  /* ==========================================================================
     08. INDUSTRIAL CALCULATOR SUITE
     ========================================================================== */
  const shapeButtons = document.querySelectorAll('.calc-shape-btn');
  const diameterField = document.getElementById('calcFieldDiameter');
  const thicknessField = document.getElementById('calcFieldThickness');
  const widthField = document.getElementById('calcFieldWidth');
  const calculatedWeightLabel = document.getElementById('calcResultWeight');

  const calcShapeInput = document.getElementById('calcShape');
  const calcMaterialSelect = document.getElementById('calcMaterial');
  const calcLengthInput = document.getElementById('calcLength');
  const calcDiameterInput = document.getElementById('calcDiameter');
  const calcThicknessInput = document.getElementById('calcThickness');
  const calcWidthInput = document.getElementById('calcWidth');

  function updateCalculatorFields() {
    const shape = calcShapeInput.value;

    // Toggle fields visibility based on shape
    if (shape === 'pipe') {
      diameterField.style.display = 'flex';
      thicknessField.style.display = 'flex';
      widthField.style.display = 'none';
    } else if (shape === 'bar') {
      diameterField.style.display = 'flex';
      thicknessField.style.display = 'none';
      widthField.style.display = 'none';
    } else if (shape === 'plate') {
      diameterField.style.display = 'none';
      thicknessField.style.display = 'flex';
      widthField.style.display = 'flex';
    }

    calculateWeight();
  }

  function calculateWeight() {
    const shape = calcShapeInput.value;
    const alloyKey = calcMaterialSelect.value;
    const density = densities[alloyKey] || 7.85;

    const length = parseFloat(calcLengthInput.value) || 0;
    const diameter = parseFloat(calcDiameterInput.value) || 0;
    const thickness = parseFloat(calcThicknessInput.value) || 0;
    const width = parseFloat(calcWidthInput.value) || 0;

    let weight = 0;

    if (shape === 'pipe') {
      // Pipe: pi * (Ro^2 - Ri^2) * L * density
      // Ro in cm, Ri in cm, L in cm, density in g/cm3 -> kg
      const ro = (diameter / 2) / 10;
      const ri = ((diameter - (2 * thickness)) / 2) / 10;
      if (ri >= 0 && ro > ri) {
        const area = Math.PI * (Math.pow(ro, 2) - Math.pow(ri, 2));
        const volume = area * (length * 100);
        weight = (volume * density) / 1000;
      }
    } else if (shape === 'bar') {
      // Solid Round Bar: pi * r^2 * L * density
      const r = (diameter / 2) / 10;
      const area = Math.PI * Math.pow(r, 2);
      const volume = area * (length * 100);
      weight = (volume * density) / 1000;
    } else if (shape === 'plate') {
      // Plate: W/10 * t/10 * L*100 * density / 1000
      const volume = (width / 10) * (thickness / 10) * (length * 100);
      weight = (volume * density) / 1000;
    }

    // Update Result Text
    calculatedWeightLabel.textContent = weight > 0 ? weight.toFixed(2) : '0.00';
  }

  // Bind shape button clicks
  shapeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      shapeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-shape');
      calcShapeInput.value = val;
      updateCalculatorFields();
    });
  });

  // Bind form changes
  const calcInputs = [calcLengthInput, calcDiameterInput, calcThicknessInput, calcWidthInput, calcMaterialSelect];
  calcInputs.forEach(input => {
    input?.addEventListener('input', calculateWeight);
  });

  // Set default calculator fields
  updateCalculatorFields();

  // Prefill RFQ from Calculator click
  const calcInquireBtn = document.getElementById('calcInquireBtn');
  calcInquireBtn?.addEventListener('click', () => {
    const shape = calcShapeInput.value;
    const materialSelect = calcMaterialSelect.options[calcMaterialSelect.selectedIndex].text;
    const length = calcLengthInput.value;
    const diameter = calcDiameterInput.value;
    const thickness = calcThicknessInput.value;
    const width = calcWidthInput.value;
    const calculatedWeight = calculatedWeightLabel.textContent;

    let productCategoryValue = 'General Metallurgical Inquiry';
    let detailString = `Custom weight calculation profile inquiry:\n- Shape: ${shape.toUpperCase()}\n- Material: ${materialSelect}\n`;

    if (shape === 'pipe') {
      productCategoryValue = 'Pipes & Tubes';
      detailString += `- Dimensions: Length ${length}m, Outer Diameter ${diameter}mm, Wall Thickness ${thickness}mm\n`;
    } else if (shape === 'bar') {
      productCategoryValue = 'Precision Solid Bars';
      detailString += `- Dimensions: Length ${length}m, Bar Diameter ${diameter}mm\n`;
    } else if (shape === 'plate') {
      productCategoryValue = 'Boiler & Pressure Vessel Plates';
      detailString += `- Dimensions: Length ${length}m, Width ${width}mm, Thickness ${thickness}mm\n`;
    }

    detailString += `- Estimated Theoretical Weight: ${calculatedWeight} kg\n- Please quote commercial package with certificates.`;

    const rfqProductSelect = document.getElementById('rfqProduct');
    const rfqMessageTextarea = document.getElementById('rfqMessage');

    if (rfqProductSelect) rfqProductSelect.value = productCategoryValue;
    if (rfqMessageTextarea) rfqMessageTextarea.value = detailString;

    // Scroll to RFQ section
    const rfqSection = document.getElementById('rfq');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* ==========================================================================
     09. COMMERCIAL RFQ INQUIRY WIZARD
     ========================================================================== */
  const rfqForm = document.getElementById('rfqForm');
  const rfqFeedback = document.getElementById('rfqFeedback');

  rfqForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rfqName').value.trim();
    const email = document.getElementById('rfqEmail').value.trim();
    const productVal = document.getElementById('rfqProduct').value;
    const message = document.getElementById('rfqMessage').value.trim();

    // Check required inputs
    if (!name || !email || !productVal || !message) {
      if (rfqFeedback) {
        rfqFeedback.className = 'form-feedback error';
        rfqFeedback.style.display = 'block';
        rfqFeedback.textContent = 'Please fill out all required fields (*).';
      }
      return;
    }

    // Simulate sending inquiry
    const submitBtn = rfqForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-cog fa-spin"></i> Dispatched to senior desk...`;
    }

    setTimeout(() => {
      // Re-enable button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }

      // Show success alert
      if (rfqFeedback) {
        rfqFeedback.className = 'form-feedback success';
        rfqFeedback.style.display = 'block';
        rfqFeedback.innerHTML = `
          <strong style="display: block; font-size: 1rem; margin-bottom: 0.25rem;">Inquiry Registered Successfully!</strong>
          Thank you, ${name}. Your request for <strong>${productVal}</strong> has been transmitted directly to our sales office (sales@ecosteels.com). Our engineers will review your metallurgical requirements and issue an official quotation with trace pedigree within 4-6 business hours.
        `;
      }

      // Reset form fields
      rfqForm.reset();
    }, 1500);
  });

});
