import { ArrowRight } from "lucide-react";
import Swatch from "./Swatch";
import { Factory } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-plum text-cream">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <Swatch icon={Factory} tone="brass" className="aspect-[16/11] order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <div className="divider-gold" />
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
            A manufacturing partner built around consistency and supply
            capability.
          </h2>
          <p className="mt-5 max-w-lg text-cream/75">
            Pragati Enterprises brings together fragrance formulation, care
            product manufacturing and reliable bulk supply under one roof.
            From boutique room fresheners to institutional cleaning
            supplies, every category is produced with the same attention to
            quality and consistency, ready to be customised for your brand
            or business.
          </p>
          <a
            href="#products"
            className="mt-7 inline-flex items-center gap-2 text-sm text-brass-light transition-colors hover:text-brass"
          >
            Read more about our capabilities <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
