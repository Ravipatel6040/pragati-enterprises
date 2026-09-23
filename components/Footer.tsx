import { Instagram, Facebook, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Quality & Manufacturing", href: "/quality" },
  { label: "Dealership / Distribution", href: "/dealership" },
  { label: "Bulk Orders", href: "/bulk-order" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl text-cream">Pragati Enterprises</p>
          <p className="mt-3 max-w-xs text-sm">
            Manufacturer &amp; supplier of perfumes, fresheners, cosmetics,
            agarbatti and professional care products.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-brass-light">
              <Instagram className="h-5 w-5" strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-brass-light">
              <Facebook className="h-5 w-5" strokeWidth={1.4} />
            </a>
            <a
              href="https://wa.me/910000000000"
              aria-label="WhatsApp"
              className="hover:text-brass-light"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm text-cream">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-brass-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-cream">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-brass-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-cream">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>Address to be added</li>
            <li>+91 00000 00000</li>
            <li>enquiry@pragatienterprises.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Pragati Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
