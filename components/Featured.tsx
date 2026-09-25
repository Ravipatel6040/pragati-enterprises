import { Droplet, Flame, SprayCan, Waves } from "lucide-react";
import Swatch from "./Swatch";

const products = [
  { name: "Signature Room Freshener", cat: "Fragrance", icon: Droplet, tone: "plum" as const },
  { name: "Premium Agarbatti Pack", cat: "Agarbatti", icon: Flame, tone: "brass" as const },
  { name: "Auto Interior Care Kit", cat: "Car Care", icon: SprayCan, tone: "sage" as const },
  { name: "Spa Ritual Diffuser Oil", cat: "Spa Care", icon: Waves, tone: "ink" as const },
];

export default function Featured() {
  return (
    <section className="bg-plum/5">
      <div className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <div className="divider-gold bg-plum" />
            <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
              Featured products.
            </h2>
          </div>
          <a
            href="/contact"
            className="text-sm text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum"
          >
            Enquire about the full range
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group">
              <Swatch icon={p.icon} tone={p.tone} className="aspect-[4/5]" />
              <p className="mt-4 text-xs uppercase tracking-wide text-brass-dark">
                {p.cat}
              </p>
              <h3 className="mt-1 font-display text-lg text-ink">{p.name}</h3>
              <a
                href="/contact"
                className="mt-2 inline-block text-sm text-ink/60 transition-colors group-hover:text-plum"
              >
                Send enquiry
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
