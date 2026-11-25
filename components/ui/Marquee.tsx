"use client";

export default function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-4 ${dark ? "bg-ink text-lime" : "bg-lime text-ink"}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap font-display text-3xl uppercase md:text-5xl">
        {row.map((t, i) => <span key={i} className="mx-6">{t} <span className="mx-6">✦</span></span>)}
      </div>
    </div>
  );
}
