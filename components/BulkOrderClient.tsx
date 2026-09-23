"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, MessageCircle } from "lucide-react";

const productCategories = [
  "Perfumes & Attars",
  "Room & Air Fresheners",
  "Cosmetics & Skincare",
  "Agarbatti & Dhoop",
  "Car Care Products",
  "Spa & Salon Care",
  "Household Cleaning",
  "Institutional Care",
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ) for bulk orders?",
    a: "MOQ varies by product category — typically 300–500 units per SKU for packaged goods and 50–1000 kg or litres for raw/bulk supply. Exact MOQs are shared after reviewing your requirement.",
  },
  {
    q: "Can I get private-label / white-label packaging?",
    a: "Yes. We offer private-label and white-label packaging for most product categories. Minimum quantities apply. Share your branding requirements and we'll guide you through the process.",
  },
  {
    q: "How long does delivery take for bulk orders?",
    a: "Standard production + dispatch lead time is 7–21 working days depending on quantity and product type. Express options may be available for stock items.",
  },
  {
    q: "Do you offer credit terms for bulk buyers?",
    a: "Credit terms are considered on a case-by-case basis for established buyers. First orders are generally on advance payment. Please discuss during your enquiry.",
  },
  {
    q: "Is sample availability possible before bulk ordering?",
    a: "Yes, samples can be arranged for evaluation before committing to bulk production. Sample terms and charges will be shared upon request.",
  },
  {
    q: "What are the payment methods accepted?",
    a: "We accept bank transfer (NEFT/RTGS/IMPS), UPI and cheques. Full advance payment is required for new buyers; part-advance for repeat customers.",
  },
];

export function BulkOrderForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-ink/10 bg-white/40 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-sage" strokeWidth={1.2} />
        <h3 className="mt-5 font-display text-2xl text-ink">
          Enquiry received!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-ink/65">
          Thank you for your bulk order enquiry. Our team will review your
          requirement and respond within 1 business day with pricing and
          availability.
        </p>
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-sm bg-plum px-5 py-3 text-sm text-cream hover:bg-plum-dark transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Also chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-sm border border-ink/10 bg-white/40 p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm text-ink/60" htmlFor="bo-name">
            Full Name *
          </label>
          <input
            id="bo-name"
            required
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
        <div>
          <label className="text-sm text-ink/60" htmlFor="bo-phone">
            Phone / WhatsApp *
          </label>
          <input
            id="bo-phone"
            required
            placeholder="+91 XXXXX XXXXX"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="bo-email">
          Email
        </label>
        <input
          id="bo-email"
          type="email"
          placeholder="your@company.com"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="bo-company">
          Company / Business Name
        </label>
        <input
          id="bo-company"
          placeholder="Your company or trade name"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="bo-category">
          Product Category *
        </label>
        <select
          id="bo-category"
          required
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        >
          <option value="">Select product category</option>
          {productCategories.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
          <option value="Multiple Categories">Multiple Categories</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm text-ink/60" htmlFor="bo-quantity">
            Approximate Quantity *
          </label>
          <input
            id="bo-quantity"
            required
            placeholder="e.g. 1000 pcs / 500 litres"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
        <div>
          <label className="text-sm text-ink/60" htmlFor="bo-delivery">
            Delivery City / State *
          </label>
          <input
            id="bo-delivery"
            required
            placeholder="City, State"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="bo-type">
          Order Type
        </label>
        <select
          id="bo-type"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        >
          <option value="">Select order type</option>
          <option value="Branded (Pragati label)">
            Branded (Pragati label)
          </option>
          <option value="White-label / Private label">
            White-label / Private label
          </option>
          <option value="Bulk / Unpackaged">Bulk / Unpackaged</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="bo-notes">
          Additional Requirements
        </label>
        <textarea
          id="bo-notes"
          rows={3}
          placeholder="Fragrance preferences, specific formulation, custom packaging details, frequency of order, etc."
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-plum px-6 py-3.5 text-sm text-cream transition-colors hover:bg-plum-dark"
      >
        Submit Bulk Order Enquiry
      </button>
      <p className="text-center text-xs text-ink/40">
        * Required fields. We respond within 1 business day.
      </p>
    </form>
  );
}

export function BulkOrderFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="divider-gold bg-plum" />
      <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
        Common questions.
      </h2>
      <div className="mt-10 divide-y divide-ink/10">
        {faqs.map((faq, i) => (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="text-sm font-medium text-ink">{faq.q}</span>
              <ChevronDown
                className={`mt-0.5 h-4 w-4 shrink-0 text-plum transition-transform ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === i && (
              <p className="mt-3 text-sm text-ink/60">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
