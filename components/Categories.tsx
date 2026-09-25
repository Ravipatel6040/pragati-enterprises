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
  Shield,
  Zap,
  Flower2,
  Utensils,
  ArrowRight
} from "lucide-react";
import Swatch from "./Swatch";

const categories = [
  { name: "Agarbatti Perfume", slug: "agarbatti-perfume", icon: Flame },
  { name: "Air Freshener", slug: "air-freshener", icon: Wind },
  { name: "Diffuser Oil And Electric Diffuser", slug: "diffuser-oil-and-electric-diffuser", icon: Leaf },
  { name: "Automobile Polish", slug: "automobile-polish", icon: CarFront },
  { name: "Sanitizer", slug: "sanitizer", icon: Shield },
  { name: "Perfume Spray", slug: "perfume-spray", icon: SprayCan },
  { name: "Floor Cleaner", slug: "floor-cleaner", icon: Sparkles },
  { name: "Shower Gel", slug: "shower-gel", icon: Droplet },
  { name: "Spa Massage Oil", slug: "spa-massage-oil", icon: Waves },
  { name: "Car Shampoo", slug: "car-shampoo", icon: CarFront },
  { name: "Car Wash Liquid", slug: "car-wash-liquid", icon: Droplet },
  { name: "Electric Diffuser", slug: "electric-diffuser", icon: Zap },
  { name: "Liquid Handwash", slug: "liquid-handwash", icon: Droplet },
  { name: "Toilet Cleaner", slug: "toilet-cleaner", icon: Sparkles },
  { name: "Aroma Diffuser set", slug: "aroma-diffuser-set", icon: Flower2 },
  { name: "Dishwash Cleaner", slug: "dishwash-cleaner", icon: Utensils },
  { name: "Room Freshener", slug: "room-freshener", icon: Wind },
  { name: "Glass Cleaner", slug: "glass-cleaner", icon: Sparkles },
  { name: "Branded Perfume", slug: "branded-perfume", icon: FlaskConical },
  { name: "Massage Cream", slug: "massage-cream", icon: Waves },
];

export default function Categories() {
  // Show exactly 10 items (2 lines on desktop 5-col grid)
  const displayedCategories = categories.slice(0, 10);

  return (
    <section id="products" className="py-20">
      <div className="container-x">
        <div className="max-w-lg">
          <div className="divider-gold bg-plum" />
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Product categories.
          </h2>
          <p className="mt-4 text-ink/65">
            Twenty manufacturing categories, produced to consistent quality and
            available for bulk, custom and private-label supply.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:grid-cols-5">
          {displayedCategories.map((cat) => (
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

        <div className="mt-10 flex justify-center">
          <a
            href="/products"
            className="flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
          >
            Explore All Categories <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
