import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pragati Enterprises",
  description:
    "Terms and conditions for using the Pragati Enterprises website, submitting enquiries and placing orders.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: [
      "By accessing or using the Pragati Enterprises website (pragatienterprises.in or any subdomain), you agree to be bound by these terms and conditions. If you do not agree, please do not use this website.",
      "These terms apply to all visitors, enquirers and buyers who interact with Pragati Enterprises through this website.",
    ],
  },
  {
    title: "2. Use of this website",
    body: [
      "This website provides information about Pragati Enterprises' manufactured products and supply services. Content is provided for general information and enquiry purposes only.",
      "You may not use this website for any unlawful purpose, to transmit harmful content, or in a way that could damage, disable or impair the website or interfere with any other party's use.",
      "Pragati Enterprises reserves the right to update, modify or withdraw any content on this website at any time without notice.",
    ],
  },
  {
    title: "3. Product enquiries and orders",
    body: [
      "Submitting an enquiry through this website — whether by the contact form, phone, email or WhatsApp — does not constitute a confirmed order. All enquiries are treated as expressions of interest.",
      "Pricing, availability, minimum order quantities and product specifications will be confirmed directly by our team in response to your enquiry.",
      "A binding order is only created when Pragati Enterprises issues a written order confirmation and the buyer accepts it. All orders are subject to the specific terms discussed and agreed at the time of order.",
    ],
  },
  {
    title: "4. Pricing and availability",
    body: [
      "All prices displayed or quoted by Pragati Enterprises are subject to change without notice until a confirmed order is in place. Final pricing, payment terms and delivery arrangements are agreed at the time of order.",
      "Product availability is not guaranteed from the website listing. Please confirm availability with us directly before placing an order.",
    ],
  },
  {
    title: "5. Custom and private-label products",
    body: [
      "Custom formulation, fragrance development and private-label supply are offered subject to separate terms agreed between Pragati Enterprises and the buyer at the time of enquiry.",
      "Development work, sampling and any associated costs will be agreed and confirmed in writing before commencement.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "All content, branding, product names, formulations, design and text on this website are the property of Pragati Enterprises and are protected by applicable intellectual property laws.",
      "You may not reproduce, copy, distribute or use any content from this website without prior written permission from Pragati Enterprises.",
    ],
  },
  {
    title: "7. Limitation of liability",
    body: [
      "While Pragati Enterprises makes reasonable efforts to ensure that information on this website is accurate and up to date, we do not warrant its completeness or accuracy.",
      "Pragati Enterprises is not liable for any direct, indirect or consequential loss arising from the use of or reliance on information on this website. Final product specifications and terms are confirmed at the time of order.",
    ],
  },
  {
    title: "8. Third-party links",
    body: [
      "This website may contain links to third-party platforms (such as WhatsApp or social media). Pragati Enterprises is not responsible for the content, policies or practices of those platforms.",
    ],
  },
  {
    title: "9. Governing law",
    body: [
      "These terms and conditions are governed by the laws of India. Any dispute arising from the use of this website or from a transaction with Pragati Enterprises shall be subject to the exclusive jurisdiction of the courts of [City, State — to be confirmed].",
    ],
  },
  {
    title: "10. Changes to these terms",
    body: [
      "Pragati Enterprises may update these terms and conditions at any time. Continued use of the website following any update constitutes acceptance of the revised terms. We recommend reviewing this page periodically.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      "For any questions about these terms, please contact us:",
      "Email: enquiry@pragatienterprises.in",
      "Phone: +91 00000 00000",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        body="These terms govern the use of the Pragati Enterprises website and the submission of enquiries and orders."
      />

      <section className="container-x max-w-3xl py-16">
        <p className="text-sm text-ink/45">
          Last updated: September 2026. Please review and update these terms — or have them reviewed by a legal professional — before publishing.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="font-display text-xl text-ink">{sec.title}</h2>
              <div className="mt-3 space-y-3">
                {sec.body.map((para, i) => (
                  <p key={i} className="text-ink/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-ink/10 bg-plum/5 p-6">
          <p className="text-sm font-medium text-plum">Important notice</p>
          <p className="mt-2 text-sm text-ink/65">
            This is a placeholder terms document provided as part of the website
            build. It is written in good faith to provide reasonable coverage for
            a manufacturing and supply business, but has not been reviewed by a
            legal professional. Please have it reviewed and updated by a solicitor
            or legal adviser before publishing this website publicly.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
