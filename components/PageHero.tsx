export default function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="border-b border-ink/10 bg-ink text-cream">
      <div className="container-x py-16 sm:py-20">
        <p className="text-sm tracking-wide text-brass-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {body && <p className="mt-5 max-w-xl text-cream/70">{body}</p>}
      </div>
    </section>
  );
}
