"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { RiMenuUnfold4Line } from "react-icons/ri";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Dealership", href: "/dealership" },
  { label: "Bulk Order", href: "/bulk-order" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-ink">
              Pragati Enterprises
            </span>
            <span className="mt-1 text-[11px] text-ink/60">
              Fragrance, Care &amp; Cleaning Manufacturing
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-xs font-medium text-ink/70 transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm bg-plum px-4 py-2 text-xs text-cream transition-colors hover:bg-plum-dark"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Hamburger button – shown below lg breakpoint */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            <RiMenuUnfold4Line className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* ── Left-side drawer (mobile) ── */}

      {/* Backdrop overlay */}
      <div
        onClick={() => setOpen(false)}
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 70,
          width: "80vw",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          background: "var(--color-cream, #fdf8f2)",
          boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <a
            href="/"
            onClick={() => setOpen(false)}
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                color: "var(--color-ink, #1a1a2e)",
              }}
            >
              Pragati Enterprises
            </span>
            <span
              style={{
                marginTop: "4px",
                fontSize: "10px",
                color: "rgba(26,26,46,0.55)",
              }}
            >
              Fragrance, Care &amp; Cleaning Manufacturing
            </span>
          </a>

          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              padding: "6px",
              borderRadius: "6px",
              background: "rgba(0,0,0,0.05)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X style={{ width: "20px", height: "20px" }} />
          </button>
        </div>

        {/* Nav links */}
        <nav
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px 12px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "var(--color-ink, #1a1a2e)",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(0,0,0,0.05)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA at the bottom */}
        <div style={{ padding: "16px" }}>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 20px",
              borderRadius: "8px",
              background: "var(--color-plum, #6b21a8)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <MessageCircle style={{ width: "18px", height: "18px" }} />
            Enquire on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
