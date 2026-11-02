import { ServiceArea } from "@/types";

/**
 * Service areas across Massachusetts as specified by Boston Hood & Duct:
 * - Boston & Greater Boston
 * - MetroWest & Central Massachusetts
 * - North Shore & Merrimack Valley
 * - South Shore & Southeastern Massachusetts
 * - Western Massachusetts
 */
export const serviceAreas: ServiceArea[] = [
  {
    name: "Boston & Greater Boston",
    county: "Suffolk & Norfolk Counties",
    description: "Core service territory for commercial kitchen hood cleaning, NFPA 96 inspections, residential air duct cleaning, and commercial HVAC maintenance.",
    popularSpots: [
      "Boston",
      "Cambridge",
      "Somerville",
      "Brookline",
      "Newton",
      "Wellesley",
      "Waltham",
      "Quincy",
      "Braintree",
      "Dedham",
      "Needham",
    ],
    responseTime: "Rapid Dispatch",
    isPrimary: true,
  },
  {
    name: "MetroWest & Central Massachusetts",
    county: "Middlesex & Worcester Counties",
    description: "Comprehensive air duct cleaning, commercial ventilation maintenance, and restaurant kitchen exhaust grease removal.",
    popularSpots: [
      "Framingham",
      "Natick",
      "Marlborough",
      "Worcester",
      "Shrewsbury",
    ],
    responseTime: "Full Area Coverage",
    isPrimary: true,
  },
  {
    name: "North Shore & Merrimack Valley",
    county: "Essex & Middlesex Counties",
    description: "Serving restaurants, residential communities, condominiums, and commercial facilities throughout the North Shore and Merrimack Valley.",
    popularSpots: [
      "Salem",
      "Lynn",
      "Peabody",
      "Beverly",
      "Lowell",
      "Lawrence",
      "Haverhill",
    ],
    responseTime: "Scheduled & Rapid Service",
    isPrimary: false,
  },
  {
    name: "South Shore & Southeastern Massachusetts",
    county: "Plymouth & Bristol Counties",
    description: "Professional residential and commercial air duct cleaning, dryer vent lint removal, and kitchen exhaust compliance inspections.",
    popularSpots: [
      "Plymouth",
      "Brockton",
      "Weymouth",
      "Hingham",
      "Taunton",
    ],
    responseTime: "Scheduled Service",
    isPrimary: false,
  },
  {
    name: "Western Massachusetts",
    county: "Hampden & Hampshire Counties",
    description: "Specialized HVAC duct cleaning, ventilation assessments, and commercial kitchen fire code compliance services across Western MA.",
    popularSpots: [
      "Springfield",
      "Chicopee",
      "Holyoke",
      "Northampton",
    ],
    responseTime: "Project-Based Dispatch",
    isPrimary: false,
  },
];
