import { Hotel, Cross, Briefcase, Landmark, CarFront, Waves } from "lucide-react";

const industries = [
  { name: "Hotels", icon: Hotel },
  { name: "Hospitals", icon: Cross },
  { name: "Offices", icon: Briefcase },
  { name: "Institutions", icon: Landmark },
  { name: "Automotive", icon: CarFront },
  { name: "Spas", icon: Waves },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-ink/5 py-20">
      <div className="container-x">
        <div className="max-w-lg">
        <div className="divider-gold bg-plum" />
        <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
          Industries we serve.
        </h2>
        <p className="mt-4 text-ink/65">
          Supplying fragrance, care and cleaning products to businesses that
          depend on consistent quality at scale.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="flex flex-col items-center gap-3 rounded-sm border border-ink/10 py-8 text-center transition-colors hover:border-plum/40"
          >
            <ind.icon className="h-7 w-7 text-plum" strokeWidth={1.4} />
            <span className="text-sm text-ink/80">{ind.name}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
