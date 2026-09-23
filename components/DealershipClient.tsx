"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const categories = [
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
    q: "What is the minimum investment required to become a dealer?",
    a: "The initial investment depends on the product categories you choose and your territory size. Our team will share a tailored proposal after reviewing your application.",
  },
  {
    q: "Is there an exclusive territory option?",
    a: "Yes. Exclusive territory dealerships are available in select cities and regions on a first-come, first-served basis, subject to our approval process.",
  },
  {
    q: "What products can I distribute?",
    a: "Dealers have access to our full portfolio — perfumes, fresheners, cosmetics, agarbatti, car care, spa care, household and institutional cleaning products.",
  },
  {
    q: "How are orders placed and delivered?",
    a: "Orders can be placed via phone, WhatsApp or email. Dispatch is from our factory within the agreed lead time, via road transport or courier depending on quantity.",
  },
  {
    q: "Is GST registration mandatory?",
    a: "Yes. All dealers must have a valid GSTIN and be a registered business entity (proprietorship, partnership, LLP or Pvt. Ltd.).",
  },
];

export function DealershipForm() {
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
          Application received!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-ink/65">
          Thank you for your interest. Our dealership team will review your
          application and reach out within 1–2 business days.
        </p>
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
          <label className="text-sm text-ink/60" htmlFor="d-name">
            Full Name *
          </label>
          <input
            id="d-name"
            required
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
        <div>
          <label className="text-sm text-ink/60" htmlFor="d-phone">
            Phone / WhatsApp *
          </label>
          <input
            id="d-phone"
            required
            placeholder="+91 XXXXX XXXXX"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="d-email">
          Email
        </label>
        <input
          id="d-email"
          type="email"
          placeholder="your@email.com"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="d-business">
          Business / Firm Name *
        </label>
        <input
          id="d-business"
          required
          placeholder="Registered business name"
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm text-ink/60" htmlFor="d-city">
            City / District *
          </label>
          <input
            id="d-city"
            required
            placeholder="City or district"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
        <div>
          <label className="text-sm text-ink/60" htmlFor="d-state">
            State *
          </label>
          <input
            id="d-state"
            required
            placeholder="State"
            className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="d-category">
          Product Categories Interested In *
        </label>
        <select
          id="d-category"
          required
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
          <option value="All Categories">All Categories</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-ink/60" htmlFor="d-experience">
          Current Business / Experience (optional)
        </label>
        <textarea
          id="d-experience"
          rows={3}
          placeholder="Describe your existing business, distribution network or sales experience..."
          className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none focus:border-plum"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-plum px-6 py-3.5 text-sm text-cream transition-colors hover:bg-plum-dark"
      >
        Submit Dealership Application
      </button>
      <p className="text-center text-xs text-ink/40">
        * Required fields. We respond within 1–2 business days.
      </p>
    </form>
  );
}

export function DealershipFormSection() {
  return (
    <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
      {/* Left info */}
      <div>
        <div className="divider-gold bg-plum" />
        <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
          Apply for dealership.
        </h2>
        <p className="mt-4 text-sm text-ink/65">
          Fill in the form and our team will contact you within 1–2 business
          days with the next steps and dealership terms.
        </p>

        <ul className="mt-9 space-y-5">
          <li className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
            <div>
              <p className="text-xs text-ink/50">Call / WhatsApp</p>
              <p className="text-sm text-ink">+91 00000 00000</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
            <div>
              <p className="text-xs text-ink/50">Email</p>
              <p className="text-sm text-ink">dealership@pragatienterprises.in</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
            <div>
              <p className="text-xs text-ink/50">Office</p>
              <p className="text-sm text-ink">Business address to be added</p>
            </div>
          </li>
        </ul>
      </div>

      <DealershipForm />
    </div>
  );
}

export function DealershipFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="h-px w-14 bg-brass" />
      <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">
        Frequently asked questions.
      </h2>
      <div className="mt-10 divide-y divide-cream/10">
        {faqs.map((faq, i) => (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="text-sm font-medium text-cream">{faq.q}</span>
              <ChevronDown
                className={`mt-0.5 h-4 w-4 shrink-0 text-brass-light transition-transform ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === i && (
              <p className="mt-3 text-sm text-cream/60">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
