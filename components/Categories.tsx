import {
  Droplet,
  Sparkles,
  Flame,
  FlaskConical,
  Wind,
  CarFront,
  Waves,
  SprayCan,
  Building2,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import Swatch from "./Swatch";

const categories = [
  { name: "Perfumes & Room Fresheners", slug: "perfumes-room-fresheners", icon: Droplet },
  { name: "Cosmetics", slug: "cosmetics", icon: Sparkles },
  { name: "Agarbatti", slug: "agarbatti", icon: Flame },
  { name: "Perfume Compound", slug: "perfume-compound", icon: FlaskConical },
  { name: "Air Fresheners", slug: "air-fresheners", icon: Wind },
  { name: "Diffuser Oil", slug: "diffuser-oil", icon: Leaf },
  { name: "Car & Auto Care Products", slug: "car-auto-care", icon: CarFront },
  { name: "Spa Care Products", slug: "spa-care", icon: Waves },
  { name: "Household Cleaning Products", slug: "household-cleaning", icon: SprayCan },
  { name: "Hotel, Hospital & Institution Care", slug: "hotel-hospital-institution", icon: Building2 },
];

export default function Categories() {
  return (
    <section id="products" className="container-x py-20">
      <div className="max-w-lg">
        <div className="divider-gold bg-plum" />
        <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
          Product categories.
        </h2>
        <p className="mt-4 text-ink/65">
          Ten manufacturing categories, produced to consistent quality and
          available for bulk, custom and private-label supply.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="group flex flex-col justify-between gap-6 bg-cream p-6 transition-colors hover:bg-plum/5"
          >
            <Swatch icon={cat.icon} tone="plum" className="aspect-square" />
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm leading-snug text-ink">{cat.name}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 transition-colors group-hover:text-plum" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
