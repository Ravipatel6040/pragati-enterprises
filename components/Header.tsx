"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, MessageCircle } from "lucide-react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "All Categories", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Dealership", href: "/dealership" },
  { label: "Bulk Order", href: "/bulk-order" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="container-x flex h-20 items-center justify-between gap-4 lg:h-24">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pragati Enterprises"
              width={340}
              height={120}
              className="h-14 w-auto object-contain scale-[1.35] origin-left lg:h-20"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap text-[15px] font-medium transition-colors hover:text-plum relative pb-1 ${
                    isActive
                      ? "text-plum after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-plum after:rounded-full"
                      : "text-ink/80"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-plum px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-plum-dark shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Hamburger button – shown below lg breakpoint */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(true)}
            className="relative z-50 -mr-2 p-2 text-ink lg:hidden"
          >
            <RiMenuUnfold4Line className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* ── Left-side drawer (mobile) ── */}

      {/* Backdrop overlay */}
      <div
        onClick={() => setOpen(false)}
        className="lg:hidden"
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
        className="lg:hidden"
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
          background: "var(--color-cream, #FFFFFF)",
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
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logo.png"
              alt="Pragati Enterprises"
              width={280}
              height={100}
              style={{ height: "64px", width: "auto", objectFit: "contain", transform: "scale(1.2)", transformOrigin: "left center" }}
              priority
            />
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
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: isActive
                    ? "var(--color-plum, #6B2FA0)"
                    : "var(--color-ink, #1a1a2e)",
                  textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                  background: isActive
                    ? "rgba(107, 47, 160, 0.08)"
                    : "transparent",
                  borderLeft: isActive
                    ? "3px solid var(--color-plum, #6B2FA0)"
                    : "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                }}
              >
                {link.label}
              </a>
            );
          })}
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
              background: "var(--color-plum, #2CA138)",
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
