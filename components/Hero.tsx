import { ArrowRight, MessageCircle, Droplet, Sparkles, Flame } from "lucide-react";
import Swatch from "./Swatch";
import { client } from "@/sanity/lib/client";

export default async function Hero() {
  const hero = await client.fetch(`*[_type == "heroSection"][0]`);
  
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid gap-14 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="text-sm tracking-wide text-brass-dark">
            {hero?.subtitle || "Manufacturer & Supplier since establishment"}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero?.heading || "Fragrance, care and cleaning products, made for every space you look after."}
          </h1>
          <p className="mt-6 max-w-md text-ink/70">
            {hero?.description || "Pragati Enterprises manufactures and supplies perfumes, room fresheners, cosmetics, agarbatti, diffuser oils, car & auto care, spa care, household cleaning and institutional care products — trusted by hotels, hospitals, offices and homes alike."}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={hero?.ctaButtonLink || "/contact"}
              className="flex items-center gap-2 rounded-sm bg-plum px-6 py-3.5 text-cream transition-colors hover:bg-plum-dark"
            >
              {hero?.ctaButtonText || "Request a Quote"} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${hero?.whatsappNumber || "910000000000"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-ink/15 px-6 py-3.5 text-ink transition-colors hover:border-plum hover:text-plum"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Secondary quick links */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="/bulk-order"
              className="flex items-center gap-1.5 text-sm text-ink/60 underline underline-offset-4 decoration-ink/20 transition-colors hover:text-plum hover:decoration-plum"
            >
              Bulk Order Enquiry
            </a>
            <span className="h-3.5 w-px bg-ink/15" />
            <a
              href="/dealership"
              className="flex items-center gap-1.5 text-sm text-ink/60 underline underline-offset-4 decoration-ink/20 transition-colors hover:text-plum hover:decoration-plum"
            >
              Become a Dealer / Distributor
            </a>
          </div>

          {hero?.stats && hero.stats.length > 0 && (
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              {hero.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <dt className="font-display text-2xl text-ink">{stat.value}</dt>
                  <dd className="text-xs text-ink/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <Swatch icon={Droplet} tone="plum" className="aspect-[4/5] translate-y-6" />
            <Swatch icon={Sparkles} tone="brass" className="aspect-[4/5]" />
            <Swatch icon={Flame} tone="sage" className="aspect-[4/5]" />
            <Swatch icon={Droplet} tone="ink" className="aspect-[4/5] translate-y-6" />
          </div>
          <p className="mt-4 text-center text-xs text-ink/40">
            Product photography to be added — sample layout shown
          </p>
        </div>
      </div>
    </section>
  );
}
