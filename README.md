# Pragati Enterprises — Full Website

A fully responsive Next.js 14 (App Router) + Tailwind CSS website, covering
every page in the ₹5,000 static website brief:

- `/` — Home (Hero, About snapshot, Product Categories, Why Pragati
  Enterprises, Industries Served, Featured Products, Gallery preview, CTA)
- `/about` — About Us (overview, mission, vision, capabilities)
- `/products` — Products (all 10 categories with descriptions)
- `/industries` — Industries We Serve
- `/quality` — Quality & Manufacturing
- `/gallery` — Gallery
- `/contact` — Contact Us (form + map placeholder)
- `/privacy-policy` — Privacy Policy
- `/terms-conditions` — Terms & Conditions

All pages share the same Header, Footer and floating WhatsApp button.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before going live

- **Replace `<Swatch>` placeholders with real photos.** Every product/image
  block currently renders as a styled gradient + icon so the layout works
  without any images. Swap each `<Swatch icon={...} .../>` for Next.js
  `<Image src="..." ... />` once logo, product and gallery photography is
  supplied.
- **Update contact details** in `components/Header.tsx`, `Contact.tsx` and
  `Footer.tsx` (WhatsApp number, phone, email, address).
- **Connect the enquiry form** in `components/Contact.tsx` to an email/form
  service (e.g. Formspree, EmailJS, Resend) — it's front-end only today, per
  the ₹5,000 scope.
- **Add Google Maps** in the Contact section once the final address is
  confirmed.
- Add `About`, `Products`, `Industries`, `Quality & Manufacturing`, `Gallery`,
  `Contact`, `Privacy Policy` and `Terms & Conditions` as separate routes
  under `app/` — this deliverable covers the Home page only.

## Stack

Next.js 14 · TypeScript · Tailwind CSS · lucide-react icons · Google Fonts
(Fraunces + Work Sans), matching the brief's suggested technology stack.
