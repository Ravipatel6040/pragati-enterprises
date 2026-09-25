import {
  Droplet,
  Sparkles,
  Flame,
  FlaskConical,
  Wind,
  Leaf,
  CarFront,
  Waves,
  SprayCan,
  Building2,
  Zap,
  Flower2,
  Utensils,
  Shield,
  LucideIcon
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Droplet,
  Sparkles,
  Flame,
  FlaskConical,
  Wind,
  Leaf,
  CarFront,
  Waves,
  SprayCan,
  Building2,
  Zap,
  Flower2,
  Utensils,
  Shield
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Sparkles;
}
