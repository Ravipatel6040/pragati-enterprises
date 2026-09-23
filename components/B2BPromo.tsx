import { Store, Package, ArrowRight, CheckCircle2 } from "lucide-react";

export default function B2BPromo() {
  return (
    <section className="border-t border-ink/10 bg-cream">
      <div className="container-x py-20">
        {/* Section header */}
        <div className="max-w-lg">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Built for business.
          </h2>
          <p className="mt-4 text-sm text-ink/65">
            Whether you're looking to distribute our products across a region or
            order in bulk for your business — we have a clear path for both.
          </p>
        </div>

        {/* Two cards side-by-side */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Dealership Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-ink text-cream">
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-plum opacity-40 blur-3xl" />

            <div className="relative flex flex-1 flex-col p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-plum/30">
                <Store className="h-6 w-6 text-brass-light" strokeWidth={1.4} />
              </div>

              <h3 className="mt-6 font-display text-2xl text-cream">
                Become a Dealer
              </h3>
              <p className="mt-3 text-sm text-cream/65">
                Join our dealer and distributor network. Earn competitive margins
                on our full product range, get dedicated account support and
                access marketing materials — all backed by factory-direct supply.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Attractive trade margins on all categories",
                  "Exclusive territory options available",
                  "Marketing & branding support",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brass-light"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-cream/70">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="/dealership"
                  className="inline-flex items-center gap-2 rounded-sm bg-plum px-6 py-3 text-sm text-cream transition-colors hover:bg-plum-dark"
                >
                  Apply for Dealership
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bulk Order Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream text-ink">
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-brass/20 blur-3xl" />

            <div className="relative flex flex-1 flex-col p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-plum/8">
                <Package className="h-6 w-6 text-plum" strokeWidth={1.4} />
              </div>

              <h3 className="mt-6 font-display text-2xl text-ink">
                Place a Bulk Order
              </h3>
              <p className="mt-3 text-sm text-ink/65">
                Need large quantities for your hotel, hospital, office or
                distribution business? Get factory-direct pricing with
                consistent quality, proper GST invoicing and pan-India delivery.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Factory-direct pricing — no middlemen",
                  "All 10 product categories available",
                  "Private-label & white-label options",
                  "GST-compliant invoicing for B2B",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-ink/70">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/bulk-order"
                  className="inline-flex items-center gap-2 rounded-sm bg-plum px-6 py-3 text-sm text-cream transition-colors hover:bg-plum-dark"
                >
                  Submit Bulk Enquiry
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/bulk-order#enquire"
                  className="inline-flex items-center gap-2 rounded-sm border border-ink/15 px-6 py-3 text-sm text-ink transition-colors hover:border-plum hover:text-plum"
                >
                  View MOQ Table
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-8 text-xs text-ink/45">
          <span>Direct from manufacturer</span>
          <span className="h-3 w-px bg-ink/15" />
          <span>Pan-India supply</span>
          <span className="h-3 w-px bg-ink/15" />
          <span>GST invoicing for all B2B orders</span>
          <span className="h-3 w-px bg-ink/15" />
          <span>Custom fragrance & packaging on request</span>
        </div>
      </div>
    </section>
  );
}
