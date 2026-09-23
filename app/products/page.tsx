import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Swatch from "@/components/Swatch";
import { categoryData } from "@/lib/categoryData";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Pragati Enterprises",
  description:
    "Explore all 10 product categories manufactured by Pragati Enterprises — perfumes, room fresheners, cosmetics, agarbatti, perfume compound, air fresheners, diffuser oil, car care, spa care and institutional care.",
};


export default function ProductsPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Products"
        title="Ten manufacturing categories. One consistent quality standard."
        body="Every category below is manufactured in-house at Pragati Enterprises and is available for retail, bulk and custom / private-label supply. Send an enquiry for pricing, MOQs and available fragrances."
      />

      {/* Intro Strip */}
      <section className="border-b border-ink/10 bg-ink text-cream">
        <div className="container-x grid gap-8 py-10 sm:grid-cols-3 sm:gap-12">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brass-light" strokeWidth={1.4} />
            <p className="text-sm text-cream/75">All 10 categories manufactured fully in-house</p>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brass-light" strokeWidth={1.4} />
            <p className="text-sm text-cream/75">Bulk, retail and private-label supply available</p>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brass-light" strokeWidth={1.4} />
            <p className="text-sm text-cream/75">Custom fragrance & packaging on request</p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryData.map((cat) => (
            <a
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex flex-col"
            >
              <div className="relative">
                <Swatch icon={cat.icon} tone={cat.tone} className="aspect-[4/3]" />
                {cat.badge && (
                  <span className="absolute top-3 left-3 rounded-sm bg-brass px-3 py-1 text-xs font-medium text-ink">
                    {cat.badge}
                  </span>
                )}
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <h2 className="font-display text-xl text-ink group-hover:text-plum transition-colors">{cat.name}</h2>
                <p className="mt-2 text-sm text-ink/65">{cat.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {cat.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-plum underline decoration-plum/30 underline-offset-4 group-hover:decoration-plum">
                  View category details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Supply Options Banner */}
      <section className="bg-ink text-cream">
        <div className="container-x py-16">
          <div className="divider-gold" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            How we supply.
          </h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Pragati Enterprises is a direct manufacturer — there are no
            middlemen or brokers involved. That means better pricing, faster
            response and direct communication from first enquiry to final delivery.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-3">
            <div className="bg-ink p-8">
              <p className="font-display text-2xl text-brass-light">Retail Orders</p>
              <p className="mt-3 text-sm text-cream/65">
                Standard pack sizes available for retail buyers, distributors and resellers. Consistent product and packaging every order.
              </p>
            </div>
            <div className="bg-ink p-8">
              <p className="font-display text-2xl text-brass-light">Bulk / B2B</p>
              <p className="mt-3 text-sm text-cream/65">
                Bulk supply for hotels, hospitals, offices and institutions — with repeat fulfilment and the same quality every time.
              </p>
            </div>
            <div className="bg-ink p-8">
              <p className="font-display text-2xl text-brass-light">Private Label</p>
              <p className="mt-3 text-sm text-cream/65">
                Custom formulation, fragrance selection and branded packaging for businesses building their own product line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
