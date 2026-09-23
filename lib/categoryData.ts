import {
  Droplet,
  Sparkles,
  Flame,
  FlaskConical,
  Wind,
  Leaf,
  CarFront,
  Waves,
  SprayCan,
  Building2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Tone = "plum" | "brass" | "sage" | "ink";

export interface CategoryData {
  slug: string;
  name: string;
  icon: LucideIcon;
  tone: Tone;
  badge?: string;
  tagline: string;
  desc: string;
  highlights: string[];
  useCases: { title: string; body: string }[];
  supplyOptions: string[];
  faqs: { q: string; a: string }[];
}

export const categoryData: CategoryData[] = [
  {
    slug: "perfumes-room-fresheners",
    name: "Perfumes & Room Fresheners",
    icon: Droplet,
    tone: "plum",
    badge: "Most Popular",
    tagline: "Long-lasting fragrance for every space and every occasion.",
    desc: "From personal perfumes and colognes to home and room freshener sprays, this is our most sought-after category. Every formulation is crafted in-house using quality fragrance compounds — available in standard and custom scent profiles for retail, bulk and private-label supply.",
    highlights: [
      "Eau de Parfum & Cologne",
      "Room Spray & Linen Spray",
      "Pocket & Travel Sizes",
      "Long-lasting Fragrance Compounds",
      "Custom Fragrance Blending",
      "Retail & Bulk Pack Sizes",
    ],
    useCases: [
      {
        title: "Retail & Distribution",
        body: "Perfumes and room fresheners are among the fastest-moving FMCG categories. We supply distributors with consistently packaged, well-fragranced products ready for shelf.",
      },
      {
        title: "Hospitality & Hotels",
        body: "Room freshener sprays and linen sprays for hotels, guesthouses and serviced apartments. Signature scents available on request.",
      },
      {
        title: "Private Label",
        body: "Launch your own perfume or room freshener brand with our white-label and private-label service — your bottle, your label, our formulation.",
      },
      {
        title: "Gift & Corporate",
        body: "Curated fragrance sets and gift packs for corporate gifting, event favours and festive gifting programs.",
      },
    ],
    supplyOptions: [
      "Retail-ready packaged units",
      "Bulk supply for dealers & distributors",
      "Private label with custom label & bottle",
      "Custom fragrance on request (MOQ applies)",
    ],
    faqs: [
      {
        q: "What fragrance options are available?",
        a: "We carry a wide range of fragrance profiles — floral, woody, musky, fresh and oriental. Custom fragrance blending is available with a minimum order quantity.",
      },
      {
        q: "Can I get my own brand label on the bottles?",
        a: "Yes. Private-label and white-label options are available. Share your design artwork and we'll handle printing and application.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "MOQ is typically 500 units per SKU for packaged perfumes. Room freshener MOQs start from 300 units. Exact quantities shared at enquiry.",
      },
    ],
  },
  {
    slug: "cosmetics",
    name: "Cosmetics",
    icon: Sparkles,
    tone: "brass",
    tagline: "Personal care formulations built for consistent quality.",
    desc: "Our cosmetics range covers personal care and grooming products manufactured to consistent formulation standards. From skin care essentials to grooming products, each item is produced in-house and available for branded, white-label or bulk supply.",
    highlights: [
      "Skin Care Formulations",
      "Grooming Essentials",
      "Personal Care Range",
      "Private Label Options",
      "Bulk Packaging Available",
      "Custom Formulations on Request",
    ],
    useCases: [
      {
        title: "Beauty Retailers",
        body: "Cosmetic products packaged for shelf-ready retail — consistent formulation, good presentation and competitive pricing.",
      },
      {
        title: "Salons & Parlours",
        body: "Professional-use personal care and grooming products for salon use, available in bulk formats at competitive rates.",
      },
      {
        title: "Private Label Brands",
        body: "Build your own cosmetics brand with our white-label service. We handle formulation, filling and packaging to your specification.",
      },
      {
        title: "Corporate & Institutional",
        body: "Standard personal care amenities for office, factory and institutional settings — supplied in bulk at volume pricing.",
      },
    ],
    supplyOptions: [
      "Retail-packaged cosmetic units",
      "Bulk supply for distributors",
      "Private-label under your brand",
      "Custom formulation (MOQ applies)",
    ],
    faqs: [
      {
        q: "What types of cosmetic products do you manufacture?",
        a: "We manufacture skin care formulations and personal grooming products. Contact us for the full current product list.",
      },
      {
        q: "Are private-label cosmetics available?",
        a: "Yes. Private-label with your own branding is available across most cosmetic SKUs with a minimum quantity requirement.",
      },
      {
        q: "What are the MOQs for cosmetics?",
        a: "Typically 500 units per SKU for packaged cosmetics. Exact MOQs depend on the specific product — confirmed at enquiry.",
      },
    ],
  },
  {
    slug: "agarbatti",
    name: "Agarbatti",
    icon: Flame,
    tone: "sage",
    tagline: "Traditional incense crafted with premium fragrances.",
    desc: "Our agarbatti (incense sticks) and dhoop range is available in a wide selection of traditional and premium fragrances, multiple stick lengths and retail or bulk pack formats. Manufactured in-house for consistent quality, fragrance throw and burn time.",
    highlights: [
      "Traditional & Premium Fragrance Blends",
      "Multiple Stick Lengths",
      "Retail & Bulk Pack Sizes",
      "Custom Fragrance Available",
      "Dhoop Cones & Cups",
      "Export-Quality Packing Options",
    ],
    useCases: [
      {
        title: "Retail & Wholesale",
        body: "Agarbatti is a high-frequency purchase product with strong repeat demand. We supply distributors and wholesalers in large pack and carton quantities.",
      },
      {
        title: "Religious & Spiritual Retailers",
        body: "Traditional fragrance blends including rose, sandalwood, jasmine and more — suited for puja shops, temples and spiritual goods retailers.",
      },
      {
        title: "Hospitality & Wellness",
        body: "Premium agarbatti and dhoop for hotels, spas, resorts and yoga studios where fragrance ambience is a part of the guest experience.",
      },
      {
        title: "Export",
        body: "Export-quality packing available for buyers supplying South Asian diaspora markets and international wellness retailers.",
      },
    ],
    supplyOptions: [
      "Retail packs (10–25 sticks)",
      "Bulk cartons for wholesale",
      "Custom fragrance blends (MOQ applies)",
      "Private-label packaging available",
    ],
    faqs: [
      {
        q: "What fragrances are available in agarbatti?",
        a: "We offer a wide range including rose, sandalwood, jasmine, mogra, chandan, lavender and many more. Custom fragrances available on request.",
      },
      {
        q: "Can I order in very large bulk quantities?",
        a: "Yes. We regularly supply large volume carton orders to distributors. Pricing is volume-based — share your requirement for a quote.",
      },
      {
        q: "Is private-label agarbatti available?",
        a: "Yes. We can produce agarbatti under your brand name with custom packaging. MOQ and timeline shared at enquiry.",
      },
    ],
  },
  {
    slug: "perfume-compound",
    name: "Perfume Compound",
    icon: FlaskConical,
    tone: "ink",
    badge: "B2B Specialist",
    tagline: "Consistent base compounds for downstream fragrance manufacturing.",
    desc: "We supply fragrance compounds in bulk to manufacturers who incorporate them into their own product lines — agarbatti makers, cosmetic manufacturers, air freshener brands and more. Every compound is produced in-house with consistent strength, character and reproducibility batch after batch.",
    highlights: [
      "Bulk Fragrance Compounds",
      "Consistent Batch Reproducibility",
      "Wide Range of Scent Profiles",
      "Manufactured In-House",
      "Suitable for FMCG Manufacturing",
      "Custom Compound Development",
    ],
    useCases: [
      {
        title: "Agarbatti Manufacturers",
        body: "Supply fragrance compounds to incense manufacturers requiring consistent and potent base materials at bulk pricing.",
      },
      {
        title: "Air Freshener Brands",
        body: "Fragrance compounds formulated for use in spray, gel and solid air freshener manufacturing with strong and lasting scent throw.",
      },
      {
        title: "Cosmetic Manufacturers",
        body: "Skin-safe fragrance compounds for incorporation into personal care and cosmetic product formulations.",
      },
      {
        title: "Room Freshener OEMs",
        body: "Bulk perfume compounds used by OEM manufacturers for room spray, linen spray and household freshener production.",
      },
    ],
    supplyOptions: [
      "Bulk supply (minimum 10–50 kg lots)",
      "Multiple fragrance profiles available",
      "Custom compound development",
      "Consistent batch specifications",
    ],
    faqs: [
      {
        q: "What is the minimum quantity for perfume compound?",
        a: "Minimum order is typically 10–50 kg depending on the compound. Large volume pricing available for 100 kg+ orders.",
      },
      {
        q: "Can you develop a custom fragrance compound to our specification?",
        a: "Yes. We can develop custom fragrance compounds to match a reference or your brief. Lead time and cost shared after discussion.",
      },
      {
        q: "Are your compounds suitable for skin-contact applications?",
        a: "We manufacture both cosmetic-grade (skin-safe) and non-cosmetic compounds. Please specify intended use when enquiring.",
      },
    ],
  },
  {
    slug: "air-fresheners",
    name: "Air Fresheners",
    icon: Wind,
    tone: "brass",
    tagline: "Long-lasting freshness for homes, offices and vehicles.",
    desc: "Our air freshener range covers spray and gel formats designed for homes, vehicles and commercial spaces. Manufactured in-house with fragrance compounds that deliver long-lasting performance — available in a range of scents and suitable for retail, bulk and private-label supply.",
    highlights: [
      "Spray & Gel Formats",
      "Home, Car & Office Use",
      "Long-Lasting Fragrance",
      "Multiple Scent Variants",
      "Retail & Bulk Pack Sizes",
      "Custom Scent Available",
    ],
    useCases: [
      {
        title: "Retail & General Trade",
        body: "Air freshener sprays and gels for kirana stores, supermarkets and e-commerce. Fast-moving everyday product with repeat purchase behaviour.",
      },
      {
        title: "Automotive & Car Wash",
        body: "Car air fresheners for automotive accessory shops, car wash centres and auto detailing businesses.",
      },
      {
        title: "Offices & Institutions",
        body: "Bulk supply of air freshener sprays for office premises, reception areas, washrooms and common areas.",
      },
      {
        title: "Hospitality",
        body: "Room and corridor freshener sprays for hotels, guesthouses and serviced apartments — available in signature fragrances.",
      },
    ],
    supplyOptions: [
      "Retail spray & gel units",
      "Bulk supply for distributors",
      "Custom fragrance on request",
      "Private-label options available",
    ],
    faqs: [
      {
        q: "What formats of air fresheners do you supply?",
        a: "We supply spray (aerosol and pump) and gel formats. Both are available in a range of fragrances.",
      },
      {
        q: "Can I get a custom scent for my brand?",
        a: "Yes. Custom fragrance options are available with minimum quantity requirements. Contact us to discuss your brief.",
      },
      {
        q: "What are typical MOQs for air fresheners?",
        a: "MOQ starts from 300 units per SKU. Volume pricing available for 1000+ units.",
      },
    ],
  },
  {
    slug: "diffuser-oil",
    name: "Diffuser Oil",
    icon: Leaf,
    tone: "plum",
    tagline: "Signature fragrance oils for reed and electric diffusers.",
    desc: "Our diffuser oils are formulated for use in reed and electric diffusers, offering long-lasting, room-filling fragrance performance. Available in signature and custom blends, they are particularly well-suited for hospitality, wellness and high-end residential applications.",
    highlights: [
      "Reed & Electric Diffuser Oils",
      "Signature Fragrance Blends",
      "Hospitality Grade Quality",
      "Custom Scent Blending",
      "Private Label Labelling",
      "Bulk Supply Available",
    ],
    useCases: [
      {
        title: "Hotels & Resorts",
        body: "Signature lobby and room diffuser oils that define the scent identity of luxury hospitality spaces. Custom blends available.",
      },
      {
        title: "Spas & Wellness Centres",
        body: "Aromatherapy-inspired diffuser oils that create a calming, therapeutic atmosphere in treatment rooms and relaxation areas.",
      },
      {
        title: "Home Décor Retail",
        body: "Retail-packaged diffuser oil sets for lifestyle and home décor stores — attractive packaging and quality fragrance.",
      },
      {
        title: "Corporate Gifting",
        body: "Diffuser oil gift sets for corporate gifting programs, Diwali gifts and premium wellness hampers.",
      },
    ],
    supplyOptions: [
      "Retail-bottled diffuser oils",
      "Bulk supply (litres) for manufacturers",
      "Custom fragrance blending",
      "Private-label bottling available",
    ],
    faqs: [
      {
        q: "Are your diffuser oils compatible with all diffuser types?",
        a: "Our oils are formulated for standard reed diffusers and most electric cold-air diffusers. Ultrasonic diffuser compatibility depends on the specific formulation — mention this when enquiring.",
      },
      {
        q: "Can I create a signature scent for my hotel or spa?",
        a: "Yes. We offer custom fragrance development for hospitality clients. The process involves scent brief, sample rounds and approval before bulk production.",
      },
      {
        q: "What is the minimum order for diffuser oils?",
        a: "Retail-packed units: minimum 300 bottles. Bulk (litres): minimum 20 litres. Custom blends require higher MOQs.",
      },
    ],
  },
  {
    slug: "car-auto-care",
    name: "Car & Auto Care Products",
    icon: CarFront,
    tone: "sage",
    tagline: "Professional-grade formulations for automotive care.",
    desc: "Our car and auto care range provides professional-grade interior and exterior cleaning, protection and freshening solutions. Formulated for automotive dealerships, detailing centres, car wash operators and FMCG distribution — available in retail and bulk formats.",
    highlights: [
      "Interior Cleaner & Protectant",
      "Exterior Wash Formulas",
      "Tyre & Trim Dressings",
      "Car Air Freshener Range",
      "Dashboard Care Products",
      "Bulk Supply for Dealers",
    ],
    useCases: [
      {
        title: "Car Wash Operators",
        body: "Bulk supply of exterior wash and interior cleaning formulas for car wash businesses. Consistent quality ensures repeatable results.",
      },
      {
        title: "Auto Detailing Centres",
        body: "Professional-grade interior cleaners, protectants and trim dressings for detailing studios and garages.",
      },
      {
        title: "Automotive Dealerships",
        body: "Pre-delivery inspection (PDI) and showroom care products — interior fresheners and surface protectants for dealerships.",
      },
      {
        title: "FMCG Distribution",
        body: "Car care products packaged for retail distribution through auto accessories shops and general trade channels.",
      },
    ],
    supplyOptions: [
      "Retail units for auto accessories shops",
      "Bulk supply for car wash & detailing",
      "Dealership bulk orders",
      "Private-label options available",
    ],
    faqs: [
      {
        q: "What car care products do you manufacture?",
        a: "Interior cleaners, dashboard protectants, exterior wash formulas, tyre dressings, trim care and car air fresheners. Full product list on request.",
      },
      {
        q: "Can I get bulk supply for a car wash business?",
        a: "Yes. We regularly supply car wash operators in bulk. Pricing is volume-based with standard container and drum options.",
      },
      {
        q: "Are private-label car care products available?",
        a: "Yes. Most products in this range can be supplied under your brand with custom labels and packaging.",
      },
    ],
  },
  {
    slug: "spa-care",
    name: "Spa Care Products",
    icon: Waves,
    tone: "ink",
    tagline: "Aromatherapy and spa-grade care for wellness businesses.",
    desc: "Our spa care range includes aromatherapy oils, massage oils and spa-grade personal care formulations — designed for professional wellness businesses, massage centres and luxury hospitality. Manufactured with quality ingredients and available for institutional and private-label supply.",
    highlights: [
      "Aromatherapy Oils",
      "Massage & Body Oils",
      "Spa-Grade Formulations",
      "Relaxation & Therapeutic Blends",
      "Hotel & Resort Amenities",
      "Custom Branding Available",
    ],
    useCases: [
      {
        title: "Spa & Wellness Centres",
        body: "Professional massage oils, aromatherapy blends and body care products for use in treatment rooms. Supplied in salon-size and bulk formats.",
      },
      {
        title: "Luxury Hotels & Resorts",
        body: "Premium spa amenity products — oils, scrubs and care sets — for in-room placement and spa facility use.",
      },
      {
        title: "Yoga Studios & Retreat Centres",
        body: "Aromatherapy and body care products suited to yoga, meditation and wellness retreat environments.",
      },
      {
        title: "Beauty Salons",
        body: "Body and massage oils for professional salon treatments — consistent quality formulations at competitive pricing.",
      },
    ],
    supplyOptions: [
      "Professional/salon-size units",
      "Institutional bulk supply",
      "Hotel amenity packs",
      "Private-label spa products",
    ],
    faqs: [
      {
        q: "What types of spa care products do you manufacture?",
        a: "Aromatherapy oils, massage oils, body oils and spa-grade personal care products. Contact us for the current product list.",
      },
      {
        q: "Can you supply hotel spa amenity kits?",
        a: "Yes. We supply spa amenity products for hotels and resorts — in-room and treatment room formats, with custom branding available.",
      },
      {
        q: "Are the ingredients natural or synthetic?",
        a: "We use a blend of natural and synthetic ingredients depending on the formulation. Specific ingredient information available on request.",
      },
    ],
  },
  {
    slug: "household-cleaning",
    name: "Household Cleaning Products",
    icon: SprayCan,
    tone: "brass",
    tagline: "Effective everyday cleaning for homes and general trade.",
    desc: "Our household cleaning range covers floor cleaners, surface sprays, disinfectants and multi-purpose formulations — manufactured for consistent everyday performance. Available in retail and bulk pack sizes for general trade distribution, institutional supply and private-label production.",
    highlights: [
      "Floor & Surface Cleaners",
      "Multi-Purpose Sprays",
      "Disinfectant Formulations",
      "Fragrance-Added Options",
      "Retail & Bulk Pack Sizes",
      "Custom Fragrance Variants",
    ],
    useCases: [
      {
        title: "FMCG Distribution",
        body: "Household cleaning products packaged for kirana stores, supermarkets and general trade distribution. Fast-moving, consistent product.",
      },
      {
        title: "Institutional Buyers",
        body: "Bulk supply of floor cleaners and disinfectants for schools, offices, factories and commercial premises.",
      },
      {
        title: "Private-Label Brands",
        body: "White-label household cleaning products for brands building their own line in the home care segment.",
      },
      {
        title: "Facility Management",
        body: "Cleaning concentrates and ready-to-use formulations for facility management companies servicing large premises.",
      },
    ],
    supplyOptions: [
      "Retail packs (500ml – 2L)",
      "Bulk drums & containers",
      "Concentrates for dilution",
      "Private-label options available",
    ],
    faqs: [
      {
        q: "What cleaning products do you manufacture?",
        a: "Floor cleaners, surface sprays, disinfectants and multi-purpose cleaning formulations. Full range shared on request.",
      },
      {
        q: "Are your cleaning products fragrance-added?",
        a: "Most products are available in fragrance-added variants (floral, citrus, fresh etc.). Fragrance-free options also available.",
      },
      {
        q: "What is the minimum order for bulk cleaning products?",
        a: "Bulk supply starts from 200 litres / 300 retail units depending on product type. Volume pricing available for larger orders.",
      },
    ],
  },
  {
    slug: "hotel-hospital-institution",
    name: "Hotel, Hospital & Institution Care",
    icon: Building2,
    tone: "plum",
    badge: "Institutional",
    tagline: "Bulk hygiene and care supply for large institutions.",
    desc: "We are a trusted supplier for institutional buyers across hospitality, healthcare and commercial sectors. Our institutional care range includes hygiene products, amenity packs, cleaning supplies and care essentials — formulated and packaged for the high-frequency, large-volume demands of hotels, hospitals, offices and campuses.",
    highlights: [
      "Hotel Amenity Packs",
      "Hospital-Grade Hygiene Products",
      "Office & Campus Supply",
      "Large-Volume Ordering",
      "Bulk Cleaning & Hygiene",
      "Custom Institutional Branding",
    ],
    useCases: [
      {
        title: "Hotels & Resorts",
        body: "In-room amenity kits, housekeeping supplies, lobby fresheners and laundry care products for hotel and resort operations of all sizes.",
      },
      {
        title: "Hospitals & Clinics",
        body: "Hospital-grade hygiene products, surface disinfectants and patient care amenities for healthcare facilities with strict quality requirements.",
      },
      {
        title: "Corporate Offices",
        body: "Washroom amenities, cleaning supplies and freshener products for office premises — supplied on a regular replenishment schedule.",
      },
      {
        title: "Schools & Campuses",
        body: "Bulk supply of cleaning, hygiene and care products for educational institutions and large residential campuses.",
      },
    ],
    supplyOptions: [
      "Institutional bulk supply",
      "Hotel amenity kits (branded & generic)",
      "Hospital-grade hygiene products",
      "Custom institutional branding",
    ],
    faqs: [
      {
        q: "Do you supply to hospitals and healthcare facilities?",
        a: "Yes. We supply hygiene and care products to hospitals, clinics and healthcare institutions. Products can be formulated to specific hygiene standards on request.",
      },
      {
        q: "Can hotel amenity products carry the hotel's own branding?",
        a: "Yes. We offer custom branded amenity packs with your hotel logo and colour scheme. MOQ applies.",
      },
      {
        q: "How do we set up a regular supply arrangement?",
        a: "Contact us with your product list, volumes and delivery frequency. We set up a supply schedule and provide a long-term pricing agreement.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categoryData.find((c) => c.slug === slug);
}
