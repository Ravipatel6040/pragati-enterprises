"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section id="contact" className="bg-cream">
      <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
        <div>
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Get in touch.
          </h2>
          <p className="mt-4 max-w-md text-ink/65">
            Share your product interest, quantity and business type — we'll
            respond with pricing and availability.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
              <div>
                <p className="text-sm text-ink/50">Phone / WhatsApp</p>
                <p className="text-ink">+91 00000 00000</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
              <div>
                <p className="text-sm text-ink/50">Email</p>
                <p className="text-ink">enquiry@pragatienterprises.in</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 text-plum" strokeWidth={1.4} />
              <div>
                <p className="text-sm text-ink/50">Address</p>
                <p className="text-ink">Business address to be added</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-sm border border-ink/10 bg-white/40 p-7 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm text-ink/60" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-ink outline-none focus:border-plum"
              />
            </div>
            <div>
              <label className="text-sm text-ink/60" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                required
                className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-ink outline-none focus:border-plum"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-ink/60" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-ink outline-none focus:border-plum"
            />
          </div>
          <div>
            <label className="text-sm text-ink/60" htmlFor="message">
              What are you looking for?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1.5 w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-ink outline-none focus:border-plum"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-sm bg-plum px-6 py-3.5 text-cream transition-colors hover:bg-plum-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-sage" role="status">
              Thank you — your enquiry has been noted. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
