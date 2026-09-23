import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pragati Enterprises",
  description:
    "Privacy policy for Pragati Enterprises — how we collect, use and protect information submitted through our website.",
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you submit an enquiry through this website, we collect the details you provide — such as your name, phone number, email address, business name and message — solely to respond to your enquiry and provide relevant product or pricing information.",
      "We do not collect personal information by any other means on this website, and we do not require you to create an account or register to use the site.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "Information submitted through the contact and enquiry form is used only to respond to your request, provide quotations, share product information and follow up on orders you have discussed with us.",
      "We may retain your contact details to follow up on open enquiries or to contact you regarding repeat supply if you have previously placed an order with us.",
      "We do not sell, rent or share your personal information with third parties, advertisers or marketing services.",
    ],
  },
  {
    title: "Cookies and website analytics",
    body: [
      "This website may use basic session cookies to support standard site functionality such as navigation and form submissions. These cookies do not track you across other websites.",
      "We may use anonymous, aggregated analytics to understand how visitors use the website (for example, which pages are most visited). This data does not identify individual users.",
      "No third-party advertising cookies or tracking pixels are used on this website.",
    ],
  },
  {
    title: "Data storage and security",
    body: [
      "Information submitted through this website is stored securely and accessed only by Pragati Enterprises staff for the purposes described above.",
      "We take reasonable steps to protect your information from unauthorised access or disclosure. However, no method of internet transmission is completely secure.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You have the right to request access to the personal information we hold about you, to request correction of inaccurate information, or to request that we delete your information. To make such a request, contact us using the details below.",
    ],
  },
  {
    title: "Links to other websites",
    body: [
      "This website may contain links to external websites (such as WhatsApp). We are not responsible for the privacy practices of those websites and recommend that you review their privacy policies separately.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this privacy policy from time to time. The most current version will always be available on this page. Continued use of the website following any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact us about this policy",
    body: [
      "If you have any questions, concerns or requests regarding this privacy policy or the personal information we hold about you, please contact us at:",
      "Email: enquiry@pragatienterprises.in",
      "Phone: +91 00000 00000",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        body="This policy explains how Pragati Enterprises collects, uses and protects information submitted through this website."
      />

      <section className="container-x max-w-3xl py-16">
        <p className="text-sm text-ink/45">
          Last updated: September 2026. Please review and update this policy — or have it reviewed by a legal professional — before publishing to ensure it meets applicable requirements.
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
            This is a placeholder privacy policy provided as part of the website
            build. It has been written in good faith but has not been reviewed by
            a legal professional. Please review and update it — or have it
            reviewed by a solicitor or compliance professional — before publishing
            this website publicly.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
