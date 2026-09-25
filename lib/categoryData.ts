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
  Zap,
  Flower2,
  Utensils,
  Shield
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
  products?: { name: string; image?: string }[];
}

export const categoryData: CategoryData[] = [
  {
    slug: "agarbatti-perfume",
    name: "Agarbatti Perfume",
    icon: Flame,
    tone: "sage",
    tagline: "Premium fragrance compounds for agarbatti manufacturing.",
    desc: "We supply a wide range of premium fragrance compounds specifically formulated for agarbatti and dhoop manufacturing. Our compounds ensure excellent fragrance retention, strong throw, and consistent burning characteristics.",
    highlights: [
      "Consistent batch-to-batch quality",
      "High fragrance retention",
      "Wide variety of traditional and modern scents",
      "Custom formulations available",
      "Bulk packaging for manufacturers",
    ],
    useCases: [
      {
        title: "Agarbatti Manufacturers",
        body: "High-quality fragrance compounds for consistent and premium agarbatti production.",
      },
      {
        title: "Dhoop and Cone Manufacturers",
        body: "Formulations optimized for dhoop sticks and cones, ensuring a steady and aromatic burn.",
      },
    ],
    supplyOptions: [
      "Bulk containers (5kg, 10kg, 25kg, 50kg)",
      "Custom fragrance blending",
    ],
    faqs: [
      {
        q: "Do you offer custom fragrances?",
        a: "Yes, we can develop custom fragrance profiles based on your specific requirements.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "Please contact us for MOQ details as it varies by product and packaging size.",
      },
    ],
    products: [
      { name: "Rose Agarbatti Perfume" },
      { name: "Lilly Agarbatti Perfume" },
      { name: "Jasmine Agarbatti Perfume" },
      { name: "Rose Gold Agarbatti Perfume" },
      { name: "Mogra Agarbatti Perfume" },
      { name: "Lemon Grass Agarbatti Perfume" },
      { name: "Sandalwood Agarbatti Perfume" },
      { name: "Strawberry Agarbatti Perfume" },
      { name: "Kacha Nimbu Agarbatti Perfume" },
      { name: "Agarbatti Perfume" }
    ]
  },
  {
    slug: "perfume-spray",
    name: "Perfume Spray",
    icon: SprayCan,
    tone: "plum",
    tagline: "High-quality perfume sprays for everyday freshness.",
    desc: "Our perfume spray range is crafted with premium fragrance compounds, providing long-lasting scent and freshness. We also supply packaging components like mist sprayers for brands.",
    highlights: [
      "Deodorant & Body Sprays",
      "Long-lasting fragrance",
      "Mist Sprayer Components",
      "Bulk and Retail Packaging",
      "Custom formulations available"
    ],
    products: [
      { name: "Deodorant Perfume Spray" },
      { name: "White Plastic 19 Mm Mist Sprayers" }
    ],
    useCases: [
      {
        title: "Retail & Distribution",
        body: "Fast-moving everyday products packaged for retail shelves.",
      },
      {
        title: "Private Label",
        body: "Launch your own perfume spray brand with our private-label services.",
      }
    ],
    supplyOptions: [
      "Retail-ready packaged units",
      "Bulk supply for dealers & distributors",
      "Private label with custom label & bottle"
    ],
    faqs: [
      {
        q: "What packaging options are available?",
        a: "We provide various mist sprayers and aerosol cans. Private labeling is also available.",
      }
    ]
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
    slug: "air-freshener",
    name: "Air Freshener",
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
    products: [
      { name: "Cool Air Freshener" },
      { name: "Air Freshener" },
      { name: "Splash Aroma Air Freshener" },
      { name: "Splash Aroma Air Freshener" },
      { name: "Rose Air Freshener" }
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
    slug: "diffuser-oil-and-electric-diffuser",
    name: "Diffuser Oil And Electric Diffuser",
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
    products: [
      { name: "Diffuser Oil" },
      { name: "Lemon Grass Diffuser Oil" },
      { name: "Real Rose Aroma Oil" },
      { name: "Lavender Aroma oil" }
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
    slug: "automobile-polish",
    name: "Automobile Polish",
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
    products: [
      { name: "Shield Miraplate Liquid Car Polish" },
      { name: "Tyre Polish" },
      { name: "Interior Polish" },
      { name: "Dashboard Polish" }
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
    slug: "sanitizer",
    name: "Sanitizer",
    icon: Droplet,
    tone: "plum",
    tagline: "High-quality, effective sanitizers for personal and commercial use.",
    desc: "We manufacture premium hand and surface sanitizers designed to effectively eliminate germs while remaining gentle on the skin. Suitable for hospitals, corporate offices, and everyday personal use.",
    highlights: [
      "Kills 99.9% of germs",
      "Gentle on skin",
      "Available in liquid and gel formats",
      "Bulk supply for commercial spaces",
      "Hospital-grade formulations available"
    ],
    products: [
      { name: "Hand Sanitizer" }
    ],
    useCases: [
      {
        title: "Hospitals & Clinics",
        body: "Reliable sanitization solutions meeting strict hygiene requirements.",
      },
      {
        title: "Corporate Offices",
        body: "Bulk sanitizer supply for office entryways, desks, and common areas.",
      },
      {
        title: "Retail Distribution",
        body: "Retail-ready sanitizer bottles in various sizes for general consumers.",
      }
    ],
    supplyOptions: [
      "Retail units (50ml - 500ml)",
      "Bulk refill cans (5L, 20L)",
      "Private labeling available"
    ],
    faqs: [
      {
        q: "Are the sanitizers alcohol-based?",
        a: "Yes, our standard sanitizers contain the recommended percentage of alcohol for effective germ protection. We also have alcohol-free options on request.",
      }
    ]
  },
  {
    slug: "spa-massage-oil",
    name: "Spa Massage Oil",
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
    products: [
      { name: "Spa Massage Oil" }
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
    slug: "floor-cleaner",
    name: "Floor Cleaner",
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
    products: [
      { name: "Floor Phenyl Cleaner" },
      { name: "Floor Cleaner" }
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
  {
    slug: "shower-gel",
    name: "Shower Gel",
    icon: Droplet,
    tone: "plum",
    tagline: "Luxurious shower gels for a refreshing bathing experience.",
    desc: "Our shower gels are formulated to cleanse gently while leaving a lingering, refreshing fragrance on the skin. Ideal for retail, hospitality amenities, and private label.",
    highlights: [
      "Rich lather and gentle cleansing",
      "Infused with premium fragrances",
      "Suitable for all skin types",
      "Available in bulk and retail sizes",
      "Hotel amenity packaging available"
    ],
    products: [
      { name: "Shower Gel" }
    ],
    useCases: [
      {
        title: "Hospitality & Hotels",
        body: "Premium bathroom amenities for guest rooms.",
      },
      {
        title: "Retail Distribution",
        body: "Attractive retail-ready bottles for supermarkets and beauty stores.",
      },
      {
        title: "Private Label",
        body: "Launch your own line of body care with our private labeling services.",
      }
    ],
    supplyOptions: [
      "Retail units (200ml - 500ml)",
      "Bulk supply (5L, 20L) for refills",
      "Hotel amenity sizes (30ml - 50ml)"
    ],
    faqs: [
      {
        q: "Do you offer custom fragrances for shower gels?",
        a: "Yes, we can develop custom fragrance profiles for bulk and private label orders.",
      }
    ]
  },
  {
    slug: "car-shampoo",
    name: "Car Shampoo",
    icon: CarFront,
    tone: "sage",
    tagline: "Premium car shampoo for a spotless finish.",
    desc: "Our car shampoo is formulated to gently lift dirt and grime without damaging the paint. Ideal for auto detailing and everyday washing.",
    highlights: ["Gentle on paint", "High foaming", "Bulk packaging"],
    products: [{ name: "Car Shampoo" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "car-wash-liquid",
    name: "Car Wash Liquid",
    icon: Droplet,
    tone: "sage",
    tagline: "Effective car wash liquids for professional use.",
    desc: "High-concentration car wash liquids designed for automated car washes and detailing centers.",
    highlights: ["Concentrated formula", "Leaves a shiny finish", "Bulk packaging"],
    products: [{ name: "Car Wash Liquid" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "electric-diffuser",
    name: "Electric Diffuser",
    icon: Zap,
    tone: "plum",
    tagline: "Modern electric diffusers for continuous fragrance.",
    desc: "Reliable electric diffusers perfect for homes, offices, and hospitality environments.",
    highlights: ["Continuous operation", "Elegant design", "Wholesale available"],
    products: [{ name: "Electric Diffuser" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "liquid-handwash",
    name: "Liquid Handwash",
    icon: Droplet,
    tone: "plum",
    tagline: "Gentle and effective liquid handwash.",
    desc: "Our liquid handwash cleans hands effectively while leaving them feeling soft and refreshed.",
    highlights: ["Moisturizing formula", "Multiple fragrances", "Bulk sizes available"],
    products: [{ name: "Liquid Handwash" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    icon: Sparkles,
    tone: "brass",
    tagline: "Powerful toilet cleaning solutions.",
    desc: "Formulated to remove tough stains and provide long-lasting hygiene for commercial and residential use.",
    highlights: ["Stain removal", "Kills germs", "Institutional bulk supply"],
    products: [{ name: "Toilet Cleaner" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "aroma-diffuser-set",
    name: "Aroma Diffuser set",
    icon: Flower2,
    tone: "plum",
    tagline: "Complete aroma diffuser sets for home and office.",
    desc: "Beautifully packaged aroma diffuser sets, perfect for retail and corporate gifting.",
    highlights: ["Complete set", "Premium packaging", "Customizable fragrances"],
    products: [{ name: "Aroma Diffuser set" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "dishwash-cleaner",
    name: "Dishwash Cleaner",
    icon: Utensils,
    tone: "brass",
    tagline: "Tough on grease, gentle on hands.",
    desc: "Our dishwash cleaners effectively cut through grease and grime, leaving dishes sparkling clean.",
    highlights: ["Grease cutting", "Skin friendly", "Available in liquid and gel"],
    products: [{ name: "Dishwash Cleaner" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "room-freshener",
    name: "Room Freshener",
    icon: Wind,
    tone: "brass",
    tagline: "Instantly refresh any room.",
    desc: "Long-lasting room fresheners available in a variety of pleasant fragrances.",
    highlights: ["Instant freshness", "Long-lasting", "Wide variety of scents"],
    products: [{ name: "Room Freshener" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    icon: Sparkles,
    tone: "brass",
    tagline: "Streak-free glass cleaning solutions.",
    desc: "Formulated for streak-free cleaning of glass, mirrors, and other smooth surfaces.",
    highlights: ["Streak-free shine", "Fast drying", "Bulk packaging"],
    products: [{ name: "Glass Cleaner" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "branded-perfume",
    name: "Branded Perfume",
    icon: FlaskConical,
    tone: "plum",
    tagline: "Premium branded perfumes.",
    desc: "High-quality perfumes crafted with exquisite fragrance profiles.",
    highlights: ["Long-lasting", "Premium packaging", "Wide variety of notes"],
    products: [{ name: "Branded Perfume" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  },
  {
    slug: "massage-cream",
    name: "Massage Cream",
    icon: Waves,
    tone: "ink",
    tagline: "Luxurious massage creams for spas.",
    desc: "Formulated to provide the perfect glide for professional massage therapies.",
    highlights: ["Smooth glide", "Moisturizing", "Professional grade"],
    products: [{ name: "Massage Cream" }],
    useCases: [],
    supplyOptions: [],
    faqs: []
  }
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categoryData.find((c) => c.slug === slug);
}
