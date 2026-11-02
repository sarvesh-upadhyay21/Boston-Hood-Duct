export interface WhoWeServeSector {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortDesc: string;
  heroSubtitle: string;
  iconName: string;
  targetFacilities: string[];
  keyChallenges: string[];
  tailoredSolutions: string[];
  primaryServices: string[];
  recommendedFrequency: {
    frequency: string;
    basis: string;
    standard: string;
  };
  complianceStandards: string[];
  localFocus: string;
  benefits: string[];
}

export const whoWeServeSectors: WhoWeServeSector[] = [
  {
    id: "restaurants-dining",
    slug: "restaurants-dining",
    title: "Restaurants, Cafés & Diners",
    badge: "Food & Beverage Sector",
    shortDesc:
      "NFPA 96 bare-metal kitchen hood cleaning, grease duct scraping, and rooftop fan degreasing for high-volume cooklines across Greater Boston.",
    heroSubtitle:
      "Protecting chefs, diners, and historical Boston commercial spaces with certified overnight exhaust cleaning.",
    iconName: "UtensilsCrossed",
    targetFacilities: [
      "Full-Service Fine Dining & Bistros",
      "Fast-Casual & Quick-Service Franchises",
      "Wood-Fired & Charcoal Grills (Solid Fuel)",
      "High-Heat Asian Wok Lines & Sushi Bars",
      "Burger, Fryer & Wing Concepts",
      "Seafood Taverns & Pizzerias",
    ],
    keyChallenges: [
      "Rapid grease vapor deposition on hood plenums and blower wheels from deep frying and charbroiling",
      "Concealed horizontal and vertical grease duct runs hidden behind walls and ceilings",
      "Strict Boston Fire Department (BFD) and ISD health inspection enforcement requiring valid inspection tags",
      "Zero tolerance for downtime during lunch and dinner operating shifts",
    ],
    tailoredSolutions: [
      "Overnight scheduling starting after kitchen close with zero impact on prep shifts",
      "Complete scraping to bare metal across hood canopies, duct risers, and rooftop fans",
      "Affixing tamper-evident Massachusetts inspection certificates with next service due date",
      "Digital before-and-after photo documentation delivered for insurance and fire marshals",
    ],
    primaryServices: [
      "Type I Commercial Hood Canopy & Plenum Degreasing",
      "Mechanical Grease Duct Bare-Metal Scraping",
      "Rooftop Exhaust Fan Blade & Housing Cleaning",
      "Grease Filter Exchange & Deep Sanitization",
      "Hinge Kit & Access Panel Compliance Retrofits",
    ],
    recommendedFrequency: {
      frequency: "Monthly to Quarterly",
      basis: "Solid fuel (wood/coal) monthly; high-volume cooklines every 3 months; standard full-service every 6 months.",
      standard: "NFPA 96 Table 12.4 & MA 527 CMR 1.00 Table 50.5.4",
    },
    complianceStandards: [
      "NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations)",
      "Massachusetts 527 CMR 1.00 (Chapter 50)",
      "Boston Fire Department (BFD) Kitchen Exhaust Regulations",
      "Local Board of Health Food Code Requirements",
    ],
    localFocus:
      "Serving high-density culinary destinations in Downtown Boston, Back Bay, North End, Cambridge, Somerville, Seaport, and Allston-Brighton.",
    benefits: [
      "Guaranteed fire inspection readiness",
      "Reduced kitchen ambient temperatures and improved cook airflow",
      "Elimination of grease drippage onto cooking equipment and food",
      "Protection against catastrophic flue fires and business interruption",
    ],
  },
  {
    id: "hotels-hospitality",
    slug: "hotels-hospitality",
    title: "Hotels, Resorts & Hospitality",
    badge: "Hospitality & Lodging",
    shortDesc:
      "Turnkey exhaust degreasing and multi-story dryer vent bank clearing for hotel banquet kitchens, room-service lines, and guest laundry facilities.",
    heroSubtitle:
      "Continuous safety and pristine air quality for guests, dining rooms, and multi-floor hospitality towers.",
    iconName: "Hotel",
    targetFacilities: [
      "Full-Service Downtown Luxury Hotels",
      "Boutique Historical Inns & Lodges",
      "Convention & Conference Hotel Centers",
      "Extended-Stay Hotel Suites",
      "Hotel Banquet & Catering Central Commissaries",
      "On-Site Guest & Commercial Laundry Facilities",
    ],
    keyChallenges: [
      "24/7 continuous guest occupancy requiring ultra-quiet operations and zero cooking odor leakage",
      "Tall vertical exhaust risers spanning 10 to 30 stories with limited cleanout access points",
      "Heavy commercial laundry dryer exhaust lint buildup threatening spontaneous combustion",
      "Multiple simultaneous kitchen hoods (room service, banquet, lobby bar, pool grill)",
    ],
    tailoredSolutions: [
      "Low-noise overnight crews equipped with industrial negative-air containment",
      "Comprehensive multi-floor vertical riser scraping and camera video inspections",
      "Integrated commercial dryer duct bank rotary brushing and lint evacuation",
      "Single-vendor consolidated billing and enterprise compliance record management",
    ],
    primaryServices: [
      "Multi-Station Hotel Kitchen Hood & Riser Cleaning",
      "Commercial Guest Laundry Multi-Story Dryer Vent Cleaning",
      "Rooftop Make-Up Air & Exhaust Fan Maintenance",
      "Access Panel Installation for NFPA 96 Compliance",
      "HVAC Common Area & Meeting Room Duct Cleaning",
    ],
    recommendedFrequency: {
      frequency: "Quarterly to Semi-Annually",
      basis: "Banquet & main restaurant lines quarterly; secondary banquet kitchens every 6 months; laundry risers annually.",
      standard: "NFPA 96 & NFPA 211 Commercial Vent Standards",
    },
    complianceStandards: [
      "NFPA 96 Fire Safety Regulations",
      "NFPA 211 Chimneys, Fireplaces, Vents and Solid Fuel-Burning Appliances",
      "Massachusetts State Building Code (780 CMR)",
      "Corporate Hospitality Brand Safety & Risk Management Standards",
    ],
    localFocus:
      "Trusted by hospitality leaders across Boston Copley Square, Seaport Waterfront, Cambridge Kendall Square, and Route 128 hotel corridors.",
    benefits: [
      "Zero guest disturbance with planned off-hours execution",
      "Elimination of lingering cooking odors in guest hallways and elevators",
      "Substantial reduction in laundry dryer cycle times and gas consumption",
      "Full compliance packets ready for corporate safety auditors",
    ],
  },
  {
    id: "healthcare-senior-living",
    slug: "healthcare-senior-living",
    title: "Hospitals, Healthcare & Senior Living",
    badge: "Healthcare & Institutional",
    shortDesc:
      "Sterile kitchen exhaust cleaning and indoor air quality ventilation hygiene compliant with Joint Commission (JCAHO) and MA DPH standards.",
    heroSubtitle:
      "Uncompromising sanitary standards and fire prevention for patient care facilities and senior communities.",
    iconName: "HeartPulse",
    targetFacilities: [
      "Acute Care & Specialty Hospitals",
      "Surgical Centers & Outpatient Facilities",
      "Assisted Living & Memory Care Communities",
      "Skilled Nursing Facilities & Rehabilitation Centers",
      "Hospital Main Cafeterias & Dietary Kitchens",
    ],
    keyChallenges: [
      "Immune-compromised patients and residents requiring absolute air cleanliness and zero particulate drift",
      "Strict survey oversight by Joint Commission, CMS, and Massachusetts Department of Public Health",
      "High volume dietary meal prep operating 7 days a week on tight therapeutic schedules",
      "Special environmental controls required when working inside active medical facilities",
    ],
    tailoredSolutions: [
      "HEPA-filtered air negative containment systems during all mechanical duct cleaning",
      "Food-grade, biodegradable, non-toxic degreasing solutions with zero lingering chemical odor",
      "Standard operating procedures aligned with ICRA (Infection Control Risk Assessment)",
      "Immediate digital certificate delivery and full photographic logs for state health audits",
    ],
    primaryServices: [
      "Dietary Kitchen Hood & Duct Bare-Metal Degreasing",
      "Hospital Cafeteria Exhaust Inspection & Certification",
      "Facility Laundry Dryer Duct Evacuation & Fire Prevention",
      "HVAC Air Duct Sanitization & Air Quality Testing",
      "Emergency Grease Containment on Sensitive Roof Membranes",
    ],
    recommendedFrequency: {
      frequency: "Quarterly",
      basis: "Hospital main dietary cooklines every 3 months; auxiliary snack stations every 6 months.",
      standard: "Joint Commission Life Safety Standards & NFPA 96",
    },
    complianceStandards: [
      "The Joint Commission (TJC) Environment of Care & Life Safety",
      "NFPA 96 Chapter 12 Requirements",
      "Massachusetts Department of Public Health (DPH) Regulations",
      "CMS Life Safety Code Requirements",
    ],
    localFocus:
      "Supporting premier medical centers in the Longwood Medical Area, Boston, Cambridge, Newton-Wellesley, and Worcester.",
    benefits: [
      "Flawless audit-ready compliance documentation for accreditation surveys",
      "Safe, odor-free chemicals protecting vulnerable patient wings",
      "Certified technicians trained in clinical facility protocols and badge check-ins",
      "Round-the-clock emergency dispatch for facility directors",
    ],
  },
  {
    id: "colleges-universities",
    slug: "colleges-universities",
    title: "Colleges, Universities & Campuses",
    badge: "Higher Education & Schools",
    shortDesc:
      "High-capacity dining hall hood cleaning, dorm laundry dryer duct clearing, and multi-facility compliance across Greater Boston campuses.",
    heroSubtitle:
      "Keeping New England's educational institutions safe, code-compliant, and fully operational year-round.",
    iconName: "GraduationCap",
    targetFacilities: [
      "University Dining Halls & Student Commons",
      "Campus Food Courts & Retail Concessions",
      "Student Residence Hall Laundry Vent Banks",
      "Faculty Clubs & Alumni Centers",
      "K-12 School District Cafeterias",
      "Private Preparatory Boarding Schools",
    ],
    keyChallenges: [
      "High meal throughput feeding tens of thousands of students three times a day",
      "Heavy grease buildup from continuous wok, grill, fryer, and pizza station cooking",
      "Extensive dorm laundry banks operating 24 hours daily with dangerous lint accumulation",
      "Strict campus safety committee standards and academic calendar scheduling windows",
    ],
    tailoredSolutions: [
      "Massive multi-team deployments during summer break, winter recess, and Thanksgiving breaks",
      "Dorm laundry dryer exhaust line cleaning using high-velocity reverse-air whips",
      "Centralized account management across multiple dining halls and residential dorms",
      "Formal service verification for university environmental health and safety (EH&S) departments",
    ],
    primaryServices: [
      "Campus Dining Hall Type I Hood & Duct Scraping",
      "Dormitory Multi-Unit Dryer Vent Cleaning",
      "Campus Retail Tenant Exhaust Verification",
      "Rooftop Fan Belt Replacement & Balancing",
      "Commercial Dishwasher & Steam Exhaust Duct Descaling",
    ],
    recommendedFrequency: {
      frequency: "Quarterly or Break-Scheduled",
      basis: "High-volume campus commons quarterly; K-12 school kitchens semi-annually or during summer/winter recess.",
      standard: "NFPA 96 Table 12.4 & MA 527 CMR 1.00",
    },
    complianceStandards: [
      "NFPA 96 & Massachusetts Fire Code Chapter 50",
      "Campus EH&S Standards & Risk Management Guidelines",
      "OSHA Confined Space & Rooftop Safety Standards",
      "Department of Elementary and Secondary Education (DESE) Sanitation Standards",
    ],
    localFocus:
      "Serving higher education campuses in Boston, Cambridge, Newton, Waltham, Medford, Amherst, and Worcester.",
    benefits: [
      "Seamless integration with university academic calendars and summer turnarounds",
      "Enhanced campus fire safety protecting residential student dormitories",
      "Detailed asset tracking and digital maintenance logs across all campus buildings",
      "Energy savings through restored exhaust fan efficiency and airflow",
    ],
  },
  {
    id: "corporate-food-production",
    slug: "corporate-food-production",
    title: "Corporate Dining & Food Manufacturing",
    badge: "Commercial & Enterprise",
    shortDesc:
      "Full exhaust hygiene for enterprise corporate cafeterias, commercial commissary kitchens, food manufacturing plants, and ghost kitchens.",
    heroSubtitle:
      "Preventive fire safety and cleanroom ventilation for corporate dining and high-volume food processing.",
    iconName: "Building2",
    targetFacilities: [
      "Corporate Headquarters & Tech Campus Cafeterias",
      "Ghost Kitchen Complexes & Cloud Kitchen Facilities",
      "Commercial Baking & Wholesale Prep Kitchens",
      "Food Packaging & Industrial Cooking Plants",
      "Culinary Incubators & Shared Commercial Spaces",
    ],
    keyChallenges: [
      "Multiple independent culinary operators sharing complex central exhaust manifolds in ghost kitchens",
      "Industrial scale grease and vapor output from continuous production cooking lines",
      "Strict enterprise building security, vendor vetting, and insurance requirements",
      "Lockout/tagout (LOTO) protocols and food safety cross-contamination risks",
    ],
    tailoredSolutions: [
      "Single-source maintenance for complex multi-branch manifold exhaust systems",
      "Rigorous adherence to corporate security clearance, LOTO, and safety protocols",
      "Full grease trap and rooftop grease containment pad management",
      "COI certificates providing $2,000,000+ liability coverage naming facility owners additionally insured",
    ],
    primaryServices: [
      "High-Rise Office Cafeteria Kitchen Exhaust Cleaning",
      "Ghost Kitchen Shared Manifold Duct Scrubbing",
      "Industrial Food Oven & Fryer Flue Degreasing",
      "Rooftop Grease Pollution Prevention & Containment",
      "Commercial Ventilation Balancing & Inspection",
    ],
    recommendedFrequency: {
      frequency: "Quarterly to Monthly",
      basis: "Multi-tenant ghost kitchens monthly to quarterly; corporate dining semi-annually.",
      standard: "NFPA 96 & Industrial Ventilation Codes",
    },
    complianceStandards: [
      "NFPA 96 Fire Prevention Regulations",
      "FDA Food Safety Modernization Act (FSMA) Facility Standards",
      "OSHA Commercial Safety Standards",
      "Corporate Environmental, Health, and Safety (EHS) Directives",
    ],
    localFocus:
      "Active throughout Greater Boston corporate corridors including Boston Financial District, Cambridge Kendall Square, Burlington, and Waltham.",
    benefits: [
      "Clear responsibility for complex shared exhaust systems in multi-tenant facilities",
      "Protection of multi-million dollar corporate office assets from concealed duct fires",
      "Guaranteed compliance with landlord lease terms and fire marshal inspections",
      "Reduced facility energy costs through optimized hood airflow and balanced make-up air",
    ],
  },
  {
    id: "multifamily-property-management",
    slug: "multifamily-property-management",
    title: "Multifamily Housing & Property Management",
    badge: "Residential & Commercial Properties",
    shortDesc:
      "Dryer vent bank clearing, rooftop booster fan servicing, and retail tenant hood compliance for property managers and condominium HOAs.",
    heroSubtitle:
      "Safeguarding multi-unit communities from lint fires, grease hazards, and dryer performance degradation.",
    iconName: "Home",
    targetFacilities: [
      "High-Rise & Mid-Rise Apartment Complexes",
      "Condominium Associations & HOA Communities",
      "Mixed-Use Buildings with Ground-Floor Restaurants",
      "Luxury Residential Towers",
      "Student Apartment Complexes",
    ],
    keyChallenges: [
      "Combustible lint accumulating in multi-floor vertical dryer duct runs spanning 100+ feet",
      "Booster fan failures causing excessive dryer runtimes, mold, and fire risk",
      "Ground-floor commercial restaurant grease flues traversing through residential floors",
      "Coordinating unit access with hundreds of individual tenants and homeowners",
    ],
    tailoredSolutions: [
      "High-powered rotary brush and negative air pressure lint removal from roof down and unit out",
      "Rooftop dryer booster fan inspection, current testing, and cleaning",
      "Commercial kitchen exhaust auditing for ground-floor retail tenants to protect the building",
      "Turnkey resident notification templates, online scheduling, and certificate issuance",
    ],
    primaryServices: [
      "Multi-Floor Residential Dryer Vent Bank Cleaning",
      "Rooftop In-Line Booster Fan Inspection & Maintenance",
      "Ground-Floor Restaurant Grease Riser Audits & Degreasing",
      "Hallway Fresh-Air Supply & Bathroom Exhaust Cleaning",
      "Exterior Vent Termination & Bird Guard Screen Installation",
    ],
    recommendedFrequency: {
      frequency: "Annual",
      basis: "Dryer vent banks annually; ground-floor restaurant tenant grease flues quarterly.",
      standard: "NFPA 211 & Massachusetts State Building Code",
    },
    complianceStandards: [
      "NFPA 211 (Chimneys, Fireplaces, Vents)",
      "Massachusetts State Sanitary Code (105 CMR 410)",
      "International Mechanical Code (IMC) Section 504",
      "HOA & Property Insurance Underwriter Fire Safety Mandates",
    ],
    localFocus:
      "Partnering with property managers across Back Bay, South End, Fenway, Seaport, Brookline, Newton, and Quincy.",
    benefits: [
      "Dramatically reduced risk of devastating multifamily clothes dryer fires",
      "Lowered tenant electricity bills through restored 45-minute dry times",
      "Satisfied property insurance mandates reducing premium exposure",
      "Hassle-free resident coordination handled smoothly by our dispatch team",
    ],
  },
  {
    id: "arenas-entertainment-venues",
    slug: "arenas-entertainment-venues",
    title: "Stadiums, Arenas & Entertainment Venues",
    badge: "Sports & Entertainment",
    shortDesc:
      "High-capacity concession hood cleaning, mass-volume fryer line degreasing, and event-ready fire safety for Greater Boston venues.",
    heroSubtitle:
      "Rapid turnaround exhaust degreasing engineered for mass-attendance sports and cultural arenas.",
    iconName: "Trophy",
    targetFacilities: [
      "Major Sports Stadiums & Ballparks",
      "Concert Arenas & Cultural Theaters",
      "Convention & Exhibition Centers",
      "Casino Restaurants & Entertainment Complexes",
      "Racetracks & Outdoor Amphitheaters",
    ],
    keyChallenges: [
      "Massive grease and smoke spikes during 3-hour game days or concert windows",
      "Dozens of decentralized concession stations, food trucks, and portable fryers",
      "Tight turnaround windows between consecutive games, trade shows, or road tours",
      "High public visibility requiring flawless municipal fire marshal sign-offs before doors open",
    ],
    tailoredSolutions: [
      "Large specialized crews capable of degreasing 10 to 30 concession hoods in a single overnight shift",
      "Coordination with stadium operations and event dispatch to work around event dates",
      "Rooftop grease containment servicing to prevent rooftop structural damage",
      "Direct communication with Boston Fire Department special event inspectors",
    ],
    primaryServices: [
      "Arena Concession Stand Hood & Plenum Degreasing",
      "VIP Club & Premium Lounge Kitchen Exhaust Cleaning",
      "Rooftop Heavy-Duty Fan Balancing & Degreasing",
      "Grease Interceptor & Rooftop Containment Box Maintenance",
      "Emergency Pre-Event Code Compliance Cleans",
    ],
    recommendedFrequency: {
      frequency: "Quarterly or Pre-Season",
      basis: "High-attendance venues quarterly; seasonal ballparks pre-season, mid-season, and post-season.",
      standard: "NFPA 96 & Massachusetts Special Venue Fire Codes",
    },
    complianceStandards: [
      "NFPA 96 Section 12.4 Inspection Schedules",
      "Massachusetts 527 CMR 1.00 Fire Prevention Code",
      "City of Boston Public Assembly Fire Safety Regulations",
      "OSHA General Industry Standards",
    ],
    localFocus:
      "Proudly serving athletic complexes, theaters, and entertainment venues across Boston, Cambridge, Foxborough, and Worcester.",
    benefits: [
      "Zero game or show delays with guaranteed on-time overnight delivery",
      "Uncompromised public safety for thousands of attending sports fans and guests",
      "Protection of multi-million dollar arena roof infrastructure from grease corrosion",
      "Complete inspection records prepared for municipal fire prevention marshals",
    ],
  },
  {
    id: "supermarkets-groceries-bakeries",
    slug: "supermarkets-groceries-bakeries",
    title: "Supermarkets, Groceries & Bakeries",
    badge: "Retail Food & Baking",
    shortDesc:
      "Rotisserie chicken exhaust degreasing, commercial bakery hood maintenance, and grocery deli ventilation sanitation across Massachusetts.",
    heroSubtitle:
      "Protecting retail grocery shoppers and food preparation workers from fire hazards and airborne cooking grease.",
    iconName: "Store",
    targetFacilities: [
      "Regional Supermarket Chains & Independent Grocers",
      "Commercial Wholesale Bakeries & Artisan Bread Shops",
      "Supermarket Prepared Food & Rotisserie Departments",
      "Supermarket Full-Service Delis & Butcher Shops",
      "Specialty Ethnic Food Markets",
    ],
    keyChallenges: [
      "Heavy liquid animal grease coating rotisserie chicken flues continuously throughout the day",
      "Flour dust combining with cooking oil vapors in bakeries to form explosive combustible deposits",
      "Working in retail spaces that must open immaculately clean and odor-free for early morning shoppers",
      "Multiple hood stations spread across large retail floor footprints",
    ],
    tailoredSolutions: [
      "Specialized degreasers engineered to emulsify hardened animal fat and baked-on starch residues",
      "Overnight execution wrapping up well before store opening and morning bakery shifts",
      "Sanitary surface protection wrapping deli cases and food prep surfaces during service",
      "Comprehensive compliance records for both fire marshals and retail health inspectors",
    ],
    primaryServices: [
      "Supermarket Rotisserie Oven Flue & Exhaust Degreasing",
      "Commercial Bakery Hood & Flour Dust Exhaust Cleaning",
      "Deli Fryer & Flat-Top Exhaust Canopy Cleaning",
      "Rooftop Fan Degreasing & Grease Box Service",
      "HVAC Make-Up Air Unit Filter & Coil Cleaning",
    ],
    recommendedFrequency: {
      frequency: "Quarterly to Semi-Annually",
      basis: "Rotisserie ovens and heavy deli fryers quarterly; standard bakeries every 6 months.",
      standard: "NFPA 96 & Massachusetts Sanitary Code",
    },
    complianceStandards: [
      "NFPA 96 Fire Safety Regulations",
      "Massachusetts Retail Food Code (105 CMR 590)",
      "OSHA Combustible Dust Standards (for bakeries)",
      "Local Board of Health Inspection Criteria",
    ],
    localFocus:
      "Supporting grocers and bakeries in Greater Boston, North Shore, South Shore, and Metrowest communities.",
    benefits: [
      "Safe, spotless retail deli and bakery counters for customer inspection",
      "Elimination of rancid grease and burnt fat odors in customer shopping aisles",
      "Prevention of hazardous rotisserie flue fires during peak daytime retail hours",
      "Extended lifespan of expensive commercial baking and rotisserie ovens",
    ],
  },
];

export const complianceFrequencyGuide = [
  {
    category: "Solid-Fuel Cooking",
    examples: "Wood-fired pizza ovens, mesquite charbroilers, charcoal grills, wood smokehouses",
    frequency: "Monthly",
    riskLevel: "High Fire Hazard",
    codeRef: "NFPA 96 Table 12.4 / 527 CMR 1.00",
  },
  {
    category: "High-Volume Commercial Cooking",
    examples: "24-hour diners, fast food fry lines, wok cooking, high-turnover burger & steak houses",
    frequency: "Quarterly (Every 3 Months)",
    riskLevel: "Moderate-High Fire Hazard",
    codeRef: "NFPA 96 Table 12.4 / 527 CMR 1.00",
  },
  {
    category: "Moderate-Volume Commercial Cooking",
    examples: "Standard casual full-service dining, hotel banquet kitchens, corporate cafeterias",
    frequency: "Semi-Annually (Every 6 Months)",
    riskLevel: "Moderate Fire Hazard",
    codeRef: "NFPA 96 Table 12.4 / 527 CMR 1.00",
  },
  {
    category: "Low-Volume or Seasonal Cooking",
    examples: "Churches, seasonal camp kitchens, day-care centers, senior community activity kitchens",
    frequency: "Annually",
    riskLevel: "Low Fire Hazard",
    codeRef: "NFPA 96 Table 12.4 / 527 CMR 1.00",
  },
  {
    category: "Multifamily Residential Dryer Vent Banks",
    examples: "Apartment towers, condominium associations, student housing dryer shafts",
    frequency: "Annually",
    riskLevel: "Significant Lint Fire Risk",
    codeRef: "NFPA 211 / IMC Section 504",
  },
];

export const propertyManagerAssurances = [
  {
    title: "100% Bare-Metal Scraped Compliance",
    description:
      "We never just polish the hood canopy. Our technicians inspect and scrape grease from the filter line, through horizontal runs and vertical risers, all the way to the rooftop fan discharge.",
    icon: "ShieldCheck",
  },
  {
    title: "Overnight & Zero-Interruption Scheduling",
    description:
      "We arrive after your kitchen or facility closes for the night, leaving cooking lines spotless, sanitized, and ready for morning breakfast prep without delay.",
    icon: "Clock",
  },
  {
    title: "Comprehensive Digital Photo Documentation",
    description:
      "Every service includes timestamped before-and-after photos of your hoods, duct interiors, fan blades, and rooftop grease boxes, emailed within 24 hours.",
    icon: "Camera",
  },
  {
    title: "$2,000,000+ Liability Coverage & COIs",
    description:
      "We provide Certificates of Insurance naming property management firms, HOAs, landlords, and building owners as additionally insured before work begins.",
    icon: "FileCheck2",
  },
  {
    title: "Tamper-Evident State Certification Labels",
    description:
      "Our certified tags are affixed directly to your hood showing date serviced, technician signature, code standard met, and next scheduled inspection date.",
    icon: "Award",
  },
  {
    title: "24/7 Rapid Emergency Dispatch",
    description:
      "If you receive an unexpected fire marshal warning, a grease leak, or an exhaust fan breakdown, our Boston dispatch line is available around the clock.",
    icon: "PhoneCall",
  },
];

export const whoWeServeFaqs = [
  {
    question: "Do you service multi-story high-rise buildings with long vertical exhaust risers?",
    answer:
      "Yes. Many restaurants, hotels, and multifamily properties in Downtown Boston, Back Bay, and Cambridge operate inside historical or multi-story buildings where grease ducts run 5 to 30 stories to the roof. We utilize certified access panel techniques, rotary brushes, and high-resolution camera systems to clean and verify the entire vertical shaft down to bare metal.",
  },
  {
    question: "How do you handle building security and overnight access for locked facilities?",
    answer:
      "Over 85% of our commercial kitchen and ventilation cleaning is performed overnight while facilities are closed. We coordinate directly with your facility managers, building security, or keycard dispatch. Our technicians are fully vetted, uniformed, insured, and follow rigorous security check-in and lockup procedures.",
  },
  {
    question: "Can you provide a Certificate of Insurance (COI) for our landlord or property management company?",
    answer:
      "Absolutely. We carry comprehensive commercial general liability ($2,000,000+), workers' compensation, and commercial auto coverage. We routinely issue customized Certificates of Insurance naming property owners, management companies, and corporate landlords as additionally insured at no extra charge.",
  },
  {
    question: "What happens if a fire marshal or health inspector visits before our next scheduled clean?",
    answer:
      "Our affixed Massachusetts-compliant hood inspection stickers clearly display the date of your last clean, the cleaning standard applied (NFPA 96 / 527 CMR 1.00), technician credential details, and the scheduled next inspection date. If an inspector ever has questions, your digital report with time-stamped before-and-after photographs provides indisputable proof of compliance.",
  },
  {
    question: "Do you offer multi-location portfolio discounts for restaurant groups or property management firms?",
    answer:
      "Yes. We partner with numerous restaurant groups, hotel portfolios, and residential property management firms across Greater Boston and Massachusetts. We offer consolidated multi-facility agreements with volume pricing, centralized billing, and automated recurring compliance scheduling.",
  },
  {
    question: "How do you protect our kitchen equipment and surrounding areas during high-pressure cleaning?",
    answer:
      "Before applying any degreasing solutions, our technicians wrap all underlying cooking equipment, flat tops, fryers, electronic controls, and prep tables with heavy-duty commercial plastic funnel sheeting. Grease and wash water are channeled directly into containment barrels for safe disposal, leaving your kitchen clean, sanitized, and ready for use.",
  },
];
