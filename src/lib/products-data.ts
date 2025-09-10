export interface Product {
  id: number;
  name: string;
  sku: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  price?: number;
  originalPrice?: number; // optional if not on sale
  rating?: number;
  reviewCount?: number;
  tags: string[];
  sizes?: string[]; // optional if product has sizes
  category: string;
  productType?: string; // e.g., "Diagnostic Equipment"
  subType?: string; // e.g., "Blood Pressure Monitor"
  sterility?: string; // optional, only for medical use
  inStock?: boolean;
  stockCount?: number;
  specifications?: Record<string, string>; // flexible key-value specs
  features?: string[];
}
export const categories = [
  "All Products",
  "Diagnostic Equipment",
  "Protective Equipment",
  "Surgical Instruments",
  "Disposable Supplies",
];

export const products = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    sku: "BP-MON-001",
    description:
      "Accurate and easy-to-use digital blood pressure monitor with large display.",
    image: "",
    tags: ["Monitoring", "Healthcare Devices"],
    sizes: ["Standard"],
    category: "Diagnostic Equipment",
    sterility: "Non-sterile",
  },
  {
    id: 2,
    name: "Pulse Oximeter",
    sku: "OXI-002",
    description:
      "Compact fingertip oximeter for measuring SpO2 and pulse rate.",
    image: "",
    tags: ["Monitoring", "Healthcare Devices"],
    sizes: ["Standard"],
    category: "Diagnostic Equipment",
    sterility: "Non-sterile",
  },
  {
    id: 3,
    name: "Nitrile Examination Gloves",
    sku: "GLV-NIT-003",
    description: "Powder-free nitrile gloves for medical and laboratory use.",
    image: "",
    tags: ["Gloves", "Wipes & Cleaning"],
    sizes: ["Small", "Medium", "Large"],
    category: "Protective Equipment",
    sterility: "Non-sterile",
  },
  {
    id: 4,
    name: "Digital Thermometer",
    sku: "THERM-004",
    description: "Fast and accurate digital thermometer with flexible tip.",
    image: "",
    tags: ["Monitoring", "Thermometers"],
    sizes: ["Standard"],
    category: "Diagnostic Equipment",
    sterility: "Sterile",
  },
  {
    id: 5,
    name: "Stethoscope Professional",
    sku: "STETH-005",
    description: "Professional-grade stethoscope for precise auscultation.",
    image: "",
    tags: ["Monitoring", "Medical Tools"],
    sizes: ["Standard"],
    category: "Diagnostic Equipment",
    sterility: "Non-sterile",
  },
  {
    id: 6,
    name: "Surgical Masks Box",
    sku: "MASK-006",
    description:
      "Box of high-quality disposable surgical masks for protection.",
    image: "",
    tags: ["Masks", "Wipes & Cleaning"],
    sizes: ["Box of 50", "Box of 100"],
    category: "Protective Equipment",
    sterility: "Sterile",
  },
  {
    id: 7,
    name: "Medical Scissors",
    sku: "SCISS-007",
    description:
      "Durable stainless steel scissors for surgical and medical use.",
    image: "",
    tags: ["Medical Tools"],
    sizes: ["10CMS x 1MTRS", "10CMS x 4MTRS"],
    category: "Surgical Instruments",
    sterility: "Sterile",
  },
  {
    id: 8,
    name: "Latex Gloves",
    sku: "GLV-LTX-008",
    description:
      "Comfortable latex gloves suitable for examination and cleaning.",
    image: "",
    tags: ["Gloves", "Wipes & Cleaning"],
    sizes: ["Small", "Medium", "Large"],
    category: "Protective Equipment",
    sterility: "Non-sterile",
  },
  {
    id: 9,
    name: "Disposable Syringes",
    sku: "SYR-009",
    description: "Sterile disposable syringes for medical and laboratory use.",
    image: "",
    tags: ["Syringes", "Medical Supplies"],
    sizes: ["1ml", "5ml", "10ml"],
    category: "Disposable Supplies",
    sterility: "Sterile",
  },
  {
    id: 10,
    name: "Alcohol Prep Pads",
    sku: "PADS-010",
    description:
      "Individually wrapped alcohol pads for cleaning and disinfection.",
    image: "",
    tags: ["Wipes & Cleaning"],
    sizes: ["Box of 100", "Box of 200"],
    category: "Disposable Supplies",
    sterility: "Sterile",
  },
];
