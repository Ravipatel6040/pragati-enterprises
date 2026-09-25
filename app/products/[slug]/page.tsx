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



    {/* Available Products */}
      {cat.products && cat.products.length > 0 && (
        <section className="bg-white border-t border-ink/10">
          <div className="container-x py-20">
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
              Available Products
            </h2>
            <p className="mt-3 max-w-lg text-sm text-ink/65 mb-10">
              Browse the list of available products in this category.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.products.map((product, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-sm border border-ink/10 bg-cream/50 transition-colors hover:border-plum/40 hover:bg-white"
                >
                  {product.image ? (
                    <div className="aspect-[4/3] w-full relative">
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] w-full bg-ink/5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#161D16_1px,transparent_0)] [background-size:16px_16px]" />
                      <span className="text-ink/30 text-sm font-medium z-10">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="p-5 border-t border-ink/5">
                    <h3 className="font-medium text-ink leading-snug">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}





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
