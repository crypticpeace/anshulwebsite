"use client";
import Reveal from "@/components/ui/Reveal";
import Letters from "@/components/ui/Letters";

export default function Heading({ white, lime, sub }: { white: string; lime: string; sub?: string }) {
  return (
    <div className="mb-8 text-center font-display text-6xl uppercase leading-none md:mb-12 md:text-8xl">
      <Letters text={white} /> <Letters text={lime} className="text-lime" delay={0.2} />
      {sub && <Reveal delay={0.4}><p className="mt-3 font-body text-sm font-semibold normal-case tracking-wide">{sub}</p></Reveal>}
    </div>
  );
}
