import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const categoriesData = [
  { name: "Bandages & Support Products", description: "Provides strong support and compression for injuries with maximum comfort.", tags: ["Crepe Bandage", "Elastic Adhesive Bandage", "Plaster", "Gauze Bandage", "Kinesiology Tape", "FK IV Fixation Film"], icon: "Bandage" },
  { name: "Cotton & Wound Care Products", description: "Soft, absorbent products for safe wound protection and healing.", tags: ["Gauze Roll", "Swab (Sterile/Non-Sterile)", "Combine Dressing", "Sof-Roll", "Eye Pad", "Eye Pad (Detectable)"], icon: "Droplet" },
  { name: "Drapes & Surgical Sheets", description: "Sterile coverings to maintain hygiene during medical procedures.", tags: ["Eye Drape", "Cling Drape", "Hip U Drape", "Knee O Drape", "Plain Sheet", "Disposable Bed Sheet", "Pillow Cover"], icon: "Sheet" },
  { name: "Surgical Kits", description: "Pre-packed kits for safe, fast and infection-free surgeries.", tags: ["HIV Kit", "Paracent Kit", "THR Kit", "TKR Kit", "First Aid Kit"], icon: "BriefcaseMedical" },
  { name: "Surgical Instruments & Accessories", description: "Reliable tools designed for precision and medical safety.", tags: ["Skin Stapler", "Staple Remover", "Prep Razor", "Pump", "BP Monitor Bulb", "Kory Tray", "Uro Pan", "Bed Pan"], icon: "Scalpel" },
  { name: "Apparel & Protective Wear", description: "Protective clothing for doctors and patients with high safety.", tags: ["Surgeon Gown", "Scrub Suit", "Bouffant Cap", "Mask", "Shoe Cover", "Disposable Apron", "Examination Gloves"], icon: "Shirt" },
  { name: "Patient Hygiene & Comfort", description: "Gentle products for daily hygiene and patient comfort care.", tags: ["Baby Wipes", "Adult Wipes", "Under Pad", "Tissue Roll"], icon: "Heart" },
  { name: "Adhesive Tapes & Fixation", description: "Strong, skin-friendly tapes for secure medical fixation.", tags: ["Adhesive Tape USP", "Micropore Tape", "PE Tape", "Transparent PE Tape", "Steam Indicator Tape"], icon: "Tape" },
  { name: "Waste Management & Sterilization", description: "Safe disposal and sterilization to prevent infection spread.", tags: ["Sharp Container", "Surgery Drape", "Biohazard Bag", "Waste Carry Bag"], icon: "Trash2" },
  { name: "Catheters & Drainage Products", description: "Comfortable and safe catheters for medical drainage use.", tags: ["Foley Balloon Catheter (2-way)", "Silicone Foley Catheter (2-way)", "Nebulizer Mask"], icon: "Droplet" },
  { name: "Diagnostics & Monitoring", description: "Accurate tools for health check and patient monitoring.", tags: ["BP Monitor", "Thermometer", "Pulse Oximeter", "Stethoscope"], icon: "Activity" },
];

// A few sample products so the /products listing isn't empty
const sampleProducts = [
  { slug: "crepe-bandage", name: "Crepe Bandage", description: "High-quality elastic crepe bandage for firm support and compression.", size: "10cm x 4m", categoryName: "Bandages & Support Products" },
  { slug: "sterile-gauze-swab", name: "Sterile Gauze Swab", description: "Absorbent sterile gauze swabs for wound cleaning and dressing.", size: "5cm x 5cm", categoryName: "Cotton & Wound Care Products" },
  { slug: "surgeon-gown", name: "Disposable Surgeon Gown", description: "SMS non-woven sterile surgeon gown with breathable fabric.", size: "Large", categoryName: "Apparel & Protective Wear" },
  { slug: "first-aid-kit", name: "First Aid Kit", description: "Compact pre-packed first aid kit for emergency wound care.", size: "Standard", categoryName: "Surgical Kits" },
  { slug: "pulse-oximeter", name: "Fingertip Pulse Oximeter", description: "Accurate SpO2 and pulse rate monitor with OLED display.", size: "One size", categoryName: "Diagnostics & Monitoring" },
  { slug: "micropore-tape", name: "Micropore Surgical Tape", description: "Gentle, skin-friendly paper tape for secure dressing fixation.", size: "1 inch", categoryName: "Adhesive Tapes & Fixation" },
];

async function main() {
  // Categories: only create if missing (keep it idempotent)
  const catByName: Record<string, string> = {};
  for (const c of categoriesData) {
    const existing = await prisma.category.findFirst({ where: { name: c.name } });
    const cat = existing
      ? await prisma.category.update({ where: { id: existing.id }, data: { description: c.description, tags: c.tags, icon: c.icon } })
      : await prisma.category.create({ data: c });
    catByName[c.name] = cat.id;
  }
  console.log(`✅ Categories ready: ${Object.keys(catByName).length}`);

  // Products
  let created = 0;
  for (const p of sampleProducts) {
    const existing = await prisma.product.findFirst({ where: { slug: p.slug } });
    if (existing) continue;
    await prisma.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        description: p.description,
        size: p.size,
        categoryIds: catByName[p.categoryName] ? [catByName[p.categoryName]] : [],
      },
    });
    created++;
  }
  console.log(`✅ Sample products created: ${created}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
