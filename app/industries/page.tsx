import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Swatch from "@/components/Swatch";
import {
  Hotel,
  Cross,
  Briefcase,
  Landmark,
  CarFront,
  Waves,
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  Repeat,
  Settings2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Pragati Enterprises",
  description:
    "Pragati Enterprises supplies fragrance, care and cleaning products to hotels, hospitals, offices, institutions, automotive businesses and spas across India.",
};

const industries = [
  {
    name: "Hotels & Hospitality",
    icon: Hotel,
    tone: "plum" as const,
    desc: "Room fresheners, fragrance amenities and care products for hospitality chains, boutique hotels and serviced apartments.",
    needs: [
      "Room & linen fresheners",
      "Lobby & common area fragrance",
      "Guest amenity packs",
      "Housekeeping care products",
      "Bulk supply with consistent scent across properties",
    ],
    cta: "Hotels need consistent scent and presentation across every room and property — we supply exactly that.",
  },
  {
    name: "Hospitals & Healthcare",
    icon: Cross,
    tone: "sage" as const,
    desc: "Reliable, bulk-supplied cleaning and care products suited to the strict hygiene requirements of healthcare environments.",
    needs: [
      "Hospital-grade disinfectant cleaners",
      "Odour-neutralising air fresheners",
      "Staff care essentials",
      "Institutional bulk supply",
      "Consistent formulation for compliance",
    ],
    cta: "Healthcare facilities require dependable, repeatable supply of hygiene and care products — we deliver.",
  },
  {
    name: "Offices & Corporates",
    icon: Briefcase,
    tone: "brass" as const,
    desc: "Air fresheners and cleaning supplies for corporate campuses, co-working spaces and commercial office environments.",
    needs: [
      "Reception and common area fragrance",
      "Washroom care and air fresheners",
      "Surface cleaners and disinfectants",
      "Bulk supply for facility management",
      "Branded options for premium offices",
    ],
    cta: "Corporate environments increasingly invest in ambient scent and hygiene — we make it easy to supply at scale.",
  },
  {
    name: "Institutions & Campuses",
    icon: Landmark,
    tone: "ink" as const,
    desc: "Consistent, bulk institutional care and cleaning supply for schools, universities, government buildings and public facilities.",
    needs: [
      "Large-volume cleaning product supply",
      "Floor and surface care formulations",
      "Washroom and sanitation products",
      "Cost-effective bulk pricing",
      "Regular repeat supply schedules",
    ],
    cta: "Large campuses and institutions depend on uninterrupted, affordable bulk supply — we're built for that.",
  },
  {
    name: "Automotive & Detailing",
    icon: CarFront,
    tone: "plum" as const,
    desc: "Professional car and auto care formulations for dealerships, detailing studios, service centres and fleet managers.",
    needs: [
      "Interior cleaner and protectant",
      "Exterior wash and polish",
      "Car air fresheners in bulk",
      "Dashboard and trim care",
      "Bulk supply for workshops",
    ],
    cta: "Auto detailers and dealerships need professional-grade formulations in volume — we have the range and supply capacity.",
  },
  {
    name: "Spas & Wellness",
    icon: Waves,
    tone: "sage" as const,
    desc: "Aromatherapy and spa-grade care products for wellness centres, massage studios and luxury resort spas.",
    needs: [
      "Aromatherapy diffuser oils",
      "Massage and body oils",
      "Spa-grade skincare formulations",
      "Room and treatment area fragrance",
      "Private-label products for spas",
    ],
    cta: "Spas and wellness centres demand premium, consistent sensory products — we manufacture and supply to spec.",
  },
];

const whyB2B = [
  {
    icon: PackageCheck,
    title: "Direct Manufacturer",
    body: "No middlemen, no brokers. You deal directly with us — the people who make your products.",
  },
  {
    icon: Repeat,
    title: "Repeat Supply Ready",
    body: "Built for bulk and repeat orders. Same formulation, same quality, delivered reliably every time.",
  },
  {
    icon: Settings2,
    title: "Customisable",
    body: "Fragrance, packaging and formulation adjusted to your industry, brand or specific requirement.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Industries We Serve"
        title="Fragrance, care and cleaning supply — built for the businesses that need it most."
        body="Pragati Enterprises supplies six key industries with products that match their scale, standard and repeat supply requirement. Whatever your sector, we have the range and the capacity."
      />

      {/* Why B2B Strip */}
      <section className="bg-plum text-cream">
        <div className="container-x grid gap-px overflow-hidden sm:grid-cols-3">
          {whyB2B.map((item) => (
            <div key={item.title} className="bg-plum px-8 py-10">
              <item.icon className="h-6 w-6 text-brass-light" strokeWidth={1.4} />
              <h3 className="mt-4 font-display text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Detail */}
      <section className="container-x py-20">
        <div className="space-y-20">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`grid gap-12 md:grid-cols-2 md:items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Swatch icon={ind.icon} tone={ind.tone} className="aspect-[4/3]" />
              <div>
                <div className="divider-gold bg-plum" />
                <h2 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                  {ind.name}
                </h2>
                <p className="mt-4 text-ink/65">{ind.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {ind.needs.map((need) => (
                    <li key={need} className="flex items-center gap-3 text-sm text-ink/70">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-plum" strokeWidth={1.5} />
                      {need}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm italic text-ink/50">{ind.cta}</p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum"
                >
                  Get a quote for your industry <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Note */}
      <section className="bg-ink text-cream">
        <div className="container-x py-16">
          <div className="divider-gold" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            Don't see your industry listed?
          </h2>
          <p className="mt-4 max-w-xl text-cream/70">
            If you supply fragrance, care or cleaning products to any business
            sector, chances are we can manufacture and supply what you need.
            Send us your requirement — we'll advise on the right products,
            pricing and supply format.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-cream/25 px-6 py-3.5 text-sm text-cream transition-colors hover:border-cream"
          >
            Send your requirement <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
