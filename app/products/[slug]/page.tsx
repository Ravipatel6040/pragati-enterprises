import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Swatch from "@/components/Swatch";
import { categoryData, getCategoryBySlug } from "@/lib/categoryData";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";

/* ── Static params for Next.js build ── */
export function generateStaticParams() {
  return categoryData.map((c) => ({ slug: c.slug }));
}

/* ── SEO Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.name} | Products | Pragati Enterprises`,
    description: cat.desc,
  };
}

/* ── Page ── */
export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="border-b border-ink/10 bg-ink text-cream">
        <div className="container-x py-16 sm:py-20">
          <a
            href="/products"
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-cream/50 hover:text-brass-light transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            All Products
          </a>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {cat.badge && (
                <span className="inline-block rounded-sm bg-brass px-3 py-1 text-xs font-medium text-ink">
                  {cat.badge}
                </span>
              )}
              <p className="mt-3 text-sm tracking-wide text-brass-light">
                Product Category
              </p>
              <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
                {cat.name}
              </h1>
              <p className="mt-4 max-w-lg text-cream/70">{cat.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-plum px-5 py-3 text-sm text-cream transition-colors hover:bg-plum-dark"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/910000000000?text=Hi%2C+I+am+interested+in+${encodeURIComponent(cat.name)}+from+Pragati+Enterprises.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-cream/20 px-5 py-3 text-sm text-cream transition-colors hover:border-cream/40"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Visual swatch */}
            <div className="hidden lg:block">
              <Swatch icon={cat.icon} tone={cat.tone} className="aspect-[4/3] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="bg-cream">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
          <div>
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
              About this category.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{cat.desc}</p>
          </div>

          <div>
            <div className="divider-gold bg-brass" />
            <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
              What we offer.
            </h2>
            <ul className="mt-5 space-y-3">
              {cat.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-plum"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-ink/75">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-b border-ink/10 bg-ink text-cream">
        <div className="container-x py-20">
          <div className="h-px w-14 bg-brass" />
          <h2 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
            Who buys this.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-cream/60">
            This category serves a wide range of buyers — from retail distributors to
            institutional buyers.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cat.useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-sm border border-cream/10 p-6 transition-colors hover:border-brass/40"
              >
                <h3 className="font-display text-lg text-brass-light">
                  {uc.title}
                </h3>
                <p className="mt-2 text-sm text-cream/65">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Options */}
      <section className="bg-cream border-b border-ink/10">
        <div className="container-x py-20">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
            How we supply.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-ink/65">
            We supply direct from our manufacturing facility with no middlemen — better
            pricing, faster response.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cat.supplyOptions.map((opt) => (
              <div
                key={opt}
                className="flex items-center gap-4 rounded-sm border border-ink/10 bg-white/50 px-6 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-plum" />
                <span className="text-sm text-ink/80">{opt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl">
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
              Common questions.
            </h2>
            <div className="mt-8 space-y-6">
              {cat.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-sm border border-ink/10 bg-white/50 p-6"
                >
                  <h3 className="font-display text-base text-ink">{faq.q}</h3>
                  <p className="mt-2 text-sm text-ink/65">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-plum text-cream">
        <div className="container-x py-16">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-cream sm:text-3xl">
                Ready to place an order?
              </h2>
              <p className="mt-2 text-sm text-cream/70">
                Share your quantity, delivery location and any custom requirements.
                We'll respond within 1 business day.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-cream px-6 py-3 text-sm font-medium text-plum transition-opacity hover:opacity-90"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/bulk-order"
                className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3 text-sm text-cream transition-colors hover:border-cream/60"
              >
                Bulk Order Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="border-t border-ink/10 bg-cream">
        <div className="container-x py-16">
          <p className="text-sm text-ink/50">Explore other categories</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categoryData
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <a
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="rounded-sm border border-ink/10 bg-white/60 px-4 py-2 text-xs text-ink/70 transition-colors hover:border-plum/30 hover:bg-plum/5 hover:text-plum"
                >
                  {c.name}
                </a>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
