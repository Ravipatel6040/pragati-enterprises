import { Droplet, Sparkles, Flame, FlaskConical, Wind, CarFront } from "lucide-react";
import Swatch from "./Swatch";

const tiles = [
  { icon: Droplet, tone: "plum" as const },
  { icon: Sparkles, tone: "brass" as const },
  { icon: Flame, tone: "sage" as const },
  { icon: FlaskConical, tone: "ink" as const },
  { icon: Wind, tone: "brass" as const },
  { icon: CarFront, tone: "plum" as const },
];

export default function Gallery() {
  return (
    <section id="gallery" className="container-x py-20">
      <div className="max-w-lg">
        <div className="divider-gold bg-plum" />
        <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
          From our manufacturing floor.
        </h2>
        <p className="mt-4 text-ink/65">
          A preview gallery of products and packaging — to be replaced with
          Pragati Enterprises photography.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tiles.map((t, i) => (
          <Swatch key={i} icon={t.icon} tone={t.tone} className="aspect-square" />
        ))}
      </div>
    </section>
  );
}
