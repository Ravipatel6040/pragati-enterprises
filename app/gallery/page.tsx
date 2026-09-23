import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import Swatch from "@/components/Swatch";
import CTA from "@/components/CTA";
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
  Factory,
  PackageCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Pragati Enterprises",
  description:
    "A preview of Pragati Enterprises' product range across fragrance, cosmetics, agarbatti, care and cleaning categories. Real product photography coming soon.",
};

const galleryCategories = [
  {
    label: "Perfumes & Room Fresheners",
    items: [
      { icon: Droplet, tone: "plum" as const, caption: "Eau de Parfum range" },
      { icon: Droplet, tone: "brass" as const, caption: "Room freshener sprays" },
    ],
  },
  {
    label: "Fragrance & Diffuser",
    items: [
      { icon: Leaf, tone: "plum" as const, caption: "Reed diffuser oils" },
      { icon: Wind, tone: "brass" as const, caption: "Air freshener range" },
    ],
  },
  {
    label: "Cosmetics & Personal Care",
    items: [
      { icon: Sparkles, tone: "brass" as const, caption: "Cosmetic formulations" },
      { icon: Waves, tone: "ink" as const, caption: "Spa care products" },
    ],
  },
  {
    label: "Agarbatti & Incense",
    items: [
      { icon: Flame, tone: "sage" as const, caption: "Traditional agarbatti" },
      { icon: Flame, tone: "plum" as const, caption: "Premium incense range" },
    ],
  },
  {
    label: "Compound & Formulations",
    items: [
      { icon: FlaskConical, tone: "ink" as const, caption: "Perfume compounds" },
      { icon: FlaskConical, tone: "sage" as const, caption: "Bulk fragrance supply" },
    ],
  },
  {
    label: "Care & Cleaning",
    items: [
      { icon: SprayCan, tone: "brass" as const, caption: "Household cleaning" },
      { icon: Building2, tone: "plum" as const, caption: "Institutional care" },
      { icon: CarFront, tone: "sage" as const, caption: "Car & auto care" },
    ],
  },
  {
    label: "Manufacturing & Packaging",
    items: [
      { icon: Factory, tone: "ink" as const, caption: "In-house production facility" },
      { icon: PackageCheck, tone: "brass" as const, caption: "Packaging & dispatch" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Gallery"
        title="Products across 10 categories — all manufactured in-house."
        body="This gallery previews our full product range. Each tile represents a product category manufactured at Pragati Enterprises. Real product and facility photography will be added shortly."
      />

      {/* Notice Banner */}
      <div className="bg-brass/10 border-b border-brass/20">
        <div className="container-x py-4">
          <p className="text-sm text-brass-dark">
            <span className="font-medium">Photography note:</span> These placeholder tiles represent our product range. High-quality product photography is being prepared and will replace this layout soon.
          </p>
        </div>
      </div>

      {/* Categorised Gallery */}
      <section className="container-x py-20">
        <div className="space-y-16">
          {galleryCategories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-6 flex items-center gap-4">
                <div className="divider-gold bg-plum" style={{ width: "2.5rem" }} />
                <h2 className="font-display text-xl text-ink">{cat.label}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="group">
                    <Swatch
                      icon={item.icon}
                      tone={item.tone}
                      className="aspect-square"
                    />
                    <p className="mt-2.5 text-sm text-ink/55 group-hover:text-ink/80 transition-colors">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photography Request Panel */}
      <section className="bg-ink text-cream">
        <div className="container-x py-16">
          <div className="divider-gold" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            Want to see specific products?
          </h2>
          <p className="mt-4 max-w-xl text-cream/70">
            If you'd like to see samples, product specifications or packaging
            options for any category, send us an enquiry. We can share product
            details, current formulation notes and packaging options directly.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-cream/25 px-6 py-3.5 text-sm text-cream transition-colors hover:border-cream"
          >
            Request product information →
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
