import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pragati Enterprises",
  description:
    "Get in touch with Pragati Enterprises for enquiries, bulk orders, pricing and custom supply requests. Call, WhatsApp or fill in the form.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000",
    sub: "Mon – Sat, 9 am to 6 pm",
    href: "tel:+910000000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    sub: "Quick enquiries and product questions",
    href: "https://wa.me/910000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "enquiry@pragatienterprises.in",
    sub: "We reply within one business day",
    href: "mailto:enquiry@pragatienterprises.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Saturday",
    sub: "9:00 am – 6:00 pm IST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your requirement."
        body="Whether you're placing a bulk order, requesting pricing, asking about custom supply or enquiring about a specific product — we're ready to help. Reach us by phone, WhatsApp, email or the form below."
      />

      {/* Contact Info Strip */}
      <section className="border-b border-ink/10 bg-ink text-cream">
        <div className="container-x grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((c) => (
            <div key={c.label} className="bg-ink px-8 py-10">
              <c.icon className="h-6 w-6 text-brass-light" strokeWidth={1.4} />
              <p className="mt-4 text-xs text-cream/50">{c.label}</p>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-1 block font-display text-base text-cream hover:text-brass-light transition-colors"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-1 font-display text-base text-cream">{c.value}</p>
              )}
              <p className="mt-1 text-sm text-cream/55">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Component */}
      <Contact />

      {/* What to Include in Enquiry */}
      <section className="bg-cream border-t border-ink/10">
        <div className="container-x py-16">
          <div className="max-w-xl">
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
              What to include in your enquiry.
            </h2>
            <p className="mt-4 text-sm text-ink/65">
              The more detail you share, the faster we can respond with the right pricing
              and product recommendation.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Product category or type you're interested in",
                "Approximate quantity or order volume",
                "Whether you need retail packs, bulk or private-label supply",
                "Any specific fragrance preferences or formulation requirements",
                "Your delivery location or region",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container-x pb-20">
        <div className="flex aspect-[21/9] w-full items-center justify-center gap-2 rounded-sm border border-ink/10 bg-plum/5 text-ink/50">
          <MapPin className="h-5 w-5" strokeWidth={1.4} />
          <span className="text-sm">
            Google Maps — business address will be embedded once confirmed
          </span>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
