import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import { BulkOrderForm, BulkOrderFaq } from "@/components/BulkOrderClient";
import {
  Package,
  BadgeCheck,
  Truck,
  Clock,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk Orders | Pragati Enterprises",
  description:
    "Place bulk orders for perfumes, fresheners, cosmetics, agarbatti, car care and institutional cleaning products. Factory-direct pricing, private-label options and pan-India delivery.",
};

const whyBulk = [
  {
    icon: BadgeCheck,
    title: "Factory-Direct Pricing",
    desc: "No middlemen. Get the best price direct from the manufacturer for large volume purchases.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "White-label and private-label packaging available. Your brand, our quality.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "We ship to all major cities and districts across India via reliable logistics partners.",
  },
  {
    icon: Clock,
    title: "Consistent Lead Times",
    desc: "Committed production and dispatch schedules so your supply chain never breaks.",
  },
  {
    icon: FileText,
    title: "GST Invoicing",
    desc: "Proper GST-compliant invoices provided for all bulk orders. Ideal for B2B procurement.",
  },
];

const productCategories = [
  {
    name: "Perfumes & Attars",
    moq: "500 pcs per SKU",
    note: "Fragrance customisation available",
  },
  {
    name: "Room & Air Fresheners",
    moq: "300 pcs per SKU",
    note: "Spray, gel and solid formats",
  },
  {
    name: "Cosmetics & Skincare",
    moq: "500 pcs per SKU",
    note: "Private-label available",
  },
  {
    name: "Agarbatti & Dhoop",
    moq: "50 kg / 2000 pcs",
    note: "Multiple fragrances",
  },
  {
    name: "Car Care Products",
    moq: "200 pcs per SKU",
    note: "Dashboard, tyre, fabric care",
  },
  {
    name: "Spa & Salon Care",
    moq: "300 pcs per SKU",
    note: "Professional grade formulations",
  },
  {
    name: "Household Cleaning",
    moq: "500 litres / 300 pcs",
    note: "Floor cleaners, surface sprays, etc.",
  },
  {
    name: "Institutional Care",
    moq: "1000 litres bulk",
    note: "Hotels, hospitals, offices",
  },
];

export default function BulkOrderPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Bulk Orders"
        title="Order in bulk. Save more. Scale faster."
        body="We supply to distributors, wholesalers, retailers, hotels, institutions and export buyers. Get competitive factory-direct pricing on minimum quantities — across all our product categories."
      />

      {/* Quick CTA Strip */}
      <section className="border-b border-ink/10 bg-plum text-cream">
        <div className="container-x flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <p className="text-sm text-cream/80">
            Need a quick quote? WhatsApp us your product list and quantity.
          </p>
          <a
            href="https://wa.me/910000000000?text=Hi%2C%20I%20want%20to%20place%20a%20bulk%20order%20for%20Pragati%20Enterprises%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-sm bg-cream px-6 py-3 text-sm font-medium text-plum transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp for Quick Quote
          </a>
        </div>
      </section>

      {/* Why Bulk */}
      <section className="bg-cream">
        <div className="container-x py-20">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Why buy in bulk from us?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink/65">
            Direct manufacturing. Transparent pricing. Consistent quality.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBulk.slice(0, 3).map((w) => (
              <div
                key={w.title}
                className="rounded-sm border border-ink/10 bg-white/50 p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-plum/5">
                  <w.icon className="h-5 w-5 text-plum" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {whyBulk.slice(3).map((w) => (
              <div
                key={w.title}
                className="rounded-sm border border-ink/10 bg-white/50 p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-plum/5">
                  <w.icon className="h-5 w-5 text-plum" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Table */}
      <section className="border-t border-b border-ink/10 bg-ink text-cream">
        <div className="container-x py-20">
          <div className="h-px w-14 bg-brass" />
          <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
            Minimum order quantities.
          </h2>
          <p className="mt-4 text-sm text-cream/60">
            Indicative MOQs. Exact quantities confirmed during enquiry.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream/10 text-left text-xs text-cream/40">
                  <th className="pb-3 pr-8 font-medium">Product Category</th>
                  <th className="pb-3 pr-8 font-medium">Minimum Order Qty</th>
                  <th className="pb-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream/5">
                {productCategories.map((p) => (
                  <tr key={p.name} className="group">
                    <td className="py-4 pr-8 text-cream transition-colors group-hover:text-brass-light">
                      {p.name}
                    </td>
                    <td className="py-4 pr-8 font-medium text-brass-light">
                      {p.moq}
                    </td>
                    <td className="py-4 text-cream/50">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-brass-light transition-colors hover:text-brass"
            >
              Browse full product catalogue
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bulk Order Enquiry Form */}
      <section className="bg-cream" id="enquire">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
          {/* Info */}
          <div>
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
              Submit your bulk order enquiry.
            </h2>
            <p className="mt-4 text-sm text-ink/65">
              Tell us what you need — products, quantities, delivery location
              and any custom requirements. We'll get back to you within 1
              business day with pricing and availability.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Factory-direct pricing on confirmed volumes",
                "Private-label and white-label options",
                "GST-compliant invoicing for B2B buyers",
                "Pan-India dispatch with tracking",
                "Flexible payment terms for repeat buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-ink/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Form */}
          <BulkOrderForm />
        </div>
      </section>

      {/* FAQ (client component) */}
      <section className="border-t border-ink/10 bg-cream">
        <div className="container-x py-20">
          <BulkOrderFaq />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
