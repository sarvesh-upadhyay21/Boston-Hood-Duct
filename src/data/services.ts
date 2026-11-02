import { Service } from "@/types";
import { serviceImages } from "@/data/serviceImages";

export interface InspectionFrequency {
  operation: string;
  frequency: string;
  notes?: string;
}

export const inspectionFrequencySchedule: InspectionFrequency[] = [
  {
    operation: "Solid-fuel cooking — wood, charcoal, mesquite",
    frequency: "Monthly",
    notes: "Highest fire risk requiring frequent grease depth measurement and inspection.",
  },
  {
    operation: "High-volume cooking — 24-hour kitchens, charbroiling, wok cooking",
    frequency: "Every 3 months",
    notes: "Continuous grease vapors demand quarterly certified inspection and cleaning.",
  },
  {
    operation: "Moderate-volume commercial cooking — typical restaurant kitchens",
    frequency: "Every 6 months",
    notes: "Standard casual full-service dining restaurants and school kitchens.",
  },
  {
    operation: "Low-volume or seasonal cooking — certain institutional kitchens",
    frequency: "Annually",
    notes: "Seasonal facilities, churches, day-use senior centers, and light snack kitchens.",
  },
];

export const commercialCookingFacilitiesServed = [
  "Restaurants, cafés, diners, and commercial dining establishments",
  "Hotels, banquet halls, resorts, and catering kitchens",
  "Hospitals, healthcare facilities, and senior living communities",
  "Schools, colleges, universities, and institutional cafeterias",
  "Corporate dining facilities, commissaries, and commercial food preparation kitchens",
  "Multi-location restaurant groups and commercial property portfolios",
];

export const servicesData: Service[] = [
  {
    id: "kitchen-hood-cleaning",
    slug: "kitchen-hood-cleaning",
    title: "Commercial Kitchen Hood & Exhaust Vent Cleaning & Inspection in Boston",
    subtitle:
      "Professional Kitchen Hood Cleaning, Grease Duct Scraping & Rooftop Exhaust Fan Degreasing",
    shortDescription:
      "Professional NFPA 96 hood cleaning, grease duct cleaning, rooftop exhaust fan cleaning, and system inspections. Our services include accessible grease removal, bare-metal cleaning where required, photographic documentation, applicable service labels, and identification of visible fire safety deficiencies.",
    fullDescription:
      "At Boston Hood & Duct, we specialize in commercial kitchen exhaust hood cleaning and inspections, grease duct scraping, rooftop exhaust fan degreasing, and fire code compliance support for restaurants, hotels, healthcare facilities, schools, universities, and institutional kitchens throughout Greater Boston and Massachusetts. Our services focus on removing combustible grease, inspecting accessible exhaust system components, documenting findings, and supporting applicable NFPA 96, Massachusetts 527 CMR 1.00 (Chapter 50), and Boston Fire Department (BFD) requirements. Cleaner Exhaust Systems. Reduced Fire Hazards. Greater Peace of Mind.",
    iconName: "ShieldCheck",
    image: serviceImages.kitchenHood,
    badge: "MASSACHUSETTS TYPE 1 KITCHEN EXHAUST SERVICES",
    phone: "+1 (857) 800-0890",
    nfpaStandard: "NFPA 96 & MA 527 CMR 1.00 (Ch. 50)",
    features: [
      "Type I Hood Canopy & Plenum Cleaning",
      "Grease Duct Cleaning & Bare-Metal Scraping",
      "Rooftop Exhaust Fan Degreasing",
      "Grease Filter & Baffle Cleaning",
      "Commercial Kitchen Exhaust System Inspections",
      "NFPA 96 & Massachusetts Fire Code Support",
      "Inspection & Cleaning Service Labels",
      "Service Reports & Photo Documentation",
      "Preventive Maintenance & Recurring Service",
    ],
    subServices: [
      {
        title: "1. Type I Hood Canopy & Plenum Cleaning",
        description:
          "Professional degreasing of accessible commercial kitchen hood interiors, plenums, and grease collection surfaces using appropriate cleaning methods.",
      },
      {
        title: "2. Grease Duct Cleaning & Bare-Metal Scraping",
        description:
          "Mechanical scraping and removal of accumulated grease from accessible horizontal and vertical exhaust ducts, using suitable cleaning methods to achieve required cleanliness.",
      },
      {
        title: "3. Rooftop Exhaust Fan Degreasing",
        description:
          "Cleaning of accessible rooftop exhaust fan blades, housings, grease collection components, and associated exhaust surfaces.",
      },
      {
        title: "4. Grease Filter & Baffle Cleaning",
        description:
          "Degreasing of stainless steel grease filters, baffles, and grease collection devices to remove accumulated cooking residues.",
      },
      {
        title: "5. Commercial Kitchen Exhaust System Inspections",
        description:
          "Inspection of accessible exhaust components for grease accumulation, cleaning deficiencies, and visible conditions requiring maintenance or corrective action.",
      },
      {
        title: "6. NFPA 96 & Massachusetts Fire Code Support",
        description:
          "Cleaning and inspection services designed to support applicable NFPA 96, Massachusetts 527 CMR 1.00, and local fire prevention requirements.",
      },
      {
        title: "7. Inspection & Cleaning Service Labels",
        description:
          "Application of required service labels documenting inspection and cleaning dates, provider information, and applicable compliance or noncompliance findings.",
      },
      {
        title: "8. Service Reports & Photo Documentation",
        description:
          "Documentation of completed work, observed deficiencies, inaccessible areas, and corrective action recommendations. Before-and-after photographs may be provided as part of the service scope.",
      },
      {
        title: "9. Preventive Maintenance & Recurring Service",
        description:
          "Inspection and cleaning schedule recommendations based on cooking volume, equipment type, inspection findings, and applicable regulatory requirements.",
      },
    ],
    benefits: [
      {
        title: "Massachusetts Type 1 Kitchen Exhaust Expertise",
        description:
          "Commercial kitchen exhaust cleaning and inspection services focused on applicable Massachusetts competency and registration requirements.",
      },
      {
        title: "Fire Hazard Reduction",
        description:
          "Removal of combustible grease accumulation from applicable exhaust system components to help reduce kitchen exhaust fire risk.",
      },
      {
        title: "NFPA 96 & BFD Regulatory Awareness",
        description:
          "Attention to applicable NFPA 96, Massachusetts Fire Code, and Boston Fire Department inspection, cleaning, and documentation requirements.",
      },
      {
        title: "Kitchen Equipment Protection",
        description:
          "Use of appropriate equipment covering, grease containment, and cleaning precautions to help protect kitchen equipment and surrounding areas.",
      },
      {
        title: "Clear Service Documentation",
        description:
          "Service reports, inspection findings, and identification of deficiencies requiring additional attention.",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Service coordination around kitchen operating hours, with off-hours appointments subject to availability.",
      },
      {
        title: "Preventive Maintenance Support",
        description:
          "Recommendations for recurring inspection and cleaning schedules based on cooking operations and system conditions.",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Consultation & Service Scheduling",
        description:
          "We discuss your cooking operations, kitchen layout, and scheduling needs to coordinate service with minimal operational disruption.",
      },
      {
        step: 2,
        title: "System Inspection & Deficiency Assessment",
        description:
          "Evaluate grease buildup, accessible ductwork, hood canopies, and rooftop exhaust fan assemblies according to NFPA 96 guidelines.",
      },
      {
        step: 3,
        title: "Grease Removal & Equipment Cleaning",
        description:
          "Professional degreasing of hoods, grease ducts, exhaust fans, and accessible components down to bare metal.",
      },
      {
        step: 4,
        title: "Documentation, Certification & Records",
        description:
          "Affix official service stickers, deliver detailed photo documentation reports, and support the required 3-year record retention under Massachusetts law.",
      },
    ],
  },
  {
    id: "air-duct-cleaning",
    slug: "air-duct-cleaning",
    title: "Residential & Commercial HVAC Air Duct Cleaning",
    subtitle:
      "HVAC Air Ducts, Dryer Exhaust Vents & Building Exhaust Systems | Complimentary Environmental Assessments",
    shortDescription:
      "Professional cleaning of accessible HVAC ductwork to remove accumulated dust and debris. Our inspections help identify visible moisture intrusion, mold-like growth, and airflow restrictions that may require additional attention, supporting proper HVAC maintenance and indoor environmental quality.",
    fullDescription:
      "BOSTON HOOD & DUCT offers residential and commercial duct cleaning projects, including HVAC air ducts, dryer exhaust vents and ducts, and other building exhaust systems. We help remove accumulated dust, lint, debris, and other contaminants that may affect system performance or contribute to fire and environmental concerns. As an added value, our cross-functional Safety and Environmental team can provide a complimentary overall environmental assessment during eligible service projects to identify visible conditions or potential safety concerns that may warrant further attention—helping you maintain a cleaner, safer, and healthier environment.",
    iconName: "Wind",
    image: serviceImages.airDuct,
    badge: "Residential & Commercial",
    phone: "+1 (857) 800-0890",
    nfpaStandard: "527 CMR 1.00 & NFPA 96 Compliant",
    features: [
      "Residential Air Duct Cleaning (Homes, Condos & Apartments)",
      "Commercial HVAC & Air Handling Unit (AHU) Duct Cleaning",
      "Complimentary Overall Environmental Assessment During Eligible Projects",
      "Building Exhaust Systems & Dryer Vent Maintenance",
      "Dust, Lint, Debris & Contaminant Removal",
      "Cross-Functional Safety & Environmental Team Oversight",
    ],
    subServices: [
      {
        title: "Residential Air Duct Cleaning",
        description:
          "HVAC Duct Cleaning for Homes, Condominiums & Apartments. Dust, debris, and construction residue may accumulate in residential HVAC ductwork. We help homeowners, landlords, and property managers determine when cleaning is appropriate. Cleaning recommendations are based on observed conditions, system accessibility, and manufacturer instructions.",
        items: [
          "Supply and return air duct cleaning",
          "Air vents, registers, grilles, and diffuser cleaning",
          "Accessible HVAC component cleaning",
          "Post-construction and renovation duct cleaning",
          "Duct inspection and service documentation",
        ],
      },
      {
        title: "Commercial HVAC Duct Cleaning",
        description:
          "Ventilation Cleaning for Commercial Buildings & Facilities. Boston Hood & Duct supports commercial property owners, facility directors, building managers, and multifamily property operators with HVAC duct cleaning services tailored to building conditions and operational requirements.",
        items: [
          "Commercial supply and return duct cleaning",
          "HVAC ductwork and air handling unit (AHU) assessments",
          "Accessible ventilation component cleaning",
          "Post-renovation and construction dust removal",
          "Project-specific cleaning plans and service reports",
        ],
      },
      {
        title: "Complimentary Overall Environmental Assessment",
        description:
          "As an added value, our cross-functional Safety and Environmental team can provide a complimentary overall environmental assessment during eligible service projects to identify visible conditions or potential safety concerns that may warrant further attention—helping you maintain a cleaner, safer, and healthier environment.",
        items: [
          "Accessible HVAC duct and component inspections",
          "Dust, debris, and visible moisture assessments",
          "Filtration and ventilation maintenance reviews",
          "Post-renovation contamination inspections",
          "Documented findings and safety recommendations",
        ],
      },
      {
        title: "Massachusetts Compliance & Fire Safety",
        description:
          "In Massachusetts, commercial cooking exhaust system inspections and cleaning are addressed under 527 CMR 1.00, Chapter 50, together with applicable NFPA 96 requirements. Individuals and businesses performing regulated inspection and cleaning activities must meet applicable Massachusetts competency and registration requirements.",
      },
    ],
    benefits: [
      {
        title: "More Than a Sticker. A Complete Safety Approach.",
        description:
          "REDCODE EHS goes beyond routine cleaning. Our cross-functional team looks at the bigger safety picture—helping identify risks, correct deficiencies, improve system reliability, maintain compliance documentation, and create a safer environment for your people and property.",
      },
      {
        title: "Assessment-Based Cleaning",
        description:
          "Services tailored to observed conditions and environmental assessments rather than unnecessary routine cleaning.",
      },
      {
        title: "Manufacturer-Aligned Methods",
        description:
          "Cleaning practices selected according to equipment specifications and system configuration.",
      },
      {
        title: "Residential & Commercial Capability",
        description:
          "Solutions for homes, multifamily properties, and commercial buildings across Massachusetts.",
      },
      {
        title: "Documentation & Accountability",
        description:
          "Defined scopes of work, inspection findings, and detailed service records.",
      },
      {
        title: "Clean. Compliant. Reliable. Fire-Safe.",
        description:
          "Complete kitchen exhaust, HVAC duct, and ventilation compliance support designed to protect life and property.",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Consultation & Scope Assessment",
        description:
          "Discuss your property, system type, service concerns, and access requirements.",
      },
      {
        step: 2,
        title: "Inspection & Environmental Review",
        description:
          "Assess accessible ductwork, identify visible contamination or obstructions, and conduct complimentary environmental observations where eligible.",
      },
      {
        step: 3,
        title: "Mechanical Cleaning & Debris Removal",
        description:
          "Apply appropriate methods based on duct materials, system configuration, and manufacturer instructions.",
      },
      {
        step: 4,
        title: "Verification & Documentation",
        description:
          "Review completed work and provide service documentation and maintenance recommendations.",
      },
    ],
  },
  {
    id: "dryer-vent-cleaning",
    slug: "dryer-vent-cleaning",
    title: "Professional Dryer Vent Cleaning & Inspection in Boston, MA",
    subtitle:
      "No misleading $99.99 promotions, hidden fees, or surprise charges. Upfront project pricing with your approval required for any additional work.",
    shortDescription:
      "Professional dryer duct cleaning, lint removal & fire prevention for homes, apartments & commercial properties across Boston and Massachusetts.",
    fullDescription:
      "Boston Hood & Duct provides professional residential and commercial dryer vent cleaning in Boston and throughout Massachusetts. We help homeowners, landlords, property managers, condominium associations, and commercial laundry operators remove combustible lint, address restricted exhaust airflow, and maintain safer, more efficient dryer systems. Safety-Focused Service. Transparent Pricing. No Hidden Fees.",
    iconName: "Wind",
    image: serviceImages.dryerVent,
    badge: "Transparent Upfront Pricing",
    phone: "+1 (857) 800-0890",
    features: [
      "Residential Dryer Vent Cleaning (Houses, Condos, Apartments, Townhouses)",
      "Commercial Dryer Exhaust Cleaning (Laundromats, Hotels, Commercial Facilities)",
      "Multifamily Dryer Duct Cleaning (Coordinated apartment & condo maintenance)",
      "Mechanical Lint Removal (Rotary brushes and high-powered vacuum equipment)",
      "Exterior Vent Cleaning (Accessible wall and rooftop terminations)",
      "Exhaust System Condition Review (Restricted airflow, damage, and obstruction checks)",
    ],
    subServices: [
      {
        title: "Residential Dryer Vent Cleaning",
        description:
          "Lint removal for houses, condominiums, apartments, townhouses, and rental properties.",
      },
      {
        title: "Commercial Dryer Exhaust Cleaning",
        description:
          "Exhaust maintenance for laundromats, hotels, shared laundry rooms, and commercial facilities.",
      },
      {
        title: "Multifamily Dryer Duct Cleaning",
        description:
          "Coordinated cleaning for apartment buildings, condominium associations, and property managers.",
      },
      {
        title: "Mechanical Lint Removal",
        description:
          "Cleaning accessible exhaust ducts, elbows, and connections using suitable rotary brushes and vacuum equipment.",
      },
      {
        title: "Exterior Vent Cleaning",
        description:
          "Clearing accessible wall and rooftop exhaust terminations where safe access is available.",
      },
      {
        title: "Exhaust System Condition Review",
        description:
          "Identifying visible restrictions, damaged ductwork, obstructed outlets, and maintenance concerns.",
      },
    ],
    benefits: [
      {
        title: "Oversight by Safety & Compliance Professionals",
        description:
          "Our services benefit from oversight by a cross-functional team of professionals holding industry-recognized credentials, including CSP, ASP, CHFM, and CHMM, bringing expertise in fire protection, environmental health and safety, facility management, and preventive maintenance to support safe, professional cleaning practices and fire hazard reduction.",
      },
      {
        title: "Residential & Commercial Solutions",
        description:
          "Professional dryer vent cleaning for homeowners, landlords, apartment communities, condominium associations, and commercial laundry operators.",
      },
      {
        title: "Thorough, Professional Cleaning",
        description:
          "Appropriate cleaning methods focused on removing accessible lint and debris while identifying visible exhaust system concerns.",
      },
      {
        title: "Transparent, Upfront Pricing — No Hidden Fees",
        description:
          "We do not advertise misleading $99.99 duct or dryer vent cleaning offers only to add unexpected charges. Our experts review your project requirements and provide a clear, upfront quote before work begins. Any additional work or price change requires your approval.",
      },
      {
        title: "Clear Communication & Practical Recommendations",
        description:
          "We explain visible concerns, outline the agreed service scope, and recommend appropriate maintenance or qualified repairs when necessary.",
      },
      {
        title: "Know the Cost Before We Start",
        description:
          "Pay only for the work you approve. No bait-and-switch offers, no hidden fees, and no surprise charges.",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Discuss the Dryer and Vent Layout",
        description:
          "Review the property type, dryer location, duct routing, and any reported drying or airflow issues.",
      },
      {
        step: 2,
        title: "Inspect Accessible Components",
        description:
          "Check the dryer connection and accessible exhaust path for lint, obstruction, and visible damage.",
      },
      {
        step: 3,
        title: "Remove Lint and Debris",
        description:
          "Clean accessible dryer exhaust ductwork and vent termination using mechanical rotary brushes and vacuum equipment.",
      },
      {
        step: 4,
        title: "Review and Document",
        description:
          "Review the completed service, note visible concerns, verify airflow, and provide maintenance recommendations.",
      },
    ],
  },
];
