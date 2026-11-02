import { BlogPost } from "@/types";
import { serviceImages } from "@/data/serviceImages";

export const blogPosts: BlogPost[] = [
  {
    id: "nfpa-96-boston-guide",
    slug: "nfpa-96-boston-restaurant-guide",
    title: "NFPA 96 Compliance Guide: What Boston Restaurant Operators Need to Know",
    excerpt: "Navigating commercial kitchen fire prevention codes, inspection frequencies, and Boston Fire Department compliance rules to protect your establishment.",
    date: "October 10, 2026",
    readTime: "6 min read",
    category: "Fire Safety & Codes",
    author: {
      name: "David Sullivan",
      role: "Lead Certified Hood Cleaning Specialist"
    },
    image: serviceImages.kitchenHood,
    tags: ["NFPA 96", "Boston Fire Department", "Restaurant Compliance", "Fire Prevention"],
    content: [
      "Commercial cooking creates significant quantities of grease-laden vapors that condense along the interior surfaces of kitchen hoods, filters, ductwork, and exhaust blowers. In Massachusetts, commercial kitchen fire codes are anchored by NFPA Standard 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations).",
      "For Boston restaurant operators, staying compliant isn't just a best practice—it's a legal requirement enforced by the Boston Fire Department (BFD) and the Inspectional Services Department (ISD). A single uncleaned duct riser can harbor hundreds of pounds of solid fuel, transforming a standard cookline flare-up into a multi-alarm structural fire within minutes.",
      "Key compliance mandates include: ensuring all baffle filters are cleaned and in place during cooking, cleaning the entire exhaust system from hood to rooftop termination down to bare metal at prescribed intervals, affixing official inspection certificates to the hood canopy, and maintaining written proof of every service for municipal fire marshals.",
      "Setting your kitchen up on an automated preventive cleaning schedule eliminates the risk of missed deadlines, failed surprise inspections, or denied insurance coverage."
    ]
  },
  {
    id: "signs-exhaust-fan-failing",
    slug: "5-signs-exhaust-fan-is-failing",
    title: "5 Warning Signs Your Commercial Kitchen Exhaust Fan Is About to Fail",
    excerpt: "Learn how to spot early signs of rooftop exhaust fan motor burnout, grease imbalance, and airflow restrictions before a catastrophic mid-service breakdown.",
    date: "September 28, 2026",
    readTime: "5 min read",
    category: "Equipment Maintenance",
    author: {
      name: "Marcus Miller",
      role: "Senior Exhaust System Technician"
    },
    image: serviceImages.kitchenHood,
    tags: ["Exhaust Fans", "Rooftop Ventilation", "Kitchen Equipment", "Preventive Maintenance"],
    content: [
      "There are few kitchen emergencies more frustrating than an exhaust fan dying in the middle of a packed Friday night dinner service. The line immediately fills with thick smoke, temperatures skyrocket past 110°F, and managers are forced to shut down cookline operations.",
      "Fortunately, rooftop exhaust blowers rarely fail without giving off warning signs first. The primary culprit is almost always uneven grease buildup on the centrifugal impeller wheel.",
      "Warning Sign 1: Noticeable vibration humming through kitchen ceilings or upstairs dining areas. As grease cakes unevenly onto spinning blades, severe mechanical imbalance wears down bearings.",
      "Warning Sign 2: Persistent grease pooling or black staining on the commercial roof membrane surrounding the fan base.",
      "Warning Sign 3: High-pitched belt squealing or slipping during fan startup and operation.",
      "Warning Sign 4: Weak draw and lingering cooking smoke in the kitchen despite fans running at full power.",
      "Warning Sign 5: Overheated motor housing and tripped electrical circuit breakers. Regular degreasing and belt tensioning prevents costly emergency fan motor replacements."
    ]
  },
  {
    id: "how-clean-hoods-lower-insurance",
    slug: "how-clean-hoods-lower-insurance-premiums",
    title: "How Routine Commercial Hood Cleanings Lower Insurance Premiums",
    excerpt: "Discover why insurance underwriters scrutinize your commercial kitchen maintenance records and how certified cleanings prevent claim denials.",
    date: "August 15, 2026",
    readTime: "4 min read",
    category: "Business & Insurance",
    author: {
      name: "Elena Rostova",
      role: "Commercial Risk Consultant"
    },
    image: serviceImages.kitchenHood,
    tags: ["Insurance", "Risk Management", "Commercial Kitchens", "Cost Savings"],
    content: [
      "Commercial property and liability insurance premiums for restaurants have climbed steeply over the past five years. Restaurant kitchens are considered high-hazard commercial environments, with cooking equipment responsible for roughly 61% of all restaurant structure fires.",
      "When commercial underwriters review your insurance policy, one of the first documents requested is your commercial hood cleaning service history.",
      "Carriers want to verify that you employ a qualified, fully insured hood cleaning company that documents service down to bare metal with timestamped photo verification.",
      "More importantly, if a fire ever does occur, the insurance investigator's primary goal is determining the ignition path. If an investigator uncovers that grease accumulation in duct risers exceeded the 0.078-inch NFPA threshold and routine cleanings were skipped, carriers can invoke policy neglect clauses to deny settlement payouts.",
      "Maintaining an uninterrupted compliance portfolio with Boston Hood & Duct protects both your physical property and your financial bottom line."
    ]
  },
  {
    id: "preparing-for-boston-fire-inspection",
    slug: "preparing-for-boston-fire-marshal-inspection",
    title: "A Restaurant Owner's Checklist for Passing Boston Fire Marshal Inspections",
    excerpt: "A practical guide to ensure your hoods, suppression systems, access panels, and emergency cut-offs pass city inspections with zero citations.",
    date: "July 22, 2026",
    readTime: "7 min read",
    category: "Fire Safety & Codes",
    author: {
      name: "David Sullivan",
      role: "Lead Certified Hood Cleaning Specialist"
    },
    image: serviceImages.kitchenHood,
    tags: ["Boston ISD", "Fire Marshal", "Checklist", "Inspection Prep"],
    content: [
      "Boston Fire Department and ISD inspectors hold restaurant operators to some of the strictest commercial fire safety benchmarks in the United States. Older historic buildings in neighborhoods like the North End, Back Bay, and Downtown have unique architectural considerations that make fire containment especially critical.",
      "Here is the essential checklist every Boston kitchen manager should review prior to inspection:",
      "1. Verify that your hood certification sticker is current and clearly legible on the exterior hood canopy.",
      "2. Check that all baffle grease filters are seated tightly at a 45-degree angle with no gaps or missing filters.",
      "3. Ensure the grease collection cups at the bottom ends of the hood gutters are emptied and free of standing grease.",
      "4. Confirm that the manual pull station for the fire suppression system is unobstructed and clearly marked.",
      "5. Inspect rooftop grease containment to ensure grease is not spilling onto building roofs or storm drains.",
      "Boston Hood & Duct provides our clients with complete photo logs and certificates ready to present to any fire official upon entry."
    ]
  }
];
