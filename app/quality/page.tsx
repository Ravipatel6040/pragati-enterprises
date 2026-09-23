import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Swatch from "@/components/Swatch";
import {
  Beaker,
  PackageCheck,
  Truck,
  Settings2,
  ShieldCheck,
  Microscope,
  ClipboardCheck,
  Repeat,
  Wrench,
  Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Manufacturing | Pragati Enterprises",
  description:
    "How Pragati Enterprises manufactures, quality-checks and supplies fragrance, cosmetics, agarbatti and professional care products — every batch, every time.",
};

const processSteps = [
  {
    step: "01",
    icon: Beaker,
    title: "Formulation & Development",
    body:
      "Every product starts with formulation — fragrance blending, compound ratios and raw material selection. We develop and test each formulation for consistency before it enters regular production.",
    detail: "In-house fragrance development and batch testing.",
  },
  {
    step: "02",
    icon: Settings2,
    title: "Controlled Manufacturing",
    body:
      "Products are manufactured under controlled conditions across our ten categories — perfumes, cosmetics, agarbatti, care and cleaning. The same process is followed for every production run.",
    detail: "Process-controlled production for repeatable output.",
  },
  {
    step: "03",
    icon: Microscope,
    title: "Quality Inspection",
    body:
      "Each production batch is checked against the formulation standard — fragrance character, viscosity, appearance and packaging integrity. Non-conforming batches are not dispatched.",
    detail: "Batch-level inspection before any order is packed.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Packaging & Presentation",
    body:
      "Packaging is matched to the product category and order type — retail packs, bulk formats or institutional supply. Custom packaging and private-label options are available.",
    detail: "Retail, bulk and custom packaging formats.",
  },
  {
    step: "05",
    icon: ClipboardCheck,
    title: "Order Verification",
    body:
      "Before dispatch, orders are verified against the original requirement — quantities, SKUs, packaging labels and special instructions. This step prevents errors on large or institutional orders.",
    detail: "Pre-dispatch order accuracy check.",
  },
  {
    step: "06",
    icon: Truck,
    title: "Dispatch & Supply",
    body:
      "Orders are packed securely for dispatch. Repeat bulk buyers receive consistent supply on agreed schedules. We communicate proactively at every stage of large or custom orders.",
    detail: "Scheduled bulk supply and repeat order management.",
  },
];

const commitments = [
  {
    icon: Repeat,
    title: "Batch Consistency",
    body:
      "Our formulations are locked in — the perfume or cleaning product you receive on your fifth order is identical to your first. This matters for institutional and hospitality buyers.",
  },
  {
    icon: Wrench,
    title: "In-House Manufacturing",
    body:
      "We do not outsource production. Every category is manufactured in our own facility, giving us direct control over quality, timing and cost.",
  },
  {
    icon: Award,
    title: "Custom Formulation",
    body:
      "Businesses that need a product built to their specification — specific fragrance, strength, colour or packaging — can work with us directly to develop it.",
  },
  {
    icon: ShieldCheck,
    title: "No Compromise on Standards",
    body:
      "We reject batches that don't meet our quality standard. We'd rather delay a shipment than dispatch product that doesn't perform.",
  },
];

export default function QualityPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Quality & Manufacturing"
        title="From formulation to delivery — every step under our control."
        body="Pragati Enterprises manufactures every product in-house, following a six-step process designed to deliver consistency across every batch and every order."
      />

      {/* Process Steps */}
      <section className="container-x py-20">
        <div className="max-w-lg">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Our manufacturing process.
          </h2>
          <p className="mt-4 text-ink/65">
            Six defined steps — from formulation development through to dispatch.
            Every product category follows the same sequence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div key={s.step} className="flex flex-col rounded-sm border border-ink/10 p-7">
              <div className="flex items-start justify-between">
                <s.icon className="h-6 w-6 text-plum" strokeWidth={1.4} />
                <span className="font-display text-3xl text-ink/10">{s.step}</span>
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/65">{s.body}</p>
              <p className="mt-5 text-xs font-medium text-brass-dark">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Commitment Dark Section */}
      <section className="bg-ink text-cream">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="divider-gold" />
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">
              Quality commitment.
            </h2>
            <p className="mt-5 max-w-md text-cream/70">
              Consistent fragrance and formulation standards, careful packaging
              and quality checks across every product category — so bulk and
              institutional buyers can rely on repeat supply without variation.
            </p>
            <p className="mt-4 max-w-md text-cream/70">
              Custom formulation, fragrance and packaging options are available
              for businesses that need products built around their own brand or
              requirement.
            </p>
          </div>
          <Swatch icon={Beaker} tone="brass" className="aspect-[16/11]" />
        </div>
      </section>

      {/* Four Commitment Cards */}
      <section className="container-x py-20">
        <div className="max-w-lg">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            What we stand for.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {commitments.map((c) => (
            <div key={c.title} className="flex gap-5 rounded-sm border border-ink/10 p-7">
              <c.icon className="mt-1 h-6 w-6 shrink-0 text-plum" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Order Note */}
      <section className="bg-plum text-cream">
        <div className="container-x py-14">
          <h2 className="font-display text-2xl sm:text-3xl">
            Need a custom formulation or private-label product?
          </h2>
          <p className="mt-3 max-w-lg text-cream/70">
            We work directly with businesses to develop products to their
            specification — fragrance profile, product type, strength, packaging
            and labelling. Contact us to discuss your requirement.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-sm bg-cream px-6 py-3.5 text-sm text-ink transition-colors hover:bg-brass-light"
          >
            Discuss a custom requirement →
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
