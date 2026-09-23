import { MessageCircle, ArrowRight, Package, Store } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-plum text-cream">
      <div className="container-x py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">
              Ready to order, distribute or supply?
            </h2>
            <p className="mt-3 max-w-md text-cream/70">
              Send your requirement and quantity — we respond within 1 business
              day with pricing, availability and next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-sm bg-cream px-6 py-3.5 text-sm text-ink transition-colors hover:bg-brass-light"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/bulk-order"
              className="flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm transition-colors hover:border-cream"
            >
              <Package className="h-4 w-4" /> Bulk Order
            </a>
            <a
              href="/dealership"
              className="flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm transition-colors hover:border-cream"
            >
              <Store className="h-4 w-4" /> Become a Dealer
            </a>
          </div>
        </div>

        {/* Sub-link row */}
        <div className="mt-8 border-t border-cream/10 pt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-cream/50 transition-colors hover:text-cream"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Quick enquiry on WhatsApp
          </a>
          <span className="h-3.5 w-px bg-cream/15 self-center" />
          <a
            href="/products"
            className="text-xs text-cream/50 transition-colors hover:text-cream"
          >
            Browse all product categories →
          </a>
        </div>
      </div>
    </section>
  );
}
