import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Swatch from "@/components/Swatch";
import {
  Factory,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
  Handshake,
  Clock,
  Globe,
  Hotel,
  HeartPulse,
  Building2,
  ShoppingBag,
  CarFront,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pragati Enterprises",
  description:
    "Learn about Pragati Enterprises — our story, mission, vision, manufacturing capabilities and the values that drive everything we make.",
};

const milestones = [
  {
    year: "Est.",
    label: "Company Founded",
    detail: "Started as a small fragrance blending unit with a focus on quality.",
  },
  {
    year: "Phase 2",
    label: "Expanded to Cosmetics & Agarbatti",
    detail:
      "Added in-house manufacturing lines for cosmetic and incense categories.",
  },
  {
    year: "Phase 3",
    label: "Institutional & B2B Supply",
    detail:
      "Began supplying hotels, hospitals, offices and institutional buyers at bulk scale.",
  },
  {
    year: "Today",
    label: "10 Product Categories",
    detail:
      "A complete fragrance, care and cleaning manufacturing operation under one roof.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    body:
      "To manufacture and supply dependable, high-quality fragrance and care products that businesses and households can rely on — every single batch, every order.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body:
      "To be the most trusted full-range manufacturing partner for fragrance, cosmetics and care products across hospitality, healthcare, institutional and retail markets.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    body:
      "Consistent formulation, careful packaging and professional service — from first enquiry through to repeat bulk supply. No shortcuts, no compromises.",
  },
];

const stats = [
  { value: "10+", label: "Product categories manufactured in-house" },
  { value: "6", label: "Industries actively served" },
  { value: "B2B", label: "Bulk & custom private-label supply" },
  { value: "100%", label: "In-house production — no third-party manufacturing" },
];

const capabilities = [
  { icon: Factory, text: "10 manufactured product categories, produced in-house" },
  { icon: TrendingUp, text: "Bulk order and repeat supply capability for institutional buyers" },
  { icon: Users, text: "Fragrance, formulation and packaging customisation" },
  { icon: Globe, text: "Supply to hotels, hospitals, offices and institutions" },
  { icon: Clock, text: "Professional, responsive enquiry-to-delivery service" },
  { icon: Award, text: "Custom / private-label supply on request" },
  { icon: Handshake, text: "Direct manufacturer — no middlemen or brokers" },
  { icon: ShieldCheck, text: "Consistent quality checks across every production batch" },
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="About Us"
        title="Built on consistency, trust and a full-range manufacturing capability."
        body="Pragati Enterprises is a manufacturer and supplier of fragrance, cosmetics, agarbatti and professional care products — produced to a consistent standard and ready to scale with your business."
      />

      {/* Company Overview */}
      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <Swatch icon={Factory} tone="plum" className="aspect-[16/11] order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Who we are.
          </h2>
          <p className="mt-5 text-ink/70">
            Pragati Enterprises is a manufacturing and supply business built to
            serve B2B buyers across India. We produce and supply fragrance,
            cosmetics, agarbatti, household cleaning and professional care
            products — all manufactured in-house under a single quality
            standard.
          </p>
          <p className="mt-4 text-ink/70">
            Our range spans ten categories: perfumes, room fresheners,
            cosmetics, agarbatti, perfume compound, air fresheners, diffuser
            oils, professional car and auto care, spa care products, and hotel,
            hospital, office and institutional care products.
          </p>
          <p className="mt-4 text-ink/70">
            From boutique fragrance orders to large institutional cleaning
            supplies, every category is produced with the same attention to
            quality, packaging and consistency — and can be customised for your
            brand or specific business requirement.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-plum text-cream">
        <div className="container-x grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-plum px-8 py-10">
              <p className="font-display text-4xl text-brass-light">{s.value}</p>
              <p className="mt-2 text-sm text-cream/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Commitment */}
      <section className="bg-ink text-cream">
        <div className="container-x grid gap-px overflow-hidden rounded-sm bg-cream/10 py-0 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-ink p-9">
              <v.icon className="h-7 w-7 text-brass-light" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-3 text-sm text-cream/65">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="container-x py-20">
        <div className="max-w-lg">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Our journey.
          </h2>
          <p className="mt-4 text-ink/65">
            From a single fragrance blending unit to a ten-category manufacturing
            operation — built step by step, with quality at every stage.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <li key={i} className="relative border-l-2 border-brass/30 pl-6">
              <span className="font-display text-sm text-brass-dark">{m.year}</span>
              <h3 className="mt-2 font-display text-lg text-ink">{m.label}</h3>
              <p className="mt-1 text-sm text-ink/60">{m.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Business Capabilities */}
      <section className="bg-cream border-t border-ink/10">
        <div className="container-x py-20">
          <div className="max-w-lg">
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
              Business capabilities.
            </h2>
            <p className="mt-4 text-ink/65">
              Everything you need from a manufacturing partner — under one roof,
              available for enquiry today.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-sm border border-ink/10 p-5"
              >
                <cap.icon className="mt-0.5 h-5 w-5 shrink-0 text-plum" strokeWidth={1.4} />
                <span className="text-sm text-ink/75">{cap.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Industries We Serve */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20">
          <div className="h-px w-14 bg-brass" />
          <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
            Industries we serve.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-cream/60">
            Our products are actively used across six sectors — each with different
            requirements that we're built to meet.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Hotel,
                title: "Hospitality",
                body: "Hotels, resorts and guesthouses — room fresheners, amenity kits, diffuser oils and housekeeping supplies.",
              },
              {
                icon: HeartPulse,
                title: "Healthcare",
                body: "Hospitals, clinics and healthcare facilities — hygiene products, disinfectants and institutional care essentials.",
              },
              {
                icon: Building2,
                title: "Institutional",
                body: "Offices, campuses, factories and large commercial premises — cleaning supplies and care products at scale.",
              },
              {
                icon: ShoppingBag,
                title: "Retail & Distribution",
                body: "FMCG distributors, retailers and e-commerce sellers — consumer-packaged products in consistent quality.",
              },
              {
                icon: CarFront,
                title: "Automotive",
                body: "Car wash operators, detailers and automotive dealerships — professional-grade car care and interior freshening.",
              },
              {
                icon: Sparkles,
                title: "Wellness & Beauty",
                body: "Spas, salons, yoga studios and wellness centres — aromatherapy oils, spa care and personal care products.",
              },
            ].map((ind) => (
              <div
                key={ind.title}
                className="rounded-sm border border-cream/10 p-6 transition-colors hover:border-brass/40"
              >
                <ind.icon
                  className="h-6 w-6 text-brass-light"
                  strokeWidth={1.4}
                />
                <h3 className="mt-4 font-display text-lg text-cream">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm text-cream/60">{ind.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-brass-light transition-colors hover:text-brass"
            >
              See all industries we serve
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream border-t border-ink/10">
        <div className="container-x py-20">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Why businesses choose us.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink/65">
            Direct manufacturing, professional service and the flexibility to scale
            — these are the reasons our buyers keep coming back.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Direct from Manufacturer",
                body: "No brokers or agents. You deal directly with the people who make your products — faster decisions, better pricing.",
              },
              {
                title: "Ten Categories, One Supplier",
                body: "Consolidate your sourcing. From perfumes to institutional cleaning products, we handle all ten categories from one facility.",
              },
              {
                title: "Consistent Quality",
                body: "Every batch goes through the same production process and checks. Your third order is the same quality as your first.",
              },
              {
                title: "Private Label Ready",
                body: "Custom formulation, your branding, your packaging. We're built to support businesses launching their own product lines.",
              },
              {
                title: "Bulk & Institutional Supply",
                body: "We regularly fulfil large-volume orders for hotels, hospitals, offices and chains. Scale is not a problem.",
              },
              {
                title: "Responsive Communication",
                body: "Enquiries answered quickly. Samples dispatched promptly. Repeat orders handled professionally.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-sm border border-ink/10 bg-white/50 p-7 transition-shadow hover:shadow-md"
              >
                <CheckCircle2
                  className="h-5 w-5 text-sage"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-lg text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Leadership Note */}
      <section className="bg-plum text-cream">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Leaf className="mx-auto h-8 w-8 text-brass-light" strokeWidth={1.2} />
            <blockquote className="mt-6 font-display text-2xl leading-relaxed text-cream sm:text-3xl">
              &ldquo;We started Pragati Enterprises with a single belief — that
              quality in manufacturing is not a premium, it&rsquo;s a baseline.
              Every product that leaves our facility has to meet the same
              standard, whether it&rsquo;s a small retail order or a large
              institutional contract.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-cream/60">
              — Founder, Pragati Enterprises
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
