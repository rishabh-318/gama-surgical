import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const categoriesData = [
    {
      name: "Bandages & Support Products",
      description:
        "Provides strong support and compression for injuries with maximum comfort.",
      tags: [
        "Crepe Bandage",
        "Elastic Adhesive Bandage",
        "Plaster",
        "Gauze Bandage",
        "Kinesiology Tape",
        "FK IV Fixation Film",
      ],
      icon: "Bandage",
    },
    {
      name: "Cotton & Wound Care Products",
      description:
        "Soft, absorbent products for safe wound protection and healing.",
      tags: [
        "Gauze Roll",
        "Swab (Sterile/Non-Sterile)",
        "Combine Dressing",
        "Sof-Roll",
        "Eye Pad",
        "Eye Pad (Detectable)",
      ],
      icon: "Droplet",
    },
    {
      name: "Drapes & Surgical Sheets",
      description:
        "Sterile coverings to maintain hygiene during medical procedures.",
      tags: [
        "Eye Drape",
        "Cling Drape",
        "Hip U Drape",
        "Knee O Drape",
        "Plain Sheet",
        "Disposable Bed Sheet",
        "Pillow Cover",
      ],
      icon: "Sheet",
    },
    {
      name: "Surgical Kits",
      description:
        "Pre-packed kits for safe, fast and infection-free surgeries.",
      tags: ["HIV Kit", "Paracent Kit", "THR Kit", "TKR Kit", "First Aid Kit"],
      icon: "BriefcaseMedical",
    },
    {
      name: "Surgical Instruments & Accessories",
      description: "Reliable tools designed for precision and medical safety.",
      tags: [
        "Skin Stapler",
        "Staple Remover",
        "Prep Razor",
        "Pump",
        "BP Monitor Bulb",
        "Kory Tray",
        "Uro Pan",
        "Bed Pan",
      ],
      icon: "Scalpel",
    },
    {
      name: "Apparel & Protective Wear",
      description:
        "Protective clothing for doctors and patients with high safety.",
      tags: [
        "Surgeon Gown",
        "Scrub Suit",
        "Bouffant Cap",
        "Mask",
        "Shoe Cover",
        "Disposable Apron",
        "Examination Gloves",
      ],
      icon: "Shirt",
    },
    {
      name: "Patient Hygiene & Comfort",
      description:
        "Gentle products for daily hygiene and patient comfort care.",
      tags: ["Baby Wipes", "Adult Wipes", "Under Pad", "Tissue Roll"],
      icon: "Heart",
    },
    {
      name: "Adhesive Tapes & Fixation",
      description: "Strong, skin-friendly tapes for secure medical fixation.",
      tags: [
        "Adhesive Tape USP",
        "Micropore Tape",
        "PE Tape",
        "Transparent PE Tape",
        "Steam Indicator Tape",
      ],
      icon: "Tape",
    },
    {
      name: "Waste Management & Sterilization",
      description:
        "Safe disposal and sterilization to prevent infection spread.",
      tags: [
        "Sharp Container",
        "Surgery Drape",
        "Biohazard Bag",
        "Waste Carry Bag",
      ],
      icon: "Trash2",
    },
    {
      name: "Catheters & Drainage Products",
      description: "Comfortable and safe catheters for medical drainage use.",
      tags: [
        "Foley Balloon Catheter (2-way)",
        "Silicone Foley Catheter (2-way)",
        "Nebulizer Mask",
      ],
      icon: "Droplet",
    },
    {
      name: "Diagnostics & Monitoring",
      description: "Accurate tools for health check and patient monitoring.",
      tags: ["BP Monitor", "Thermometer", "Pulse Oximeter", "Stethoscope"],
      icon: "Activity",
    },
  ];

  for (const category of categoriesData) {
    await prisma.category.updateMany({
      where: { name: category.name },
      data: {
        description: category.description,
        tags: category.tags,
        icon: category.icon,
      },
    });
  }

  console.log("✅ All categories updated successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
