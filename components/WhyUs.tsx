import { Gem, Layers, Truck, Handshake, Settings2 } from "lucide-react";

const points = [
  {
    icon: Gem,
    title: "Consistent quality",
    body: "Every batch produced to the same fragrance and formulation standard.",
  },
  {
    icon: Layers,
    title: "Wide product variety",
    body: "Ten categories spanning fragrance, cosmetics, care and cleaning.",
  },
  {
    icon: Truck,
    title: "Supply capability",
    body: "Built for bulk orders and dependable, repeatable fulfilment.",
  },
  {
    icon: Handshake,
    title: "Professional service",
    body: "Responsive enquiry handling from first contact to delivery.",
  },
  {
    icon: Settings2,
    title: "Customisation",
    body: "Fragrance, packaging and formulation adjusted to your business.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink text-cream">
      <div className="container-x py-20">
        <div className="max-w-lg">
          <div className="divider-gold" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">
            Why Pragati Enterprises.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p) => (
            <div key={p.title} className="bg-ink p-7">
              <p.icon className="h-6 w-6 text-brass-light" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-cream/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
