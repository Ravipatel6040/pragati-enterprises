import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import {
  DealershipFormSection,
  DealershipFaq,
} from "@/components/DealershipClient";
import {
  Store,
  TrendingUp,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  BadgePercent,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dealership & Distribution | Pragati Enterprises",
  description:
    "Become a dealer or distributor for Pragati Enterprises. Earn attractive margins, get marketing support and access our full product range — perfumes, fresheners, cosmetics, agarbatti and more.",
};

const benefits = [
  {
    icon: BadgePercent,
    title: "Competitive Margins",
    desc: "Earn attractive trade margins on every product category — perfumes, fresheners, cosmetics, agarbatti and more.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "Direct-from-factory dispatch with consistent lead times and priority fulfilment for registered dealers.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality Assured",
    desc: "All products are manufactured under strict quality control at our in-house facility. Zero compromise on standards.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Support",
    desc: "Access product catalogues, brochures, digital assets and promotional materials at no extra cost.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Account Manager",
    desc: "A single point of contact for orders, grievances and business queries — available 6 days a week.",
  },
  {
    icon: Store,
    title: "Exclusive Territory Options",
    desc: "Select territories available for exclusive dealership. Grow your business without direct competition.",
  },
];

const categories = [
  "Perfumes & Attars",
  "Room & Air Fresheners",
  "Cosmetics & Skincare",
  "Agarbatti & Dhoop",
  "Car Care Products",
  "Spa & Salon Care",
  "Household Cleaning",
  "Institutional Care",
];

const steps = [
  {
    num: "01",
    title: "Submit Application",
    desc: "Fill the dealership enquiry form below with your business details and coverage area.",
  },
  {
    num: "02",
    title: "Evaluation & Call",
    desc: "Our team reviews your application and schedules a brief discussion to understand your market.",
  },
  {
    num: "03",
    title: "Agreement & Onboarding",
    desc: "We share dealer terms, margin structure and sign the dealership agreement.",
  },
  {
    num: "04",
    title: "Start Selling",
    desc: "Receive your first stock, marketing kit and account manager introduction. You're ready to go.",
  },
];

export default function DealershipPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Dealership & Distribution"
        title="Partner with Pragati. Grow your business."
        body="Join our growing network of dealers and distributors across India. We offer attractive margins, reliable supply and full marketing support to help you build a profitable business."
      />

      {/* Benefits Grid */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="container-x py-20">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Why partner with us?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink/65">
            We've built our dealer program around one goal: making it easy and
            profitable for you to sell quality products.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-sm border border-ink/10 bg-white/50 p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-plum/5">
                  <b.icon className="h-5 w-5 text-plum" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-ink text-cream">
        <div className="container-x py-16">
          <div className="lg:flex lg:items-start lg:gap-20">
            <div className="lg:w-1/3">
              <div className="h-px w-14 bg-brass" />
              <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
                Products you can distribute.
              </h2>
              <p className="mt-4 text-sm text-cream/60">
                Choose one category or build a multi-category portfolio. We
                support both focused and diversified dealer models.
              </p>
              <a
                href="/products"
                className="mt-7 inline-flex items-center gap-2 text-sm text-brass-light transition-colors hover:text-brass"
              >
                View all products
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center gap-2 rounded-sm border border-cream/10 px-4 py-3.5"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-brass-light"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs text-cream/80">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="container-x py-20">
          <div className="text-center">
            <div className="divider-gold mx-auto bg-plum" />
            <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
              How to become a dealer.
            </h2>
            <p className="mt-4 text-sm text-ink/60">
              Four simple steps to get started.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-start">
                <span className="font-display text-4xl text-plum/20">
                  {s.num}
                </span>
                <h3 className="mt-3 font-display text-lg text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form (client component) */}
      <section className="bg-cream" id="apply">
        <DealershipFormSection />
      </section>

      {/* FAQ (client component) */}
      <section className="border-t border-ink/10 bg-ink text-cream">
        <div className="container-x py-20">
          <DealershipFaq />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
