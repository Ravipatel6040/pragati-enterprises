import { LucideIcon } from "lucide-react";

/**
 * Placeholder visual block used wherever a real product photograph will
 * eventually go (per the project brief, photography is supplied by the
 * client). Swap the <Swatch> usage for a Next.js <Image> once real photos
 * are available — the surrounding layout will not need to change.
 */
export default function Swatch({
  icon: Icon,
  tone = "plum",
  className = "",
}: {
  icon: LucideIcon;
  tone?: "plum" | "brass" | "sage" | "ink";
  className?: string;
}) {
  const tones: Record<string, string> = {
    plum: "from-plum via-plum-light to-brass/40",
    brass: "from-brass-dark via-brass to-brass-light",
    sage: "from-sage via-sage/70 to-brass/30",
    ink: "from-ink via-plum-dark to-plum",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-8 w-8 text-cream/90" strokeWidth={1.25} />
      </div>
    </div>
  );
}
