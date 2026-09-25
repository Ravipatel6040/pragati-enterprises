"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Product categories manufactured in-house" },
  { value: 6, suffix: "", label: "Industries actively served" },
  { prefix: "B2B", value: 0, suffix: "", label: "Bulk & custom private-label supply" },
  { value: 100, suffix: "%", label: "In-house production — no third-party manufacturing" },
];

function CounterItem({ 
  value, 
  prefix = "", 
  suffix = "" 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (value === 0) return; // For static text like "B2B" handled via prefix

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={ref} className="font-display text-4xl text-brass-light">
      {prefix}{value > 0 ? count : ""}{suffix}
    </p>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-plum text-cream">
      <div className="container-x grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-plum px-8 py-10">
            <CounterItem value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-2 text-sm text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
