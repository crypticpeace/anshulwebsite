"use client";
import { motion } from "framer-motion";
import { EXPERIENCE, STATS } from "@/app/data";
import Reveal from "@/components/ui/Reveal";
import Stat from "@/components/ui/Stat";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl scroll-mt-16 items-start gap-10 px-6 pb-6 pt-20 md:grid-cols-2 md:gap-12 md:pt-28">
      <Reveal>
        <span className="rounded-full bg-lime px-4 py-1 text-sm font-bold">Video Editor & Motion Designer</span>
        <h2 className="mt-6 font-display text-6xl uppercase leading-[0.95] sm:text-7xl md:text-8xl">Hello, I’m <br /><span className="text-lime">Anshul</span> Surve</h2>
        <div className="mt-8 rounded-2xl bg-card p-6 text-sm leading-relaxed">
          I turn ideas into moving stories. I edit videos, build motion graphics and make reels that grab attention in the first second. I love clean cuts, smooth animation and sound that feels right. Let’s make something people remember.
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {STATS.map(([n, l], i) => <Stat key={l} n={n} l={l} i={i} />)}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] opacity-60">Experience</p>
        {EXPERIENCE.map((x) => (
          <motion.div key={x.company} whileHover={{ y: -4 }} data-hover className="mb-6 rounded-2xl bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-display text-3xl uppercase leading-none">{x.company}</p>
                <p className="mt-2 text-sm font-bold">{x.role}</p>
              </div>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">{x.duration}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{x.description}</p>
          </motion.div>
        ))}
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] opacity-60">What I Do</p>
        <div className="grid grid-cols-3 gap-4">
          {["Video Editing", "Motion Graphics", "Color & Sound"].map((t, i) => (
            <motion.div key={t} whileHover={{ y: -8, rotate: i % 2 ? 3 : -3 }} data-hover className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-card p-2 text-center text-xs font-bold">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-xl">{["✂", "◈", "♪"][i]}</div>{t}
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
